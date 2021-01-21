# Automatic Routing

To assist with a common use case, you can leverage a basic feature known as
automatic routing for your itinerary.

This feature when applied will assist creation of an itinerary by automatically
creating directions between the sequence of locations as they are added to the
itinerary.

Directions contain information such as duration and distance estimates based, as
well as providing map data for rendering.

There are a number of supported routing modes provided by Alpaca Travel that can
be used to search for routes

- Basic Profiles: Car, Foot, Bike, etc
- Advanced Profiles: MountainBike, Hike, Bus, Motorcycle, etc.

## Prerequisits

- GraphQL development environment (or GraphQL Playground)
- Your API Key

```graphql
# Creates an itinerary, and configures it to assign automatic routes. Automatic
# routes will assist basic itineraries by sequentially linking locations that
# are added with directions, providing information about moving between these
# locations.

mutation CreateItineraryWithCarAutoRoute {
  # When using the createItinerary mutation to create our itinerary
  createItinerary(
    itinerary: {
      # Add our basic required fields
      title: "Example Itinerary"
      # Indicate the behaviour to auto route using Car as the default mode
      autoRoute: { defaultMode: Car }
    }
  ) {
    # Read back the created itinerary
    itinerary {
      # Access the Identifier, required for further query/mutations
      id
    }
  }
}
```

## Enabling on an existing Itinerary

It can be possible to enable automatic routing on an existing itinerary by
performing an mutation to update the itinerary.

```graphql
# Enable "auto-route" behaviour to an existing itinerary. Auto-route will assist
# users create itineraries with directions automatically added between locations

mutation UpdateItineraryAssignCarAutoRoute {
  # Use the updateItinerary to modify an existing itinerary
  updateItinerary(
    # Supply the identifier of the itinerary
    id: "itinerary/ABC123"
    # Change the property of autoRoute to assign a default mode
    itinerary: { autoRoute: { defaultMode: Car } }
  ) {
    # Read back information
    itinerary {
      id
      autoRoute {
        defaultMode
      }
    }
  }
}
```

## Advanced: Assigning waypoints or alternative transport modes when adding locations

By default, directions are added using the default mode of the auto route
feature, as well as navigating the user from the last location to the new added
location.

This works for a majority of use cases, but in order to capture more real-world
examples, Alpaca Travel offers a number of finer-grain specifications for
automatic route behaviour, including:

- Alternative GPS positions to navigate the user to, such as a preferred entrance locations, car-parks etc
- Guiding the resulting searched route, by providing waypoints
- Creating manual route paths, supply positions, duration, distances and disabling search behaviours
- Switching the mode of transport used, deferring from the default mode of the itinerary

```graphql
# The below example provides a simple illustration of adding a fake place to an
# itinerary with autoRoute enabled, and customising the auto-route behaviour so
# that it uses an alternative mode of transport when adding. There are further
# behaviours provided to extend auto-routing, but further than this, you can
# leverage the createItineraryDirections mutations that can support multi-modal
# transport, GPS sequences or further

mutation CreateItineraryLocationWithAutoRouteOptions {
  # When creating an itinerary location
  createItineraryLocation(
    # Provide the itinerary to modify
    itineraryId: "itinerary/ABC"

    # Provide the location/place (dummy example)
    location: {
      # Describe the physical place
      place: {
        # See how to reference and add locations properly
        position: { lon: 123, lat: 45 }
      }
      # Supply specific attributes to customise this location
      attrs: [
        # Provide an alternative position to directions navigating to this
        # location such as sending the user to the entrace for the location, or
        # alternative [lon,lat]
        {
          id: "itinerary/location/directions-position-preference"
          value: [123, 45.6]
        }
      ]
    }

    # Modify the auto route behaviour
    autoRoute: {
      mode: Foot
      # Other options; positions, distance, duration, useRouteSearching...
    }
  ) {
    cascaded {
      # Read back what has been created when adding
      created {
        # Expecting ItineraryLocation and ItineraryDirections (auto route)
        __typename
        id
      }
    }
  }
}
```

#### Additional Resources

- Accessing Directions
- Managing Directions
- Querying the Itinerary
