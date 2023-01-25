# Importing Locations

In certain integrations, collection locations may originate in a remote system,
such as an existing website or CRM platform. It may be necessary to consider an
import of locations into an Alpaca collection.

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
      place: {
        # Supply the place position coordinates (mandatory)
        position: { lon: 144.99414682388306, lat: -37.79990202116163 }
        # Optionally relate to a known place, such as a place from ATDW if you
        # are leveraging place information to be updated automatically without
        # a re-import.
        id: "place/atdw:product:5cae80be57a096cd7084b6ab"
      }
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

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/)
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBhAJwQEMUEBnHYnKCAGzoShQEsIkc7pS2OB3FigAWVHEQBmCIkigIcKCFQ4IAHmQJJidHAAcCLOMQIBPHAGsExgDpJcEqclkAaHOUXDSOPnKjEOKAmIoMxwASQARAHJKBVdjGSECdhYALzkwUmoAIwQUb2RdOlJxCAI4cgA6G1wAdTlGADcpYgBzOWpNRDAqFACWLJgyeSFPFkpyGB0dUrJukoIcAEcYKWMWJBacQQRypTBqnAgslGJ19c2uX1Z2SnEkuFFaBiZrjizicgRu9mGEFgXVOpNNp7NJZJUbDY4IMeD9CCQyHh6IxmLwADLcV41QRCACiaikwIASghJGC5MAbDgcLgYJ9fq4TkgMgRulAiKQEEjnqj2BirrwqTQOYjkS90ZjeAAKIXU3AAZUmOjopmEPjFvP8imVQTkas4kp+AmE61lNA1r1CYHQOCsICeKNeAHoAIIAITwAEYAEwAZjtZoVSpVDId4p+l1hSDNkdeNspHGpSdwSNQyBQVCyEEGDNjgsTSfkgkYNrt4QIFRwAFlSvS8MRJAGC8mcIqpiH9TrZDgMiczdSuwh4-2W23laqhHJB7oIORBLxzaUwOtOZQpYZmaRSsYAJQjgez+fseMGpA2z0AFgvFQAnDeL5eAGwADj9z+fvoADI+XEUUDaAFpfQAdgqYC7xvT9vSgz1PUfODfRwABffcaRwAB5HRXi0EMiD-PVFGoMwkAgPgOEHFwJigEQPlEac7ggB4XQAFXCGotnEHBjGzVDcCMeoECaQIWnOQpdS2JB5kMV55EUHIcEmXsvioQZGJ4XwGFMY0hGzFBeNEIgAIMaYCBQKpm0LFhrVtEBBydUgwD4dA9AgMAYGYdAAFZfAQZ9PxyTzgOIT8b0fKAwGAz9nwvLJH2ILIm0LakUIstC0UE5o2hwF1en0AYyBiRRAWQbp9V7ahyAUIhuj8GqoHBOcskYHB5l+EdcDzdgR1IAJyBtABtfTmMCYIGQiFr7hwOBTB1FApIk2J9TtWBKsY9AnSdYqNC0Iz9hAStmKEMZ9LGAymAgFokDGZSerywY9RGDNfDeepOQWOllNicR1lKycptIajzn0sNNQNAUfneT5vg4biYAWUiOAichUOALZrOWukFDgdbNoJba6AAiQ7RcBotBWUsQGmgCtuBACAFU6YiO1kP0scZha0ocBprRXGzAhwRcLQ3A5hYWiSSZRIUNo1QWaE6FYZUEH05dxDJdNebh8FK3rF6FKh2SlhWEwqAYMRztZW5JoqnQmBYb6oH0txNde9Q9clv7llWc0eUtMhyilPdUupVGrIplasZx7mCad-mlZAEmyaHGzVGIOBFYqWg4GZlKkpwABdM0c5wHccATQsU3Yb6yjG8JhlGSh2QRL4Y0NDgy6SqyRwAfS7lBjBtzolebIuUqQkAkKAA)

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
    pageInfo {
      hasNextPage
    }
    totalCount
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/)
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBFGBAJwEsEBnHKCAGxoShRIiRxJQTkoCMBDchGBwscvHAEkAIjgDu7ABYlWvVggAeHIkl40cABxq8UAMwhE4AOhwB1ecgA6SXFCIIjSgOY4a0dy3IANDgAnhAwVCo4Aig4KHaiKCik3DAclLDkKBBw6AD0ueqa2jQAtK7Gokhgjs4wmdl5BRrExSXkYURQCGysZmDEsRBRWa5s-agkxmRElCpC7TCdFMIVoYs1+oYmZpY4ACqKlMi83PSUa4M45cTIXZVCAI6ERMFsHFyx8kRhHvIhHcIZEgNlIolA7IgrABRZpaHQ4ABKCAqJEoSg4VUEl243TqWJEYgA5HoBq5qEQwISJJIgjI7K4NjCivCFks2JQsldkTckHc4t1WXcIBUdLoyX1AvcIqx+eUzAgNmBJsYeUwjN04DAaEwDAKOl1KMKcGAjGI5voIBi1XRXhAAG7EQx6PSeankRyOJ7EV4Eb0AYVo9EYzCQABlfEwWNYFEyWjokSrXLzusBHDgqIGGJGkOJ3uQABRp9M4XC+l6fbrUOhZkNF9NVoPZ8RgcjoHD2EANmssXIAQQAQn6AIwAJgAzB26yWcAB5PTZ0WvL3l-k4Qpx3RSQmUcgwZ00MjVVjF9dwmjN1s4ADaHbgwRKp9aAFUn1IO0Fb-fLfSH7Dn6-JA7ABdKdcDnBcbRwZdXjEcgSSgSYSCgWQEG4ch2D1RYuinR8dAAZX1Cg2xvEB1F4OBdQsag4GA0CcAABV4DwlD8VhqFQb4aEoUwiC5QxXg7WAZjMDMkCQbskHdEA6LwhAEDbeREj0Vt8lcfiLH6O1cg8IheD0eQHhoXJ2PE4N-AsRSaOPdMphmFA2yHAAGEsgl4YxNDbAAeIT2iIAA+IsAEocFTay1zADxllC4tiyQCB+hCqcYtwABZIxwVdLszNYDCrJimKSCPfLiwAfRKlBghJbREA9MLkv2EhEEycjlKS4sXDcDgiuKnA4HixDBFqnrpxnbgUF4JQKxwO0dEIbiRNXXCxWRd06pPP8dGbNsjCSfNCrbQS6iyHJ8iWspkQ7YLouG6bZoVNb0wAXza9MloIrD5ISXb9vbTsjoaU6NtKQUFRAK6XuLGaaEICHnrWuHitwJ8BCmnyRPNXd91eTkOzczQOx6YQSV07NLj0JiWI4Nq0aIKcEeLcnIvEJBTEStb5H4AA5QpGMiumpyycaaADGBUCLOHHpAR6gA)

