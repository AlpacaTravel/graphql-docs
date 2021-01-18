# Alpaca Travel GraphQL

Alpaca Travel offers an GraphQL API for developers to build tourism websites
and travel applications.

This project contains some of the reference documentation that is used to
support developers integrating to the API.

## Getting Started

GraphQL is a flexible data query language that allows you to design queries that
match your use case. Opposed to making several REST API requests, you can make a
single query to obtain the data you need.

If you are new to GraphQL, the following educational resources may be helpful as
a starting point.

- [Introduction to GraphQL](https://graphql.org/learn/)
- [How to GraphQL](https://www.howtographql.com/)
- [Guides and Best Practices](https://www.graphql.com/guides/)
- [GraphQL Clients](https://graphql.org/graphql-js/graphql-clients/)

### Endpoint URL

In order to interact with GraphQL, you will need to use the following root
endpoint:

```
https://withalpaca.com/api/graphql?accessToken=xxx
```

When using the root endpoint, it is important to authenticate via providing your
access token (which is your API Key) as a query parameter.

#### GraphQL Playground

GraphQL offers an introspection capability with a defined schema. This helps you
develop the query that suits your specific use case or technical needs without
having to go through a lot of API Documentation. Through the GraphQL Playground,
you can try out your queries and mutations directly onto the GraphQL
environment.

Visit the [GraphQL Playground](https://withalpaca.com/api/graphql). Remember to
add your `?accessToken=` to the URL

## Example Operations

As a series of gists to common requirements, a section of example GraphQL
operations are provided.

Itinerary

- [Create Itinerary](example-operations/itinerary/CreateItinerary.graphql)
- [Create Itinerary Associated To Profile](example-operations/itinerary/CreateItineraryAssociatedToProfile.graphql)
- [Update Itinerary Title](example-operations/itinerary/UpdateItineraryTitle.graphql)
- [Check Itinerary Place Present](example-operations/itinerary/CheckItineraryPlacePresent.graphql)
- [Create Itinerary Location](example-operations/itinerary/CreateItineraryLocation.graphql)
- [Create Itinerary Location With Additional Positions](example-operations/itinerary/CreateItineraryLocationWithAdditionalPositions.graphql)
- [Query Itinerary Locations As Simple List](example-operations/itinerary/QueryItineraryLocationsAsSimpleList.graphql)
- [Move Itinerary Location](example-operations/itinerary/MoveItineraryLocation.graphql)
- [Move Itinerary Location to Start](example-operations/itinerary/MoveItineraryLocationToStart.graphql)
- [Delete Itinerary Location](example-operations/itinerary/DeleteItineraryLocation.graphql)
- [Update Itinerary Assign Car Auto Route](example-operations/itinerary/UpdateItineraryAssignCarAutoRoute.graphql)
- [Create Itinerary Location With Auto Route Options](example-operations/itinerary/CreateItineraryLocationWithAutoRouteOptions.graphql)
- [Create Itinerary Directions](example-operations/itinerary/CreateItineraryDirections.graphql)
- [Query Profile Itineraries](example-operations/itinerary/QueryProfileItineraries.graphql)
- [Delete Itinerary](example-operations/itinerary/DeleteItinerary.graphql)

Collection

- [Query Collections](example-operations/collection/QueryCollections.graphql)
- [Query Collection Items](example-operations/collection/QueryCollectionItems.graphql)
- [Create Collection Location](example-operations/collection/CreateCollectionLocation.graphql)
- [Query Collection Location](example-operations/collection/QueryCollectionLocation.graphql)
- [Update Collection Location Title](example-operations/collection/UpdateCollectionLocationTitle.graphql)
- [Update Collection Location Tags](example-operations/collection/UpdateCollectionLocationTags.graphql)
- [Query Collection Locations By Tag](example-operations/collection/QueryCollectionLocationsByTag.graphql)
- [Query Collection Location With External Reference](example-operations/collection/QueryCollectionLocationWithExternalReference.graphql)
- [Update Collection Location Add External Reference](example-operations/collection/UpdateCollectionLocationAddExternalReference.graphql)

Place

- [Search Place Autocomplete From ATDW](example-operations/place/SearchPlaceAutocompleteFromATDW.graphql)
- [Search Place Reverse](example-operations/place/SearchPlaceReverse.graphql)
- [Query Place ATDW Winery](example-operations/place/QueryPlaceATDWWinery.graphql)
- [Query Place Contextual Orientation](example-operations/place/QueryPlaceContextualOrientation.graphql)
- [Query Place Navigation Links](example-operations/place/QueryPlaceNavigationLinks.graphql)

Route

- [Query Routes Between Positions](example-operations/route/QueryRoutesBetweenPositions.graphql)

Profile

- [Query Authorized Profiles](example-operations/profile/QueryAuthorizedProfiles.graphql)

## Contributing

We are happy to accept pull-requests, suggestions and corrections.

We have quality control mechanisms to assist in keeping the documentation is
kept maintained. This includes GitHub actions to validate site links as well
as valid GraphQL examples (in both .graphql files and featuring in markdown).

Sections such as the [reference](reference/README.md) is managed external to
this repository and can't be changed. In that case, please describe the change
to us in an Issue, and we will resolve.

### Quick Edits

You can make quick edits through GitHub by using the pencil :pencil2: edit
process and submit a pull request.

### Further Edits

Alternatively, you can pull down the git repo to make your changes. You can
check your changes by using the following commands:

```
npm i
npm run graphql-codegen
npm run test:markdown-links
npm run test:markdown-graphql
```
