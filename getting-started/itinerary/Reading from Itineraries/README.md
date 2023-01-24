# Reading from Itineraries

Welcome to the Alpaca Travel GraphQL API technical guide for developers. This
guide is designed to provide developers with a comprehensive understanding of
how to access and query itinerary content through our API. The API allows
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

_Table of Contents_

- [Reading from Itineraries](#reading-from-itineraries)
  - [Loading an Itinerary](#loading-an-itinerary)
  - [Displaying a List of Locations](#displaying-a-list-of-locations)
    - [Enhancing Presentation](#enhancing-presentation)
  - [Querying Directions](#querying-directions)
  - [Loading a Specific Location](#loading-a-specific-location)
  - [Reading Content](#reading-content)
  - [Drawing Maps](#drawing-maps)
  - [Enhanced Content](#enhanced-content)
  - [Embeding and Sharing](#embeding-and-sharing)
  - [Further Reading](#further-reading)

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
retrieve the title, synopsis, and publish date of an itinerary with the ID
"itinerary/ABC123":

```graphql
query {
  itinerary(id: "itinerary/ABC123") {
    title
    synopsis
    published
  }
}
```

The additional fields requested will be included in the response:

```json
{
  "data": {
    "itinerary": {
      "id": "itinerary/ABC123",
      "title": "Wild West Coast",
      "synopsis": "A road trip showcasing Tasmania's World Heritage wilderness and wild untamed west coast.",
      "published": "2022-12-01T04:54:35.698Z"
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
  itineraries(profileId: "profile/ABC123", first: 10) {
    edges {
      node {
        id
        title
        synopsis
      }
    }

    totalCount
  }
}
```

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
            "synopsis": "Whether it be slow pour overs, cold brews or milky barista style, Tokyo knows how to do coffee. You'll find coffee shops down laneways, hidden in residential streets, behind ivy cloaked buildings, and wedged precariously on busy pavements."
          }
        },
        {
          "node": {
            "id": "itinerary/ABC123",
            "title": "Wild West Coast",
            "synopsis": "A road trip showcasing Tasmania's World Heritage wilderness and wild untamed west coast."
          }
        }
      ],
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
  itinerary(id: "itinerary/DEF456") {
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
              "siblingPositionNumber": 1
            }
          },
          {
            "node": {
              "id": "itinerary/DEF456/location/2Q6thRSfnhhVsKaGqnqrSV",
              "title": "Higuma Doughnuts × Coffee Wrights",
              "siblingPositionNumber": 2
            }
          },
          {
            "node": {
              "id": "itinerary/DEF456/location/2rlIDmk0IeETSiA3iseWc4",
              "title": "Onibus Coffee",
              "siblingPositionNumber": 3
            }
          },
          {
            "node": {
              "id": "itinerary/DEF456/location/4DjTycRHtTPAlmN0Gw4Yis",
              "title": "About Life Brewers",
              "siblingPositionNumber": 4
            }
          },
          {
            "node": {
              "id": "itinerary/DEF456/location/0bHCYxpyVCYUzPDwrWmt32",
              "title": "Blue Bottle Coffee",
              "siblingPositionNumber": 5
            }
          },
          {
            "node": {
              "id": "itinerary/DEF456/location/5XeXZn2N4b4ndK3VJKqf86",
              "title": "Faro Coffee",
              "siblingPositionNumber": 6
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
the next page of locations, you can pass this cursor as the "after" parameter
in the "children" field in a subsequent query.

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
presentation based on the type of itinerary and how it should be displayed.
The Alpaca Travel GraphQL API offers several attributes that can be used to
enhance the presentation of itineraries.

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
          {
            "node": {
              "id": "itinerary/ABC123/location/5qjQbAnmFFFuxF4EnQIIo0",
              "title": "Strahan",
              "siblingPositionNumber": 4
            },
            "directions": {
              "nodes": [
                {
                  "durationMin": 97.28673333333333,
                  "distance": 138.84873499999998,
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
              "id": "itinerary/ABC123/location/3ZPvzV7WyAalXWo6hJijBJ",
              "title": "Corinna",
              "siblingPositionNumber": 5
            },
            "directions": {
              "nodes": [
                {
                  "durationMin": 72.91505000000001,
                  "distance": 93.231847,
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
              "id": "itinerary/ABC123/location/6DuqdpTlTwKFtOjA9zhYZY",
              "title": "Arthur River",
              "siblingPositionNumber": 6
            },
            "directions": {
              "nodes": [
                {
                  "durationMin": 79.61751666666667,
                  "distance": 95.459772,
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
              "id": "itinerary/ABC123/location/7BuzRTLQYH4rWBoIPh2UvV",
              "title": "Boat Harbour",
              "siblingPositionNumber": 7
            },
            "directions": {
              "nodes": [
                {
                  "durationMin": 66.4878,
                  "distance": 91.74235300000001,
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
          }
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

## Loading a Specific Location

## Reading Content

## Drawing Maps

## Enhanced Content

## Embeding and Sharing

## Further Reading
