# Pagination using Cursor Connections

> For consistency, the Alpaca API uses the GraphQL Cursor Connections
> Specification to control pagination. This is also known as implementing
> "Cursor-based Pagination".

Alpaca have adopted the
[GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)
following the aim of providing best practices in GraphQL. As a summary, the
technique provides a consistent approach to pagination so that it can be
standardised across queries. This also allows you to leverage existing
pagination techniques of libraries supporting cursor connections (such as relay
or apollo or other client libraries).

## Overview

> Slicing is done by using the `first` argument, and pagination is done by
> providing the `after` argument

Opposed to using limit/offset values, you will instead provide `first` with the
number of values you want, and `after` to contain the cursor of the edge that
you obtain records after.

```graphql
# Example query illustrating the response structure of a cursor connection

query CollectionItemsUsingCursorConnections {
  # An query that provides a cursor connection response
  collectionItems(
    # Example query constraints
    collectionIds: ["collection/ABC123"]
    # First controls the slicing, returning 10 connection items
    first: 10
    # After controls the paging. Provide the cursor of the last edge to paginate
    # after that edge. If you don't send a cursor, the first results are
    # returned
    after: "opaqueCursor"
  ) {
    edges {
      cursor
      node {
        id
        title
      }
    }
    pageInfo {
      hasNextPage
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBRADwEM4AHAGwRwEcYEAnATxwEtzyYBnFeolFpAHMcKABZV6CTqQhJOVbvRhQUMSTggAzHERyx6nCPT2ykCFS1kAdJDdoNmAYQjtz-WQEkUCOJwCqnAKCjmqG9M5IZhaynDjANjg4uACCSDR0TCKifDik9BAAbixgUjp6oUYmkW6WaZLSMQgJJq7RSF4+nAAUzYm4hCQUVPaZUDE8RAIonL0tlG0eYJzoOADaViBjre5IAPTJAEKOAIwATADMGwC6s7gAYiwGKFU8LrFiCuQsUEEANDiSVT0JBBHDHAAMVSiO1Y3l8s00j24KwhtxwyU03mMY1Q+XI73EuSIgiCADocAAFfJFEpZKj6MIabQfHDkIjcHAIMCCKgoCBEklIPhNNKJJI6TEMLI5Lk88kebSMCAwHCQJAAcme8iQYDKDKM-xZiKeAKkMHI0x0kjRgLUZjAsyIkvoKw2EFIRHsIQMRg2zQAlHFZrLSvFRWLyj76LNEkgILSwxGI8UY2L+ChKKmAL6zHPhgUIDxITT8xNJ7KcAByCAIKApxJFEbziTzWZAWaAA)

- Slicing is done by providing the `first` argument to `collectionItems`. This
  asks the connection to return 10 collection items

- Pagination is done by providing the `after` argument to `collectionItems`. We
  provided a value of for the cursor so we should load collection items after
  that cursor

- For each edge, we asked for a `cursor`. This cursor is an opaque string, and
  is precisely what we would pass to the `after` argument to paginate after this
  edge.

- We asked for `hasNextPage`, which will tell us whether there are more edges
  available.

Note: Each cursor connection the API implements can offer different edge data,
as well as offer other response type data, such as `totalCount` or
`pageInfo.endCursor`.

### FAQ

#### How do I jump to a specific page

We currently do not support jumping to a specific page using Cursor Connections.
