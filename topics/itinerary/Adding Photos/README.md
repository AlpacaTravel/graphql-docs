# Adding photos to an itinerary

Itineraries as well as Itinerary Locations can contain a number of media 
elements, including Photos. 

Before you associate a photo with an itinerary, you will need to 
[upload photos](/topics/media/Uploading%20photos/README.md) to the platform, or
alternatively use an [photo from a photo sharing site such as unsplash](/topics/media/Using%20unsplash/README.md).

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
      media(limit: 10) {
        # Media container id
        id
        __typename
        
        # Read back the uploaded photo resource
        resource  {
          # Identifiers
          id
          __typename

          # ... selection of fields
        }
      }
    }
  }
}
```

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
      media(limit: 10) {
        # Media container id
        id
        __typename
        
        # Read back the uploaded photo resource
        resource  {
          # Identifiers
          id
          __typename

          # ... selection of fields
        }
      }
    }
  }
}
```

## Order of operations for applying updates to media

The order in which the operations are applied to the collection is: 

- Delete
- Update
- Move
- Create

You will need to know this in order to determine how to insert, reorder and 
remove media within the same update mutation.

