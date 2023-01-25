# Managing collection locations

A collection provides you the ability to manage a single, large number of
locations as your application or website place database. Queries and mutations
are optimised to queries across many locations.

Note: If you are considering an integration from an external data source to a
collection, consider also reviewing the
[importing locations topic](/topics/collection/Importing%20Locations/README.md).

### Prerequisits

- Your API Key

- Your [profile ID](/example-operations/profile/GetAuthorizedProfiles.graphql)

## List available collections

Associated to profiles are collections. You will need to identify which
collection you are managing in order to be able to supply a collection ID.

```graphql
# Load the collections available for a profile

query QueryCollections {
  # Use collections() operation for listing collections
  collections(
    # Supply the profile to list profiles for. Use authorizedProfiles operation
    # to identify your profile
    profileId: "profile/ABC123"
    # Pagination controls for relay "cursor connections"
    # See: https://relay.dev/graphql/connections.htm
    first: 10 #, after: <cursor>
  ) {
    edges {
      node {
        # Collection ID/Type
        id
        __typename
        # Information to obtain about the collection
        title
      }
      cursor
    }
    pageInfo {
      hasNextPage
    }
    totalCount
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/) |
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEAZCAQzBxQAsEcoIAbGhKFASwiQGcdCA3QpmwgEb0cAMwgAnTjgAO4iCL4IAOkhUBHGAnEBPHAEVNOgMK16jFuxzAVOHLgCqbStToNmrNgAoAlDgjStQnckUQkcGiY2ZiQAcypTNws2G3jXcw9PFNtcAGUYaWkaXXJKWXlFUghwyJQZOQV6DjFxADocR0pCGHIJJgAvBDAABXrFDn9A4Ky7SpwmMGRmEV1tCBhJMoblENs68voASTB0HCUQTcUAegBBACEjAEYAJgBmM+ncIcIYpiQgi3iqDkNCaYXECH4ujOsHEbDC1CQSESHneO2yOByCAQJzIKBQ0jY6Eul3BkJaCy4lxi4kI0jIaholwRSPS7BauLg0wUsJQJweAAY7AAaTgiFBaE4AHhhcPEAD4Ur5rGicIMYggOMrdrskBAFlZptrcCY0sEcAcACKXAAq2gCht28wdtgA+i6UHbkIREM6ZgckM04P9WLMIAIULwQoI1rUSqkzFMVdrmCh6A6AL4OmUSaaZlXSb4If1iA1JnBkQhsAByCAAHigvurc9MUBAIzQTDBUCk8+mQOmgA)

Note: the `collections` operation returns a cursor connection. You can read
[how to paginate using cursor connections](/topics/graphql/Pagination%20using%20cursor%20connections/README.md)

## Query the locations assigned to the collection

The API provides mechanisms to query the collection to list locations associated
to the collection.

```graphql
# Queries for collection locations from a collection by a supplied tag. This
# will take a supplied collection ID and look for items that have the tag of
# "my-tag" present. This is a basic filtering capability based on tagging items
# within groups.

