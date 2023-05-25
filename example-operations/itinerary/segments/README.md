# Itinerary Segments

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

[View other itinerary operation examples](/example-operations/itinerary)
