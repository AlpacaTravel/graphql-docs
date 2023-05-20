[//]: # "Title: Unsplash Stock Photography"
[//]: # "Weight: 2"

# Using Unsplash

Unsplash provides access to high quality photographer imagery. The Alpaca
platform enables access to reference unsplash images for use in itineraries and
collection items.

- Unsplashd is a popular source of images
- Use their API in order to search and find images
- Use the Photo ID's to associate in content

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

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABMADpJFEDERAglFAgM5NEoAWCRAqkkwA4AbAIZN2RURKKIwAS2FE8zCDDyMAdEQAq7WazDCUCveUo1hAN2GyRAI0FcoEPnpTIUg4sKh4ILIip4RLKoCADmeIYIYERChgBmEHhwTKbS0fIASsqqjAAUsmDoRKQgMvIA9DB8cWLo-OwQKBDowgDiAF6yCADyWACK8QCiALKlAJQkaZTqswEUIxnCAJJwwmFcZBSUOzT0jP5MEIhER7nM0zsc8LZI1oLFZ2oIebbMKABisijFANoATAAGQEAGiIQMBAF1JlsdnCiKpBJdKABfZFEKDCPBFU6BfJvJifb5-ABswLBABZgdCptt4Qi8Ei6Ts0Uh0XsWNB5G4Ypj+ChZM50XyBULmZRhIIUFoEAAPFDkdl0FAoPCyWwwUUUAxGIiJIL8JRMdyGQVs8USFVqjVa9GGVXqzVm7iM4r2vAANUluAKONK7sdWoAtIiJnarYGzQAJFBwB6W1VewQ+wrFf0Rm1moPsWNIkDjRUWmgAYQg-AIarCOYkSBiglkjBcSDCwSQ+rWtotTnLlZz6IaTQgEWEDXwbqtSZTfpAA+aw9HeDDFvrjeN48T3peqZKIBXyGNS-pe74CBd8fdk630+PxpDjKXSqGstk8SIyzbSQ7ZvRawA1ghijlF9fTTMphH-CZaXpSgrGTBB0VZek4AgMAEHjID4hAndkNQvMYXRGDNwQ9E5X4PxVAQLRZEQQDn0w7dSlI8ilCoxBINhaDYNwYiLRHfAUAo2jgIYkA+LwASlHYgiiC4+CLUQ+FEkxQQABlkDCDghPo6clMlNTmw4KSLUIuCePpPQWiIDCsNKCyjOgmSiPky4FNZFEQBRIA)

Note: You must comply with the Unslash distribution API terms and conditions
when integrating your application.
