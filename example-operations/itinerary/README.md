# Itinerary

- **[Create Itinerary](/example-operations/itinerary/CreateItinerary.graphql)**
  Creates an Itinerary you can use for a wide range of use cases such as lists or sequenced itieraries with the supplied title
- **[Create Itinerary With Title](/example-operations/itinerary/CreateItineraryWithTitle.graphql)**
  Creates an Itinerary you can use for a wide range of use cases such as lists or sequenced itieraries with the supplied title
- **[Delete Itinerary](/example-operations/itinerary/DeleteItinerary.graphql)**
  Removes an itinerarymutation deleteItinerary($id: ID!) {   Use the deleteItinerary operation to remove an itinerary  deleteItinerary(     Supply your ID of the itinerary to remove (no undo)    id: $id  ) {     Select back the ID of the itinerary that was removed    id  }}
- **[Find Itinerary Location Ids By Place Ids](/example-operations/itinerary/FindItineraryLocationIdsByPlaceIds.graphql)**
  Checks whether a place has been added to an itinerary, for creating a button state on an "Add to Itinerary" button
- **[List Itineraries](/example-operations/itinerary/ListItineraries.graphql)**
  Query the itineraries that are created and associated to a profilequery listItineraries($profileId: ID!, $first: Int!, $after: String) {   Use the itineraries operation to query for a supplied profile  itineraries(     You will need to have your profile ID to query    profileId: $profileId     Pagination controls for relay "cursor connections"     See: https://relay
- **[Update Itinerary Assign Car Auto Route](/example-operations/itinerary/UpdateItineraryAssignCarAutoRoute.graphql)**
  Enable "auto-route" behaviour to an existing itinerary
- **[Update Itinerary Direction Mode](/example-operations/itinerary/UpdateItineraryDirectionMode.graphql)**
  Updates an itinerary directions to switch the mode of transportation from one mode (such as car) to an alterative mode, such as footmutation updateItineraryDirectionMode(  $id: ID!  $mode: RouteMode  $useRouteSearching: Boolean!  $positions: [PositionInput!]) {   Use updateItineraryDirections operation to update directions  updateItineraryDirections(     Provide the itinerary directions ID to update    id: $id     Supply the directions    directions: {       Modify the route with the directions      route: {        segments: [           A single route segment
- **[Update Itinerary Title](/example-operations/itinerary/UpdateItineraryTitle.graphql)**
  Modify an existing Itinerary by changing the titlemutation updateItineraryTitle($id: ID!, $title: String!) {   Use the updateItinerary operation to modify the itinerary  updateItinerary(     Specify the itinerary ID    id: $id     Provide new data for itinerary    itinerary: {       Supply a new title for the itinerary      title: $title    }  ) {     You can query back after the mutation    itinerary {      id      __typename       Title should return "New Title"      title    }  }}

## Itinerary Directions

- **[Create Itinerary Directions](/example-operations/itinerary/directions/CreateItineraryDirections.graphql)**
  Creates itinerary directions for between locations in an itinerary manually

## Itinerary Location

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

[View other operation examples](/example-operations)