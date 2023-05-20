[//]: # "Title: GraphQL"
[//]: # "Weight: 1"
[//]:
  #
  "Description: Getting started with GraphQL API to integrate and build itinerary based applications and website functionality."

# GraphQL API

Alpaca offers a GraphQL API environment for developers to integrate into their
applications and websites. Developers can use the API in order to build various
application features around displaying and planning itineraries.

The API can be used in websites, iOS and Android applications and in conjunction
with other services such as proprietary planning tools.

## Endpoint

Alpaca's primary GraphQL endpoint:

```
https://graphql.withalpaca.travel/?accessToken=pk.XXX
```

Your `accessToken` is unique and will define what scope of services you have
access to. Tokens are scoped to

## Making Requests

GraphQL allows developers many options for making requests. GraphQL requests are
made via HTTP Post calls, including your query. The query can be sent as a plain
text, making it possible to use simple HTTP fetch requests.

```typescript
// Your query describes exactly what you want returned. There are loads of
// examples in this documentation to help you out.
const query = `...`;

// Basic GraphQL calls are just a HTTP POST request with the query
const response = await fetch(
  `https://graphql.withalpaca.travel/?accessToken=pk.XXX`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  }
);

// Access the response
const data = response.json();

console.log(data); // { data: { ... } }
```

In addition to using basic HTTP requests, many additional libraries are
available to assist manage your calls.

- [Code using GraphQL](https://graphql.org/code/)
