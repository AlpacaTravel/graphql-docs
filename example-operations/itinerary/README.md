[//]: # "Weight: 1"

# Itinerary

- **[Create Itinerary](/example-operations/itinerary/CreateItinerary.graphql)**
  Creates an Itinerary you can use for a wide range of use cases such as lists
  or sequenced itieraries with the supplied title
- **[Create Itinerary With Title](/example-operations/itinerary/CreateItineraryWithTitle.graphql)**
  Creates an Itinerary you can use for a wide range of use cases such as lists
  or sequenced itieraries with the supplied title
- **[Delete Itinerary](/example-operations/itinerary/DeleteItinerary.graphql)**
  Removes an itinerary
- **[Find Itinerary Location Ids By Place Ids](/example-operations/itinerary/FindItineraryLocationIdsByPlaceIds.graphql)**
  Checks whether a place has been added to an itinerary, for creating a button
  state on an "Add to Itinerary" button
- **[Get Itinerary Icons](/example-operations/itinerary/GetItineraryIcons.graphql)**
  Obtain the icon set that is used in the itinerary
- **[List Itineraries](/example-operations/itinerary/ListItineraries.graphql)**
  Query the itineraries that are created and associated to a profile
- **[Update Itinerary Assign Car Auto Route](/example-operations/itinerary/UpdateItineraryAssignCarAutoRoute.graphql)**
  Enable "auto-route" behaviour to an existing itinerary
- **[Update Itinerary Direction Mode](/example-operations/itinerary/UpdateItineraryDirectionMode.graphql)**
  Updates an itinerary directions to switch the mode of transportation from one
  mode (such as car) to an alterative mode, such as foot
- **[Update Itinerary Icons](/example-operations/itinerary/UpdateItineraryIcons.graphql)**
  Updates the icons associated with an Itinerary
- **[Update Itinerary Photos](/example-operations/itinerary/UpdateItineraryPhotos.graphql)**
  Updates an itinerary with a selection of photos
- **[Update Itinerary Title](/example-operations/itinerary/UpdateItineraryTitle.graphql)**
  Modify an existing Itinerary by changing the title

## Itinerary Collection

- **[Create Itinerary Collection](/example-operations/itinerary/collection/CreateItineraryCollection.graphql)**
  Creates an Itinerary Collection, which can be used to create new
  sub-listsmutation createItineraryCollection( $itineraryId: ID!
  $itineraryCollection: CreateItineraryCollectionInput!) {
  createItineraryCollection( itineraryId: $itineraryId collection:
  $itineraryCollection ) { collection { id } }}

## Itinerary Directions

- **[Create Itinerary Directions](/example-operations/itinerary/directions/CreateItineraryDirections.graphql)**
  Creates itinerary directions for between locations in an itinerary manually

## Itinerary Link

- **[Create Itinerary Link Itinerary](/example-operations/itinerary/link/CreateItineraryLinkItinerary.graphql)**
  Creates a link between itineraries from one itinerary to another
- **[List Itinerary Links](/example-operations/itinerary/link/ListItineraryLinks.graphql)**
  Query the itinerary linksquery listItineraryLinks($itineraryId: ID!, $first:
  Int!, $after: String) { itinerary( Supply the itinerary ID id: $itineraryId )
  { Select the associated itinerary links using the children selector children(
  Limit to querying the itinerary links type: ItineraryLink Using the relay
  "cursor connection" specification for pagination See: https://relay

## Itinerary Location

- **[Associate Itinerary Location Icon](/example-operations/itinerary/location/AssociateItineraryLocationIcon.graphql)**
  Associates an itinerary icon composition with an itinerary location
- **[Create Itinerary Location](/example-operations/itinerary/location/CreateItineraryLocation.graphql)**
  Add a location to our itinerary, associating the place to Mavis The Grocer
  using the Facebook Page identifier
- **[Create Itinerary Location With Additional Positions](/example-operations/itinerary/location/CreateItineraryLocationWithAdditionalPositions.graphql)**
  Adds a location to an itinerary, also supplying additional positions to help
  describe the location more accurately for a visiting user
- **[Delete Itinerary Location](/example-operations/itinerary/location/DeleteItineraryLocation.graphql)**
  Removes an itinerary item, such as a location
- **[List Itinerary Directions For Itinerary Location](/example-operations/itinerary/location/ListItineraryDirectionsForItineraryLocation.graphql)**
  Query an itinerary location and load the associated inbound or outbound
  directions
- **[List Itinerary Locations](/example-operations/itinerary/location/ListItineraryLocations.graphql)**
  Query the itinerary locations for an itinerary, and access basic information
  about the place
- **[List Itinerary Locations With Itinerary Directions](/example-operations/itinerary/location/ListItineraryLocationsWithItineraryDirections.graphql)**
  Query the itinerary locations, with information about the directions between
  each of the locations
- **[Move Itinerary Location After Sibling](/example-operations/itinerary/location/MoveItineraryLocationAfterSibling.graphql)**
  Move an itinerary location to a relative position to another item in the
  itinerary
- **[Move Itinerary Location To Start](/example-operations/itinerary/location/MoveItineraryLocationToStart.graphql)**
  Reorder/move the itinerary location to the start of the sequence
- **[Update Itinerary Location As Optional](/example-operations/itinerary/location/UpdateItineraryLocationAsOptional.graphql)**
  Updates an itinerary location and marks the itinerary location as an optional
  stop
- **[Update Itinerary Location Photos](/example-operations/itinerary/location/UpdateItineraryLocationPhotos.graphql)**
  Updates an itinerary location with a selection of photos
- **[Update Itinerary Location Segments](/example-operations/itinerary/location/UpdateItineraryLocationSegments.graphql)**
  Assign a series of segments to your itinerary locations

## Itinerary Segments

- **[Create Itinerary Segment](/example-operations/itinerary/segments/CreateItinerarySegment.graphql)**
  Creates an Itinerary Segment, which can be used to break up a list into
  smaller discrete sections
- **[Create Itinerary Segment With Title](/example-operations/itinerary/segments/CreateItinerarySegmentWithTitle.graphql)**
  Creates an Itinerary Segment with a titlemutation
  createItinerarySegmentWithTitle($itineraryId: ID!, $title: String) {
  createItinerarySegment( itineraryId: $itineraryId segment: { title: $title } )
  { segment { id } }}
- **[Delete Itinerary Segment](/example-operations/itinerary/segments/DeleteItinerarySegment.graphql)**
  Removes an itinerary item, such as a segment
- **[List Itinerary Segments](/example-operations/itinerary/segments/ListItinerarySegments.graphql)**
  Query the itinerary segments for an itinerary

[View other operation examples](/example-operations)
