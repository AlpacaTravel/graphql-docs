# Using Unsplash

Unsplash provides access to high quality photographer imagery. The Alpaca
platform enables access to reference unsplash images for use in itineraries and
collection items.

## Identification of Photos

| Unsplash ID | Alpaca Media ID                  |
| ----------- | -------------------------------- |
| eDdRZYVivLM | media/unsplash:photo:eDdRZYVivLM |

## Unsplash GraphQL query

Alpaca provides a way to access the photo information via our GraphQL where they
are used for photos attached to content.

```graphql
query {
  # Access the Unsplash as a media resource. This data is
  # available consistently across our integrated platforms
  mediaResource(id: "media/unsplash:photo:aGzieOqQfEM") {
    ... on MediaImage {
      # Access some sources
      thumbnail: source(bestFit: [200, 200]) {
        url
      }
      card: source(bestFit: [600, 400]) {
        url
      }

      # Associated caption
      caption
      altText

      # Attribution data for presentation
      attribution
      attributionUrl: attrValue(id: "attribution-url")
      attributionHtml: attrValue(id: "attribution-html")

      # Copyright and licensing information
      copyright
      photographer: attrValue(id: "photographer")
      license: attrValue(id: "license")
      licenseUrl: attrValue(id: "license-url")

      # Exif Information
      make: exif(id: "make") {
        value
      }
      model: exif(id: "model") {
        value
      }
      exposureTime: exif(id: "exposureTime") {
        value
      }
      aperture: exif(id: "aperture") {
        value
      }
      focalLength: exif(id: "focalLength") {
        value
      }
      iso: exif(id: "iso") {
        value
      }
    }
  }
}
```

Note: You must comply with the Unslash distribution API terms and conditions
when integrating your application.
