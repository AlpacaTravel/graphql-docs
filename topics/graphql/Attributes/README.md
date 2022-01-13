# Attributes

The API enables the storage and retrieval of extended data through key/value
pattern offered by Attributes. These extend the standard queryable fields to
open up further possibilities, such as custom data or localisation of field
values.

There are two types of attribute classes.

- **Core Attributes** - A maintained list of attributes managed by Alpaca
- **Custom Attributes** - An open namespace for custom data to be stored for
  application specific use case.

For each attribute, it is also possible to provide a locale, in order to
localise the value. Your queries can be used in order to determine translations
to other localisations based on the needs of your users.

## Custom Attributes

Where attributes are offered (such as within itineraries), it is possible to
store some data that can assist you integrate the content within your 
application.

When creating an attribute containing your own custom data, you must use the
prefix of `custom://` before your ID. You should identify your attribute using
kebab case naming, such as `custom://application-record-id`. This provides your
application a namespace for your own additional custom data to be stored against
resources in the platform.

```graphql
# Update an itinerary, and store some custom attribute data

mutation UpdateItineraryWithCustomAttributeData {
  # Use the updateItinerary() mutation as normal
  updateItinerary(
    # Supply the itinerary ID
    id: "itinerary/ABC123"
    # Update the data for the itinerary
    itinerary: {
      # Leverage attributes to store extended data available for
      # itineraries
      upsertAttrs: [
        # Custom data that is being stored within the itinerary
        {
          id: "custom://my-custom-data"
          value: "Example Custom Data JSON"
        }
      ]
    }
  ) {
    itinerary {
      id
      __typename
      
      # Read back the custom data from the attribute
      myCustomData: attrValue(id: "custom://my-custom-data")
    }
  }
}
```
*Note*: We recommend using the id `custom://external-ref` and 
`custom://external-source` when assocating resources to your platform. Alpaca
can provide some query integration with data in these fields.

*Important*: Do not store sensitive or personal information within these
attributes. You should store this information within your platform as 
custom attributes are not approprtiate for storing this type of data.

## Lifecycle of attributes

### Creating Attributes

For supported resources, attributes can be created and supplied leveraging
the operation argument of `attrs` on the resource. These will create the
supplied resource containing the supplied attributes as offered by your input.

### Querying Attributes

In order to access the attributes, there are a number of queries in order to
select the desired data:

- `attrs` Selects attributes via a series of attribute inputs
- `attr` Selects an attribute with the supplied ID and locale value
- `attrsById` Returning all matching attributes regardless of locale
- `attrValue` Returning the value without the wrapper
- `allAttrs` Returning all the attributes for the resource

### Updating Attributes

When performing a mutation on an existing resource with attributes, you can
supply values via the operation argument of `upsertAttrs` for the resource.
Attributes will be 'upsert' (combining either an insert or update depending on
whether the resource already has the attribute).

### Removing Attributes

Via performing a mutation to update an existing resource with attributes, you
can supply the attributes to be removed via the operation argument of
`deleteAttrs` for the resource. Matching attributes will be removed during the
mutation.
