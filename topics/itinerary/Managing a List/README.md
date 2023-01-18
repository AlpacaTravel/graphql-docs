# Managing a Curated List of Locations

The Alpaca Travel GraphQL API is a powerful tool for developers to create and
share curated lists of locations with their customers. This developer reference
guide will show you how to use the API to create, manipulate, and display lists
of locations, as well as other related functionality.

## Creating a List

Before you can begin adding locations to your list, you will first need to
create the list itself. The Alpaca Travel API uses the term "itinerary" to refer
to lists, trails, and trips. However, the functionality for creating and
managing a list is the same regardless of the type of itinerary.

The following GraphQL mutation can be used to create a new list:

```graphql
mutation CreateItinerary {
  createItinerary(
    itinerary: {
      title: "List of Recommended Places"
      defaultLocale: "en"
      attrs: [{ id: "itinerary/type", value: "list" }]
    }
  ) {
    itinerary {
      id
      created
    }
  }
}
```

This mutation creates a new itinerary with the title "List of Recommended
Places" and assigns it a unique ID. The `defaultLocale` field is optional and
can be set to the desired language of the itinerary. The `attrs` field is also
optional, but in this example, we are providing a hint about the type of
itinerary being created by adding an attribute with the ID "itinerary/type" and
the value "list".

The mutation returns the created itinerary object, which includes the unique ID
and the timestamp of when the itinerary was created.

```json
{
  "data": {
    "createItinerary": {
      "itinerary": {
        "id": "itinerary/ABC123",
        "created": "2022-12-01T12:00:00.000Z"
      }
    }
  }
}
```

Please note that the title of the itinerary is the only required field when
creating an itinerary. The defaultLocale and attrs fields are optional.

## Adding locations to a list

Once you have created an itinerary, you can add locations to it using the
`createItineraryLocation` mutation.

To add a location for "The Farm Cafe" to an itinerary with the ID
"itinerary/ABC123", using the Australian Tourism Data Warehouse (ATDW) as the
place provider:

```graphql
mutation CreateItineraryLocationWithAtdwPlace {
  createItineraryLocation(
    itineraryId: "itinerary/ABC123"
    location: {
      title: "Grab a coffee"
      synopsis: "Nearby, we can find The Farm Cafe open most days"
      place: {
        id: "place/atdw:product:5f115dfde8f9b57738878350"
        position: { lon: 145.0043, lat: -37.8021 }
      }
    }
  ) {
    location {
      __typename
      id
    }
  }
}
```

This mutation associates the location with a specific place, identified by the
ATDW Product identifier, and also provides the position of the location on the
map.

Example response:

```json
{
  "data": {
    "createItineraryLocation": {
      "location": {
        "__typename": "ItineraryLocation",
        "id": "itinerary/ABC123/location/DEF456"
      }
    }
  }
}
```

Alternatively, you can create a place without associating it to any place
provider by omitting the ID, like this:

```graphql
mutation CreateItineraryLocation {
  createItineraryLocation(
    itineraryId: "itinerary/ABC123"
    location: {
      title: "A Cafe"
      place: { position: { lon: 145.0043, lat: -37.8021 } }
    }
  ) {
    location {
      __typename
      id
    }
  }
}
```

It is important to note that you always have to provide the lon/lat position of
the place you are adding.

## Testing whether a place is present in a list

Once you have added locations to your list, you may want to check if a
particular place is already present in the list before adding it again. This can
be useful for creating a "Add to List" button with different states, such as
"Added" or "Remove" depending on whether the place is already present in the
list.

The following GraphQL query can be used to check if a place is present in a
list:

```graphql
query CheckItineraryPlacePresent {
  itinerary(id: "itinerary/ABC123") {
    descendants(placeIds: ["place/123"], first: 1) {
      nodes {
        id
      }
      totalCount
    }
  }
}
```

The `itinerary` query is used, supplying the `id` of the list to check. The
`descendants` field is then queried, providing the `placeIds` to check and the
`first` parameter, which limits the number of returned results to 1.

In the response, the `nodes` field will contain an array of itinerary location
objects, each representing a location in the list that matches the provided
`placeIds`. The `id` field of each itinerary location object can be used to
refer to the location in future operations. The `totalCount` field will indicate
the total number of matching locations in the list, which can be used to check
if the place is already present in the list.

Example response:

```json
{
  "data": {
    "itinerary": {
      "descendants": {
        "nodes": [
          {
            "id": "itineraryLocation/123"
          }
        ],
        "totalCount": 1
      }
    }
  }
}
```

If the place is already present in the list, the totalCount field will be
greater than 0.

## Listing the Locations in a List

Once you have added locations to your list, you may want to display the list of
locations to the user. You can use the `itinerary` query and the `children`
selector to list the locations in a list. The query can also be paginated using
the relay "cursor connection" specification.

Here is an example of how to use the `itinerary` query to list the locations in a curated list:

