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
  - [Querying Directions](#querying-directions)
  - [Loading a Location](#loading-a-location)
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
            "id": "itinerary/0mttpRn7spYNDIV979fHbE",
            "title": "Coffee Shops of Tokyo",
            "synopsis": "Whether it be slow pour overs, cold brews or milky barista style, Tokyo knows how to do coffee. You'll find coffee shops down laneways, hidden in residential streets, behind ivy cloaked buildings, and wedged precariously on busy pavements."
          }
        },
        {
          "node": {
            "id": "itinerary/458UEs3vKr8asSekgzPcKg",
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

## Querying Directions

## Loading a Location

## Reading Content

## Drawing Maps

## Enhanced Content

## Embeding and Sharing

## Further Reading
