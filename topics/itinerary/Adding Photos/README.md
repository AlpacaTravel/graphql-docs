# Adding photos to an itinerary

Itineraries as well as Itinerary Locations can contain a number of media
elements, including Photos.

Before you associate a photo with an itinerary, you will need to
[upload photos](/topics/media/Uploading%20photos/README.md) to the platform, or
alternatively use an
[photo from a photo sharing site such as unsplash](/topics/media/Using%20unsplash/README.md).

## Updating an Itinerary to associate media

You can associate the photo to the media using the `updateItinerary()` mutation
with the field `createMedia()` field on the `UpdateItineraryInput` type.

```graphql
# Updates an itinerary with a selection of photos.

mutation UpdateItineraryPhotos {
  # Use the updateItinerary() operation to update the itinerary media
  updateItinerary(
    # Specify the itinerary
    id: "itinerary/ABC123"
    # Update the itinrary content
    itinerary: {
      # Create the itinerary media
      createMedia: [
        # Create a photo based on a user upload
        { resourceId: "media/ABC123" }
        # Create a photo based on an unsplashed photo
        { resourceId: "media/unsplash:photo:XXX" }
      ]
    }
  ) {
    # Query back the itinerary updated fields
    itinerary {
      id
      __typename

      # Read in the media
      mediaContainers(first: 10) {
        edges {
          node {
            # Media container id
            id
            __typename

            # Read back the uploaded photo resource
            resource {
              __typename
              ... on MediaImage {
                id
                # ... selection of fields
              }
            }
          }
        }
      }
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBVABzAEMUEBnHYpHASxVqQQCdjmBPHAd3oAsqc5BABsEUBhBoQAZjgK8IKCOQB0AHSQa4MFKVqT8RUggCSDJqw4AFBUsrANOHLjxCcKXghwwjZM4xY2dgAKAEocCAJAiRolb18vDy96AMtORDBaYkd4kj9zQI5gnKdcAGUoqFppTiS6ArSSujB0HDUQFIsggHoAQQAhAGEARgAmAGZ2ppcE9096xjScKEkyVCbOwvZWhxonfdxB5gRjOeSGoJwMrKanKGPjAFkETOJWgG1bg5wjk7IBeSKCA4ABGxCEYAiNGI3iEzHiwggxDAXycwBwx3IEBgzCgphabRA12IfSGY0mIBwAF9Uc4fg9-jDAXEwRCoVQaDAkOQCMJwZ5IcyILT0Zjsbj8a12sTulyeXzyLx0EL0AANdXtalfAC6TRpe3Cu32dIAijAWJwwVAANZnBZdDi5YyQ6S0ERgcgbC6Oo3G5pfAD6AZQ7CiSGIiA0X1wACUTpDGHbiV9icFhLQ4PRWsMAAyG2m4Z6vZarYipf17P0VqtOIMhsMRhBRyt+2Px0HEG12nyI5EvOS2YFinF42nDiU4X01nB10PIRu0pwqZfsotZExwYgAcy8U+n1f3pRwy5UghEYhiEVkrvdnpbVf108ffufTmf+qpICpQA)

In addition to the above `createMedia` data, you can also `updateMedia`,
`moveMedia` and `deleteMedia`. This gives you control over performing a series
of updates to control the media. It is also possible to create the itinerary
with the media supplied as the input in the `createItinerary()` mutation.

## Assoication to Itinerary Locations

The itinerary locations mutation resembles a very similar GraphQL mutation as
for the itinerary.

```graphql
# Updates an itinerary location with a selection of photos.

mutation UpdateItineraryLocationPhotos {
  # Use the updateItineraryLocation() operation to update the itinerary media
  updateItineraryLocation(
    # Specify the itinerary location
    id: "itinerary/ABC123/location/DEF123"
    # Update the itinerary location content
    location: {
      # Create the itinerary media
      createMedia: [
        # Create a photo based on a user upload
        { resourceId: "media/ABC123" }
        # Create a photo based on an unsplashed photo
        { resourceId: "media/unsplash:photo:XXX" }
      ]
    }
  ) {
    # Query back the itinerary updated fields
    location {
      id
      __typename

      # Read in the media
      mediaContainers(first: 10) {
        edges {
          node {
            # Media container id
            id
            __typename

            # Read back the uploaded photo resource
            resource {
              __typename
              ... on MediaImage {
                id
                # ... selection of fields
              }
            }
          }
        }
      }
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBVABzAEMUEBnHYpHASxVqQQCdjmBPHAG2lNohoB3egAsqOcgi4IoDATggAzHAREQUEcgDoAOkj1wYKPvMIkyASQZNWHADK85SAApqNlYHpw5ceSThQRBBwYIlIEK0YWNnYHKBMkAAoASgUCaKcAiBCwsgCgumtojhxEMFpiLxzzCKLbWMd+JKrvXABldKhaRU5A4Poo+u5GgRa6MHQcHRABmxiAegBBACEAYQBGACYAZnmeeKd5gBEAUQAxLe3psd9c4L7CwZjhg6acKAEyVDH9hMnPGjeIG4VbMBDhfL9OrPMoVMbeKBg8IAWQQ5WIkwA2vDgThQeC8sQVG5sgAjYiSMAKGhEmCSZg5HjEMA47zAHBg8gQGDMKARCZTECw4hLNaXaY4AC+rJ8eKRhOJ6jJFLR1KoNBgSHIBC4FKCVNUSpl7M53N5-Mm02F8012t15BE6ENGnQAA13RLpYCgTgALpjL3eVIAn24ACKMBYnHJUAA1pDHnMSqEalTFLQpGByD8RjQQz7xjiAPpFlDsdJIYiIPQ43AAJXBVMYCeFOOFiS4tDg9Em6wADMGZbhUej3p9iINC96C7QWdOfSWyxWqwga-PcQ3mTgY-GHqEmWBVc7sqaeXyZafzTh8wWgYvy8gVzLvFpX2qRxULHBiABzYI328gVnZ9cVfLQJCkGRMiUHB00zbN1x9QNAOQpCAyqL1JRASUgA)

## Order of operations for applying updates to media

The order in which the operations are applied to the collection is:

- Delete

- Update

- Move

- Create

You will need to know this in order to determine how to insert, reorder and
remove media within the same update mutation.
