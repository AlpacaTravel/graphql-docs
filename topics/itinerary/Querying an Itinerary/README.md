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

<p align="center">
  <img src="list.png" alt="Query favourites or a curated list without directions">
</p>

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

<p align="center">
  <img src="list-with-directions.png" alt="Understanding direction inbound or outbound">
</p>

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

## Advanced: Understanding query options "limitImmediate" and "skipOptional"

In more complex scenarios, it is possible to create itineraries that contain
a number of optional stops, auto-routing behaviour or manually added itinerary
directions (such as providing alternative modes of transportation etc).

<p align="center">
  <img src="list-with-directions-and-optional.png" alt="Complex itinerary showing numerous concepts">
</p>

A reasonable default is used in order to identify which directions by default
are likely applicable when drawing a sequence of routes with an attempt to avoid
over-fetching data. It is possible to change this behaviour to select the
Itinerary Directions that you prefer, to widen the selection criteria.

Within the `directions()` query, you can control the selection criteria basis:

- `limitImmediate` will limit the which locations prior/next will be queried for
  directions. By default, we will only check for the immediately prior or next
  locations in the sequence. (Default = true)
- `skipOptional` will be used to determine whether to include optional stops
  in determining the immediate prior or next locations. By default, the query
  will bypass optional locations and continue to seek the immediate where
  optional is false. (Default = true)

#### limitImediate: true, skipOptional: true (Default)

This query is the default query configuration adopted for using the directions()
when querying children() of an itinerary.

| Location | Inbound Directions | Outbound Directions |
| -------- | ------------------ | ------------------- |
| A        |                    | A to B              |
| B        | A to B             | B to D              |
| C        |                    | C to D              |
| D        | B to D             |                     |

#### limitImediate: true, skipOptional: false

Alternatively, the routes could be queried including the optional stops as the
immediate.

| Location | Inbound Directions | Outbound Directions |
| -------- | ------------------ | ------------------- |
| A        |                    | A to B              |
| B        | A to B             |                     |
| C        |                    | C to D              |
| D        | C to D             |                     |

#### limitImediate: false, skipOptional: true

| Location | Inbound Directions | Outbound Directions |
| -------- | ------------------ | ------------------- |
| A        |                    | A to B              |
| B        | A to B             | B to D              |
| C        |                    | C to D              |
| D        | C to D             |                     |

#### limitImediate: false, skipOptional: false

| Location | Inbound Directions | Outbound Directions |
| -------- | ------------------ | ------------------- |
| A        |                    | A to B              |
| B        | A to B             | B to D              |
| C        |                    | C to D              |
| D        | C to D, B to D     |                     |

## Additional Resources

- [Creating an itinerary](/topics/itinerary/Creating%20an%20itinerary/README.md)
- [Adding Locations](/topics/itinerary/Adding%20Locations/README.md)
- [Automatic Routing](/topics/itinerary/Automatic%20Routing/README.md)