query QueryCollectionLocationsByTag {
  # use collectionItems() operation
  collectionItems(
    # Specify the collection ID
    collectionIds: "collection/ABC123"
    # Specify the tag to include
    tags: "my-tag"
    # Pagination controls for relay "cursor connections"
    # See: https://relay.dev/graphql/connections.htm
    first: 10 #, after: <cursor>
  ) {
    edges {
      node {
        # Returned records
        id
        __typename
        # Access whatever we want here about the items
        ... on CollectionLocation {
          title
        }
      }
      # Use the cursor and supply to "after" in operation to paginate
      cursor
    }
    totalCount
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/) |
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBFGBAJwEsEBnHAMwiJyggBtGEoUSIkdHoBDdzpSpEIcHL3pMWbDlwBGAT3E5yMAA5rGZMDhS8A5gDocAFQAWJcgB0kuAO4lmu3gGsEy1Rq0IdDZqwEuAEkAEXEkHR4IF2paHBIUBDhKFDN+HDSAN3dUnIMcCCobXCsQOAUAWj19Upw1IgpkFGNzS3jKCTlechIoakdE0iR9el41XjlHBKUu8h8Crmr9EmH4xOTinAdUlZx9EXVyQxsbAEdCIiUCYgUAYSkA2QAZPkDyACEFE3zgGxwcXAwOaSfwyThBdbkAAUAEoCmpiPxZH8QdJAhCktCUf9cABlBFQEhUJS5VGPTg4ULYslgpBBMDkdA4Up+NGyAD0AEF3rcAIwAJgAzKVqXiCUSSWY8iMUBB4kgoIwYGAENTqozmWVKtURVx-gCcAAFAwrJEUhioESMIRxBqMXhKFkwIjkOIWpDkpDWECinC4hAIJlmFAoNSM9nsu0OwwqzLs-ZjMynRjs92eo7BuDUqgkF0oJm8gAMAIANOIqIMmQAeWAu2gAPhRcN+ev+Pn0FBwLf1+qQEBVXepPdwACUEChnR6dA0GEQGUP9SQwAv-gB9VcoBQIpC8RArg2cqBQCiUOxpRLZOh2dx2XioDLEdwTCAwFC6KVrTH7ww-hY4e6goELxQGaXDdj2EHsCgLD7gAvgu8GtvquAAKrAqStaunQd46J4mgknKpS8BWxC1LsEAIkQoG6HK4zLDuiQLphtDUohPaynojD3DAqAoohsEgLBQA)

Note: A collection can house diffent types of items, outside of just locations.
As such, you will need to select fields from the CollectionLocation type as
illustated below using `... on CollectionLocation { ... }`. This allows you to
select the specific fields when the `__typename` is `CollectionLocation`.

## Query a specific collection location

You can also query a specific collection location by leveraging the
`collectionItem` operation. This can help you when wanting to load more
information about a particular location.

