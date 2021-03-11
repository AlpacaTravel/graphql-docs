# Adding Directions

A key part of an itinerary is to assist the user understand their movements.
Alpaca offers services to assist providing information to users viewing your
itineraries.

Alpaca can provide automatic routing to assist this process, of you can create
your own directions to represent more complex directions and their
representations. Various modes of transportation are supported to represent
the movements of the traveller.

Alpaca supports a data structure to support manual data or automatic directions
searching through a search service offered by Alpaca. You can also supply a
single mode of transportation, or support mutli-modal transport.

### Prerequisits

- You'll need an itinerary you want to add to and locate the Itinerary ID
- The itinerary will need to be unassigned to a profile, or you'll need your
  private API Key

## Automatic Routing for added locations

You can get started with directions by leveraging the [Automatic Routing](/topics/itinerary/Automatic%20Routing/README.md)
capability that does not require you manually add directions. As you add
locations to your itinerary, directions will be added automatically.

## Adding a Car Route

The below example creates itinerary directions between two locations that are
existing in your itinerary.

The single segment supplied is a Car segment, that is automatically searched
for the best path to take.

```graphql
# Creates itinerary directions for between locations in an itinerary manually.
# Can be used to create directions instead of using the Itinerary autoRoute
# method or for where the itinerary is to contain multiple ways to move between
# locations (alternative modes of transport between locations) or to provide
# optional route options that may bypass specific locations in a sequence.

mutation CreateItineraryDirections {
  # use createItineraryDirections to create directions in an itinerary
  createItineraryDirections(
    # Supply the itinerary ID
    itineraryId: "itinerary/ABC123"
    # Provide the model for directions
    directions: {
      # Provide the route for the directions
      route: {
        segments: [
          # Create segments for each mode. Add additional segments sequentially
          # here as we support modal, e.g. Foot -> Car -> Foot etc. depending on
          # the fidelity of the directions
          {
            # Indicate the mode of transport for this route segment
            mode: Car
            # Indicate whether we should search for this route
            useRouteSearching: true
          }
        ]
      }
      # Contextualise the directions from origin/destination
      # Origin itinerary location
      originId: "itinerary/ABC123/item/startABC123"
      # Position under the destination itinerary location
      positionAtEnd: {
        # Destination itinerary location
        parentId: "itinerary/ABC123/item/endpointABC123"
      }
    }
  ) {
    # Query what was affected as a response
    cascaded {
      created {
        id
        __typename
      }
    }
  }
}
```

## Adding a GPS Track (manual path)

You can also specify directions such as providing a manual track from GPS data.

Provide the GPS observations as the `positions`, and it is not necesarry to use
`useRouteSearching`.

```graphql
# Creates itinerary directions for between locations in an itinerary by
# supplying all the point information with a custom mode of transportation.

mutation CreateItineraryDirectionsWithManualPositions {
  # use createItineraryDirections to create directions in an itinerary
  createItineraryDirections(
    # Supply the itinerary ID
    itineraryId: "itinerary/ABC123"
    # Provide the model for directions
    directions: {
      # Provide the route for the directions
      route: {
        segments: [
          # Add in a segment that is not using route searching and supplies
          # the points
          {
            # Indicate the mode of transport for this route segment
            mode: DogSled
            # Provide the information for the segment
            useRouteSearching: false
            positions: [
              # List the positions for the route
              { lon: 24.235839843749996, lat: 60.600453043068256 }
              { lon: 23.3184814453125, lat: 61.00507574751817 }
              { lon: 24.532470703125, lat: 61.39145881217429 }
              { lon: 25.784912109375, lat: 61.090168316050516 }
              { lon: 25.323486328124996, lat: 60.63548951646859 }
            ]
          }
        ]
      }
      # Contextualise the directions from origin/destination
      # Origin itinerary location
      originId: "itinerary/ABC123/item/startABC123"
      # Position under the destination itinerary location
      positionAtEnd: {
        # Destination itinerary location
        parentId: "itinerary/ABC123/item/endpointABC123"
      }
    }
  ) {
    # Query what was affected as a response
    cascaded {
      created {
        id
        __typename
      }
    }
  }
}
```

## Showing directions to and from a location

When querying an itinerary location, you can query the corresponding directions
for a given location.

```graphql
# Query an itinerary location and load the associated inbound or outbound
# directions

query QueryItineraryLocationDirections {
  # Use the itineraryLocation operation
  node(
    # Supply the itinerary location ID
    id: "itinerary/ABC123/item/DEF456"
  ) {
    ... on ItineraryLocation {
      # Query the data you want for the itinerary location, such as
      # content or information about the place
      title
      place {
        address {
          locality
        }
        maki
        layers {
          name
        }
      }
      # Query any itinerary directions to or from this location
      directions(first: 2) {
        edges {
          # Inbound or outbound direction
          direction
          node {
            # Query the ItineraryDirection here
            durationMin
            distance
            route {
              segments {
                mode
              }
            }
          }
        }
      }
    }
  }
}
```

## Showing directions as part of an list of locations

When displaying a sequence of locations, such as a summary of the locations on
an itinerary and the directions moving between these locations, you can use the
edge data available between locations to query the connecting directions.

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

- [Automatic Routing](/topics/itinerary/Automatic%20Routing/README.md)
- [Querying an Itinerary](/topics/itinerary/Querying%20an%20Itinerary/README.md)
