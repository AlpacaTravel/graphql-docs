# Adding Locations to Itineraries

Using GraphQL, you can locations to your itinerary. Alpaca will organise the
locations you add for itineraries into various structures, including a simple
list through to something more complex (such as organised by segments etc).

You may also wish to review the following guides as starting points:

- [Managing a list](/topics/itinerary/Managing%20a%20List/)
- [Managing a trip](/topics/itinerary/Managing%20a%20Trip/)

_Table of Contents_

- [Adding Locations to Itineraries](#adding-locations-to-itineraries)
    - [Prerequisits](#prerequisits)
  - [Adding Locations to an Itinerary](#adding-locations-to-an-itinerary)
    - [Adding a Location Directly to an Itinerary](#adding-a-location-directly-to-an-itinerary)
    - [Adding a Location using a Place provider](#adding-a-location-using-a-place-provider)
    - [Storing your own References](#storing-your-own-references)
  - [Add to a specific position within the Itinerary](#add-to-a-specific-position-within-the-itinerary)
  - [Retrieving Locations](#retrieving-locations)
  - [Managing Content](#managing-content)
  - [Formatting Descriptions](#formatting-descriptions)
    - [Common Attributes](#common-attributes)
  - [Checking if a place is present](#checking-if-a-place-is-present)
  - [Using multiple positions](#using-multiple-positions)
  - [Reordering a location](#reordering-a-location)
  - [Removing a location](#removing-a-location)
  - [Additional Resources](#additional-resources)

### Prerequisits

- You'll need an itinerary you want to add to and locate the Itinerary ID
- The itinerary will need to be unassigned to a profile, or you'll need your
  private API Key

## Adding Locations to an Itinerary

Locations added to an itinerary contain information for the audience such as the
physical place they are visiting, as well as any personalised content or
planning data about that location (such as stories/photos or supplying reasons
to visit the place).

When we add locations to an itinerary, we will need to have the itinerary `id`
that we will be adding to.

### Adding a Location Directly to an Itinerary

When you want to add a location to your itinerary that does not have an
associated place provider, you can add the location directly to the itinerary.
In this case, you need to provide the title and longitude and latitude of the
location to the `createItineraryLocation` mutation.

Here is an example of how you can add a location directly to an itinerary:

```graphql
mutation {
  createItineraryLocation(
    itineraryId: "itinerary/ABC123"
    location: {
      title: "Eiffel Tower"
      synopsis: "An iconic place of interest"
      place: { position: { lon: 2.2944, lat: 48.8584 } }
    }
  ) {
    location {
      id
    }
  }
}
```

In the above example, we are adding the location "Eiffel Tower" to the itinerary
with the ID "itinerary/ABC123". The longitude and latitude of the location is
provided in the `position` field of the `place` object.

If the mutation is successful, the server will return the ID of the newly
created location, as seen in the `location` field of the response.

```json
{
  "data": {
    "createItineraryLocation": {
      "location": {
        "__typename": "ItineraryLocation",
        "id": "itinerary/ABC123/location/DEF456"
      }
    }
  }
}
```

Various information about the location can be stored against the location.

It is important to note that when adding a location directly, you will not have
access to additional information about the location from a place provider. If
you want to add a location with more information, you can use a place provider
as described in the next subsection.

### Adding a Location using a Place provider

When adding a location to your itinerary, you have the option to associate the
location with a place provider. This allows you to access additional information
about the location, such as photos, ratings, contact information, addresses,
website and social URL's or other information that is available from the place
provider.

Alpaca supports a number of place providers, including OpenStreetMap/WikiData,
GeoNames, OpenAddresses, Facebook, and Australian Tourism Data Warehouse. Each
provider has their own unique identifier format for a place, so make sure to use
the correct format when creating a location.

For example, to add a location to your itinerary and associate it with a place
on Facebook, you can use the following mutation:

```graphql
mutation CreateItineraryLocationWithFacebookPlace {
  createItineraryLocation(
    itineraryId: "itinerary/ABC123"
    location: {
      title: "Visit Mavis The Grocer"
      synopsis: "A great place to grab a breakfast and a coffee"
      place: {
        id: "place/facebook:page:mavisthegrocer"
        position: { lon: 145.0043, lat: -37.8021 }
      }
    }
  ) {
    location {
      __typename
      id
    }
  }
}
```

In this example, we are using the Facebook place ID
"place/facebook:page:mavisthegrocer" and providing a fallback position of
`lon: 145.0043`, `lat: -37.8021`. When querying the itinerary, the position from
the place provider will be used if available.

It's also worth noting that you can leave the place.id field empty, and instead
you'll need to supply all the information about the place directly.

Using a place provider can be especially useful when you want to show additional
information about the location, such as photos, ratings, or contact information,
to your users. It also allows you to easily update the information about the
location in case the place provider updates their data.

### Storing your own References

In addition to linking locations to places provided by external providers, you
may also want to store your own ID's against a location in your itinerary. To do
this, you can use the special custom attributes `custom/external-ref` and
`custom/external-source`.

The `custom/external-ref` attribute accepts a string value, which should be a
unique identifier per record. The `custom/external-source` attribute is used
to attribute the identifiers to a source. This attribute should be common
across all your locations and differentiate between different source locations
you may have.

Here's an example of creating an itinerary location with external references:

```graphql
mutation CreateItineraryLocationWithExternalReferences {
  createItineraryLocation(
    itineraryId: "itinerary/ABC123"
    location: {
      title: "Eiffel Tower"
      place: { position: { lon: 2.2944, lat: 48.8584 } }
      attrs: [
        # Use the special custom attributes for linking to your identifiers
        { id: "custom/external-ref", value: "12345" }
        { id: "custom/external-source", value: "site" }
      ]
      # Other extended fields can be stored against a location
      websiteUrl: "https://mywebsite.com/places/eiffel-tower"
    }
  ) {
    location {
      id

      externalRef: attrValue(id: "custom/external-ref")
      externalSource: attrValue(id: "custom/external-source")

      websiteUrl
    }
  }
}
```

With this example, the Alpaca platform will return the external reference ID's
that you can then use to map your own place information outside of the Alpaca
Travel GraphQL API call.

The Alpaca Data Structure enables a wide range of predefined fields for you to
provide and store with your location. You can also store extended data outside
of this set.

See More:

- [Custom Data](/topics/itinerary/Custom%20Data/)

## Add to a specific position within the Itinerary

When adding an Itinerary Location to an itinerary, the `createItineraryLocation`
mutation supports specifying where you wish to add the location.

In order to control the position, the fields "positionAtStart", "positionAtEnd",
"positionAfterSibling", "positionBeforeSibling" and "positionOnLastCollection"
fields are provided for you to specify the desired position for the added
location.

```graphql
mutation {
  createItineraryLocation(
    itineraryId: "itinerary/ABC123"
    location: {
      title: "Eiffel Tower"
      place: { position: { lon: 2.2944, lat: 48.8584 } }
    }
    # Specify the desired position to add the location
    positionAfterSibling: { siblingId: "itinerary/ABC123/location/DEF456" }
  ) {
    location {
      id
    }
  }
}
```

In the above query, the `positionAfterSibling` property allows you to specify
the `siblingId` to another existing location that you wish to insert the new
location positioned after.

See More:

- [Specifying Item Positions](/reference#itineraryitempositionaftersibling)

## Retrieving Locations

Using the Alpaca GraphQL API, there are many different ways to query and
retrieve the locations of the itinerary. This is typically done using either
the `node` or `itinerary` query depending if you want to read back multiple
locations at once, or want to target a specific location node.

The below example shows how to use the `node` query to retrieve a specific
location based on an id.

```graphql
query GetItineraryLocation {
  node(id: "itinerary/ABC123/location/DEF456") {
    id
    __typename

    ... on ItineraryLocation {
      # We can query the itinerary location fields specifically
      title
      synopsis

      place {
        position {
          lon
          lat
        }
      }

      externalRef: attrValue(id: "custom/external-ref")
    }
  }
}
```

See More:

- [Querying an Itinerary](/topics/itinerary/Querying%20an%20Itinerary/) for
  examples of how to query an list of locations
- [ItineraryLocation type](/reference#itinerarylocation)

## Managing Content

The Itinerary Location object provides predetermined fields for you to store
your content and media associated with a location.

- Title
- Synopsis and Descriptions
- Tags, Read More URL and Website URLs
- Media (Contained in a [seperate guide](/topics/media/))
- Attributes

You can provide this content when you are initially creating the location using
the `createItineraryLocation` mutation, or alternatively use the
`updateItineraryLocation` mutation to provide or update these values later.

```graphql
mutation CreateItineraryLocationWithContent {
  createItineraryLocation(
    itineraryId: "itinerary/ABC123"
    location: {
      place: { position: { lon: 2.2944, lat: 48.8584 } }
      # Various standard fields, see "CreateItineraryLocationInput" type
      title: "Eiffel Tower"
      synopsis: "A short summary for the location"
      description: "Markdown formatted description for the location"
      # Extended attributes
      attrs: [
        { id: "place/website-url", value: "https://www.toureiffel.paris/en" }
        {
          id: "place/facebook-url"
          value: "https://www.facebook.com/EiffelTower.OfficialPage"
        }
      ]
    }
  ) {
    location {
      id
    }
  }
}
```

You can also update values using the "updateItineraryLocation" mutation.

```graphql
mutation UpdateItineraryLocationWithContent {
  updateItineraryLocation(
    itineraryId: "itinerary/ABC123"
    location: {
      # Various standard fields, see "UpdateItineraryLocationInput" type
      title: "Eiffel Tower"
      synopsis: "A short summary for the location"
      description: "Markdown formatted description for the location"
      # Extended attributes
      upsertAttrs: [
        { id: "place/website-url", value: "https://www.toureiffel.paris/en" }
        {
          id: "place/facebook-url"
          value: "https://www.facebook.com/EiffelTower.OfficialPage"
        }
      ]
      # You can remove values using the deleteAttrs
      # example value: [{ id: "place/website-url" }]
      deleteAttrs: []
    }
  ) {
    location {
      id
    }
  }
}
```

See More:

- [CreateItineraryLocationInput type](/reference#createitinerarylocationinput)
- [UpdateItineraryLocationInput type](/reference#updateitinerarylocationinput)

## Formatting Descriptions

The description field is formatted using basic markdown formatting.

### Common Attributes

You can also assign place attributes to the attributes within the location. You
can not specifically assign the attributes to the place object, as the place
object represents the dynamically references values from place providers, even
if you are not using them.

| Attribute             | Description                                                                                                                   |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `place/address`       | The address object to use for the place ("addressLineOne", "locality", "region", "country", etc)                              |
| `place/phone-number`  | The phone number to use for the place                                                                                         |
| `place/website-url`   | The website URL to use for the place                                                                                          |
| `place/booking-url`   | The booking URL to use for the place                                                                                          |
| `place/facebook-url`  | The facebook URL to use for the place                                                                                         |
| `place/instagram-url` | The instagram URL to use for the place                                                                                        |
| `place/opening-hours` | The opening hours of the place, stored in OSM Opening Hours format (See [Accessing hours](/topics/places/Accessing%20Hours/)) |

## Checking if a place is present

Once you have added locations to your list, you may want to check if a
particular place is already present in the list before adding it again. This can
be useful for creating a "Add to List" button with different states, such as
"Added" or "Remove" depending on whether the place is already present in the
list.

The following GraphQL query can be used to check if a place is present in a
list:

```graphql
query CheckItineraryPlacePresent {
  itinerary(id: "itinerary/ABC123") {
    descendants(placeIds: ["place/123"], first: 1) {
      nodes {
        id
      }
      totalCount
    }
  }
}
```

The `itinerary` query is used, supplying the `id` of the list to check. The
`descendants` field is then queried, providing the `placeIds` to check and the
`first` parameter, which limits the number of returned results to 1.

In the response, the `nodes` field will contain an array of itinerary location
objects, each representing a location in the list that matches the provided
`placeIds`. The `id` field of each itinerary location object can be used to
refer to the location in future operations. The `totalCount` field will indicate
the total number of matching locations in the list, which can be used to check
if the place is already present in the list.

Example response:

```json
{
  "data": {
    "itinerary": {
      "descendants": {
        "nodes": [
          {
            "id": "itineraryLocation/123"
          }
        ],
        "totalCount": 1
      }
    }
  }
}
```

If the place is already present in the list, the totalCount field will be
greater than 0.

## Using multiple positions

The Location can also contain other positions that can assist with presenting
the location to the user.

For instance, for a place, your place provider may provide a position in order
to draw a pin or draw a label. This position is not the location we wish to
send the user to when actually visiting this location physically.

Further to the example, you may also wish to have the user first navigate to a
position such as a car park or entry gates.

This leads to the possibility of many different positions being used to describe
the location being added.

You can assign a preferred position using the `location.position` or add
an attribute to the location with the ID of
`itinerary/location/directions-position-preference`

We also support the use custom data to contain further positions that you wish
to store and leverage in you use case.

See More:

- [Automatic Routing](/topics/itinerary/Automatic%20Routing/)

## Reordering a location

A specific topic exists to assist you with
[reordering locations](/topics/itinerary/Reordering%20Locations/README.md).

## Removing a location

```graphql
# Removes an itinerary item, such as a location

mutation DeleteItineraryLocation {
  # Use the deleteItineraryItem operation to remove an itinerary location
  deleteItineraryItem(
    # Supply your ID of the itinerary location to remove (no undo)
    id: "itinerary/ABC123/item/DEF456"
  ) {
    # Select back the ID of the itinerary location that was removed
    id
  }
}
```

## Additional Resources

- [Creating an itinerary](/topics/itinerary/Creating%20an%20itinerary/README.md)
- [Reordering Locations](/topics/itinerary/Reordering%20Locations/README.md)
- [Automatic Routing](/topics/itinerary/Automatic%20Routing/README.md)
- [Querying an Itinerary](/topics/itinerary/Querying%20an%20Itinerary/README.md)
- [Deleting an Itinerary Location](/example-operations/itinerary/location/DeleteItineraryLocation.graphql)
- [Cascaded Changes](/topics/itinerary/Cascaded%20Changes/)
