# Itinerary Collection

- **[Create Itinerary Collection](/example-operations/itinerary/collection/CreateItineraryCollection.graphql)**
  Creates an Itinerary Collection, which can be used to create new
  sub-listsmutation createItineraryCollection( $itineraryId: ID!
  $itineraryCollection: CreateItineraryCollectionInput!) {
  createItineraryCollection( itineraryId: $itineraryId collection:
  $itineraryCollection ) { collection { id } }}

[View other itinerary operation examples](/example-operations/itinerary)
