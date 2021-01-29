# Managing collection locations

A collection provides you the ability to manage a single, large number of
locations as your application or website place database. Queries and mutations
are optimised to queries across many locations.

Note: If you are considering an integration from an external data source to a
collection, consider also reviewing the
[importing locations topic](/topics/collection/Importing%20Locations/README.md).

### Prerequisits

- Your API Key
- Your [profile ID](/example-operations/profile/QueryAuthorizedProfiles.graphql)

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

Note: A collection can house diffent types of items, outside of just locations.
As such, you will need to select fields from the CollectionLocation type as
illustated below using `... on CollectionLocation { ... }`. This allows you
to select the specific fields when the `__typename` is `CollectionLocation`.

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
          }
          # Text
          altText
          caption
          # Photographer Attribution
          copyright
          attribution
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

## Create a collection location

When creating a collection location, you will need to supply a `place` value.

The Place within a collection location represents the physical place associated
to this location.

You can supply just the position of this place, such as when you have placed
a dropped-pin, or supply a `place.id` that refers to a place identifier from
a source of place information.

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

## Update a collection location

You can update information you have added about your location by supplying
the arguments in `location`. There are a number of fields you can manage, as
well as attributes to store extended information or overwrite/augment
information from place providers.

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

## Additional Resources

- [Importing Locations](/topics/collection/Importing%20Locations/README.md)
- [Pagination using cursor connections](/topics/graphql/Pagination%20using%20cursor%20connections/README.md)
- [Example GraphQL operations for collections](/example-operations/collection)
