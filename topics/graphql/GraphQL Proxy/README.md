[//]: # "Title: Proxy"
[//]: # "Weight: 5"

# GraphQL Proxy

This document is a quick reference guide for the Alpaca Travel GraphQL API
Service, explaining how to cache queries and perform HTTP GET operations. The
purpose of this document is to provide a clear understanding of the available
options for utilizing the API and to ensure that users can make the most of the
service.

## HTTP GET Operations

In the Alpaca Travel GraphQL API Service, you can perform queries using the HTTP
GET method by providing the query, variables, and operation name as URL
parameters. The query must be a URL escaped version of your GraphQL query, and
the variables must also be URL escaped JSON containing the variable values used
in the query.

The URL format for performing a query using the HTTP GET method is as follows:

    https://graphql-proxy.withalpaca.travel/graphql?query=QUERY&variables=VARIABLES&operationName=OPERATION_NAME&accessToken=ACCESS_TOKEN

Where QUERY is the URL escaped version of your GraphQL query, VARIABLES is the
URL escaped JSON containing the variable values used in the query, and
OPERATION_NAME is the name of the operation in the query. Your ACCESS_TOKEN is
required for the operation.

Example Query:

```graphql
query GetItinerary($id: ID!) {
  itinerary(id: $id) {
    title
    description
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAOIIoCSKAlkvgIaEAUAJNWOkRQCICEAlEWAAdJESLUadPIwJN2nNmEEix4ojRQAbBKPVEwCAM5Q81AA40ISPUQC+ouyDtA)

Variables:

```json
{ "id": "itinerary/123" }
```

Could be sent to the server like the following:

    https://graphql-proxy.withalpaca.travel/graphql?query=query%20GetItinerary%28%24id%3A%20ID%21%29%20%7B%20itinerary%28id%3A%20%24id%29%20%7B%20title%20description%20%7D%20%7D&variables=%7B%20%22id%22%3A%20%22itinerary%2F123%22%20%7D&operationName=GetItinerary&accessToken=pk.123

Please note, due to restrictions on the length of data that can be included in
the URL, this method is limited in the length of the query that can be included
using query parameters. You should consider stripping comments and un-necessary
formatting, or alternatively you may need to keep performing HTTP POST requests.

### Caching Based on a Resource

In the Alpaca Travel GraphQL API Service, users can cache specific queries
against a specific resource. To do this, users need to add the resource ID to
the end of the proxied API gateway address. The URL for the proxied API gateway
with resource ID is as follows:

    https://graphql-proxy.withalpaca.travel/graphql/<resource-id>?...

When caching specific queries against a specific resource, it is important to
add the resource ID in the URL based on the resource you want to cache against.
The resource ID should be placed after "graphql/", such as with resource ID
`itinerary/123` it would become
`https://graphql-proxy.withalpaca.travel/graphql/itinerary/123`

You must also use the HTTP GET as documented above.

It is also worth noting that the cached response may be fetched again in the
following situations:

- The resource changes: If the resource, such as itinerary/123, changes, the
  cached response will no longer be valid and will be fetched again when the
  query is made.
- The cache has reached its maximum age: There is a maximum age on proxied
  requests, depending on the resource being requested. If the maximum age has
  been reached, the cached response will be fetched again when the query is
  made.
- There is a maximum age on proxied requests depending on the resource being
  requested to stay in line with maximum cache durations of data providers.

Please Note: This does not guarantee freshness of the data response and changes
may take time to be invalidated.
