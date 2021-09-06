# Itinerary

- **[Check Itinerary Place Present](/example-operations/itinerary/CheckItineraryPlacePresent.graphql)**
  Checks whether a place has been added to an itinerary, for creating a button state on an "Add to Itinerary" button
- **[Create Itinerary](/example-operations/itinerary/CreateItinerary.graphql)**
  Creates an Itinerary you can use for a wide range of use cases such as lists or sequenced itieraries.
- **[Create Itinerary Associated To Profile](/example-operations/itinerary/CreateItineraryAssociatedToProfile.graphql)**
  Creates an itinerary and associates it to the supplied profile ID
- **[Create Itinerary With Car Auto Route](/example-operations/itinerary/CreateItineraryWithCarAutoRoute.graphql)**
  Creates an itinerary, and configures it to assign automatic routes
- **[Delete Itinerary](/example-operations/itinerary/DeleteItinerary.graphql)**
  Removes an itinerary
- **[Profile Itineraries](/example-operations/itinerary/ProfileItineraries.graphql)**
  Query the itineraries that are created and associated to a profile
- **[Update Itinerary Assign Car Auto Route](/example-operations/itinerary/UpdateItineraryAssignCarAutoRoute.graphql)**
  Enable "auto-route" behaviour to an existing itinerary
- **[Update Itinerary Direction Mode](/example-operations/itinerary/UpdateItineraryDirectionMode.graphql)**
  Updates an itinerary directions to switch the mode of transportation from one mode (such as car) to an alterative mode, such as foot
- **[Update Itinerary Title](/example-operations/itinerary/UpdateItineraryTitle.graphql)**
  Modify an existing Itinerary by changing the title

## Itinerary Directions

- **[Create Itinerary Directions](/example-operations/itinerary/directions/CreateItineraryDirections.graphql)**
  Creates itinerary directions for between locations in an itinerary manually
- **[Create Itinerary Directions With Manual Positions](/example-operations/itinerary/directions/CreateItineraryDirectionsWithManualPositions.graphql)**
  Creates itinerary directions for between locations in an itinerary by supplying all the point information with a custom mode of transportation.

## Itinerary Location

- **[Create Itinerary Location](/example-operations/itinerary/location/CreateItineraryLocation.graphql)**
  Add a location to our itinerary, associating the place to Mavis The Grocer using the Facebook Page identifier
- **[Create Itinerary Location With Additional Positions](/example-operations/itinerary/location/CreateItineraryLocationWithAdditionalPositions.graphql)**
  Adds a location to an itinerary, also supplying additional positions to help describe the location more accurately for a visiting user.
- **[Create Itinerary Location With Atdw Place](/example-operations/itinerary/location/CreateItineraryLocationWithAtdwPlace.graphql)**
  Add a location to our itinerary, associating the place to Mavis The Grocer using the ATDW Product identifier
- **[Create Itinerary Location With Auto Route Options](/example-operations/itinerary/location/CreateItineraryLocationWithAutoRouteOptions.graphql)**
  Adds a new location to an itinerary that has auto route enabled, and customises the auto-route behaviour so that it uses an alternative mode of transport when adding
- **[Delete Itinerary Location](/example-operations/itinerary/location/DeleteItineraryLocation.graphql)**
  Removes an itinerary item, such as a location
- **[Itinerary Location Directions](/example-operations/itinerary/location/ItineraryLocationDirections.graphql)**
  Query an itinerary location and load the associated inbound or outbound directions
- **[Itinerary Locations As Simple List](/example-operations/itinerary/location/ItineraryLocationsAsSimpleList.graphql)**
  Query the itinerary locations for an itinerary, and access basic information about the place
- **[Itinerary Locations With Directions](/example-operations/itinerary/location/ItineraryLocationsWithDirections.graphql)**
  Query the itinerary locations, with information about the directions between each of the locations
- **[Move Itinerary Location](/example-operations/itinerary/location/MoveItineraryLocation.graphql)**
  Move an itinerary location to a relative position to another item in the itinerary
- **[Move Itinerary Location To Start](/example-operations/itinerary/location/MoveItineraryLocationToStart.graphql)**
  Reorder/move the itinerary location to the start of the sequence
- **[Update Itinerary Location As Optional](/example-operations/itinerary/location/UpdateItineraryLocationAsOptional.graphql)**
  Updates an itinerary location and marks the itinerary location as an optional stop

[View other operation examples](/example-operations)