[//]: # "Title: Creating Trips with Routes"
[//]: # "Weight: 2"
[//]:
  #
  "Description: This developer reference guide will show you how to use the API to create, manipulate, and display itineraries, as well as other related functionality"

# Managing a Trip

The Alpaca Travel GraphQL API is a powerful tool for developers to create and
share interactive travel itineraries with their customers. This developer
reference guide will show you how to use the API to create, manipulate, and
display itineraries, as well as other related functionality.

What this guide covers:

- This reference guide covers the complete lifecycle of creating and managing
  itineraries using the Alpaca Travel GraphQL API.

- It includes step-by-step instructions for common operations such as creating
  itineraries, adding locations, working with routing and other services.

- The reference covers both GraphQL queries and mutations, providing developers
  with the complete set of tools to create and manage itineraries with the
  Alpaca Travel platform.

This article is intended to be a simple guide that developers can reference when
they are first getting started with the Alpaca Travel and are working on their
projects, so they can easily understand the different GraphQL operations they
need to create an itinerary and manage it. The guide provides a clear and step
by step instructions, code examples and other resources that could help
developers to be more productive and efficient.

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

- Alpaca Travel GraphQL API Detailed Schema Reference

- Apollo Sandbox for testing queries and seeing what other operations/fields are
  available

## Table of Contents

- - [Creating an Itinerary](#creating-an-itinerary)

  - [Adding Locations](#adding-locations)

    - [Adding a Location from a Place Provider](#adding-a-location-from-a-place-provider)

  - [Testing Whether a Place is Present in an Itinerary](#testing-whether-a-place-is-present-in-an-itinerary)

  - [Listing the Itinerary Locations](#listing-the-itinerary-locations)

  - [Removing a Location](#removing-a-location)

  - [Changing the Title of a Location](#changing-the-title-of-a-location)

  - [Reordering Itinerary Locations](#reordering-itinerary-locations)

  - [Turning on Auto-Routing](#turning-on-auto-routing)

  - [Displaying an Itinerary with Matched Directions](#displaying-an-itinerary-with-matched-directions)

  - [Making a Stop Optional](#making-a-stop-optional)

  - [Adding a Place of Interest for a Location](#adding-a-place-of-interest-for-a-location)

  - [Displaying an Itinerary on a Map](#displaying-an-itinerary-on-a-map)

- [Advanced Topics](#advanced-topics)
- [Further Reading](#further-reading)

## Creating an Itinerary

The first step in creating an itinerary is to use the "createItinerary"
mutation. This operation allows you to create an itinerary with some initial
content, such as a title.

Here is an example of how to use the "createItinerary" mutation:

```graphql
mutation CreateItinerary {
  createItinerary(
    itinerary: {
      # Initial content
      title: "Basic Itinerary Example"
      # Some additional recommended but not required fields
      defaultLocale: "en"
      attrs: [
        # Provide hints about the type of itinerary (e.g. list, trip, trail)
        # Can be omitted or added later
        { id: "itinerary/type", value: "trip" }
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
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAIBhAJwXwQElCkELcKBPE4AHVJKipvoFGzNgApuJSSQIMmLVug4SpkgMQlaSGQVwAbXsRTIUylYRS6EiziABCuAM4EoG2SPYBRAB644AB0sbUyl1AGUIRBJcMDBtYj0SKigIxCQwBDASACMcEiQIFESEAEcYAipMgDMCBF0wB2DJdMrcGF0UABloPSsSG2QgnhV8FAoHRQBtRpCSAAUKCAA3AnSSAAshFAcorIhclDWEEhRWPyOISuk3eRJRBAA6AHN7kl0CBxQAGmOKAj9v0a4Ai6ACU0zU5FwpCy5zgMiMmQgFCiMQyrxoFHBHGkYGsIG0wnkAHoTmcbN9FnoYL0bKM-jYSABfaYAXWCzJ4IKUQyuQjkbG5KkkK3Zyg5jJAjKAA)

If the operation is successful, the response will return the id of the created
itinerary. This id is required for all subsequent queries or mutations that you
will make to the itinerary.

Example Successful response:

```json
{
  "data": {
    "createItinerary": {
      "itinerary": {
        "id": "itinerary/123"
      }
    }
  }
}
```

It is important to note that the ID's returned are not a real id and it is just
an example, your response will have unique id.

- You can also add additional fields such as description and cover images at the
  time of creation

- Additional attributes that can store ID's or other references can be stored

- Can be associated to a specific profile ID if correct permissions are in place

See More:

- [Creating an Itinerary](/topics/itinerary/Creating%20an%20itinerary)

- [Custom Data](/topics/itinerary/Additional%20Concepts/Custom%20Data/)

- [CreateItineraryInput type](/reference#createitineraryinput)

- [CreateItineraryPayload type](/reference#createitinerarypayload)

## Adding Locations

Once you have created an itinerary, you can start adding locations to it using
the "createItineraryLocation" mutation.

The following mutation adds a simple place to the itinerary.

```graphql
mutation CreateItineraryLocation {
  createItineraryLocation(
    # Supply our Itinerary to add the item to
    itineraryId: "itinerary/ABC123"
    # Describe the location
    location: {
      # Provide some optional content to personalise the itinerary
      title: "A Cafe"
      place: {
        # Providing the position lon/lat
        position: { lon: 145.0043, lat: -37.8021 }
      }
    }
  ) {
    # Read back the location just created
    location {
      __typename
      id
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAIBhAJwXwQElCkELcKBPAGWnyNOAB1SJKFRr0CjZm05RuxABQCSSkgGISAZRgAHLQBtWJCDAokxElgZQQSuMGBIoAFghIEUCOA4iLlb8UwtaMHQSPhA-czYAegBBACEyAEYAJgBmMJ8lNQARBABnYQIAIxcnF10uQmJMkgqZKqQQ-kFlVRIABQoIADcCMBc8iERDLQbcXSFid1QvEi0mQaRxgjzS51cGALYapUIUXQQQsJjyXAAzBAyW5T1cKEOSZtbWtU6evvEAcwd1rQg8vzEWrEKK6fA7G7-QGNR7AmGJAAsAFYAHQABjRCNSABpavgQgBaVIAdhRAA40clEiQAL4QunXBlKACUjxqagAStR7EU7gBrH7lSo8EgAKxgeRQQhE7jANTqsl4EIA+sqUKx5ktEBC+jUmbSBDSQDSgA)

If the operation is successful, the response will return the id of the created
location, as well as the \*\*typename. The id can be used for queries and
mutations related to that specific location, and the \*\*typename can be used to
determine the type of object returned.

Example Successful response:

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

You can also provide various information to store against your place.

- Place information embedded within the location

- Reference to a place provider where information can be kept up to date such as
  ATDW, Facebook, etc.

- Provide an 'external ref' attribute that can store the ID of a place within
  your platform that can be used to map on information from your platform

See More:

- [Adding Locations](/topics/itinerary/Location/Adding%20Locations/)

- [CreateItineraryLocationInput type](/reference#createitinerarylocationinput)

- [CreateItineraryLocationPayload type](/reference#createitinerarylocationpayload)

### Adding a Location from a Place Provider

Alternatively, you can associate the created location with a specific place
provided by various supported place provider (such as ATDW, Facebook etc). The
benefit to associating a created location with a place provider is that when you
query the itinerary, you can also load in information such as opening hours that
are kept up to date based on the place provider information.

This operation allows you to associate a place to a location in the itinerary.
In this example, we will be linking the location to The Farm Cafe using the ATDW
Product identifier.

```graphql
mutation CreateItineraryLocationWithAtdwPlace {
  createItineraryLocation(
    # Supply our Itinerary to add the item to
    itineraryId: "itinerary/ABC123"
    # Describe the location
    location: {
      # Provide some optional content to personalise the itinerary
      title: "Grab a coffee"
      synopsis: "Nearby, we can find The Farm Cafe open most days"
      # Link the location to a known place
      place: {
        # Referencing the place from ATDW
        id: "place/atdw:product:5f115dfde8f9b57738878350"
        # Providing the position lon/lat
        position: { lon: 145.0043, lat: -37.8021 }
      }
    }
  ) {
    # Read back the location just created
    location {
      __typename
      id
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAIBhAJwXwQElCkELcKBPAGWnyKQHUCUACwCCKMAHcACgBtcUBCWAAdUiShUa9Ao2ZtOUbsQAUKkmZIBiEgGUYABzvTWJCDAoktOls5QQSuMDASIQUBBDhgiFNzAW0mb1owdBIlEFivNgB6YQAhMgBGACYAZlTosysAEQQAZ3UCACMFEJJpLkJictb2nmTlVXNLEkkKCAA3AjAFGohEFzsOpFxpNWIUZBRIkjsmGaXpAhrmwVCGeLYus0IUaQRk1IBxZgb-VYAzN4QEMoHzGtYkBA7DVDvcQAA5agUBqsAA0JHECgMpDe2iCABUTiQAGIsCJkXCfebIEhwCA1TZgXCsGo-QYVEjsbQAa2CWLaBkWW1wJGZgPEpEccm+vzMQvkfUu5isACUEJ8qEgoNoAOZshTihRvUYRYToyq8KVmSZgzWZfASdB2UZgGBQFDoACsb3y+UdYDeUwAHG8AJwNR0AdkDxS9XsDXuKjoADHT6QyRuNJqr1dtybFiN0kJlZCgjWmQYs+lnkvkACyOgB00ejZeK8NzyQAtMVA5WvdHCvkSABfKV934DswASkUXVl1CCDTkrJaHMMpAAVjAKWoNOswF151z+vGAPp7lCsHZLRBSyZdIe9lQ9kA9oA)

The created location will be associated with the ATDW product
"5f115dfde8f9b57738878350" which is "The Farm Cafe". When you query the
itinerary you are able to build queries that can query various place information
such as addresses, categories, photos and more as provided by the provider.

See More:

- [Working with the ATDW](/topics/places/Place%20Providers/Working%20with%20the%20ATDW/)

## Testing Whether a Place is Present in an Itinerary

Before adding a location to an itinerary, you may wish to first check whether a
place is already present within the itinerary. This can be useful for creating a
button state on an "Add to Itinerary" button. If a result is returned, you can
indicate to the user that the place is already present in their itinerary, or
offer them the option to remove it.

You can use the "itinerary" query to check whether a place has been added to an
itinerary, and obtain the matching itinerary location ID. This can then be used
with the "deleteItineraryItem" operation to remove the location from the
itinerary.

Here is an example of how to use the "itinerary" query to check whether a place
is present in an itinerary:

```graphql
query CheckItineraryPlacePresent {
  itinerary(id: "itinerary/ABC123") {
    descendants(
      placeIds: ["place/atdw:product:5cae80be57a096cd7084b6ab"]
      first: 1
    ) {
      nodes {
        id
      }
      totalCount
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAMIAWCUA1gJIoCWS+AhoQAoA2zUCbeCAZ2QoiwADpIiRegyZ5WBABT0w6ImJAzGLQgHoAggCESARgBMAZg0BKURKlSwgnkjDNUAxfYdSADlx4aMAE1AG0Nf24EXWYUMAB3dF88CDAYKBR0AFYoZgQADgAGACMELIB2ZkKATgA2KDBywvyAFmLa5mKNAF1vHwAzejwBTKITPqJbcUkfIiRUwTsZ2ekwCakAX3WiFAgUZg4SCBhUCa2Z842QDaA)

If the operation is successful, the response will return the id of the location
that has the specified place associated with it, as well as the totalCount of
how many times the place is present in the itinerary.

Example Successful response:

```json
{
  "data": {
    "itinerary": {
      "descendants": {
        "nodes": [
          {
            "id": "itinerary/ABC123/location/DEF456"
          }
        ],
        "totalCount": 1
      }
    }
  }
}
```

See More:

- [Querying an Itinerary](/topics/itinerary/Querying%20an%20Itinerary/)

- [Checking if a place is within an itinerary](/topics/itinerary/Location/Checking%20if%20a%20place%20is%20within%20an%20itinerary/)

## Listing the Itinerary Locations

In order to list the locations that have been added to an itinerary, you can use
the "itinerary" query and select the associated itinerary locations using the
"children" selector. The query can also be paginated using the relay "cursor
connection" specification.

Here is an example of how to use the "itinerary" query to list the locations in
an itinerary:

```graphql
query QueryItineraryLocationsAsSimpleList {
  itinerary(id: "itinerary/ABC123") {
    children(type: ItineraryLocation, first: 10) {
      edges {
        node {
          id
          __typename
          ... on ItineraryLocation {
            place {
              id
              name
              address {
                locality
              }
              layers {
                name
              }
            }
          }
        }
        position: edgePositionNumber(type: ItineraryLocation)
        cursor
      }
      totalCount
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAIq6ECSKAlkvgIaEAy09NESAzgIKcDK1OAAcANgibVOKIsAA6SIkWo06eRgQAU1MOiKyQy2g0IB6bgCEAwgEYATAGZ9AShnzFiqAAtqIsHmQaKARCCLpURmrMrOxIADREAGbUeFK61gAMLnIK7ooIYADmCJyuObmKSBBgCKXl5dpude4A+s1BIUj0iI1NRAB0A0QcROGq6ixQbNTD2b25ovRQNbNzuQ1lq0Sd3Rur9GB+xSUrm+4irCLKBD2bAL43qyL0BPjHD5vbCO+997tNv6sAf9vkQhBBOIYOLp8kUAArgyFIABy8AARvhAsFQiMVMYCBMphwnCDYCkIHh3kDcigICh6CJLBAYKgbkDfrcQLcgA)

If the operation is successful, the response will return a list of itinerary
locations, in the structure of a GraphQL connection. Each location will include
information such as the place's ID, name, address and categories. The position
field will show the numbering of the result 1...X and cursor field will return
the cursor to pass back as the "after" property.

Example Successful response:

```json
{
  "data": {
    "itinerary": {
      "children": {
        "edges": [
          {
            "node": {
              "id": "itinerary/ABC123/location/DEF456",
              "__typename": "ItineraryLocation",
              "place": {
                "id": "place/atdw:product:56b23f9cb042386245d47ddb",
                "name": "Tallaringa Views",
                "address": {
                  "locality": "Alstonville"
                },
                "layers": [
                  {
                    "name": "Accommodation"
                  },
                  {
                    "name": "Apartments"
                  },
                  {
                    "name": "Cottages"
                  }
                ]
              }
            },
            "position": 1,
            "cursor": "eyJvZmZzZXQiOjB9"
          },
          {
            "node": {
              "id": "itinerary/ABC123/location/GHI789",
              "__typename": "ItineraryLocation",
              "place": {
                "id": "place/atdw:product:5f115e78abc0d44d5a0cd076",
                "name": "The Farm Cafe at the Collingwood Children's Farm",
                "address": {
                  "locality": "Abbotsford"
                },
                "layers": [
                  {
                    "name": "Food and Drink"
                  },
                  {
                    "name": "Produce"
                  },
                  {
                    "name": "Restaurant and Cafe"
                  }
                ]
              }
            },
            "position": 2,
            "cursor": "eyJvZmZzZXQiOjF9"
          }
        ],
        "totalCount": 2
      }
    }
  }
}
```

See More:

- [Querying an Itinerary](/topics/itinerary/Querying%20an%20Itinerary/)

## Removing a Location

In order to remove a location from an itinerary, you can use the
"deleteItineraryItem" mutation operation. This operation requires the ID of the
itinerary location you wish to remove.

Here is an example of how to use the "deleteItineraryItem" operation to remove a
location from an itinerary:

```graphql
mutation DeleteItineraryLocation {
  deleteItineraryItem(id: "itinerary/ABC123/item/DEF456") {
    id
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAIARBAGwRQQElCkEAnXZgTwBlp8jTgAOqRJgqNeoxZt2DBHAAUBMOhICQBSaw4B6AIIAhAMIBGAEwBmbRrnayAUQBiAFgCsANjUBKEoOEkSSkL+AL5CwSDBQA)

If the operation is successful, the response will return the ID of the itinerary
location that was removed. Please note that there is no undo option for this
operation and the location will be permanently removed from the itinerary.

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

If you are not planning on querying back the itinerary list or maintaining a
local representation, you can also read back the cascaded changes which provides
the option of reading back any other create/updated or deleted nodes that have
been affected by mutations.

## Changing the Title of a Location

To change the title of a location, you can use the updateItineraryLocation
mutation. The mutation takes in the ID of the location you wish to update and
the new title you want to set.

- You can also update a wide range of fields for the location.

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

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAIBVABzHwQElCkEAnXJgTwBlp8ikAVAigA2CEsAA6pEjCo16BRi3ZcoPYgApJJbSQJh0JcSEELmrNgHoAggCEAwgEYATAGYLQ7oWIWAIgFEAMQAWAFYANiMtHQ9VLyQDYBJCYQQDIwA5BAB3EgEUoxIAXyiASjEo7Ri1UgkpHV0wCp1kkSbiqXbCkEKgA)

See More:

- [UpdateItineraryLocationInput reference](/reference#updateitinerarylocationinput)

## Reordering Itinerary Locations

The API allows you to reorder the itinerary locations by using the
"moveItineraryItem" mutation operation.

To move an itinerary location to the start of the sequence, you can use the
following mutation:

```graphql
mutation {
  moveItineraryItem(
    id: "itinerary/ABC123/location/DEF456"
    positionAtStart: {}
  ) {
    item {
      id
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAJgAdUkuCANwQElCkEAnXVgTyYTgApKJISQJh0JciALM2HTgHoAggCEAwgEYATAGZ5AG2j4iSeQBEAogDEALAFYAbJMHCADhADO044pQBlPKwo4sAAvs4AlGTOQtK8UVTCImDRJGFUaSEgIUA)

Alternatively, you can move an itinerary location to a relative position to
another item in the itinerary by using the `positionAfterSibling`,
`positionAtEnd` or `positionBeforeSibling` properties in the mutation:

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

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAJgAdUkuCANwQElCkEAnXVgTyYTgApKJISQJh0JciALM2HTgHoAggCEAwgEYATAGZ5AG2j4iSeQBEAogDEALAFYAbJMHCADhADO044oBmKNgDKBABGegRIAObiwCSeoeERDGISUjLsXEpqWroGUEbE8gDiABIMAOwAHACckiQAvs4AlGTOQtK8LVTCImCt9c4NSHUgdUA)

These mutations allow you to reorder the itinerary locations in a flexible way,
whether it be moving them to a specific position or relative to other locations.
You can leverage this functionality to enable drag-drop functionality in your
application, making it easy for users to rearrange their itinerary as they see
fit.

Like other mutations, you can also read back cascaded changes to identify what
has been affected by your mutation.

See More:

- [Reordering Locations](/topics/itinerary/Location/Reordering%20Locations/)

## Turning on Auto-Routing

To turn on auto-routing for an itinerary, you can use the "updateItinerary"
mutation. This mutation allows you to modify an existing itinerary and specify
the autoRoute property. In this example, we are using the defaultMode property
of autoRoute to assign the default mode of transportation as Car.

```graphql
mutation UpdateItineraryAssignCarAutoRoute {
  updateItinerary(
    id: "itinerary/ABC123"
    itinerary: { autoRoute: { defaultMode: Car } }
  ) {
    itinerary {
      id
      autoRoute {
        defaultMode
      }
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAIBVABzHwQElCkEAnXJgTwEEBnLggcyQBhVhxwQAShBwISwADqkSMKjXoFGLdgAoFJPSQJh0JOSAINmrNgHoOAIUEBGAEwBmU7v3n1l9seAkuGKS0v4kYAgAZkEANigAshARxsJMJAC+GZ4AlLKeet4aVnmK+gZg+fpBKBJSKDLypWXhUbEJSQiVeumVPYp96SDpQA)

When this mutation is successful, the response will include the id of the
itinerary and the defaultMode that was set. This means that the auto-routing
feature has been turned on for this itinerary and the default mode of
transportation for the directions will be Car.

```json
{
  "data": {
    "updateItinerary": {
      "itinerary": {
        "id": "itinerary/ABC123",
        "autoRoute": {
          "defaultMode": "Car"
        }
      }
    }
  }
}
```

You can also specify other modes of transportation such as Foot, Bike, Hike etc.
or use advanced profiles like MountainBike, Bus, Motorcycle, Scooter etc.

Once auto-routing is turned on, the API will automatically generate directions
between the locations in the itinerary. The directions will include information
such as duration and distance estimates as well as providing map data for
rendering.

There are numerous other options available to customise the auto routing
behaviour, including:

- Specifying alternative modes of transportation between locations

- Adding waypoints to directions

It is also possible to change the mode of transport for the entire itinerary or
specify it at the point of creation.

See More:

- [Automatic Routing](/topics/itinerary/Directions/Automatic%20Routing/)

## Displaying an Itinerary with Matched Directions

Once you have enabled auto-routing on an itinerary, the itinerary will have
directions available for querying. You can use the "itinerary" query to access
the associated itinerary locations and the directions between each of the
locations.

Here is an example of how to query the itinerary locations with information
about the directions between each of the locations:

```graphql
query QueryItineraryLocationsWithDirections {
  itinerary(id: "itinerary/ABC123") {
    children(type: ItineraryLocation, first: 10) {
      edges {
        edgePositionNumber

        node {
          id
          __typename
          ... on ItineraryLocation {
            place {
              name
              address {
                locality
              }
              layers {
                name
              }
            }
          }
        }
        directions(first: 1, direction: Inbound) {
          nodes {
            durationMin
            route {
              segments {
                mode
              }
            }
          }
        }
        cursor
      }
      totalCount
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAIq6ECSKAlkvgIaEAy09NESAzgOrUoAWAEWp4EUdlyLAAOkiJE+tBoQAU1MOiLSQiunkYEA9AEEAQgGEAjACYAzNoCUU2fPlR+1ADZhRSFSgIABwRNKiV9ZlYJABoiADMRThRNSwAGJxk5V3kEMABzBE5nLOyc-IQABQhORQ4AOXgAI3xZF1L5JAgwBGL27PU2vqIAfWGA4KR6REG+gDp5og4iML0DFig2aiXMoezAz3ooHp3d7MnpktOiejAfQqKTq9dPVk8+AhnTgF9P3YOCfAPX6nc4IYF9H6XIaQ77gmF9MAiMQSTgqBJ4JIpWKI0TiLZIUJIRoQGBIMAZcEdLqFXpXMAwfQSACytEprjwJJQxzZ2U4CDyiFQQKhVzg1J5rnhsJF2SlpTl2VgGIgeF+CqIKAgKHonnMJNQM3hkK+IC+QA)

If the operation is successful, the response will return a list of itinerary
locations, with information about the directions between each of the locations.
The response will also include the total number of locations in the itinerary,
as well as a cursor that can be used for pagination.

In the response, you will get the name, address and the type of the place you
added to the itinerary. And also the duration and the mode of transport you will
use to travel between the locations.

It is also possible to search for directions inbound and outbound against each
of the locations. There are numerous ways that you can query in directions and
has an entire topic dedicated to understanding querying itineraries and
stops/directions.

See More:

- [Querying an Itinerary](/topics/itinerary/Querying%20an%20Itinerary/)

- [Matching Directions](/topics/itinerary/Querying%20an%20Itinerary/Matching%20Directions/)

## Making a Stop Optional

In order to update an itinerary location and mark it as an optional stop, you
can use the "updateItineraryLocation" mutation operation. This operation
requires the ID of the itinerary location you wish to update and the new value
of the "optional" field.

Optional will remove the location from the path on auto-routing, and instead
directions will link to a prior non-optional stop.

Here is an example of how to use the "updateItineraryLocation" operation to mark
a location as an optional stop:

```graphql
mutation UpdateItineraryLocationAsOptional {
  updateItineraryLocation(
    id: "itinerary/ABC123"
    location: { optional: true }
  ) {
    location {
      optional
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAIBVABzHwQElCkEAnXJgTwBlp8ikBBAM4B5CoWK4ANiWAAdUiRhUa9AoxbsuUHsQAUckgZIEw6EjJAEGzVmwD0fAEIBhAIwAmAMzn9hidzFIpsAkEKK8kqYoTDAIJAC+PgCU0j4GfloBKfKGIWHiEqnxPglIcSBxQA)

This operation accepts variables for the ID and optional field, where you can
pass in the actual values for the location ID and whether the location is
optional or not (True/False).

If the operation is successful, the response will return the updated location,
with the "optional" field now set to the new value. You may also see what else
has been affected, such as a result of the autoroute behaviour updating new and
existing ItineraryDirections when using this feature, this is returned in the
cascaded field.

See More:

- [Automatic Routing](/topics/itinerary/Directions/Automatic%20Routing/)

## Adding a Place of Interest for a Location

Once you have created an itinerary, you can start adding locations to it. One
way to structure locations is to create a hierarchy of associations between
them. For example, you can create a top-level location and then add places of
interest under it.

To add a location as a place of interest, you can use the
"createItineraryLocation" mutation. This mutation allows you to create a
location within an itinerary and specify its position.

Here is an example of how to use the "createItineraryLocation" mutation to
create a place of interest under a top-level location:

```graphql
mutation CreatePlaceOfInterestLocation {
  createItineraryLocation(
    itineraryId: "itinerary/ABC123"
    location: {
      title: "My Place of Interest"
      place: { position: { lon: 144, lat: -37 } }
      positionAtEnd: { parentId: "itinerary/ABC123/location/DEF123" }
    }
  ) {
    location {
      id
      __typename
      parent {
        id
        __typename
      }
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAIBhAJwXwQAUAbXKBAeQDMBJVBKgZxQAy0fEVLAAOqRJQqNDoSQ9cFAJ5CoI4gApJJPSQIKlqjmHQlxIQwUUVlKgPQBBAEJkAjACYAzJd376YUJicwkpfRJCFHoEc0sAWRUSBiYEEgg2Ei4UHgR+P3D9AAdGZlCSIoheaxCSYBJApHN3ABYWgBoG-HMAWm8AdhIAX2H-CMrq4KQnFABRJDM6iuVkFFM4qyM7VWc3L28HQI0phwARWYAxfctRwqH-AEo6sYag0WfCvQIwF70AfT+KBURWQuEQv2WVFQHwiEW+EP+gOBoPBn1uEXuUkxQxAQyAA)

The parentId field in the positionAtEnd argument specifies the top-level
location under which the place of interest will be created. The response will
include the id and \*\*typename of the created location, as well as the id and
\*\*typename of its parent location.

See More:

- [Places of Interest](/getting-started/itinerary/Managing%20a%20Trip/)

## Displaying an Itinerary on a Map

Alpaca uses the Web Mercator projection (EPSG:3857/WGS 84) as the default
coordinate reference system. This is a popular projection used by most web
mapping technology.

As a core focus of the Alpaca Itinerary structures is to support content to be
presented on maps, Alpaca provides a wide range of geographic information that
can be stored and accessed via the GraphQL API. The data can be used with
various mapping clients, such as desktop mapping software like QGis, or with
popular website mapping clients like Mapbox, Google Maps, Leaflet, or Pigeon
Maps.

Alpaca also provides various mapping services, which are documented here:
<https://github.com/AlpacaTravel/mapping-docs>.

To display an itinerary on a map, you can use the
"listItineraryLocationsWithItineraryDirections" query. This query allows you to
obtain the longitude and latitude for each stop, as well as the polyline for
directions to each stop. Here is an example of how to use the query:

```graphql
query listItineraryLocationsWithItineraryDirections {
  itinerary(id: "itinerary/ABC123") {
    children(type: ItineraryLocation, first: 2, after: null) {
      edges {
        edgePositionNumber
        node {
          id
          __typename
          ... on ItineraryLocation {
            position {
              lon
              lat
            }
            place {
              id
              __typename
              name
            }
          }
        }
        directions(first: 1, direction: Inbound) {
          nodes {
            id
            __typename
            durationMin
            route {
              segments {
                mode
                # Polyline, Geojson etc
                polyline
              }
            }
          }
        }
      }
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABADYCWAzigJIplL4CGhAMtI3REhQOpkoALWvSaEAImTwIonbkWAAdJESL8ReZgQAUZMOiIKQahhsIB6AIIAhAMIBGAEwBmQwEp5SlSqgCyJMFJIWigEAA4I+sImmmxQHGRcADREAGaSVPoOyYwpKPj6SDAkJO6Kyl4qCGAA5ggUHuUVlTUIAAoQFGpcAHLwAEb4nk0qSBBgCA3DFbpDU0QA+vMh4UiMiLNTAHTbRFxEUaIEsfF7ZXMVoR1dymfnFSRcG3ckHE9TAL5vw6EvUBO3dxUM0agMWy2QawQXymq3WILmn3hTURCOhYEk0lkFC0aTwGSIdmS6KkMgSSEiSD6EBgSDApWhIzGdUmgOBgIWSzCELh7LAMA0sgAsvQGV48NS8iz2RQENVEKh6gD2UQ4EzRcMAMREdokAjkBjJADiCAgACsKHsECgoOqmpddfqoUjUc7kaKUR83h6KigIChGCQbNTUG9QoxatQkCkIFKmgJGBRuggAB4oVrhp1zZBgGz8i14L0bD2I94gd5AA)

If the query is successful, the response will be similar to the following:

```json
{
  "data": {
    "itinerary": {
      "children": {
        "edges": [
          {
            "edgePositionNumber": 1,
            "node": {
              "id": "itinerary/ABC123/location/DEF456",
              "__typename": "ItineraryLocation",
              "position": {
                "lon": 144.9970825017,
                "lat": -37.803058481
              },
              "place": {
                "id": "place/atdw:product:56b23f9cb042386245d47ddb",
                "__typename": "Place",
                "name": "Tallaringa Views"
              }
            },
            "directions": {
              "nodes": []
            }
          },
          {
            "edgePositionNumber": 2,
            "node": {
              "id": "itinerary/4JhglLgOoo8zlx2yTQK3fq/location/71KzPu21YqJETG5RVnEQ0g",
              "__typename": "ItineraryLocation",
              "position": {
                "lon": 145.0043,
                "lat": -37.8021
              },
              "place": {
                "id": "place/atdw:product:5f115e78abc0d44d5a0cd076",
                "__typename": "Place",
                "name": "The Farm Cafe at the Collingwood Children's Farm"
              }
            },
            "directions": {
              "nodes": [
                {
                  "id": "itinerary/4JhglLgOoo8zlx2yTQK3fq/directions/6AcdRsWojtzzZTDbRcewrb",
                  "__typename": "ItineraryDirections",
                  "durationMin": 2.8942833333333335,
                  "route": {
                    "segments": [
                      {
                        "mode": "Car",
                        "polyline": "flveFiw~sZ}Ec@eEUiCSl@_Nj@{LdD^bC{L"
                      }
                    ]
                  }
                }
              ]
            }
          }
        ],
        "totalCount": 2,
        "pageInfo": {
          "hasNextPage": false,
          "endCursor": "eyJvZmZzZXQiOjF9"
        }
      }
    }
  }
}
```

See More:

- [Mapping](/topics/itinerary/Mapping/)

- [Alpaca Travel Mapping Service](https://github.com/AlpacaTravel/mapping-docs)

# Advanced Topics

The Alpaca Travel GraphQL API offers a wide range of capabilities for developers
to build interactive travel itineraries for their customers. While the above
guide covers many of the most common use cases, there are a number of additional
features and capabilities that may be of interest to advanced users.

- **[Storing Custom Data](/topics/itinerary/Additional%20Concepts/Custom%20Data/)**
  Learn how to store and retrieve custom data fields for itinerary locations or
  places.

- **[Working with ATDW](/topics/places/Place%20Providers/Working%20with%20the%20ATDW/)**
  Learn how to associate itineraries with products from the Australian Tourism
  data warehouse

- **[Working with Drafts](/topics/itinerary/Additional%20Concepts/Drafts%20and%20Publishing/)**
  Understand how to create and manage drafts of itineraries before publishing
  changes

- **[Advanced Routing](/topics/itinerary/Directions/Searching%20for%20routes/)**
  Learn how to use advanced routing features, such as avoiding tolls or ferries,
  or optimizing for different modes of transportation.

# Further Reading

- [Example Itinerary Operations](/example-operations/itinerary/)

- [Other Itinerary Topics](/topics/itinerary/)

- [Alpaca Travel GraphQL API Schema Reference](/reference/)
