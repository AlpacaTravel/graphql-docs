[//]: # "Weight: 14"

# Classifications

## Itinerary Classifications

Alpaca Travel Itineraries leverage several attributes in order to provide
classifications to created content.

| Attribute ID                    | Description                                             |
| ------------------------------- | ------------------------------------------------------- |
| `itinerary/type`                | The type of Itinerary: `list`, `trail`, `trip` (string) |
| `itinerary/uses`                | The intended use of the Itinerary (string\[])           |
| `itinerary/genres`              | The genre of the Itinerary (string\[])                  |
| `itinerary/styles`              | The styles of the Itinerary (string\[])                 |
| `itinerary/transports`          | The styles of the Itinerary (string\[])                 |
| `itinerary/audiences`           | The intended audiences for the Itinerary (string\[])    |
| `itinerary/difficulies`         | Difficulties of the Itinerary (string\[])               |
| `itinerary/fitness-type`        | Fitness type for the Itinerary (string)                 |
| `itinerary/environments`        | Environments for the Itinerary (string\[])              |
| `itinerary/pricing-type`        | Pricing classification for the Itinerary (string\[])    |
| `itinerary/route-type`          | The route type of the itinerary (string)                |
| `itinerary/route-reference`     | The route reference for the itinerary (string)          |
| `itinerary/is-route-reversible` | Whether the route can be reversed (boolean)             |

Specifying these values can be done during creation. Alpaca offers many
suggestions from a standard set to users using the application (which will have
a `alpaca:` prefix to their value) but you can place your own values within the
set.

```graphql
# Create an itinerary with a classification

mutation CreateItineraryWithClassifications {
  # Create an itinerary with some classification assignment
  createItinerary(
    itinerary: {
      title: "My example itinerary"
      defaultLocale: "en"
      attrs: [
        { id: "itinerary/type", value: "trip" }
        { id: "itinerary/genres", value: ["alpaca:genre:FOOD|CULINARY"] }
      ]
    }
  ) {
    itinerary {
      id
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBhAJwQEMUEdikcBLFapBA4ggTxwHdaALCnKAG2IBnIdQBm1KKWoQkAHXlI4MFNNn4ipBAEk6DJqwDq3PIJHjJapEJzAFOHLkIkyFKrXqNmbTih5CIRD4zUQkpOnVhUQBzJWQUez5NMl1PAxYACkSHD31vdFtshxw6FH4EArkQAFk2BAAPYjgAB3KaPS9WKqKHMAQxYhh+FAAZaGJyypBkbqpih1IUAiECgG0e4uAaMCnczpYAehQWZoQqgBocADcJmAqcKqXqZqqcAF8Nhy3qHYeQPfSB2iyCIQgu11u93WIAmzWIUnQwKQRHQADEAPLogAiAB88ABVEbaAByAEEAEoATSqAF13hsaUUPnMAJSFOY5DrpdnzHJgJmJZlvEBvIA)

Once you then query this value, you can obtain the classifcations set

```graphql
# Get the genre for the itinerary

query GetItineraryClassifications {
  itinerary(id: "itinerary/ABC123") {
    type: attrValue(id: "itinerary/type")
    genres: attrValue(id: "itinerary/genres")
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBxBFHFACwRwHNkAncgMwmuLJwEsVWkFqBDagTwA6SYQEcY3fvkIBJDl14CAwgBseAZ3Ws6rKDw4Qk6nMGE4287n34AKVmHQ5BIdpysCA9AEEAQkoCMAEwAzM4AlCZm5sT8AA4Ijvoo1ABqPCoSdg5OLpaK-B4ocQjhUeZUSLTqiSjJaRkIWY7OrgrWHhVVpUjmAL7CvSC9QA)

If successful, the response will be similar to the following

```json
{
  "data": {
    "itinerary": {
      "type": "trip",
      "genres": ["alpaca:genre:FOOD|CULINARY"]
    }
  }
}
```

## Itinerary Location

Similarly to itineraries, itinerary locations offer some additional standard
classifications.

| Attribute ID                         | Description                                                        |
| ------------------------------------ | ------------------------------------------------------------------ |
| `itinerary/location/classifications` | Any broad associated classifications for this location (string\[]) |
| `itinerary/location/activities`      | Any activities at this location (string\[])                        |
| `itinerary/location/facilities`      | Any facilities at this location (string\[])                        |
