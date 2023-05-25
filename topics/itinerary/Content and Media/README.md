[//]: # "Title: Content and Media"
[//]: # "Weight: 3"

# Content and Media

Alpaca supports attaching content and media such as photos, video and audio to
itinerary content. You can attach content elements of the itinerary, such as
customising the title, synopsis, description and other elements.

- Title and Synopsis
- Description (Markdown formatted content)
- Photo Galleries
- 3rd Party Media (such as videos and audio embeds)

## Basic Content Access

Basic content is accessible through properties on the node, as shown in the
below query:

```graphql
query GetItineraryContent {
  itinerary(id: "itinerary/ABC123") {
    # Basic content is immediately accessible against the node
    title
    synopsis
    description # Markdown
    tags

    # Media (Photos) are accessible via a connection
    mediaContainers(first: 3) {
      edges {
        node {
          # Media container id
          id
          __typename

          # Read the photo resource
          resource {
            # Identifiers
            __typename
            ... on MediaImage {
              id
              # Source
              thumbnail: source(bestFit: [100, 50]) {
                url
              }

              # Content
              caption

              # Make sure you display the suitable attribution and copyright
              # on your interface
              attribution
              copyright
            }
          }
        }
      }
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAOIIoCSKAlkvgIaEDCEqyKRwAOkkUdTTp5GBABTUw6IlxADaDQgHoAggCEmARgBMAZhkBKTjz58AxEVX0AztShEorFO35X+cRGGr0nAG2L0oKAQrGwAjHwQiegBzelorDhQAC0ikCDAEYxMaFAisvisCNIAHGyt8ogyrKDxqYppWInMAWUYAa0gAdyQKlBjynt4TFoRPeiJRAAUkiBQIK0NGSICgkOpwyIA3Lyj7VjooBsGTIg8vFlQ4oStRADNqPASpHUNuIZPR6OCjd5OiNIyPz+fxGYz2l3keH4YAqwIksL+AH1ESgCMVkPREDwESdzAAlBD0MBEZKRYozOZEPDBCAwPBBHEmalWWn0yJvYHA8wUDKoaj3fADTlIlFojFY37CgB0MqIjWaoy8FDgMXZjLhMMlwqaRAAyqyGVrhcl4KEkHEfFIWXSgqJQsEUAAxARSADaGgADB6ADREACsHoAuq91Zy6T5QycAL7Yo2c8wXJyoSMmKD0erUVix7UgoitNqRKx0yIEWmVahWYo+ejEUlEIsCegbKIoFC1UIwI5RJDEhzFAi1aJJFApsxy3ilun8Nh4W4BTJx4HeNvrTuZ4451MQfuD4cpmOLogH4XHv6nving9RkBRoA)

<aside class="info">
  Markdown is used to allow the user to format content elements using the 
  Itinerary Editor. We avoid using HTML and recommend that you process your
  Markdown into HTML and control the presentation and formatting of content
  within your application. 
</aside>

<aside class="warning">
  Alpaca goes to lengths to avoid any XSS exploits, but recommend that 
  developers consider attaching explicit `Content-Security-Policy` headers 
  or meta tags and other techniques to help prevent XSS attacks. 
</aside>
