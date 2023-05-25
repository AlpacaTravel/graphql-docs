[//]: # "Weight: 10"
[//]: # "Label: experimental"
[//]: # "TOC: false"
[//]: # "Layout: 1-col"

# Multi-leg or Multi-day Collections

Itinerary Collections provide a mechanism to create additional lists for your
itinerary. The common target use case is creating discrete legs or lists that
could represent different days.

<aside class="note">
  Currently, Itinerary Segments are used to break up a list into sub-sections
  which can be used to represent parts of a trip. 
</aside>

## Understanding Collection Use-cases

Segments primarily are used in order to take a list, and create segments to
provide an optional way of filtering down a list. There is one list and the list
items are assigned to the segment which can then be used to filter.

Collections are used to create new lists containing their own children.

| Feature                         | Itinerary Segment                                               | Itinerary Collection                               |
| ------------------------------- | --------------------------------------------------------------- | -------------------------------------------------- |
| Can break up larger lists       | ✔️                                                              | ✔️                                                 |
| Location can appear in multiple | ✔️                                                              | ❌                                                 |
| Controls the ordering           | ❌                                                              | ✔️                                                 |
| Target Use Case                 | Breaking up a list into segments, where locations could overlap | Creating and plotting discrete lists, such as Days |

## Creating an Itinerary Collection

Itinerary Collections can be used in order to create additional lists.

```graphql
# Creates an Itinerary Collection, which can be used to create new sub-lists

mutation createItinerarySegment(
  $itineraryId: ID!
  $itineraryCollection: CreateItineraryCollectionInput!
) {
  createItineraryCollection(
    itineraryId: $itineraryId
    collection: $itineraryCollection
  ) {
    collection {
      id
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBhAJwQEMUEBnHYpHASRQEskEDiCBPfCAG24SkYQkAGhwB3ABYMoEnFGo4ARghwxyCMDhQQ5RUiuZic5GIoC03BuRTkAOkntwYKUgyG6SZekxZt2AZQQAc0RUAAp7HBwAEgZGZlYOWjB0OgARAEJImLifRPY8Hj4BNyRUwk8EbwS-Qt5+QSRaJAAHZyykAEocYGyoPS943w464saImiicXJqklJyh-OTsqKgihtLU2MXa9ZKhbO7eydW9xp6VqYYwS4BfbPukW5BboA)
