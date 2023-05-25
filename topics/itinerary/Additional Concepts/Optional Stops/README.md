[//]: # "Weight: 4"
[//]: # "TOC: false"
[//]: # "Layout: 1-col"

# Optional Stops

Itinerary Locations can be marked as `optional` to indicate that they can be
optionally bypassed.

```graphql
# Updates an itinerary location and marks the itinerary location as an optional
# stop.

mutation UpdateItineraryLocationAsOptional($id: ID!, $optional: Boolean!) {
  # Use updateItineraryLocation mutation for making changes to ItineraryLocation
  updateItineraryLocation(
    # Supply your itinerary location that you wish to make optional
    id: $id
    # Supply the location fields changing
    location: {
      # Update the location to be marked as optional
      optional: $optional
    }
  ) {
    # Query back your location
    location {
      # Optional should now be true
      optional
    }
    # Optionally see what else has been affected, such as a result of the
    # autoroute behaviour updating new and existing ItineraryDirections when
    # using this feature.
    cascaded {
      created {
        id
        __typename
      }
      updated {
        id
        __typename
      }
      deletedIds
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBVABzAEMUEBnHYpHASxVqQQCdjmBPHAG2lNohrUwOOGwDWlFAAsEdBk1YduvBgKqVqOCAVVJiXADpJc5FNoB0Ro3Bgo+awiTIBJeSzbsAMiv5IAguQA8jq++gAUACS0YOg4zgAiAIQANDgR2rr6sQBCEBBcCNSJAJQ4wEY4OLh45LIwRKQIrozuHN5Q9jQ2dro4AGYQzCLEYowA5jhQUtRjFDhmcW6KXj4CFTj1Tk1LHu2dYeuVuADK9QRcnOwQMEP0LcvKHb3SpDhXMDgA7rTkUvMQwzEsgyoUMNEqdBiaWihyqOFOBHOnGksh4T18-VoCC4YEoUxm41haM6sXK4IhcMcjXmMkenX+OAARrJRMwgcJiJQQQJ9LDKty9FxYukQjywRSAL7rUpkim4ACKMBYnEZxCgYje1yGxN0RNWNFlFLhwUyXBwv2uOJwSAgnyZshQzCVfK0osFsKl5ONbv0F3NCFkn2mKBw2NqOGmlGZyCofT6CCgZDAqXIMCm6ioOGYFBgXBDED6NIQsNwxFsg2uZHt0wAbvwbhsGvIJkw7UJQwAPH7Nxb3DzxWjZxO+ShB5AljbkcY0n79QooG4ISxejrkDpgBDCQ0UqDZxpbl2VGFeikAfVPKHYBGQxEQLs9RsbWwPJ4hx8flXPl+vejvr4fRobgUSbOLiHrrJ6EogBKQA)

This is useful in representing possible optional activities that could be done
along the way on a route.

<aside class="note">
  By marking a location as optional, auto-routing default behaviour will bypass 
  creating directions to this location. 
</aside>