```graphql
# Loads in a specific collection location

query QueryCollectionLocation {
  collectionItem(
    # Provide the individual collection item ID
    id: "item/ABC123"
  ) {
    # Identifier/Types
    id
    __typename
    ... on CollectionLocation {
      # Load some of the content as you need
      title
      synopsis
      # ... description, tags, websiteUrl, readMoreUrl, etc etc
      # Load the preferred media
      preferredMedia {
        resource {
          ... on MediaImage {
            # Load a thumnail at the desired size
            thumbnail: source(bestFit: [100, 100]) {
              url
            }
            # Text
            altText
            caption
            # Photographer Attribution
            copyright
            attribution
          }
        }
      }
      # Load information about the place by joining the place node, allowing
      # access to all the underlying place information that is provided by a
      # place provider service (Facebook, ATDW, Yelp, TripAdvisor etc)
      place {
        # Identifier/Types
        id
        __typename
        # Load contact information about the place
        contact {
          phoneNumber
          websiteUrl
          facebookUrl
        }
        # Geocoding positions
        position {
          lon
          lat
        }
        # Maki icon
        maki
      }
    }
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/) |
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEAZCAQzAGccBLJHQnEgBwSnIDNyocoIAbLxlciFS7RC-QQB0kkgI4wEAJwCeOAIpylAYW68oYpASiiBVYJJwdtfYwEkUCOAAoz5nLgAK8iADdyYBDhQAC39KMHIfMBhCLgseK0EKOzgcawARZ3NfdBxxEHIkgHoAQQAhDQBGACYAZlznAEocUyoXXGs-VBZyBQKAFUUGEgyKMGGAfTGUAeRCRGGAOkWcBK043WMDIwTml1b8IjBaCERl5gDgi1RkFGoyRQgYHCQEBFGW3f4UXmHzEkUkCB0EjkIbvPaLeY4PwkKDych0PQAGgChAA5iRkQB3BAAI2BdgAqvIuMj5AhiABZCBkokknAIFDsBlQH6ufbEc7+Ohk5gKMmHRBhQis7kIXnyfkU17kGg7XYuMkkB7yKD+OXylwQ5ZUKVC6xwNFq1ka3AEDk0ILwJCEcgxUScqEIYH82jkABeCGN8stcBx1tt2SVMBVCAcOKdKAAYvlsgBtcoABgTyMTCYAuo11Rr5cGuF7dgBffN7XoIAAeKGL5miKFLFarHEICOMDfcgQgKAgqPkTeC8hwRRQKDhOJgegbnDoijhqMClbB2eoQ5HY5bC-lRfX5k3Gp38tNBwoSGY1INemoOIeNyCXK4hFVOBxygAVhBKJRUQ66HeHwC-MjomETEP1ZXB71VEgyE7ageAdGAkD8YlFA-HBv3vEJj1PLYqCCe0QVQzwIleR9lGFddcDQh9uW8XwFFoBQfAfBxI3Qy8IAAa2RIpelSAB1ZEAE0EC4OhkV6OE6CKMAfCVftmXqEUfyNLc2Xaa4uh6fpBi9XwvQmKYGGtOYVIPDlOFQe8bkoE95DPYwLyvL8lK9cyUEsppizodtngAOXgcN5GLbE8XyBBaWLZhWIgDjwpUvcTRwABxBBoAgMIkE-OgIHxYxQUXLKcu2YthCkFTzDvedF3i-ccApQh2PIChzK9A0GtZaq903AsQALIA)

## Create a collection location

When creating a collection location, you will need to supply a `place` value.

The Place within a collection location represents the physical place associated
to this location.

You can supply just the position of this place, such as when you have placed a
dropped-pin, or supply a `place.id` that refers to a place identifier from a
source of place information.

Alpaca supports a number of place providers, such as the ATDW, OSM, Facebook and
others. When you supply a `place.id` to these providers, you will be able to
query back up to date information about that place in future queries, as Alpaca
will leverage integration to these providers to enable you to query data about
those places.

```graphql
# Creates a Collection Location within a collection

mutation CreateCollectionLocation {
  # use createCollectionLocation for this operation
  createCollectionLocation(
    # Supply the collection to place the collection location within
    collectionId: "collection/ABC123"
    # Supply the data for the location model
    location: {
      # Provide content for the collection item
      # Synopsis, tags, description, media, website etc.
      title: "Mavis the Grocer"
      # Supply tags (we can later query on this)
      tags: ["cafe"]
      # Note: See external refs/source if you want to store your own identifiers
      # Provide a reference to the place/position for the place location
      place: {
        # Place information will be sourced from ATDW provider
        id: "place/atdw:product:5cae80be57a096cd7084b6ab"
        position: { lon: 144.9970825017, lat: -37.803058481 }
      }
    }
  ) {
    location {
      # Returns with the collection location just created
      id
      __typename
    }
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/) |
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBhAJwQEMUEBnHY-CAG1oShQEsIkcAZaU19gd2YoAFs3bUodBk14AdJHLgwUPNviKkEeSYxZsuUFe2BycOXDHIIcUdWS30dvfYZwAzCARzDmlCAAcEAkMTa1tNbWk9bl0kAAoQ01wAZRg-P1oATy8hKwkHSPYUCBx04igrYVyImJxaaN4cAW95dlNrat4ASTB0HBkQPKkYgHoAQQAhPABGACYAZn6EsxwUtMzsqzBSandPStr61TgIMARaJbqDGN7jVrblgAUCCAA3ZlP21GQUNw8N9vyNUECDgS0SKwySH85B8ABovMQAObkeGncg2Zh+GLwxBgZjEeF8BAAIxhZBwCBQUAAdGCvIIGL1+gBZYhvSj7ADiz3KBEWdzayVS6SyymROFiROsxHYtA0ngAjjBAllVN5yABKOli8i9ADa-QMrgQ-QAunTcAA5CBkXpJBBWBAADzIBCQxFoOCIrnIw3IEBgBHKOGYrhwGQDjRlPyKOHIRSI4YDnggfHY72+oeYgXIFpwT1eGaoXoQxqISGDsf2pXKwz8EDJDV2-xrVkuwQFplbNzp4IecuDol2cBcAnoOGJVn9gfKYDczzgOFGABUACIAdRKzzepz5nba7yZIFbw1IYD46D8zzAMCY6AArAYEAAOAAMk-vAHZiK+AJwANigMBP1fZ8ABZiX-YhiX5e57nrRs2BuA4kF6KYwLA6lf1-EDnxme9XymT94TlFBegAWjmT9qTfOZX3vcDnymHAAF86TYgUONMDUcFue52xqPi4NwAAlSlAyQSgmiEf5BkcVQBIaAArCwfhsEgyDAOl3jpAB9XSUAyAJ3UQJYuNYuQWJAFigA)