Note: The `collectionItems` query returns a cursor connection in order to
paginate through the returned edges. You can read about
[Paginating using cursor connections](/topics/graphql/Pagination%20using%20cursor%20connections/README.md)

## Updating an existing location

If you choose to later associate an external reference to an existing location,
you can do so via a mutation similar to below. This mutation will insert or
update an attribute value as required.

You can also use the same `updateCollectionLocation` operation to update your
content, such as title, etc.

```graphql
# Update a record to store a corresponding identifier in an external system

mutation UpdateCollectionLocationAddExternalReference {
  # use the updateCollectionItem
  updateCollectionLocation(
    # Supply the ID for the record
    id: "item/ABC123"
    # Update the location data
    location: {
      # Update our title, description or any other content here...
      # ...
      # Use upsert to insert/update a record
      upsertAttrs: [
        # Supply an external ID for this record
        { id: "custom/external-ref", value: "my-reference-UUID" }
      ]
    }
  ) {
    # Query back the location updated
    location {
      id
      __typename
      # Attribute will now exist on the collection item
      externalId: attr(id: "custom://external-ref") {
        value
      }
    }
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/)
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBVABzAEMUEdicAnBKCKsHFCHAZ2ZopzqptYIhIwASyQBzHMLDIUwgGbCEVSUgqqEADzJUkxADZsAnuwRwAOkgtwYKUsMH4ipBAGEIevbVmCAMtDuCAIJgYACiWkq6egBKCHJKyFDkwBY4OLgwrOQoABbkME5kbh5e9kgAkmTmqjgFJEXunlDeSH5QAUgAFKlp6TgAygUEeoZMeTjlACI4cvRj5DQ8YD1pUug4ZiDCVQD0gQBCLgCMAEwAzJsrfYT12eN6-i049cRXD+0t6yk1vdeF5BAYMpZChPAAaZ4IVhQKjCAhPObEJCjCC5JTcQRkVA4PI0AB0BKuaVwBLxROuWVqBCyVBQTBYohpKB2dWcXEW9GWP16BSZgRQKCorHWAG1ycSBkMRmocJptFEJtNZsCcsJWNRaJzxThgJIwOtNrB2BA4Ds5ZF9ABaGhyTYQgBu+hgCANIDghmtcQSSCSlrweCmmxwAF9yQBdK6hmoASh1V1wAEVnVRRgAjYhQADW8xw7w6VNuXN+eae31+qyL5YA+lWUIYCMhiIhybh+YLhKmbOQAO7CDw4JAQbuyjRqukONEYkrNMqSKrk806fTlfUUAVUTprDYgI3MODoHZmiJLvSe20gWNl8tpR16Z3kqO-R8hizBkDBoA)

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

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/)
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEAlBOCANwQGccBDHKCAGzoShQEsIkcWVCcAzAJwhwqNeo2ZskAHWlI4MFJVbscAEQSNuAYTFNlSAJLdhwGThy4AqmQQ4UAC1tgNCbbonsjhABQBKHBAADgj8SpJmOM6aCDoMepJecN4R5rgAyjCBgXQAnnaOOAaqAbz5tvxMEPxgdhA4FUSkKZxg6DhSIFyEAPQAggBCWgCMAEwAzB0R-qYc5hY4NuIoOABGlFAA1iIVZIHsNiVlhcUQpQ7lhCQINV1wzSxgEQC+Mk8gT0A)

## Additional Resources

- [Pagination using cursor connections](/topics/graphql/Pagination%20using%20cursor%20connections/README.md)

- [Managing collection locations](/topics/collection/Managing%20collection%20locations/README.md)

- [Example GraphQL operations for collections](/example-operations/collection)
