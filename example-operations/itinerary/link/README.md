# Itinerary Link

- **[Create Itinerary Link Itinerary](/example-operations/itinerary/link/CreateItineraryLinkItinerary.graphql)**
  Creates a link between itineraries from one itinerary to another
- **[List Itinerary Links](/example-operations/itinerary/link/ListItineraryLinks.graphql)**
  Query the itinerary linksquery listItineraryLinks($itineraryId: ID!, $first:
  Int!, $after: String) { itinerary( Supply the itinerary ID id: $itineraryId )
  { Select the associated itinerary links using the children selector children(
  Limit to querying the itinerary links type: ItineraryLink Using the relay
  "cursor connection" specification for pagination See: https://relay

[View other itinerary operation examples](/example-operations/itinerary)
