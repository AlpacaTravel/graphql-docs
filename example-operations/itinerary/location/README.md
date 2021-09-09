# Itinerary Location

- **[Create Itinerary Location](/example-operations/itinerary/location/CreateItineraryLocation.graphql)**
  Add a location to our itinerary, associating the place to Mavis The Grocer using the Facebook Page identifier
- **[Create Itinerary Location With Additional Positions](/example-operations/itinerary/location/CreateItineraryLocationWithAdditionalPositions.graphql)**
  Adds a location to an itinerary, also supplying additional positions to help describe the location more accurately for a visiting user
- **[Delete Itinerary Location](/example-operations/itinerary/location/DeleteItineraryLocation.graphql)**
  Removes an itinerary item, such as a locationmutation deleteItineraryLocation($id: ID!) {   Use the deleteItineraryItem operation to remove an itinerary location  deleteItineraryItem(     Supply your ID of the itinerary location to remove (no undo)    id: $id  ) {     Select back the ID of the itinerary location that was removed    id  }}
- **[List Itinerary Directions For Itinerary Location](/example-operations/itinerary/location/ListItineraryDirectionsForItineraryLocation.graphql)**
  Query an itinerary location and load the associated inbound or outbound directionsquery listItineraryDirectionsForItineraryLocation(  $id: ID!  $first: Int!  $after: String  $direction: ItineraryDirectionsDirection) {   Use the itineraryLocation operation  node(     Supply the itinerary location ID    id: $id  ) {
- **[List Itinerary Locations](/example-operations/itinerary/location/ListItineraryLocations.graphql)**
  Query the itinerary locations for an itinerary, and access basic information about the placequery listItineraryLocations($itineraryId: ID!, $first: Int!, $after: String) {  itinerary(     Supply the itinerary ID    id: $itineraryId  ) {     Select the associated itinerary locations using the children selector    children(       Limit to querying the itinerary locations      type: ItineraryLocation       Using the relay "cursor connection" specification for pagination       See: https://relay
- **[List Itinerary Locations With Itinerary Directions](/example-operations/itinerary/location/ListItineraryLocationsWithItineraryDirections.graphql)**
  Query the itinerary locations, with information about the directions between each of the locations
- **[Move Itinerary Location After Sibling](/example-operations/itinerary/location/MoveItineraryLocationAfterSibling.graphql)**
  Move an itinerary location to a relative position to another item in the itinerary
- **[Move Itinerary Location To Start](/example-operations/itinerary/location/MoveItineraryLocationToStart.graphql)**
  Reorder/move the itinerary location to the start of the sequence
- **[Update Itinerary Location As Optional](/example-operations/itinerary/location/UpdateItineraryLocationAsOptional.graphql)**
  Updates an itinerary location and marks the itinerary location as an optional stopmutation UpdateItineraryLocationAsOptional($id: ID!, $optional: Boolean!) {   Use updateItineraryLocation mutation for making changes to ItineraryLocation  updateItineraryLocation(     Supply your itinerary location that you wish to make optional    id: $id     Supply the location fields changing    location: {       Update the location to be marked as optional      optional: $optional    }  ) {     Query back your location    location {       Optional should now be true      optional    }     Optionally see what else has been affected, such as a result of the     autoroute behaviour updating new and existing ItineraryDirections when     using this feature

[View other itinerary operation examples](/example-operations/itinerary)