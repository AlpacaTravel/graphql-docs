# Querying Media

Alpaca supports a wide range of media types. These include being able to access
images, video and more.

## Directly loading Media

Images, videos and other media are contained within the `MediaResource` type.
You can load media resources when you have an `id` value, using the
`mediaResource` field with the `id` as the argument.

```graphql
# Loads a media resource of type MediaImage

query MediaImage {
  # Use the mediaResource() to load MediaImage types
  mediaResource(
    # Supply your Media Resource ID
    id: "media/ABC123"
  ) {
    # In this query, we are accessing the image
    ... on MediaImage {
      # Select a thumbnail from the image sources, based on the bestFit strategy
      thumbnail: sources(bestFit: [100, 50]) {
        url
      }
      # ... create more sizes you want to access here

      # Tags
      tags

      # Image credits
      copyright
      attribution

      # Accessing alternative text
      caption
      altText

      # Original Size Information ([w,h])
      originalSize

      # Accessing EXIF information if found for the supplied photo
      # Access all using the field "exifIds"
      make: exif(id: 'Camera make')
      model: exif(id: 'Camera model')
      focalLength: exif(id: 'Focal length')
      exposureTime: exif(id: 'Exposure time')
      aperture: exif(id: 'Aperture')
    }
  }
}
```
