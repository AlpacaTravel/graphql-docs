### Checking if a place is within an itinerary

You can check whether a place has already been added to an itinerary by
performing a query and supplying the place identifier.

#### Prerequisits

- You will need to supply an ID in order to check the place exists in an Itinerary
- You will need to have access to the ID of the itinerary to check for a place

```graphql
# Checks whether a place has been added to an itinerary, for creating a button
# state on an "Add to Itinerary" button. If a result is returned, you may then
# want to indicate to the user it is already present in their itinerary, or
# offer them to remove it. You can pass the matching itinerary location ID that
# has this place associated from this query to the deleteItineraryItem operation

query CheckItineraryPlacePresent {
  # Use the itinerary query, supplying the itinerary ID to check
  itinerary(id: "itinerary/ABC123") {
    # Query the descendants, providing some constraints
    descendants(
      # Provide the place identifiers to check
      placeIds: ["place/123"]
      # You may support adding a place multiple times, but for most reading
      # back one will be enough
      first: 1
    ) {
      nodes {
        # Obtain the ID, so we can remove this location using the operation
        # deleteItineraryItem() to remove the item from the itinerary.
        id
      }
      # Total Count should be greater than 0, as the place could be added more
      # than once to an itinerary
      totalCount
    }
  }
}
```
