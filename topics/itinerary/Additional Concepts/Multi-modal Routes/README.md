[//]: # "Weight: 9"
[//]: # "TOC: false"
[//]: # "Layout: 1-col"

# Multi-modal Routes

The Alpaca platform allows an Itinerary Direction to contain multiple different
route sections which could represent multiple different transport modes when
moving between locations.

An example of this use case could be suit presenting a route that includes
traveling using `walk`, `transit`, `plane` all together. This is often useful in
presenting transit based routes, where a user may mix transportation to move
between locations.

<aside class="note">
  Multi-modal routing can be complex, but may be achievable using `omit-list` 
  and `omit-detail` flags, which can allow you to plot locations for each stop,
  such as the start and stop of the walking leg, the start and stop of the 
  transit leg, then using the `omit` flags to stop them being presented in the
  list. There are other trade-offs with this approach.
</aside>

## Creating multi-modal Itinerary Directions

When creating your Itinerary Directions, you are able to specify multiple
segments that can represent different parts of the directions. These provide the
opportunity to change the mode of transport.

```graphql
# Creates itinerary directions for between locations in an itinerary. Uses
# the input variable of "segments" containing a sequence of segments, each
# containing their own mode

mutation createItineraryDirections(
  $itineraryId: ID!
  $originItineraryLocationId: ID!
  $destinationItineraryLocationId: ID!
  $segments: [RouteSegmentInput!]!
) {
  # use createItineraryDirections to create directions in an itinerary
  createItineraryDirections(
    # Supply the itinerary ID
    itineraryId: $itineraryId
    # Provide the model for directions
    directions: {
      # Provide the route for the directions
      route: {
        # Create segments for each mode. Add additional segments sequentially
        # here as we support modal, e.g. Foot -> Car -> Foot etc. depending on
        # the fidelity of the directions
        segments: $segments
      }
      # Contextualise the directions from origin/destination
      # Origin itinerary location
      originId: $originItineraryLocationId
      # Position under the destination itinerary location
      positionAtEnd: {
        # Destination itinerary location
        parentId: $destinationItineraryLocationId
      }
    }
  ) {
    # Query what was affected as a response
    cascaded {
      created {
        id
        __typename
      }
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBhAJwQEMUEBnHASxSqQQOIIE8cwqipaIlKAzCARwAjBCgDuCZDgA20UlR6U6OYkmq16jFgDocAVXIUAOklwoAFgmpIADjBQ4AbkyrFhM6xD45jIIwDmiKjkfjhQPCjEdHQBqjhGAI4wyFBePoHBKOQANDgkUBamuBGo0UixOJYIHDgQ4upwEGAIpqZwDgo84USkCACSmgxMzAAiHAhcirwAFKY4OAAkNHTDLP1g6Dj9owCE80uCVAF0g6vazAAy8txIG1s7++pLLeSaXXdDF9dQH-fbewOi0yyGyWwA2gAlCAOBAAZQQQVB-TsDl2AF0ngBKHDAA64GBGHokMhnLQjcacW6UFAQYl9NgTKZKGyqdQrcksA5QXqkr4UpnUubPBa4OEwWy2GSsaoac4jAEHBYctbMf7LfnrMBKnC4AAKBAgTioLSqVhwTRaMhwAiE7Cp01CIsZDqUWzxztFOANRpN1llhthNsEZus9sm1J1C0DZHdUYWuvwvOsIJCwaEBQsFuaCD0AEEwGBVIWVjxiNbU9kEghkqC3DJpfGvVYiKpKJIEhLbIJHJby3lcwE9AAxCAQRwAWgAfPgmDhpzhR+P8igoHoWrZkOwkHEeE3E7K+H6ZDRWN5Qy6I4795XyFtgYisk6EwmAL7x3B4SIIAAeKBg5ZUESsrhsyvA2oacB1AQxx0AA9K87y3B+OAAPIwSc7Kaqwci-MhnrQbBdybIcGGnNhPx-NqBH6hA5CluoMBIC0QggRQSHTHKnI4Tc0zxt29G3HmKAAKLMXGBFeqM7F0B8XGqrIvF7pJOC2EwyIkYsiGybcZKqpRunUS+Czvs6pkLDiHovrgACKKQsDg4gWKQjnEJQxB8HwEYIEWbnxEQ5DdrwrTOr85C-C0RZWcZPIkj5uL7ia+4APrJSgzCbkgxCIPG5lvgcpmviAr5AA)
