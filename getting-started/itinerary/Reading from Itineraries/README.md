# Reading from Itineraries

This guide is designed to provide developers with a comprehensive understanding
of how to access and query itinerary content through our API. The API allows
developers to build applications and websites that access and manage travel
content, such as curated lists, trips and trails, which we refer to as
itineraries.

We hope that this guide will provide developers with a solid foundation in
accessing itinerary content through our API and serve as a useful resource in
developing their applications and websites.

What this guide does not cover:

- Numerous alternative use cases; This is provided to give a developer an
  overview of calling the GraphQL API but there are numerous other operations
  and use cases covered outside of this guide.

- This guide does not cover how to make API calls or connect your application to
  the GraphQL API using a specific client. It is technology agnostic and allows
  developers to use any GraphQL client to make the calls.

- It does not cover how to obtain or use an API key to access the Alpaca Travel
  GraphQL API. Developers must have a valid API key to make calls to the API.

- It does not cover implementation details such as handling errors or rate
  limiting, which are important but are out of scope of this guide.

- It does not cover all the possible options and variations of the GraphQL
  operations, but it covers the most common and useful ones for managing
  itineraries.

Additional Resources:

- Alpaca Travel GraphQL API Detailed [Schema Reference](/reference/)

- Apollo Sandbox for testing queries and seeing what other operations/fields are
  available

## Table of Contents

