# Position Numbering

When displaying a map or itinerary, it is often helpful to display a sequence
to represent visiting places in order. While you are able to query GraphQL to
obtain and represent ordering in your application how you want, the GraphQL API
also provides some fields to assist common use cases.

## Sibling Numbering

When loading information about a specific itinerary location, you may wish to
identify a numbering that could be displayed as relative to the other siblings.

```graphql
# Identify a number for a specific itinerary location without loading the list
# of siblings.

query ItineraryLocationSiblingPositionNumber {
  # Query the itinerary location directly
  node(id: "itinerary/ABC123/location/DEF456") {
    ... on ItineraryLocation {
      # Identifiers
      id
      __typename

      # Create a numeric representation for this itinerary location
      number: siblingPositionNumber(
        # Reduce the sibling types to just Itinerary Locations
        type: ItineraryLocation
        # Optionally, control the omits with further properties
        skipOptional: true
        skipOmitList: true
      )
    }
  }
}
```

## Edge Numbering

Additionally, if you are presenting a list of itinerary locations via a
connection response of `children()` and `descendants()`, you can use the edge
numbering to assist determine a number.

```graphql
# Leverage the connection edge data to create a position number for each of the
# edges returned.

query ItineraryEdgePositionNumber {
  # When querying the children determine a position number
  itinerary(id: "itinerary/ABC123") {
    # Using the edge data for children
    children(type: ItineraryLocation, first: 10) {
      edges {
        # The node information ...
        node {
          id
          __typename
        }

        # Determine a position number, relative to the current edge
        edgePositionNumber(
          type: ItineraryLocation
          skipOptional: true
          skipOmitList: true
        )
      }
    }

    # Using the edge data for descendants
    descendants(type: ItineraryLocation, first: 10) {
      edges {
        # The node information ...
        node {
          id
          __typename
        }

        # Determine the position number, relative to the current edge
        edgePositionNumber(
          type: ItineraryLocation
          skipOptional: true
          skipOmitList: true
        )
      }
    }
  }
}
```