## Update a collection location

You can update information you have added about your location by supplying the
arguments in `location`. There are a number of fields you can manage, as well as
attributes to store extended information or overwrite/augment information from
place providers.

```graphql
# Modify an existing collection location title

mutation UpdateCollectionLocationTitle {
  # use the updateCollectionLocation() operation
  updateCollectionLocation(
    # ID of record to update
    id: "item/ABC123"
    # Update the data for the location
    location: { title: "New Title" }
  ) {
    # Query back data after the mutation for the response
    location {
      # Should now become "New Title"
      title
    }
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/) |
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBZCMASwDMBPHAQyRwQA8iBnFIpAcxyggBtuEoWEGt2iVBNFij4AdJLLgwUYokJwBVAA5gxCAMI8+AlUgAyo8QBUiUhDmCycOXDEa2UAC1swtO-b37iZlDKQgAUAJQ4EBoIAE4hcjQ43tooegYBxkEJoQ6OTjgAkgAiUSQ4sfwQsWA4KBDJPml5jkRg6DjSINYIcAD0AIIAQroAjABMAMxdLQWaqW6eOKmUOCTVdUsiweKz2wkdwHXWfB1dAHIIAO44VjZdOAC+eZH2SY64AIowcRQARpQoABrZZiVaUEhpWKbWwKJTiNYbDy2SqMDRCVx7czGOyzD44ADK7ggMG4tSQEBufyqiE6IEuNzuMhAeOO93eTzyzyQjxAjyAA)

## Delete a collection location

Removing collection items is done so via the `deleteCollectionItem` operation.

```graphql
# Removes a collection item from a collection

mutation DeleteCollectionItem {
  # Use the deleteCollectionItem() operation
  deleteCollectionItem(
    # Supply the ID of the record to remove
    id: "item/ABC123"
  ) {
    # select back a response of the ID of the removed item
    id
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/) |
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEAlBOCANwQGccBDHKCAGzoShQEsIkcWVCcAzAJwhwqNeo2ZskAHWlI4MFJVbscAEQSNuAYTFNlSAJLdhwGThy4AqmQQ4UAC1tgNCbbonsjhABQBKHBAADgj8SpJmOM6aCDoMepJecN4R5rgAyjCBgXQAnnaOOAaqAbz5tvxMEPxgdhA4FUSkKZxg6DhSIFyEAPQAggBCWgCMAEwAzB0R-qYc5hY4NuIoOABGlFAA1iIVZIHsNiVlhcUQpQ7lhCQINV1wzSxgEQC+Mk8gT0A)

## Additional Resources

- [Importing Locations](/topics/collection/Importing%20Locations/README.md)

- [Pagination using cursor connections](/topics/graphql/Pagination%20using%20cursor%20connections/README.md)

- [Example GraphQL operations for collection locations](/example-operations/collection/location)
