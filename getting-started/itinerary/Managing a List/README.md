# Managing a Curated List of Locations

> This guide provides developers with the knowledge to create and read from
> curated lists on the Alpaca Travel Platform. By following this guide,
> developers can build integrations that manage and access lists of locations on
> the platform.

This guide is intended to provide developers with a comprehensive understanding
of how to use the Alpaca Travel GraphQL API to create and manage lists of
places. The guide covers the complete lifecycle of creating and managing lists,
including step-by-step instructions for common operations such as creating
lists, adding locations, and working with place providers.

The guide covers both GraphQL queries and mutations, providing developers with
the complete set of tools to create and manage lists with the Alpaca Travel
platform. The guide is intended to be a simple reference that developers can use
when they are first getting started with the Alpaca Travel API and are working
on their projects, so they can easily understand the different GraphQL
operations they need to create a list and manage it.

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

- - [Creating a List](#creating-a-list)

    - [Defining the Basic Structure of an itinerary](#defining-the-basic-structure-of-an-itinerary)
    - [Setting the Title and Default Locale](#setting-the-title-and-default-locale)
    - [Indicating if a List is Ordered or Unordered](#indicating-if-a-list-is-ordered-or-unordered)
    - [Storing your own References](#storing-your-own-references)
    - [Retrieving the List](#retrieving-the-list)

  - [Adding and Removing Locations to an List](#adding-and-removing-locations-to-an-list)

    - [Adding a Location Directly to an Itinerary](#adding-a-location-directly-to-an-itinerary)
    - [Adding a Location using a Place Provider](#adding-a-location-using-a-place-provider)
    - [Storing your own References](#storing-your-own-references-1)
    - [Testing whether a place is present in a list](#testing-whether-a-place-is-present-in-a-list)

  - [Listing the Locations in a List](#listing-the-locations-in-a-list)

  - [Removing a Location from a List](#removing-a-location-from-a-list)

  - [Reordering the List](#reordering-the-list)

  - [Updating Content](#updating-content)

    - [Location Content](#location-content)
    - [Itinerary Content](#itinerary-content)

  - [Sharing a List](#sharing-a-list)

- [Further Reading](#further-reading)

## Creating a List

In this section, we will go over the steps to create a new itinerary using the
Alpaca Travel GraphQL API. We will cover the following topics:

- Defining the basic structure of an itinerary

- Setting the title and default locale

- Adding attributes to the itinerary

- Retrieving the created itinerary

### Defining the Basic Structure of an itinerary

An itinerary is the main structure that contains the list of locations that the
user wishes to visit. The itinerary can have different types, such as a simple
list, a trip, or a trail. To create an itinerary, we need to define the basic
structure of the itinerary.

The following GraphQL mutation can be used to create an itinerary:

```graphql
mutation CreateItinerary {
  createItinerary(
    itinerary: {
      # Initial content
      title: "List of Recommended Places"
      # Some additional recommended but not required fields
      defaultLocale: "en"
      attrs: [
        # Provide hints about the type of itinerary (e.g. list, trip, trail)
        # Can be omitted or added later
        { id: "itinerary/type", value: "list" }
      ]
    }
  ) {
    itinerary {
      id
      created
    }
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/) |
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAIBhAJwXwQElCkELcKBPE4AHVJKipvoFGzNgApuJSSQIMmLVug4SpkgMQlaSGQVwAbXsRTIUylYRS6EiziAAyBAM4oSEAGYkASgigQ4iJGAIYCQACrq4UAgONqZS6gDKvggkuGBg2sR6JFQ+fsiBwQBGOCRIEM5UAI4wBFTBrgQIumDRPCqBrrgwuii20HpWJDbIMW1S+CgUDooA2rEq6iEUEABuBIEkABZCKA4phRAlKJvJKKwADslu0rIi7KIIAHQA5o8kuo4oADQkkwTnP0muAIugAlPM4uRcKRClc4DIjMEIBQUmkgu8aBQIZJgNIwNYQNphPIAPRnS42H4rPQwQY2D5OGwkAC+EIAurFWTxQUoxkS5GxeSpJOsIXxqIjOcoucyQMygA)

If successful, the expected response will be:

```json
{
  "data": {
    "createItinerary": {
      "itinerary": {
        "id": "itinerary/ABC123",
        "created": "2022-10-15T12:00:00Z"
      }
    }
  }
}
```

In this example, the `createItinerary` mutation has been successfully executed,
and the server has returned the ID and creation date of the newly created
itinerary. The `id` field will be used to reference this itinerary in future
operations, such as adding locations or modifying its attributes. The created
field indicates the date and time when the itinerary was first created.

### Setting the Title and Default Locale

When creating an itinerary, it is important to provide a title and default
locale for the itinerary. The title is a brief summary of the itinerary and it
will be used to identify the itinerary for users. The default locale is the
language that the itinerary is written in and it will be used as the default
language for the itinerary.

```graphql
mutation CreateItinerary {
  createItinerary(
    itinerary: {
      title: "List of Recommended Places"
      defaultLocale: "en"
      attrs: [
        # Provide hints about the type of itinerary (e.g. list, trip, trail)
        # Can be omitted or added later
        { id: "itinerary/type", value: "list" }
      ]
    }
  ) {
    itinerary {
      id
      created
    }
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/) |
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAIBhAJwXwQElCkELcKBPE4AHVJKipvoFGzNgApuJSSQIMmLVug4SpkwigA2CRZxAAZAgGcUJCADMSAJQRQIcREjAIwJAArrcUBAZ3KVj07gw6ii60Lia2iDIPjwq+CgUBooA2r4qJADErhQQAG4EjiQAFkIoBiS4AEYQOCQoRQh1rAAOjWbSsiLsoggAdADmvSTqhigANHUUBM0TCbgE6gCUaSpZZLiklW1wMihOJhQVYI7O7nsUK1LA0mCRMkJybAD0KC0IOhO54TBaJDojRh0JAAvpcALppUE8RZKWIdB5dWHpG6XPjUPZgSHKKHAkDAoA)

The above mutation will create an itinerary with the title "List of Recommended
Places" and the default locale "en". The response will return the id and created
timestamp of the newly created itinerary.

You can also use the updateItinerary mutation operation to update the title and
defaultLocale of an existing itinerary.

```graphql
mutation UpdateItinerary {
  updateItinerary(
    id: "itinerary/ABC123"
    itinerary: { title: "Liste des lieux recommandés", defaultLocale: "fr" }
  ) {
    itinerary {
      id
      title
      defaultLocale
    }
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/) |
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAIBVABzHwQElCkEAnXJgTxOAB1SSYqa9AoxbsAFDxJSSBMOhJcQBBs1ZsA9AEEAQgGEAjACYAzIsnTlw1e3nAShFABsE8xQBkCAZxQISYBJ4kjgQIMAAeJEwIUBBwcLhIYACXnooANH4IAGa4MI4obtC4zq4gWUyKJAC+5gCUnOZSliJqDbzSMmCN0g7O3VL+OXkFRX3t1eY1SFUgVUA)

### Indicating if a List is Ordered or Unordered

When creating a list, you may want to indicate whether the list is ordered or
unordered. An ordered list implies that there is a specific order to the items
on the list, while an unordered list implies that the items on the list have no
specific order.

To indicate if a list is ordered or unordered, you can use the
`itinerary/list-presentation` attribute when creating the list. The attribute
can be set to either "ordered" or "unordered", depending on the desired
presentation of the list.

For example, the following GraphQL mutation sets the
`itinerary/list-presentation` attribute to "ordered" when creating a new list:

```graphql
mutation CreateOrderedList {
  createItinerary(
    itinerary: {
      title: "My Top 10 Destinations"
      attrs: [{ id: "itinerary/list-presentation", value: "ordered" }]
    }
  ) {
    itinerary {
      id
    }
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/) |
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAIBhAJwXwQHkKwEqwAZAgZxROAB1SSoVGgElCSJrgoBPABR8SCkgTETp6bvMULCKADYJ1PEAFkpJACoQADiQCMABhIARBJwJJ8RJOyOat+FAp2dQBtYCUwQxBld1UpAHpdDhQAWisqdmQ8QmIjABoSADdcXRgDEiMIBiYEMCMSAF8AXT9GzQBKDX4FGPEKSTNebsUCOuGGzQmkBpAGoA)

Similarly, the following GraphQL mutation sets the `itinerary/list-presentation`
attribute to "unordered" when creating a new list:

```graphql
mutation CreateUnorderedList {
  createItinerary(
    itinerary: {
      title: "My Favorite Places"
      attrs: [{ id: "itinerary/list-presentation", value: "unordered" }]
    }
  ) {
    itinerary {
      id
    }
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/) |
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAIBhAJwXwQFUkIKwEqwAZAgZxROAB1SJKFRoBJQkha4KATwAUAkkpIEJU2el6LlSwigA2CTXxABZGSQBiuAG6NVCEgAV9uKAk4ntO-CgqdNAG1gFTBjEFUCSQppGQB6fS4UAFoABypOZDxCYhMAGhIbXH0YIxITGAYmFgQwExIAXwBdb0btAEotQSVI6NiunR667rbBBoEGkAagA)

It is important to note that when creating a list, you should consider whether
the order of the items on the list is important or not. If the order is
important, such as in a top 10 list where the order may imply significance, you
would want to indicate the list as ordered. On the other hand, if the order is
not important, such as in a list of bookmarks or suggestions without implying
any hierarchy, you would want to indicate the list as unordered.

By indicating whether a list is ordered or unordered, you can ensure that the
list is presented in the most appropriate way for your users.

### Storing your own References

You may also want to store your own identifiers against the list using the
attributes `custom/external-ref` and `custom/external-source` as well as other
custom data attributes.

This could be useful to store an important identifier that relates to your
application.

See More:

- [Custom Data](/topics/itinerary/Custom%20Data/)

### Retrieving the List

To retrieve the basic structure of a list, you can use the `itinerary` query and
provide the list ID. This will return the list's ID, title, default locale,
created and modified timestamps, as well as the number of items in the list.

```graphql
query GetList {
  itinerary(id: "itinerary/ABC123") {
    id
    title
    defaultLocale
    created
    modified
    type: attrValue(id: "itinerary/type")
    presentation: attrValue(id: "itinerary/list-presentation")
    listItems: children(first: 0) {
      totalCount
    }
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/) |
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAOIIoAyAlgM4pHAA6SRRVKVS+AhoQBRUw6IoxDtOPQgHoAggCEAwgEYATAGZRASgbNWrQbr0cUAGwSHWYBADNuME5WjczFolDwJuKBGFdwIYFTWVD6uKAQADgjCXih4AGrOuAJCImIcXHi8BFLhUVquER40yCheVBBIMShxiSbJgsKi4pnZUia0KAC0RQglqOWVBSx6HXQAkt5wNMJQABZUJmAeSHzBeHTCAAzaTCN6RCgQZSYKEDCorgC+hjdIVyBXQA)

Expected Result:

```json
{
  "data": {
    "itinerary": {
      "id": "itinerary/ABC123",
      "title": "My Favorite Places",
      "defaultLocale": "en",
      "created": "2022-09-18T21:45:13.640Z",
      "modified": "2022-11-30T11:40:53.103Z",
      "type": "list",
      "presentation": "unordered",
      "listItems": {
        "totalCount": 0
      }
    }
  }
}
```

You can also retrieve the list items by using the children field of the
itinerary query and providing a limit to the number of items to retrieve. The
`totalCount` field in the response will indicate the total number of items in
the list, even if not all of them were retrieved in the current query.

## Adding and Removing Locations to an List

Managing the locations within an itinerary is an important aspect of creating an
engaging and useful itinerary for your users. The Alpaca Travel API provides a
number of GraphQL operations that allow you to easily add, remove, and reorder
locations within your itineraries.

In this section, we will cover the following:

- Adding a location directly to an itinerary

- Adding a location using a place provider

- Removing a location from an itinerary

### Adding a Location Directly to an Itinerary

When you want to add a location to your itinerary that does not have an
associated place provider, you can add the location directly to the itinerary.
In this case, you need to provide the title and longitude and latitude of the
location to the `createItineraryLocation` mutation.

Here is an example of how you can add a location directly to an itinerary:

```graphql
mutation {
  createItineraryLocation(
    itineraryId: "itinerary/ABC123"
    location: {
      title: "Eiffel Tower"
      synopsis: "An iconic place of interest"
      place: { position: { lon: 2.2944, lat: 48.8584 } }
    }
  ) {
    location {
      id
    }
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/) |
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAJgAdUkqAJwXwQElCkEbcaBPAGWnyKQAKSiVEkCLNh06Mw6EuRASCrdlwD0AQQBCAYQCMAJgDMikWIA2fQsXkUqYkoRQWE8xQFECAM28ILJAAqEADubGYOYgDOnEgQAA5RBFHuIJqkBFDEmSTxFrhQCCQQ3uKobAhRKBGOonkFbmS5EEk2SHYkVu0khgB0hgCcACxDADSd+PJDABy90wCs00MkAL6r5qIr5gCUZBud1gJ7kaIEYPtbVJcrICtAA)

In the above example, we are adding the location "Eiffel Tower" to the itinerary
with the ID "itinerary/ABC123". The longitude and latitude of the location is
provided in the `position` field of the `place` object.

If the mutation is successful, the server will return the ID of the newly
created location, as seen in the `location` field of the response.

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

Various information about the location can be stored against the location.

It is important to note that when adding a location directly, you will not have
access to additional information about the location from a place provider. If
you want to add a location with more information, you can use a place provider
as described in the next subsection.

### Adding a Location using a Place Provider

When adding a location to your itinerary, you have the option to associate the
location with a place provider. This allows you to access additional information
about the location, such as photos, ratings, contact information, addresses,
website and social URL's or other information that is available from the place
provider.

Alpaca supports a number of place providers, including OpenStreetMap/WikiData,
GeoNames, OpenAddresses, Facebook, and Australian Tourism Data Warehouse. Each
provider has their own unique identifier format for a place, so make sure to use
the correct format when creating a location.

For example, to add a location to your itinerary and associate it with a place
on Facebook, you can use the following mutation:

```graphql
mutation CreateItineraryLocationWithFacebookPlace {
  createItineraryLocation(
    itineraryId: "itinerary/ABC123"
    location: {
      title: "Visit Mavis The Grocer"
      synopsis: "A great place to grab a breakfast and a coffee"
      place: {
        id: "place/facebook:page:mavisthegrocer"
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

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/) |
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAIBhAJwXwQElCkELcKBPAGWnyKQHUCUACwBiuKAgBGECAGsACgBsxCEsAA6pElCo16BRszaco3YgAoNJKyQH6mLVrTDoSakLYMOA9AEEAQmQAjABMAMxultYKXITELuqa1iSEKAoILm4AagQAzgIkALK4AG65JAAqgioA4hTQTBGJ1jmsSBAADnk5GSA+JADmOigk7UriyRADzBIkuCQSOjIAZrg5w7hIYLNaEEtLCAiNSVajyvGRxzbOriCn4l4r4lKy6O24-elwJblCCIP1FCOlxGEDysSQ8RI0QhJECABYAKwAOgADCi4aEADRQ-AuAC0oQA7EiABwo4KBEgAXwu1hpTXpVgAlKpadETODWU0rAB9HkoVjtZC4RC0qwEMC0xnUjRUkBUoA)

In this example, we are using the Facebook place ID
"place/facebook:page:mavisthegrocer" and providing a fallback position of
`lon: 145.0043`, `lat: -37.8021`. When querying the itinerary, the position from
the place provider will be used if available.

It's also worth noting that you can leave the place.id field empty, and instead
you'll need to supply all the information about the place directly.

Using a place provider can be especially useful when you want to show additional
information about the location, such as photos, ratings, or contact information,
to your users. It also allows you to easily update the information about the
location in case the place provider updates their data.

See More:

- [Using OpenStreetMap (a free place provider)](/topics/places/Working%20with%20OSM/)

- [Using Australian Tourism Data Warehouse](/topics/places/Working%20with%20the%20ATDW/)

### Storing your own References

In addition to linking locations to places provided by external providers, you
may also want to store your own ID's against a location in your itinerary. To do
this, you can use the special custom attributes `custom/external-ref` and
`custom/external-source`.

The `custom/external-ref` attribute accepts a string value, which should be a
unique identifier per record. The `custom/external-source` attribute is used to
attribute the identifiers to a source. This attribute should be common across
all your locations and differentiate between different source locations you may
have.

Here's an example of creating an itinerary location with external references:

```graphql
mutation CreateItineraryLocationWithExternalReferences {
  createItineraryLocation(
    itineraryId: "itinerary/ABC123"
    location: {
      title: "Eiffel Tower"
      place: { position: { lon: 2.2944, lat: 48.8584 } }
      attrs: [
        # Use the special custom attributes for linking to your identifiers
        { id: "custom/external-ref", value: "12345" }
        { id: "custom/external-source", value: "site" }
      ]
      # Other extended fields can be stored against a location
      websiteUrl: "https://mywebsite.com/places/eiffel-tower"
    }
  ) {
    location {
      id

      externalRef: attrValue(id: "custom/external-ref")
      externalSource: attrValue(id: "custom/external-source")

      websiteUrl
    }
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/) |
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAIBhAJwXwQElCkELcKBPAGWnyKQHUCUACwCiADxRMkuADYAlBADMmyKAgDOJYAB1SJKFRr0CjZm05RuxABQ6SdkgONMWrWmHQktIRyZcB6AEEAITIARgAmAGYvW3tpLkJiD21dexJCFGkEDy9hAgUlaRIAFQgAdyYY1PsAB2lcVWSSGog1RyTNEnikD3CAOnCATgAWYYAaLvwPYYAOPpmAVhnhkgBfNdi0-BQKNQ8AbU20kgBiEgBVNQR0wWu1GoQoAhk9GDUUCDgSbYoCACMcOoSAoIBQusYANbGADm6QgJFYEBgYIIYGQhAUBCYaiOaWADncnhAsHenz8CHEkhkAFoqAovBMAG4yGDZIkRSLDBZeDbVPEEnLEt4fODkykUKTSalqJEUVQMkjM6SswVtCQ81a4kgAXS1ZwA8kImCQKRIkGiwMCsdIwBoLKQ-ncPlRLbhobhjO9vl0EjwtRU-mqEOcKNJBYIUCgans-H44KwA0G+lAyXUGupyflCtSPhUKFU0prdABKTRHeIWRKkFLHAk6LWmqlyRQeH4ANRZCCsqMFJJFYokEppdK8xYb4slAGVZY1vpGKB3lV2e0S+2TG0OpTLkfKQGOkP6EIGBMHQ0ci3Yi6sQKsgA)

With this example, the Alpaca platform will return the external reference ID's
that you can then use to map your own place information outside of the Alpaca
Travel GraphQL API call.

The Alpaca Data Structure enables a wide range of predefined fields for you to
provide and store with your location. You can also store extended data outside
of this set.

See More:

- [Custom Data](/topics/itinerary/Custom%20Data/)

### Testing whether a place is present in a list

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

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/) |
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAMIAWCUA1gJIoCWS+AhoQAoA2zUCbeCAZ2QoiwADpIiRegyZ5WBABT0w6ImJAzGLQgHoAggCESARgBMAZg0BKURKlSwgnkjDNUAxQAcuPGmAE1AG0NH24EXXMrEABdABoiADN6PAEUNRNbcUkHKSQIJwE7HNypFXtSgF8K3JQIFGYOEggYVBqiapzOypBKoA)

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

Here is an example of how to use the `itinerary` query to list the locations in
a curated list:

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
              # Use this to draw the list on to a map
              position {
                lon
                lat
              }
              # Example drawing basic information from a place provider
              id
              name
              contact {
                facebookUrl
                instagramUrl
              }
              address {
                addressLineOne
                locality
              }
            }

            # Othere references you have stored against your list
            externalRef: attrValue(id: "custom/external-ref")
            websiteUrl
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

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/) |
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAIq6ECSKAlkvgIaEAy09NESAzgIKcDK1OAAcANgibVOKIsAA6SIkWo06eRgQAU1MOiKyQy2g0IB6bgCEAwgEYATAGZ9AShnzFiqAAtqIsHmQaKARCCLpURmrMrOxIADREAGbUeFK61gAMLnIK7ooIYADmCJyuObmKSBBgCKXl5dpude4A+s1BIUj0iI1NRAB0A0QcROGq6ixQbNTD2b25NChiPXOcBJVCnJLLvUL+Cfj+YACy+dT0tXO5-pwQMHhQNbOX5QN9QwonYGcUcPRFF89yncRBoAEbFFAAMWUugA2rZ0ul4gj0gBdJzbQFESZCGKYwFQCBCAh4agFTwofHPegiFAAFQQAA9KWUsQBfKl1Dms3rcwGiegPAHPADERAAqpwaihvCUUBAiH56AB3IgymoiSTSYbyojnX5CTnlIQQTYxYWAkQcI11ERsG3uPlYsUAUUZXVENSVytoBSIoPomygSiQCQgeF+5oSeAgcD1RAFQt2EAAbtp8A7FA0eXNOt0c71CahBdInljEoKEKCIBAANbivAiTPuWhSP5qOANpsFppOwH0MB+YolMtYgdDzicCR0ADydGbiitk01QWbfbm3IdYpn6v8RD2+GQDxKBFuRE89BTNSk4fyeoK9Fb0lPdyImqkDqZKHwnREACUEASXQ2BQPAADUaVwLQdD0EBYBvOATC-H8aQAWj2ZwHWVKszQQLsjXXXJCPcE0zWmJBdHyIoAAVTUMDgADl4HBPAqVgFJw0xYj5RQGlLFuVBlidbk2RANkgA)

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
locations. This will allow you to paginate through the results and display them
in chunks to the user.

Note that the `place` object contains the position field which is the location
of the place on map with lon and lat which could be used to show the places on a
map.

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

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/) |
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAIARBAGwRQQElCkEAnXZgTwBlp8jTgAOqRJgqNeoxZt2DBHAAUBMOhICQBSaw4B6AIIAhAMIBGAEwBmbRrnayAUQBiAFgCsANjUBKEoOEkSSkL+AL5CwSDBQA)

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

## Reordering the List

After you have added multiple locations to your list, you may want to change the
order of those locations. The Alpaca Travel API allows you to reorder the
locations within a list by using the "moveItineraryItem" mutation operation.

The `moveItineraryItem` mutation takes an `id` parameter, which is the ID of the
itinerary location to be moved, and a `positionAtStart`, `positionAfterSibling`,
`positionAtEnd` or `positionBeforeSibling` property that specify the location in
the itinerary that the item should be moved to.

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

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/) |
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAJgAdUkuCANwQElCkEAnXVgTyYTgApKJISQJh0JciALM2HTgHoAggCEAwgEYATAGZ5AG2j4iSeQBEAogDEALAFYAbJMHCADhADO044pQBlPKwo4sAAvs4AlGTOQtK8UVTCImDRJGFUaSEgIUA)

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

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/) |
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAJgAdUkuCANwQElCkEAnXVgTyYTgApKJISQJh0JciALM2HTgHoAggCEAwgEYATAGZ5AG2j4iSeQBEAogDEALAFYAbJMHCADhADO044oBmKNgDKBABGegRIAObiwCSeoeERDGISUjLsXEpqWroGUEbE8gDiABIMAOwAHACckiQAvs4AlGTOQtK8LVTCImCt9c4NSHUgdUA)

These mutations allow you to reorder the itinerary locations in a flexible way,
whether it be moving them to a specific position or relative to other locations.
This can be used to enable drag-and-drop functionality in your application,
making it easy for users to rearrange their itinerary as they see fit.

Like other mutations, you can also read back cascaded changes to identify what
has been affected by your mutation.

It is also possible to specify the position of the location when you are
initially creating the location. The same position properties are available
using the `createItineraryLocation` method.

## Updating Content

Your list can have content attached to both the itinerary as well as the
individual locations appearing in your list.

### Location Content

Once you have added locations to your list, you may want to update the title of
a location. This can be done using the `updateItineraryLocation` mutation. The
mutation takes in the `id` of the location you wish to update and the new
`title` you want to set.

- Title

- Synopsis and Descriptions

- Tags, Read More URL and Website URLs

- Media (Contained in a [seperate guide](/topics/media/))

- Place information and extended Attributes

You can provide this content when you are initially creating the location using
the `createItineraryLocation` mutation, or alternatively use the
`updateItineraryLocation` mutation to provide or update these values later.

```graphql
mutation UpdateItineraryLocationContent {
  updateItineraryLocation(
    id: "itinerary/ABC123/location/DEF456"
    location: {
      # Various standard fields, see "UpdateItineraryLocationInput" type
      title: "Eiffel Tower"
      synopsis: "A short summary for the location"
      description: "Markdown formatted description for the location"
      # Extended attributes
      upsertAttrs: [
        { id: "place/website-url", value: "https://www.toureiffel.paris" }
        {
          id: "place/facebook-url"
          value: "https://www.facebook.com/EiffelTower.OfficialPage"
        }
      ]
      # You can remove values using the deleteAttrs
      # example value: [{ id: "place/website-url" }]
      deleteAttrs: []
    }
  ) {
    location {
      id
      # Read back updated values in the response
      title
    }
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/) |
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAIBVABzHwQElCkEAnXJgTwBlp8ikBhYimQoSwADqkSMKjXoFGLdlyg9iACgkktJAmHQkxIAg2as2AegCCAIT4BGAEwBmcwBtuhYuYAiAUQBiACwArABshpra7iqeSPriktokAMQkAGqsRDAAziTZeEjUTGAkAGYECK5g2QA0eQgIBiCU1EJyCmbKqki0SBQ4hiQobBQIkUmEKK4I+oa+BKWllSQAKhAA7swRidrZbEgQFNkE2bMglnkAFhBMItnwcGZlN0OXjdHd20laYAjZUEwCBRYmcALKsADWkHWpFKN0eKCEJV+-0BwN4zyYr3eHl4X2+qV8AA8hIUECV8ChAQAjHB-cbaaTZZgoSyIpinEgAbQZSWAOj0TQorlwUAQ5k21OOQgAtDAmK5DHUAG64VwwGZNS6Io7ocwS9brAB0KAg8oQCyWriNFEy2UGAF9edoEt9vrozsLReLSt7qRAIBC5Qr8W6tKr1ZrDNqULr9Ybjb6xf7A0aoBA4OZ5otKmtNkwjQB5RYEKAENUABVwAHMxiBnVonTstABdZ2pACaZpIKlITAQcAgysaEY1uRy8mr2JIv2mQjZVPtzZSJAQRNwcGFI7VGv0XP5HqFIrFEoQUuMCGDipAJAdbeXs4Q8-ZnK596STa0AEpRAyPrFf2XXR2xIAAlBBcBKalRQhKQZCREhRz+HRSBQN4SH7bIKGIZlnUmaYGU-W8JAdEAHSAA)

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

See More:

- [CreateItineraryLocationInput type](/reference#createitinerarylocationinput)

- [UpdateItineraryLocationInput type](/reference#updateitinerarylocationinput)

### Itinerary Content

You may want to also want to store content against the list itself. The
itinerary data also supports content similar to the itinerary location. This
structure provides numerous standard fields as well as supporting extended
attributes to store both custom data as well as other elements such as
classifications (such as genre, style, audience, etc).

The below example provides a synopsis and description, as well as an example of
updating a classification.

```graphql
mutation UpdateItineraryContent {
  updateItinerary(
    id: "itinerary/ABC123"
    itinerary: {
      # Various standard fields, see "UpdateItineraryInput" type
      title: "My new title"
      synopsis: "A short summary of the list"
      description: "A longer markdown formatted description for the list"
      # Extended attributes
      upsertAttrs: [
        { id: "itinerary/genres", value: ["alpaca:genre:FOOD|CULINARY"] }
      ]
      # You can remove values using the deleteAttrs
      # example value: [{ id: "place/website-url" }]
      deleteAttrs: []
    }
  ) {
    itinerary {
      id
      # Read back any updated values
      title
    }
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/) |
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAIBVABzHwQElCkEAnXJgTwGFiVkUTgAOqRIwqNegUYt2ACiEkFJAmHQkBIAg2as2AegCCAIQ4BGAEwBmdfMWbJ29qsHDFJAMQkAaqyIwAziR+eEjUTGAkAGYECAA2YH4ANIEICGoglNQ8ElI6tEgUOOokKGwUCDauhCgxCKrqALJsJIwA7sWaNdYuin5sSBAUfgR+dSD6gQAWEEx8fvBwOiQQEcUTqTHDKF2uCmAIflBMBBSExKPjMcQA5swkC0wA1pAtpBHTCyg84XsHRydEr2mq3Wm22Ow8AFEAB48EIIcL4FBHABGOH2FUUoj8zBQ+k+TBGJAA2hjXMAlCo0nYcuxdDckEx0SAkgA3XAxGC1YnqdkUXBQXDoemM9AAMQA8uKACIAHw4ZAAMrQAHL6ABKAE11ABdEgAX1JJG1ho8GogMBIAtIjLgEBZqTZHP2IiGSCuwJIexqPDxSL8JpICChuDgFBqJEdnNURPJylGYf5CF0LQQyKGPAAtDAmDEinrjd1drEED78YSiQXXAbhABKfgY6kOJrOHYUgNqhC4cLI-kPEi4JBNUSZeER9mc-2F9rVcrdasKat6kB6oA)

Like itinerary location, you are able to assign image media.

See More:

- [CreateItineraryInput type](/reference#createitineraryinput)

- [UpdateItineraryInput type](/reference#updateitineraryinput)

- [Itinerary Classifications](/topics/itinerary/Classifications/)

## Sharing a List

After you have created a list, you may want to share the list with others. You
may choose to present your own shareable list, but you can also share an
interactive map from the Alpaca Travel platform.

For this to work, you will need to have the `id` for the itinerary and
substitute the `id` value in place of the `<ITINERARY_ID>` in the following URL:

    https://made.withalpaca.com/view/<ITINERARY_ID>

The user will be presented with an interactive version of your content by
following the URL.

# Further Reading

- [Example Itinerary Operations](/example-operations/itinerary/)

- [Other Itinerary Topics](/topics/itinerary/)

- [Alpaca Travel GraphQL API Schema Reference](/reference/)