```graphql
query QueryItineraryLocationsAsSimpleList {
  itinerary(id: "itinerary/ABC123") {
    children(type: ItineraryLocation, first: 10) {
      edges {
        node {
          id
          __typename
          ... on ItineraryLocation {
            title
            synopsis
            preferredMedia {
              resource {
                ... on MediaImage {
                  url(bestFit: [200, 200])
                  caption
                  copyright
                  altText
                }
              }
            }
            place {
              id
              name
              contact {
                facebookUrl
                instagramUrl
              }
              position {
                lon
                lat
              }
              address {
                addressLineOne
                locality
              }
            }
          }
        }
        position: edgePositionNumber
        cursor
      }
      totalCount
    }
  }
}
```

The `itinerary` query is used, supplying the `id` of the list to display. The
`children` field is then queried, providing the `type` of the children to return
and the `first` parameter, which limits the number of returned results.

In the response, the `edges` field will contain an array of itinerary location
objects, each representing a location in the list. Each location will include
information such as the place's ID, name, address, and categories. The
`position` field will show the numbering of the result 1...X and the cursor
field will return the cursor to pass back as the "after" property in case you
want to paginate the result.

You can use this query to display the locations in a list on your application,
and pass the cursor as the "after" property to retrieve the next set of
locations. This will allow you to paginate through the results and display
them in chunks to the user.

Note that the `place` object contains the position field which is the location
of the place on map with lon and lat which could be used to show the places on
a map.

## Removing a Location from a List

Once a location has been added to a list, you may want to remove it from the
list. In order to remove a location from a list, you can use the
"deleteItineraryItem" mutation operation.

This operation requires the `id` of the itinerary location you wish to remove.
The `id` field of each itinerary location object can be obtained when querying
for the locations in a list or when checking if a place is present in a list.

Here is an example of how to use the "deleteItineraryItem" operation to remove a
location from a list:

```graphql
mutation DeleteItineraryLocation {
  deleteItineraryItem(id: "itinerary/ABC123/item/DEF456") {
    id
  }
}
```

When the operation is successful, the response will return the `id` of the
itinerary location that was removed. Please note that there is no undo option
for this operation and the location will be permanently removed from the list.

Example Successful response:

```json
{
  "data": {
    "deleteItineraryItem": {
      "id": "itinerary/ABC123/item/DEF456"
    }
  }
}
```

Please be aware that the operation is irreversible.

## Changing the title of a location in a list

Once you have added locations to your list, you may want to update the title of
a location. This can be done using the `updateItineraryLocation` mutation. The
mutation takes in the `id` of the location you wish to update and the new
`title` you want to set.

```graphql
mutation UpdateItineraryLocationTitle {
  updateItineraryLocation(
    id: "itinerary/ABC123/location/DEF456"
    location: { title: "New Title" }
  ) {
    location {
      id
      title
    }
  }
}
```

The location field contains the new title you want to set for the location.

In the response, the location field will contain the updated location object,
including the `id` and updated `title` fields.

Example response:

```json
{
  "data": {
    "updateItineraryLocation": {
      "location": {
        "id": "itinerary/ABC123/location/DEF456",
        "title": "New Title"
      }
    }
  }
}
```

Please note that you can also update other fields for the location using this
mutation.

## Reordering the List

After you have added multiple locations to your list, you may want to change the
order of those locations. The Alpaca Travel API allows you to reorder the
locations within a list by using the "moveItineraryItem" mutation operation.

The `moveItineraryItem` mutation takes an `id` parameter, which is the ID of the
itinerary location to be moved, and a `positionAtStart`,
`positionAfterSibling`, `positionAtEnd` or `positionBeforeSibling` property
that specify the location in the itinerary that the item should be moved to.

To move an itinerary location to the start of the sequence, you can use the
following mutation:

```graphql
mutation {
  moveItineraryItem(
    id: "itinerary/ABC123/location/DEF456"
    positionAtStart: {
      item { id }
    }
  ) {
  }
}
```

Alternatively, you can move an itinerary location to a relative position to
another item in the itinerary by using the `positionAfterSibling`,
`positionAtEnd` or `positionBeforeSibling` properties in the mutation.

```graphql
mutation {
  moveItineraryItem(
    id: "itinerary/ABC123/location/DEF456"
    positionAfterSibling: { siblingId: "itinerary/ABC123/location/GHI789" }
  ) {
    item {
      id
    }
  }
}
```

These mutations allow you to reorder the itinerary locations in a flexible way,
whether it be moving them to a specific position or relative to other locations.
This can be used to enable drag-and-drop functionality in your application,
making it easy for users to rearrange their itinerary as they see fit.

Like other mutations, you can also read back cascaded changes to identify what
has been affected by your mutation.

# Advanced Topics

# Further Reading

- [Example Itinerary Operations](/example-operations/itinerary/)
- [Other Itinerary Topics](/topics/itinerary/)
- [Alpaca Travel GraphQL API Schema Reference](/reference/)
