# Automatic Routing between Locations

To assist with a common use case, you can leverage a basic feature known as
automatic routing for your itinerary.

- Add directions automatically between Locations
- Can be enabled on existing itineraries (such as simple lists or favourites)
- Supports making stops optional
- Can use preferred entry positions for locations
- Supports a wide range of direction modes, including Car, Foot, Bike, Hike etc
- Can change the directions to use specific modes of transport, such as
  alternating between Car/Foot/etc.
- Can customise to include waypoints or preferred directions

This feature when applied will assist creation of an itinerary by automatically
creating directions between the sequence of locations as they are added to the
itinerary.

<p align="center">
  <img src="autorouting.png" alt="Enabling automatic routing between locations">
</p>

Directions contain information such as duration and distance estimates based, as
well as providing map data for rendering.

There are a number of supported routing modes provided by Alpaca Travel that can
be used to search for routes

- Basic Profiles: Car, Foot, Bike, etc
- Advanced Profiles: MountainBike, Hike, Bus, Motorcycle, Scooter, etc.

### Prerequisits

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

## Making locations "optional"

The Alpaca auto-route feature will create a sequence of ItineraryDirections
between each of the ItineraryLocations that are added to an itinerary with this
behaviour enabled.

In some use-cases, you may wish to not automatically route to a specific
location, as it may be along the way between two locations, but not a mandatory
stop for users.

<p align="center">
  <img src="optional-locations.png" alt="Marking locations as optional to skip over in auto routing">
</p>

```graphql
# Updates an itinerary location and marks the itinerary location as an optional
# stop

mutation UpdateItineraryLocationAsOptional {
  # Use updateItineraryLocation mutation for making changes to ItineraryLocation
  updateItineraryLocation(
    # Supply your itinerary location that you wish to make optional
    id: "itinerary/ABC123/item/DEF456"
    # Supply the location fields changing
    location: {
      # Update the location to be marked as optional
      optional: true
    }
  ) {
    # Query back your location
    location {
      # Optional should now be true
      optional
    }
    # Optionally see what else has been affected, such as a result of the
    # autoroute behaviour updating new and existing ItineraryDirections when
    # using this feature.
    cascaded {
      created {
        id
        __typename
      }
      updated {
        id
        __typename
      }
      deletedIds
    }
  }
}
```

### Modifying the itinerary direction

You can also switch the directions mode of transport for a specific section
of your itinerary, such as switching from a car direction to a foot direction.

```graphql
# Updates an itinerary directions to switch the mode of transportation from one
# mode (such as car) to an alterative mode, such as foot

mutation UpdateItineraryDirectionMode {
  # Use updateItineraryDirections operation to update directions
  updateItineraryDirections(
    # Provide the itinerary directions ID to update
    id: "itinerary/ABC123/item/DEF456"
    # Supply the directions
    directions: {
      # Modify the route with the directions
      route: {
        segments: [
          # A single route segment..., you can use multiple.
          {
            # Indicate the mode of transport for this route segment
            mode: Foot
            # Provide the information for the segment
            useRouteSearching: true
            # Provide positions: [] here if you want to control the routing
          }
        ]
      }
    }
  ) {
    # Query what was affected as a response
    cascaded {
      updated {
        id
        __typename
      }
    }
  }
}
```

You can manage the created itinerary direction as a normal itinerary direction.
As such, you can refer to the
[adding directions documentation](/topics/itinerary/Adding%20Directions/README.md)

It is also possible to create more complex representations of a route, including
directing the user to a point, and then switching the mode of transport to move
the user to another point. This is known as "multi-modal" transportation and
is supported by the Alpaca Travel platform.

## Advanced: Assigning waypoints or alternative transport modes when adding locations

By default, directions are added using the default mode of the auto route
feature, as well as navigating the user from the last location to the new added
location.

This works for a majority of use cases, but in order to capture more real-world
examples, Alpaca Travel offers a number of finer-grain specifications for
automatic route behaviour, including:

- Alternative GPS positions to navigate the user to, such as a preferred
  entrance locations, car-parks etc
- Guiding the resulting searched route, by providing waypoints
- Creating manual route paths, supply positions, duration, distances and
  disabling search behaviours
- Switching the mode of transport used, deferring from the default mode of the
  itinerary

```graphql
# Adds a new location to an itinerary that has auto route enabled, and
# customises the auto-route behaviour so that it uses an alternative mode of
# transport when adding. There are further behaviours provided to extend
# auto-routing, but further than this, you can leverage the
# createItineraryDirections mutations that can support multi-modal transport,
# GPS sequences or further

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

    # Modify the auto route behaviour when creating this location. Note: This
    # is not a permanent change to the itinerary, and is instead modifying
    # the resulting autoroute that would be created at the same time
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

## Additional Resources

- [Reordering locations](/topics/itinerary/Reordering%20Locations/README.md)
- [Querying the itinerary](/topics/itinerary/Querying%20an%20Itinerary/README.md)
- [Adding specific or alternative directions](/topics/itinerary/Adding%20Directions/README.md)
