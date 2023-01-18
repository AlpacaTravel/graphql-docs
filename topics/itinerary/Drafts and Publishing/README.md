# Drafts and Publishing Itineraries

The Alpaca Platform offers the ability to work with drafts before publishing
them. This is particularly important for content authors, who may want to
make several changes prior to those updates being published all at once.

Alpaca offers the ability to determine the target of mutations when you perform
them on itineraries.

```graphql
mutation ChangeItineraryDraftTitle {
  # Perform an update on the itinerary, but don't publish the changes
  updateItinerary(
    id: "itinerary/ABC123"
    # Use the publish: false to disable automatically publishing the mutation
    publish: false
    # Updates will be applied to a draft version
    itinerary: { title: "New title for the itinerary" }
  ) {
    itinerary {
      id

      # The date when the itinerary was last published
      published

      # The modified date will be the latest draft date
      modified

      # This title value is taken from the draft
      title
    }
  }
}
```
