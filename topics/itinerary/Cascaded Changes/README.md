[//]: # "Title: Cascading Changes"
[//]: # "Weight: 11"

# Cascaded Changes

When making mutations to the itinerary, you primarily make changes to a specific
node (such as updateItinerary, updateItineraryLocation, etc). The effect of
making a change may affect other elements of the itinerary.

To access any other affected nodes from the mutation, you can use the `cascaded`
field which will supply the ability to query the affected nodes.

This assists you identify any stale date that may exist in your local memory or
cache of your application and may indicate you need to update or refresh certain
queries.

The following example shows the `cascaded` field which will read back affected
nodes.

```graphql
# Creates an itinerary location and reads back any other changes to the
# itinerary as a result of adding this location, such as additional calculated
# directions when using auto route

mutation CreateLocationWithCascadedChanges(
  $itineraryId: ID!
  $location: CreateItineraryLocationInput!
) {
  createItineraryLocation(itineraryId: $itineraryId, location: $location) {
    # Read back the location just created
    location {
      __typename
      id
    }
    # Select any other cascaded chages from the operation
    cascaded {
      created {
        __typename
        id
        # Add any fields to read from created nodes
      }
      updated {
        __typename
        id
        # Add any fields to read from created nodes
      }
      deletedIds
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBhAJwQEMUEBnHYpHASxVqQQOIIE8cAbaU2iG6mBxFiYSgCNiUANZUkHCCgAWzHFCXUA5hRwoIulQB0kueo2asOxSsWEUYnFDggAzKmDCNNB2pW5RefgAaHHIYdSobDzN+Yk41ONhOUgQwY1xPIigGfkoAdxUaGHIvKhg9YQhyhGNjOHLAmkISMgAZHhykAHV6JTxrALBUvA0kbXIACmMcHAASMyYWdgBJMHQcZYARAEJpuf9G9eaU5YZFy3aAzuWkAAdy3aQAShxgPagRMlPzJbZLxomCwsKzWcyBv1WIQOnXWs2hfGerz2M1wACUSEJJDIDAguB0ETgAFbFJwfFqpZF4q4Et40Gb0gD6DJQbFuyGIiEpM1oaTpMwAvpTcABlBCcBDZOQKZSqALkQapNQacY4FwECBwHHONksTqUuUKoS0+n0skpI1cxnM1nszl8k10XkO+m4ACCHilqtoYrEun0IiEao1ak+iqQECG5EtgvtMxgtzA5qRsatLLZSA5NRT3Kdzpwbo91A4Lm9nF9FQDqvVmrNZCE4cj0ctQ3FddWUftMYFxn5IH5QA)
