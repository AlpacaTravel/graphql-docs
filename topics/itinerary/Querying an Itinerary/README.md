# Querying an Itinerary

Querying the itinerary depends largely on the way you want to present it to the
users. In order to provide as much flexibility as possible, Alpaca offers a
number of ways to query your itinerary.

### Prerequisits

- Your itinerary ID
- Your API Key

## Querying just the number of locations

You may wish to provide a simple interface UI that provides a list of the
number of itinerary locations within a list. Useful for when you are displaying
a number of locations that a user has in their itinerary.

```graphql
# Slim query just to access the number of locations

query QueryItineraryLocationsTotalCount {
  # Query using the itinerary() operation
  itinerary(
    # Supply the itinerary ID to query
    id: "itinerary/ABC123"
  ) {
    children(
      # Query the locations
      type: ItineraryLocation
      # We don't need any locations returned,
      first: 0
    ) {
      # Access the totalCount, indicating the total itinerary locations present
      totalCount
    }
  }
}
```

## Basic List of Locations (Favourites, Curated List, etc)

A common representation of an itinerary is used to display a list of favourites
that a user may have selected from a website, or a curated list of locations
that form a thematic shortlist.

```graphql
# Query the itinerary locations for an itinerary, and access basic information
# about the place

query QueryItineraryLocationsAsSimpleList {
  itinerary(
    # Supply the itinerary ID
    id: "itinerary/ABC123"
  ) {
    # Select the associated itinerary locations using the children selector
    children(
      # Limit to querying the itinerary locations
      type: ItineraryLocation
      # Using the relay "cursor connection" specification for pagination
      # See: https://relay.dev/graphql/connections.htm
      first: 10
    ) {
      edges {
        node {
          # ID/Types
          id
          __typename
          # Specific information drawn from the Itinerary Location
          ... on ItineraryLocation {
            # Query the itinerary location
            place {
              # Peel off what information we want from to show about the place
              name
              # Take what level from the address we want
              address {
                locality
              }
              # Categories, like restaurant, hotel etc
              layers {
                name
              }
            }
          }
        }
        # Obtain the cursor to pass back as the "after" property
        cursor
      }
      # Total number of locations
      totalCount
    }
  }
}
```

## List of locations with route directions between them

When listing locations of an itinerary, you can leverage the query edge data to
return any itinerary directions available between locations. This query method
makes it easier to display a list of locations, and between each of those
locations, indicate the directions that connect them.

These itinerary directions are pre-determined or automatically added using the
[automatic routing](/topics/itinerary/Automatic%20Routing/README.md) when
enabled on an itinerary.

```graphql
# Query the itinerary locations, with information about the directions between
# each of the locations

query QueryItineraryLocationsWithDirections {
  itinerary(
    # Supply the itinerary ID
    id: "itinerary/ABC123"
  ) {
    # Select the associated itinerary locations using the children selector
    children(
      # Limit to querying the itinerary locations
      type: ItineraryLocation
      # Using the relay "cursor connection" specification for pagination
      # See: https://relay.dev/graphql/connections.htm
      first: 10
    ) {
      edges {
        node {
          # ID/Types
          id
          __typename
          # Specific information drawn from the Itinerary Location
          ... on ItineraryLocation {
            # Query the itinerary location
            place {
              # Peel off what information we want from to show about the place
              name
              # Take what level from the address we want
              address {
                locality
              }
              # Categories, like restaurant, hotel etc
              layers {
                name
              }
            }
          }
        }
        # Additionally, query the routes between the locations as edge data,
        # which will obtain directions from the itinerary that arrive (Inbound)
        # to this location, from the last location in the edge sequence
        directions(first: 1, direction: Inbound) {
          nodes {
            # Duration
            durationMin
            # Access the route modes (e.g. Car, etc)
            route {
              segments {
                # Access polyline or geojson for each segment
                mode
              }
            }
            # Query any other ItineraryDirections data here..
          }
        }
        # Obtain the cursor to pass back as the "after" property
        cursor
      }
      # Total number of locations
      totalCount
    }
  }
}
```

## Additional Resources

- [Creating an itinerary](/topics/itinerary/Creating%20an%20itinerary/README.md)
- [Adding Locations](/topics/itinerary/Adding%20Locations/README.md)
- [Automatic Routing](/topics/itinerary/Automatic%20Routing/README.md)
