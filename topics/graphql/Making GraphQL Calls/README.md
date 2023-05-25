# Making GraphQL Calls using JavaScript

> GraphQL is easy to call in a number of technologies because underlying it is
> simply a HTTP call encapsulating your query.

GraphQL is sent as JSON across HTTP. This makes it possible for many different
languages and frameworks capable of being able to execute GraphQL calls to the
Alpaca Travel GraphQL API.

A number of languages and frameworks already offer tools to connect and make
calling GraphQL easy. See this
[Awesome GraphQL](https://github.com/chentsulin/awesome-graphql) list to see
alternatives.

## Considering choices

For basic requirements, consider using:

- Fetch (native for browsers - see below)

- [GraphQL Request](https://github.com/prisma-labs/graphql-request)

For comprehensive requirements, consider using:

- [urql](https://formidable.com/open-source/urql/docs/)

- [Apollo](https://www.apollographql.com/)

- [Relay](https://relay.dev/)

## Requirements for configuring clients

For all the clients, you will need to configure your GraphQL Root Endpoint.

GraphQL will send queries and mutations to a single end-point. As such, the only
configuration that is required in order to send and receive will be the root
end-point.

`https://graphql.withalpaca.travel?accessToken=<YOUR_API_KEY>`

## Getting Started using Fetch

> The Fetch API provides a JavaScript interface to making requests and reading
> responses.

Fetch is [widely](https://caniuse.com/#feat=fetch) supported on modern browsers
and provides a replacement for the older XMLHttpRequest style requests.

You can develop your query using the
[GraphQL Playground](/topics/graphql/Apollo%20Sandbox/) and then update your
query below.

```javascript
// Using FETCH
// Update the accessToken with your API Key
fetch("https://graphql.withalpaca.travel?accessToken=xxx", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  // Body takes a query string within the a json object
  body: JSON.stringify({ query: `query { node(id: "itinerary/123") { id } }` }),
})
  .then((r) => r.json())
  .then((data) => console.log("data returned:", data));
```

## Using Apollo React Client

You can view the topic
[React + Apollo Client](/topics/graphql/Making%20GraphQL%20Calls/Apollo%20Client/)
which will provide you information about how to configure your react application
with Apollo.
