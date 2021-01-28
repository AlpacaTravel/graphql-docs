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

## Adding a manual path

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

## Additional Resources

- [Automatic Routing](/topics/itinerary/Automatic%20Routing/README.md)
