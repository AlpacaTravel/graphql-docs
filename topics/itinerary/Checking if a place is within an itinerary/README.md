# Checking if a place is within an itinerary

You can check whether a place has already been added to an itinerary by
performing a query and supplying the place identifier.

### Prerequisits

- You will need to supply an ID in order to check the place exists in an
  Itinerary

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

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/)
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBhACwSgGsBnHAdyJSICccBDHABwBtGoEcDGKAjBMiZgwCMDhQQmSHAEsUcpAjqM6ATwA0OAGYQGUOgkaKkAcyY5+MFFKQAdJLjIoT3CLMaz7IAIKjJaQBJUxU1dR8rGzsAOhwgnUsjMhg2FHkKIxQYOmUwbXUIGBw4RnVJIgcnKi90qXkkMDkoN0CK7hgyFXl0uQpGNiNGMHKWZORe2VoEOQYFJTCNbX1HXAgdHW7puDajOAgAN24FOIBNIpwW2RY+CmmSkygCJQt55VUNHDZoEzkPeIAIhUTKseHwKn1WBwuEwyGRoHI3BIdHQIDtaJCAI4wFTler3MRsBAoBAhBYfdQhBA7CAsMKKDyORzY3H4IikMnvcIABWhCG541QOGAjhwOFwAFUuu0euTwjgWUscCkWOx1C8ZW9FuUgkD6k9iCRRbKuRoABRyMDoHA+LUUgD0vgAQngAIwAJgAzD4AJTC41i3AARRxnwJCDIXEatTI2jGh0tGvhiEuHhcqiUKDIAZwYkjyDAMbNOcDOAFCbEMvYnGOYlQch0chUd2kBtIJahNaCYDI1oA2j5q1x7R7vSAALod3DnYqlcoqlj6dLDJrmSxD7hwVKKdjcRSIWNRdJ6Bj7Fw4IarsxTqycEg4DzcShyNhsKzcZBFMwEDuNugua1XRzP0RVkMVwKQCA839MDwPA3AAHl+FcJQZV1bR4SobgrgvalDj3Z4KG+FoGVkToNXuWl6T+Ko4Lg3BCWJUlQgpKk4DNP16j2fDNRJHYUTRXi5Q0GIOzFS0OwAXxvAAVCBXDfPAiiFMgCCKNgJEEHAzCGEkGFoLwcAABm0cF7g3VNUk07gV3EEp9AQG8DNkDwYXqQy7XCDspAUpSYFQHNpLAoLJJASSgA)

If successful, you'll be returned with a reference to the itinerary location ID

```json
{
  "data": {
    "itinerary": {
      "descendants": {
        "nodes": [
          {
            "id": "itinerary/ABC123/location/DEF456"
          }
        ],
        "totalCount": 1
      }
    }
  }
}
```

## Additional Resources

- [Creating an itinerary](/topics/itinerary/Creating%20an%20itinerary/README.md)

- [Adding Locations](/topics/itinerary/Adding%20Locations/README.md)
