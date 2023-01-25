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
      thumbnail: source(bestFit: [100, 50]) {
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
      make: exif(id: "Camera make") {
        value
      }
      model: exif(id: "Camera model") {
        value
      }
      focalLength: exif(id: "Focal length") {
        value
      }
      exposureTime: exif(id: "Exposure time") {
        value
      }
      aperture: exif(id: "Aperture") {
        value
      }
    }
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/) |
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEAZCAQzAGcdCdEwBLCgJwRIhjqgRwgDMcUBPAB3YBZBDUIBJOIQDmCADpIFARxgI6vHCLGSZ7YApw5cAVRLsUAC3ZVaAJUbNWCABQBKHhBwAbImE2jaHVkeAUYDSgDCeyYWNmdww1wAZRh+fi8NXkd-MRxoxzYccQARBJxqMHQcORAbQgB6AEEAIQBhAEYAJgBmGvD3fSRDRKKhy2oyFTVeABocAHd2QgZyKDYSEmokaR4rcqlZMoA6E44hrUCDvTKRpIQvBCgUcl34ACMkQmovHE46CDgu3Y1CuOBiThIczehDMfggYz2b0YKAAYtRniQUHRCCgENJeDdXnAPl8vFVwXEkZi0SgqgBtdoABkZcwArIyALoDQmGFheQkAX0JuBORxwUAYOOsEBWmwAXowcFkYAtCKgPKt1mQrAwFMKcAAVGQkQkoY16obDEZBdgSgIoE2Wq1QCD8Xh0ajSCwoQk4rHUN4wFDUeEWq0jRprRibbbkLy4uifYMAN3MCAAHj6ncMoIR+MHQ9nDIR4waM1n9QB5D3SLYlnBJagK0acGVSAtDZx0+YzCxcwkyz11ryNhVh8O4SNarY7ACiAA1xCjykhW3R2yGhtRuK2YEg-GugWDUulqKIcPwLBAUBB9VPo3GfjAYztLOxOGevH4ahnt+JSH0RaUIQADWCBVL+nDOBUVQ1K0hCINiwFgTU3JAYYyYlqogqEnAEBgPcEHptu0GVNUIDwYhFB4QR-IgGh4bDJhXjYUBQpAa2uZeHgyDSJYREkTB5EotA9YPNslioTggyMRhWHyGxhIZvwEAkCwCAGiC4E4JBpGwSAs7pipakrMGiBSTJsnMaxjHsYxeZqCg6kCVBQk1I0gh0E5ur0dJPI4NZCm2WUdk4OxAogAKQA)