- [Loading an Itinerary](#loading-an-itinerary)

- [Displaying a List of Locations](#displaying-a-list-of-locations)

  - [Enhancing Presentation](#enhancing-presentation)

- [Querying Directions](#querying-directions)

- [Location Content](#location-content)

  - [Gallery](#gallery)
  - [Place Information](#place-information)
  - [Fetching Inbound/Outbound Directions](#fetching-inboundoutbound-directions)

- [Drawing Maps](#drawing-maps)

  - [Alpaca Mapping Services](#alpaca-mapping-services)
  - [Mapbox GL Example Code](#mapbox-gl-example-code)

- [Creating and Managing Itineraries](#creating-and-managing-itineraries)

## Loading an Itinerary

To load an individual itinerary from the Alpaca Travel GraphQL API, developers
will need to have the itinerary ID handy and include it in the query. The query
should include the necessary fields for the itinerary, such as the title and
synopsis.

For example, the following query will retrieve an itinerary with the ID
"itinerary/ABC123" and retrieve the title and synopsis of the itinerary:

```graphql
query {
  itinerary(id: "itinerary/ABC123") {
    title
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/)
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABMADpJFECWKVS+AhoQBRVjpGkg12OED0AQQBCAYQCMAJgDMXAJQlylSrRQAbBEqIBfctpDagA)

By including the itinerary ID in the query, the API will return the specific
itinerary that matches that ID, providing the title of the itinerary.

```json
{
  "data": {
    "itinerary": {
      "title": "Wild West Coast"
    }
  }
}
```

It is also possible to retrieve additional information about the itinerary by
including additional fields in the query. For example, the following query will
retrieve the title, synopsis, and publish date of an itinerary and the preferred
media image to display for the itinerary with the ID "itinerary/ABC123":

```graphql
query {
  itinerary(id: "itinerary/ABC123") {
    title
    # Add additional fields
    synopsis
    published
    preferredMedia {
      resource {
        ... on MediaImage {
          id
          card: url(bestFit: [800, 800])
          attribution
        }
      }
    }
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/)
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABMADpJFECWKVS+AhoQBRVjpGkg12OED0AQQBCAYQCMAJgDMXAJQlylSrRQAbBEuUBiIoLBgiDAzwhIGaogDMqCNWADOWyg4JIIABwdUnFZR5gAIzUfAAsEMGciDzwEK3xYsABZCKoGRT9lIliHCBg8KAQMrKyAOnKiMyIUsDSASTgGAHMiskySyjYojqgmdiJ8tWZAhAcUADEaDgBtAA4ABnmAGiIF+YBdOW6ShhQUPCpAmFozbcoAX23L9uuL8nOQc6A)

The additional fields requested will be included in the response:

```json
{
  "data": {
    "itinerary": {
      "title": "Wild West Coast",
      "synopsis": "A road trip showcasing Tasmania's World Heritage wilderness and wild untamed west coast.",
      "published": "2022-12-01T04:54:35.698Z",
      "preferredMedia": {
        "resource": {
          "id": "media/0SkPMi6FnSw3COQDt40Axn",
          "card": "https://media-cdn.alpacamaps.com/uploads/2a/2PG08okaqm2Hfup0xkdzww/IMG_0746/large_1024h.jpeg",
          "attribution": "Source: Zoe Manderson"
        }
      }
    }
  }
}
```

In addition to loading an individual itinerary, developers can also query for a
list of itineraries that are associated with a specific profile on the Alpaca
Platform. This can be done by including the "profileId" field in the query and
specifying the desired profile ID.

For example, the following query will retrieve a list of the first 10
itineraries associated with the profile ID "profile/ABC123":

```graphql
query {
  itineraries(profileId: "profile/ABC123", first: 10, after: null) {
    edges {
      node {
        id
        title
        synopsis

        preferredMedia {
          resource {
            ... on MediaImage {
              id
              thumbnail: url(bestFit: [200, 200])
              attribution
            }
          }
        }
      }
    }

    pageInfo {
      hasNextPage
      endCursor
    }

    totalCount
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/)
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABMADpJFECWKVS+AhnlQgM4AUADnhAGZUAbBAEkw6IqRDc+ghAHoAggCEAwgEYATAGZJAGiL88rFOLUAGfQ14p84pDAECAlCXKVKCMAHM2riu8okCDAEPwCAqjA3cMpaFCFomNYCIM5WKlZyRPDuBF58PE8AWU8qBjCY90LWCBg8KFCyf0r3ADp2oggKErAy4TgGHwqWiKjmkdiAC3gAIyQGQXE6gXYZthQAMRpxAG0NMwsifbMAXSdsiYYUFGYZmFoui8qAXyeA1-H3p4+vpGzOQYiJC8CDDdyTBisAByCAAHigAAqAp7IMAqOo1PDZD7ZFAQFAMAQqWqoaIfZ4gZ5AA)

The response will contain a number of itineraries that can be displayed
individually using the "itinerary" query.

```json
{
  "data": {
    "itineraries": {
      "edges": [
        {
          "node": {
            "id": "itinerary/DEF456",
            "title": "Coffee Shops of Tokyo",
            "synopsis": "Whether it be slow pour overs, cold brews or milky barista style, Tokyo knows how to do coffee. You'll find coffee shops down laneways, hidden in residential streets, behind ivy cloaked buildings, and wedged precariously on busy pavements.",
            "preferredMedia": {
              "resource": {
                "id": "media/3gf8cBQNipVu1dHEeDOCoM",
                "card": "https://media-cdn.alpacamaps.com/uploads/b1/68Z48ebjSbttxczfZVMmpB/ScreenShot2022-11-22at2.16.55pm/small_m225w_m200h.png",
                "attribution": "Source: Zoe Manderson"
              }
            }
          }
        },
        {
          "node": {
            "id": "itinerary/ABC123",
            "title": "Wild West Coast",
            "synopsis": "A road trip showcasing Tasmania's World Heritage wilderness and wild untamed west coast.",
            "preferredMedia": {
              "resource": {
                "id": "media/0SkPMi6FnSw3COQDt40Axn",
                "card": "https://media-cdn.alpacamaps.com/uploads/2a/2PG08okaqm2Hfup0xkdzww/IMG_0746/small_m225w_m200h.jpeg",
                "attribution": "Source: Zoe Manderson"
              }
            }
          }
        }
      ],
      "pageInfo": {
        "hasNextPage": false,
        "endCursor": "eyJvZmZzZXQiOjF9"
      },
      "totalCount": 2
    }
  }
}
```

The response will contain a list of itineraries that match the specified profile
ID. The "edges" field will contain an array of itinerary objects, each
containing the ID, title, and synopsis of the itinerary. The "totalCount" field
will indicate the total number of itineraries that match the specified profile
ID.

It is important to note that in order to retrieve itineraries associated with a
specific profile, the user must have the proper permissions and the content must
be listed as discoverable if using a public token. Additionally, it is possible
to filter and sort the query results by including additional fields in the
query.

See More:

- **[Identifying your Profile ID from your Access Token](/topics/profile/Accessing%20Profiles/README.md)**
  To obtain the Profile ID for your token, please refer to the this topic for
  more information on how to obtain the profile ID.

## Displaying a List of Locations

When building an application or website that accesses itinerary content, it is
likely that you will need to display a list of locations for a specific
itinerary. The Alpaca Travel GraphQL API allows you to easily retrieve a list of
locations for an itinerary using the "children" field in the "itinerary" query.

To retrieve a list of locations for an itinerary, you can use the following
GraphQL query:

```graphql
query {
  itinerary(id: "itinerary/0mttpRn7spYNDIV979fHbE") {
    id

    # Read in the stops
    children(first: 10, type: ItineraryLocation, after: null) {
      edges {
        node {
          id
          title

          siblingPositionNumber

          # Additional content can be selected here as well, depending on the
          # need of your application/website UI

          # Include the preferred media thumbnail
          preferredMedia {
            resource {
              ... on MediaImage {
                id
                thumbnail: url(bestFit: [200, 200])
                attribution
              }
            }
          }
        }
      }

      pageInfo {
        hasNextPage
        endCursor
      }

      totalCount
    }
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/)
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABMADpJFECWKVS+AhoQBRVjpGkg12OED0ABjgoUABwBKSAOwBnMQE0AcgBEAkgDUAnNK0AzABIAjAKJcAlCXKVKbctZsBiIhIQMw1CigAWCIrJQIMVkHSihvKgAbMDxkZj0qPACOAEZBABoiFAIxBA41Wno8JgIAGWgGWggkTIY9FHwOJBhIyMsyChtKBDAAcwRZK06uyiQIMD8OkZG7YemsmkiEeznp2SojSLpegAUIdaqkJXgjfBX5pyIAQTAwHmqGSKIoaobUZ4YKU-8EJagGjy+WJEBiDADuv0imQmuSQdyQvSI1SyvlC82c9B6SL0RAIEBgeBBYjEWyglSo1X4EKMBz8AFU1OcLkRnGokFBIjAJii-GJYnp8LEPIg7gwUSckAwomjpnyEAK8EKALI9KhiqbMyixWT4vBQSYy5kAOhNSIoKtFajgDH6Q0101m9pGPglUsiHAJkWYpwCADEaBwANoAJkEGSIocEAF1zIbNZUUHgNjBDnH5gBfNNdTOrEY5i75vNMrpiG0INl6CB2+beUFKBAADxQOzLaeQYAAwgSdXhDTnDYEUI8O-jUGjCzn0yB00A)

This query retrieves the list of locations for the itinerary with the ID
"itinerary/DEF456". The "children" field is used to retrieve the list of
locations, and the "first" parameter is used to specify the number of locations
to retrieve. The "type" parameter is set to "ItineraryLocation" to only retrieve
location nodes.

The query also requests the title, id, and the position of the location in the
itinerary. The query will return a list of edges, each edge containing a node
representing a location, the totalCount of the locations in the itinerary, and
the pageInfo which gives information about the cursor and the next page if there
is one.

A successful response to this query may look like the following:

```json
{
  "data": {
    "itinerary": {
      "id": "itinerary/DEF456",
      "children": {
        "edges": [
          {
            "node": {
              "id": "itinerary/DEF456/location/5q7KiwXt00q7CkuuJgwPGI",
              "title": "Koffee Mameya",
              "siblingPositionNumber": 1,
              "preferredMedia": {
                "resource": {
                  "id": "media/24yfva4idUMfg6mqnbV6XR",
                  "thumbnail": "https://media-cdn.alpacamaps.com/uploads/4c/7k4IVQoPo8m8K7J9C8BorF/IMG_65783/small_m225w_m200h.jpeg",
                  "attribution": "Source: Zoe Manderson"
                }
              }
            }
          },
          {
            "node": {
              "id": "itinerary/DEF456/location/2Q6thRSfnhhVsKaGqnqrSV",
              "title": "Higuma Doughnuts × Coffee Wrights",
              "siblingPositionNumber": 2,
              "preferredMedia": {
                "resource": {
                  "id": "media/5Xri6dflmKq8pJFVyPSC0q",
                  "thumbnail": "https://media-cdn.alpacamaps.com/uploads/10/76Spj4pXRvbGo58fGufJhe/IMG_65882/small_m225w_m200h.jpeg",
                  "attribution": "Source: Zoe Manderson"
                }
              }
            }
          },
          {
            "node": {
              "id": "itinerary/DEF456/location/2rlIDmk0IeETSiA3iseWc4",
              "title": "Onibus Coffee",
              "siblingPositionNumber": 3,
              "preferredMedia": {
                "resource": {
                  "id": "media/1uaq5yNFC0SPiGNN2xhndN",
                  "thumbnail": "https://media-cdn.alpacamaps.com/uploads/0c/1WXshTWzawS3mDPDLIK6lf/ScreenShot2022-11-22at1.29.19pm/small_m225w_m200h.png",
                  "attribution": "Source: Zoe Manderson"
                }
              }
            }
          },
          {
            "node": {
              "id": "itinerary/DEF456/location/4DjTycRHtTPAlmN0Gw4Yis",
              "title": "About Life Brewers",
              "siblingPositionNumber": 4,
              "preferredMedia": {
                "resource": {
                  "id": "media/6G3e4U5GDVWIgbSmb1J9kO",
                  "thumbnail": "https://media-cdn.alpacamaps.com/uploads/b0/46yxk1FqbcWoOfHM8JU1iP/ScreenShot2022-11-22at1.36.04pm/small_m225w_m200h.png",
                  "attribution": "Source: Zoe Manderson"
                }
              }
            }
          },
          {
            "node": {
              "id": "itinerary/DEF456/location/0bHCYxpyVCYUzPDwrWmt32",
              "title": "Blue Bottle Coffee",
              "siblingPositionNumber": 5,
              "preferredMedia": null
            }
          },
          {
            "node": {
              "id": "itinerary/DEF456/location/5XeXZn2N4b4ndK3VJKqf86",
              "title": "Faro Coffee",
              "siblingPositionNumber": 6,
              "preferredMedia": {
                "resource": {
                  "id": "media/15hTveupnLmusowKvigvOT",
                  "thumbnail": "https://media-cdn.alpacamaps.com/uploads/54/4gYEKXPoonVhXFeiT6TkGy/IMG_4195/small_m225w_m200h.jpeg",
                  "attribution": "Source: Zoe Manderson"
                }
              }
            }
          }
        ],
        "pageInfo": {
          "hasNextPage": false,
          "endCursor": "eyJvZmZzZXQiOjV9"
        },
        "totalCount": 6
      }
    }
  }
}
```

In the above response, we can see that the query returns a list of locations for
the itinerary "itinerary/DEF456". Each location is represented by a node, which
contains the ID, title, and position of the location in the itinerary. The
"pageInfo" field contains information about the cursor and whether there is a
next page of locations available.

It's important to note that the Alpaca Travel GraphQL API uses a cursor-based
pagination approach. This means that if the total number of locations for an
itinerary exceeds the number specified in the "first" parameter, the API will
return a cursor in the "endCursor" field of the "pageInfo" object. To retrieve
the next page of locations, you can pass this cursor as the "after" parameter in
the "children" field in a subsequent query.

In summary, the Alpaca Travel GraphQL API allows developers to easily retrieve a
list of locations for an itinerary, and to paginate and sort the results to meet
their specific needs. By using the "itinerary" query and the "children" field,
developers can retrieve the necessary information to display a list of locations
in their application or website.

See More:

- **[Cursor-based Pagination](/topics/graphql/Pagination%20using%20cursor%20connections/)**
  Read more about how to use cursor-based pagination

### Enhancing Presentation

When presenting itineraries to users, it may be useful to tailor the
presentation based on the type of itinerary and how it should be displayed. The
Alpaca Travel GraphQL API offers several attributes that can be used to enhance
the presentation of itineraries.

The "itinerary/type" attribute can be used to determine the type of itinerary
and tailor the presentation accordingly. It will return "list", "trip" or
"trail" if set. For example:

```graphql
query {
  itinerary(id: "itinerary/DEF456") {
    id

    # Determine the type of itinerary
    type: attrValue(id: "itinerary/type")
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/)
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABMADpJFECWKVS+AhoQBRVjpGkg12OED0AEQCiAMQAsAVgBsXAJQlylSm3JLlAYiKCEKfHF5EUACwRGCABzMQAZtVr08TAusopLCDgxQo8ANQYAG1xWdk5uBz4CfncreXUAX3IEkASgA)

If successful, the response may look like the following:

```json
{
  "data": {
    "itinerary": {
      "id": "itinerary/DEF456",
      "type": "list"
    }
  }
}
```

Additionally, you may choose not to display a corresponding number against each
of the stops on an itinerary as they may imply an importance or sequential
ordering which is not intended. For this, you can check the attribute
"itinerary/list-presentation" in order to determine if the list is set to either
"unordered" or "ordered".

```graphql
query {
  itinerary(id: "itinerary/DEF456") {
    id

    # Determine the list presentation of the itinerary
    listPresentation: attrValue(id: "itinerary/list-presentation")
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/)
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABMADpJFECWKVS+AhoQBRVjpGkg12OED0AEQCiAMQAsAVgBsXAJQlylSm3JLlAYiKCEKfHF5EUACwREANlQDOKIgAc8CK8hQNaEChABmR09Vr0eEwE6pSWNgAKjs6oblQeHG4oeABqDOa4rOyc3AF8BPzhKAC0Dk4ucR7y6gC+5DUgNUA)

If successful, the response may look like the following:

```json
{
  "data": {
    "itinerary": {
      "id": "itinerary/DEF456",
      "listPresentation": "ordered"
    }
  }
}
```

It is important to note that the values of these attributes may not always be
set, so developers should take that into consideration when using these
attributes to enhance the presentation of itineraries. Additionally, developers
should also consider the context and purpose of the itinerary when choosing how
to present it to the users.

## Querying Directions

When building an application or website that includes itineraries that include
directions between locations, such as trip itineraries, you may want to enhance
your list to provide directions between each of the locations. Alpaca provides
enhancements to your query that can look between each of the locations for
directions contained within the itinerary.

In order to query for directions between locations, you will need to include the
"directions" field in your query.

Here is an example of how to query for directions between locations in an
itinerary:

```graphql
query {
  itinerary(id: "itinerary/ABC123") {
    children(type: ItineraryLocation, first: 10) {
      edges {
        node {
          id
          title

          siblingPositionNumber
        }
        # Additionally, query the routes between the locations as edge data,
        # which will obtain directions from the itinerary that arrive (Inbound)
        # to this location, from the last location in the edge sequence
        directions(first: 1, direction: Inbound) {
          nodes {
            # Duration (in minutes)
            durationMin
            # Distance (in meters)
            distance
            # Access the route modes (e.g. Car, etc)
            route {
              segments {
                mode
              }
            }
          }
        }
      }

      pageInfo {
        hasNextPage
        endCursor
      }

      totalCount
    }
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/)
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABMADpJFECWKVS+AhoQBRVjpGkg12OED0AQQBCAYQCMAJgDMXAJQlylSlAAWVADZg8yZigIAHBBwCSteniYEAMtAa0ISADREAZlTwBnFB3EAGBTIKZUoEMABzBE9FYJDKJAgwBBi4uLYlVOVaFA0EcgzMok8qACMNOnCABQhihyQAOXgS-AK4gF9WkIBiIkEwMB5HBg0NAhccfGIUVWS8CBgUKKJmlAB3BGQiaeSNOzrohmiwyKIwewYnTuUe1fU1IlXNDSIIEpQGOlOPBCh9tzm4FsZtRzHwpqp7EQmHgqAA3ZLMExIErzJBgORXSg9FAQIFUaK7KD2KiOFyuAFAnaHFBEQnExzUCjbIjHZKeBATJBQPKxOIDHS-ElITzMdxeHxEcQufk-OqmZGo9EpQpEBJJaJBFXXIgAERgljqRFYFDgdAWUQxvMKYH19KQAFk6Ji4j0dfj3lyEZ9EIsvJatZQBt4GJ7nd1elBuZ5osy5uaiHBEktmAgAHThVNEURMFwIFBQf0BuOLZUBooIcKIVAasOZRNJWshDpWzLNrVt1tXZtXAwMSJI1y4zWZCGeeoIAAeKEqfZ5hWQYFE+s8EDwXfyLZx7w0olRKFaHebbRAbSAA)

If successful, as response may look like this:

```json
{
  "data": {
    "itinerary": {
      "children": {
        "edges": [
          {
            "node": {
              "id": "itinerary/ABC123/location/49Mjaf7N7y6mHiCJRhuwOL",
              "title": "Devonport",
              "siblingPositionNumber": 1
            },
            "directions": {
              "nodes": []
            }
          },
          {
            "node": {
              "id": "itinerary/ABC123/location/3jatHEitBPH1aM4G8HX2Gr",
              "title": "Sheffield",
              "siblingPositionNumber": 2
            },
            "directions": {
              "nodes": [
                {
                  "durationMin": 26.352466666666665,
                  "distance": 29.165044,
                  "route": {
                    "segments": [
                      {
                        "mode": "Car"
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "node": {
              "id": "itinerary/ABC123/location/1aP34WcskKnMmOpbAfTEkL",
              "title": "Cradle Mountain",
              "siblingPositionNumber": 3
            },
            "directions": {
              "nodes": [
                {
                  "durationMin": 46.50026666666667,
                  "distance": 54.270784,
                  "route": {
                    "segments": [
                      {
                        "mode": "Car"
                      }
                    ]
                  }
                }
              ]
            }
          },
          ...
        ],
        "pageInfo": {
          "hasNextPage": false,
          "endCursor": "eyJvZmZzZXQiOjZ9"
        },
        "totalCount": 7
      }
    }
  }
}
```

In this example, we are querying the itinerary with the ID "itinerary/ABC123"
and asking for all the children of type "ItineraryLocation". Along with the
basic information for each location such as the ID, title and the
"siblingPositionNumber" which represents the position of the location in the
list.

Additionally, we are querying for directions between the locations by using the
"directions" field. We set the "direction" argument to "Inbound" which will
obtain directions from the itinerary that arrive to this location, from the last
location in the edge sequence. The response will contain the duration, distance
and mode of transportation between each location.

By using this query, developers can enhance their list of locations with the
additional information of directions, providing a more comprehensive and
user-friendly experience for their users.

Note: you can also use the "first" argument to limit the number of directions
returned in the query. Also, you can use the argument "direction" to retrieve
the directions inbound or outbound, depending on the use case.

## Location Content

When querying an itinerary, it is possible to retrieve information about the
individual locations within the itinerary using the "children" operation.
However, in some cases, it may be necessary to retrieve additional information
about a specific location. This is where the "node" operation comes in handy.

Using the "node" operation, developers can make a specific query for an
itinerary location to retrieve more detailed information about that location.
The following example shows a query that retrieves information about a specific
itinerary location using the "node" operation:

```graphql
query {
  # Use the node query to access an Itinerary Location node
  node(id: "itinerary/ABC123/location/6DuqdpTlTwKFtOjA9zhYZY") {
    id
    __typename

    # Node loads different types of objects, so we request fields for the
    # Itinerary Location specifically
    ... on ItineraryLocation {
      title
      synopsis

      siblingPositionNumber
    }
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/)
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABMADpJFEDERAqgM4JEoAWTSEYTO+xKERAIZQoCevSEUAkigCWSfIMJEAMtEFyIFDl3KUdCABSyw6IqRCy5CvEoIB6AIIAhAMIBGAEwBmewBt1TSR7ADYAERgsMAAHABU-WIB3AGkAMRQAeQArRwBOAC8WAE0ALSKLAEoSPUoiExrKAH1GlAJo5EFEcgbqIgA5TiYAwTAJMFkAMwn8ZBRmNrEiCAmlgCMshCgUegAaInoBRKY8BB56OYnZBD9RogmIPGY2HpoZeUVlNSgNWS199qgk1k3z8fgIPQAdFCltJrB8CF8fn8yBRapQ5Cg-AgepR6AQONF6LJ6N1UWiias-PIAOYABQgRKCfXgq3wPQAvjVOUh2SB2UA)

The response will look similar to the following:

```json
{
  "data": {
    "node": {
      "id": "itinerary/ABC123/location/6DuqdpTlTwKFtOjA9zhYZY",
      "__typename": "ItineraryLocation",
      "title": "Arthur River",
      "synopsis": "As you cross the bridge, don't miss the view up the river.",
      "siblingPositionNumber": 6
    }
  }
}
```

It is important to note that when using the "node" operation, developers must
specify the specific fields they want to retrieve for the itinerary location.
This allows for more granular control over the information retrieved and can
help to minimize unnecessary data retrieval.

In addition to the fields shown in the example above, developers can also
retrieve other types of content related to the location, such as places of
interest, arrival and departure directions, and more. It is recommended that
developers only request the information they need in their queries and fetch
additional information as needed.

It is important to be mindful of when to query the information; whether from the
"children" call or seperately with the "node" call. The "children" call is
useful when you want to retrieve a list of locations on the itinerary and their
basic information, while the "node" call is useful when you want to retrieve
more detailed information about a specific location.

### Gallery

Each location can support a gallery of media objects, that can include things
like images to display with the location.

The below query demonstrates loading the first series of images from a gallery.

```graphql
query {
  node(id: "itinerary/ABC123/location/6DuqdpTlTwKFtOjA9zhYZY") {
    __typename

    # When fetching an itinerary location..
    ... on ItineraryLocation {
      title
      synopsis

      # Load the first 3 images of the gallery
      mediaContainers(first: 3) {
        edges {
          node {
            id
            resource {
              __typename
              ... on MediaImage {
                thumbnail: url(bestFit: [200, 200])
                large: url(bestFit: [800, 800])
                attribution
                caption
              }
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
        totalCount
      }
    }
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/)
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABMADpJFFIRgIAUAlmOkaSAyg0vgIaED0AQQBCAYQCMAJgDM-ADbQenCEn4A2ACIwsYAA4AVOfoDuAaQBiKAPIArQQE4AXgAsAmgC1XbAJQlylSgB9QJQCXWQeRHJ-AIBiIgB1Z2QiADMEFChnLgBzIh4KDi5eQiIFKCUGFQA6apjKWuqiFSIASU5uPD4CABlFZQoyCgDKThQ5BHqAgGcCal1phmno4ZH4vp4wIhRktIY8aZQiaSIGOB4chGnm1O3dnJ45CcIpykQwBh5RFRQeYoO6Kl9ocWNJfEMRiMEGBLtcIZCRtRaH5VgiAkxXmi8FcIDA8FAECi0WjgqFwkhIpNUcSGrVmhQALLQz6tc6XIk0hE7eAAIwpDDkLDxcjoPKuKHMHBYAG1JAAGOUAGiI8rlAF1vJjOXI+JchXgRWLDpKUDKABwK5UW9Wa6mc-IoFB4Bg8mADLU0iq6d124kAXw9IwDvoCwf9Ht0FwQrSQqQgHOJzh40wAcggAB4oAAKUcDRGQYFEeOmEDwHrDaJQEF+cm+MFQmIrlArwb9ID9QA)

The response now includes an gallery information to display for the location:

```json
{
  "data": {
    "node": {
      "__typename": "ItineraryLocation",
      "title": "Arthur River",
      "synopsis": "As you cross the bridge, don't miss the view up the river.",
      "mediaContainers": {
        "edges": [
          {
            "node": {
              "id": "itinerary/ABC123/location/6DuqdpTlTwKFtOjA9zhYZY/media-container/31456c91c6f2fabad9ec21d515629f20",
              "resource": {
                "__typename": "MediaImage",
                "thumbnail": "https://media-cdn.alpacamaps.com/uploads/11/6d6MmLWncZdobgf5Hu8ApM/IMG_10744/small_m225w_m200h.jpeg",
                "large": "https://media-cdn.alpacamaps.com/uploads/11/6d6MmLWncZdobgf5Hu8ApM/IMG_10744/large_1024h.jpeg",
                "attribution": "Source: Zoe Manderson",
                "caption": "Looking upstream the river"
              }
            }
          }
        ],
        "pageInfo": {
          "hasNextPage": false,
          "endCursor": "eyJvZmZzZXQiOjB9"
        },
        "totalCount": 1
      }
    }
  }
}
```

### Place Information

Each location has a place associated with it. This place can represent a simple
position like a map marker, or could be attached to a place or address that has
more information available to read in.

Alpaca is integrated with a number of place providers. The supported place
providers enable information about the place to be kept up to date, such as when
information about opening hours are updated or contact details.

### Fetching Inbound/Outbound Directions

The ItineraryLocation type offers a mechanism to search for itinerary directions
when you are loading them individually, opposed to searching between locations
within a list.

```graphql
query {
  node(id: "itinerary/ABC123/location/6DuqdpTlTwKFtOjA9zhYZY") {
    id
    __typename

    # When querying the itinerary location individually
    ... on ItineraryLocation {
      # Search for directions used to arrive here from other itinerary locations
      arriveFrom: directions(first: 1, direction: Inbound) {
        nodes {
          origin {
            ... on ItineraryLocation {
              id
              title
            }
          }
          distance
          durationMin
          route {
            modes
          }
        }
        totalCount
      }

      # Search for directions used to depart here to other itinerary locations
      departTo: directions(first: 2, direction: Outbound) {
        nodes {
          parent {
            ... on ItineraryLocation {
              id
              title
            }
          }
          distance
          durationMin
          route {
            modes
          }
        }
        totalCount
      }
    }
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/)
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABMADpJFFIRgIAUAlmOkaSAyg0vgIaED0AQQBCAYQCMAJgDM-ADbQenCEn4A2ACIwsYAA4AVOfoDuAaQBiKAPIArQQE4AXgAsAmgC1XbAJQlylSiZ-AIB9EJQCXWQeRHJgygBiIgB1Z2QiHHwCLgBzIhQ0og4uXkIiBSglBhUipDAGADcmGB45OQJ4ogA6HqIagElObjw+AgAZRWUKMgoAxKIAZQQ+KGciADMIPCJ6vAQoKYBnIhhDhDB8iCI+PEaEIjS9jbwIOD6C-CKh0uIKqpVDp1KDc7uYXnAWLt9kc6OsGHhDigWOIADQ7eHQ6pIFj9JAAIwgMDqvhmczm1Fox1JZLmWwYOS4flmNLmPS6fQogxKI0IE0qUyZLJZQWZQoCnBQcgQQJZAF8ZXN5aKafVETwkFBpcqyWAYCMpgBZLgKgIvGAoe7UsVEOA0BCA7WKk1KoUoCAoVqiQmoGVKmVJJYrNabbZQg5Y46nc6XHYIXR8FAPfD3N3vR5fbmjcqTCMy2jxvAofQQSEY8MA2HwxEsSRosNTFhWc0EolgEkmin2wVigvIRNWsVsjlELnDUZ8-7TE00kXWuYSqXTgIusUroWqj0arXW3X6rFGpBLs0W7vW22UpdrslX+fuz3elC+zorpWykCyoA)

The above can look directions that can link locations between where it was
coming from, and where it is departing to.

```json
{
  "data": {
    "node": {
      "id": "itinerary/ABC123/location/6DuqdpTlTwKFtOjA9zhYZY",
      "__typename": "ItineraryLocation",
      "arriveFrom": {
        "nodes": [
          {
            "origin": {
              "id": "itinerary/ABC123/location/3ZPvzV7WyAalXWo6hJijBJ",
              "title": "Corinna"
            },
            "distance": 95.459772,
            "durationMin": 79.61751666666667,
            "route": {
              "modes": ["Car"]
            }
          }
        ],
        "totalCount": 1
      },
      "departTo": {
        "nodes": [
          {
            "parent": {
              "id": "itinerary/ABC123/location/7BuzRTLQYH4rWBoIPh2UvV",
              "title": "Boat Harbour"
            },
            "distance": 91.74235300000001,
            "durationMin": 66.4878,
            "route": {
              "modes": ["Car"]
            }
          }
        ],
        "totalCount": 1
      }
    }
  }
}
```

## Drawing Maps

Many options are available for you to work with drawing itinerary content onto
various mapping platforms.

From the GraphQL API calls, you can include fields to extract information from
the API directly for the itinerary content.

The below example shows fields that can be queried in order to locate key
mapping positions and route paths for directions:

```graphql
query {
  itinerary(id: "itinerary/ABC123") {
    id

    # Read in the stops
    children(first: 10, type: ItineraryLocation, after: null) {
      edges {
        node {
          id
          ... on ItineraryLocation {
            # Load the longitude/latitude
            # Alpaca uses EPSG:3857/WGS 84 CRS
            position {
              lon
              lat
            }
          }
        }

        directions(first: 1, direction: Inbound) {
          edges {
            node {
              route {
                segments {
                  # Use the polyline field to access a polyline encoded
                  # representation of the route path
                  polyline
                }
              }
            }
          }
        }
      }

      pageInfo {
        hasNextPage
        endCursor
      }

      totalCount
    }
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/)
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABMADpJFECWKVS+AhoQBRVjpGkg12OED0AQQBCAYQCMAJgDMXAJQlylSm3JLlAYiIAlBAzDUKKABYIiAZxQQADufWUoxqgBsweZMwBmVPJY7iABgAaIhQCawQOAElaejwmAgAZaAZaCCQQhk8UfA4kGGdnBTIKZUoEMABzBHNFUrLKJAgwMxKGhtV69qIAOj6idKIY3njCZKhUqkG27rKtZP1Q0yJndMqaGBb+Z0mUTYR7WaItQWdrBgmiGHMaogBRAAUAZQBxdGkADgBWAHZ+AHUXk8iB8ACxEUTaJ6HWbWCDmHjTGFHVZIZGzHYodENAC+2MoeK6ZUJ2LAPgQUDSSHMXh8fiI4hCZPclKmSGiSAARhAYEgwMV8UQKtVajMjkQmi06uKyngeTlpTKyjdKohUKLBbMtABVG5LMxw5wEZy8IjeBCuUIQIgXKA1WoMIiG42m5BQZoVTXdLTuazuG6oSaDCCefVEOUwBXnExe9rOk30WPKQlKglelNHDPtLPJtREp0MapRJCea1ihrGBjmAByCAAHigHoWDvnynzRDBfBA8MiSfmrCgGM5RDzUIcM4ScSAcUA)

An example of the output expected is shown below

```json
{
  "data": {
    "itinerary": {
      "id": "itinerary/ABC123",
      "children": {
        "edges": [
          {
            "node": {
              "id": "itinerary/ABC123/location/49Mjaf7N7y6mHiCJRhuwOL",
              "position": {
                "lon": 146.37010715588758,
                "lat": -41.18011907368838
              }
            },
            "directions": {
              "edges": []
            }
          },
          {
            "node": {
              "id": "itinerary/ABC123/location/3jatHEitBPH1aM4G8HX2Gr",
              "position": {
                "lon": 146.32474076543986,
                "lat": -41.382109677628286
              }
            },
            "directions": {
              "edges": [
                {
                  "node": {
                    "route": {
                      "segments": [
                        {
                          "polyline": "..."
                        }
                      ]
                    }
                  }
                }
              ]
            }
          },
          ...
        ],
        "pageInfo": {
          "hasNextPage": false,
          "endCursor": "eyJvZmZzZXQiOjZ9"
        },
        "totalCount": 7
      }
    }
  }
}
```

### Alpaca Mapping Services

Alpaca provide mapping services that can be used to create great interactive
maps that interact with itinerary content.

These services also include offering:

- Itinerary GeoJSON

- Hosted Vector Tiles

- SVG Paths

**[View Alpaca Mapping Service Documentation](https://github.com/AlpacaTravel/mapping-docs)**

### Mapbox GL Example Code

Alpaca have created examples of how to quickly create mapbox maps that display
the itineraries. These examples shows how to quickly leverage the Alpaca map
styles, create your own style and even create more complicated 3D visualisations
of your content using the Mapbox API.

**[View Alpaca Mapbox Examples](https://www.alpaca.travel/reference/examples/mapbox-gl)**

## Creating and Managing Itineraries

It is also possible to create applications and website functionality built
around creating and managing itineraries via the GraphQL API. This functionality
allows developers to issue mutations to the API and create content.

This could have relevance for integrating within content management systems or
building website trip planning or favouriting functionality.

To understand more about this functionality, you can refer to to the following
resources:

- **[Managing a List](/getting-started/itinerary/Managing%20a%20List)** Build
  curated list content, such as top-10's, favorites or other lists.

- **[Managing a Trip](/getting-started/itinerary/Managing%20a%20Trip)** Build
  trips, allowing users to plan out stops along a route.
