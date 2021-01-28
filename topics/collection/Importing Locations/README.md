# Importing Locations

In certain integrations, collection locations may originate in a remote system,
such as an existing website or CRM platform. It may be necessary to consider
an import of locations into an Alpaca collection.

To assist this process, this topic covers the use of `external-source` and
`external-id` attributes. These attributes can assist in the tracking and
querying of data based on the identifiers within the source of the import.

Alpaca provides a method to be able to store custom or extended data through
attributes. These allow you to push in additional data that can be queried in
future calls. The two mentioned attribute ID's are specially recognised, in
order to suit the use case of importing data with references to foriegn keys
outside of the platform.

### Prerequisits

- Private API Key for querying and mutations
- The collection ID for where we will be syncing information

## Creating a Collection Location with external tracking

When creating a collection location, it may be beneficial to store your own
record identifier against the collection location in order to be able to find
this record again in the future to test whether the record exists.

```graphql
# Creates a collection location with a reference to an external primary key
# reference, so that we can track ID's to synchronize data between platforms.
# We leverage a named attribute that is supported for querying items and
# obtaining locations from a collection based on their external references.

mutation CreateCollectionLocationWithExternalReference {
  # use the standard createCollectionLocation
  createCollectionLocation(
    # Supply the collection to place the location within
    collectionId: "collection/ABC123"
    # Supply the collection location
    location: {
      # Content about the location
      title: "Dr. Morse Cafe"
      # Supply the place data
      place: { position: { lon: 144.99414682388306, lat: -37.79990202116163 } }
      # Leverage Attributes to extend the data stored and accessible for the
      # location
      attrs: [
        # Track the ID from my platform into the "custom://external-id". This
        # is a recognised attribute that can be later used to find the matching
        # collection location based on your own IDs
        { id: "custom://external-ref", value: "my-external-UUID" }
        # Support for external sources, also for grouping together multiple
        # different sources. Can be used to query all records from a specific
        # source later using the query collectionItems()
        { id: "custom://external-source", value: "example.com" }
      ]
    }
  ) {
    # Confirm the ID that is created
    location {
      id
      __typename
    }
  }
}
```

Note: These values are treated as `string` values. They can contain your own
values as you see fit. We recommend the `external-source` to indicate the source
of the data, which could be a label to differentiate multiple sources of data.
When you query, you can query by external-source to see records just from that
source.

## Querying a collection for locations

You can optionally query for collection locations by supplying query criteria
using the `externalIds` or `externalSources` parameters you have supplied when
creating the collection location.

The current value per collection location can also be accessed using the
`attr(id="custom://external-ref") { value }` or
`attr(id="custom://external-source") { value }` attribute selector.

This can make it effective to query the platform for specific entries or to
create a map of all values that are present in the platform currently, in order
to identify what needs to be sync'd or removed.

```graphql
# Queries collection items based on a ID within an external platform. When
# creating locations, you can set the attributes custom://external-ref and
# custom://external-source in order to store identifiers and sources of your
# platform. This enables you to reference and query items through your own
# ID scheme. External Ref is intended to be used on a 'per record' ID, where
# External source is to reference the source of all records, and can therefore
# differentiate multiple sources of data and potentially overlapping IDs

query QueryCollectionLocationWithExternalReference {
  collectionItems(
    # Query the collection
    collectionIds: "collection/ABC123"
    # Optionally query the external ID's supplied
    externalIds: ["my-external-UUID", "my-other-external-UUID"]
    # Optionally query a specific website source
    externalSources: ["example.com"]
    # Pagination controls for relay "cursor connections"
    # See: https://relay.dev/graphql/connections.htm
    first: 10 #, after: <cursor>
  ) {
    edges {
      node {
        # Matching collection item
        id
        __typename

        # Timestamps
        created
        modified

        # Obtain the values for the external refs
        externalId: attr(id: "custom://external-ref") {
          value
        }
        externalSource: attr(id: "custom://external-source") {
          value
        }
      }
      # Use the cursor and supply to "after" in operation to paginate
      cursor
    }
    totalCount
  }
}
```

## Updating an existing location

If you choose to later associate an external reference to an existing location,
you can do so via a mutation similar to below. This mutation will insert or
update an attribute value as required.

```graphql
# Update a record to store a corresponding identifier in an external system

mutation UpdateCollectionLocationAddExternalReference {
  # use the updateCollectionItem
  updateCollectionLocation(
    # Supply the ID for the record
    id: "item/ABC123"
    # Update the location data
    location: {
      # Use upsert to insert/update a record
      upsertAttrs: [
        # Supply an external ID for this record
        { id: "custom://external-ref", value: "my-reference-UUID" }
      ]
    }
  ) {
    # Query back the location updated
    location {
      id
      __typename
      # Attribute will now exist on the collection item
      externalId: attr(id: "custom://external-id") {
        value
      }
    }
  }
}
```

## Removing a collection location

You can also remove locations from a collection using the following.

```graphql
# Removes a collection item from a collection

mutation DeleteCollectionItem {
  # Use the deleteCollectionItem() operation
  deleteCollectionItem(
    # Supply the ID of the record to remove
    id: "item/ABC123"
  ) {
    # select back a response of the ID of the removed item
    id
  }
}
```
