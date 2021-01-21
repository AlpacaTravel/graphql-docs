# Making GraphQL Calls using JavaScript

> GraphQL is easy to call in a number of technologies because underlying it is
> simply a HTTP call encapsulating your query.

GraphQL is sent as JSON across HTTP. This makes it possible for many different
languages and frameworks capable of being able to execute GraphQL calls to
the Alpaca Travel GraphQL API.

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

`https://withalpaca.com/api/graphql?accessToken=<YOUR_API_KEY>`

## Getting Started using Fetch

> The Fetch API provides a JavaScript interface to making requests and reading
> responses.

Fetch is [widely](https://caniuse.com/#feat=fetch) supported on modern browsers
and provides a replacement for the older XMLHttpRequest style requests.

You can develop your query using the
[GraphQL Playground](https://withalpaca.com/api/graphql) and then update your
query below.

```javascript
// Using FETCH
// Update the accessToken with your API Key
fetch("https://withalpaca.com/api/graphql?accessToken=xxx", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({ query: "{ hello }" }),
})
  .then((r) => r.json())
  .then((data) => console.log("data returned:", data));
```

## Using Apollo Client

Apollo offers a
[get started guide](https://www.apollographql.com/docs/react/get-started/) that
you can follow in order to integrate apollo client within your application.

Install your Apollo Client

```shell
npm add apollo-boost @apollo/react-hooks graphql
```

Create a client and provide it to the ApolloProvider

```javascript
// App.js
import React from "react";
import { render } from "react-dom";
import Example from "./Example";

import { ApolloProvider } from "@apollo/react-hooks";

// Create a new client
// Replace your API Key instead of the xxx of the access token
const client = new ApolloClient({
  uri: "https://withalpaca.com/api/graphql?accessToken=xxx",
});

// Add to the Apollo Provider
const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Alpaca GraphQL app 🚀</h2>
      <Example />
    </div>
  </ApolloProvider>
);

render(<App />, document.getElementById("root"));
```

Perform a GQL query using react hooks

```javascript
// Example.js
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

// Example query will obtain items from a collection from Alpaca
const COLLECTION_ITEMS = /* GraphQL */ gql`
  query {
    collectionItems(
      # Obtain the first 5 records
      first: 5
      # From the supplied user collection
      collectionIds: ["collection/4m2hSusvAkPHpLb36NJ5BV"]
    ) {
      nodes {
        id
        # User Supplied Title
        title
        # User Supplied Synopsis
        synopsis
        # The preferred media to use (will pick uploaded or place)
        preferredMedia {
          resource {
            ... on MediaImage {
              # Chose a thumbnail that covers the 100x100 width/height
              thumbnail: source(bestFit: [100, 100]) {
                url
                width
                height
              }
              # Text for images
              altText
            }
          }
        }
      }
    }
  }
`;

function Example() {
  const { loading, error, data } = useQuery(COLLECTION_ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.collectionItems.nodes(
    ({ id, title, synopsis, preferredMedia }) => (
      <div key={id}>
        <img
          altText={preferredMedia.resource.altText}
          url={preferredMedia.resource.thumbnail.url}
        />
        <h2>{title}</h2>
        <p>{synopsis}</p>
      </div>
    )
  );
}

export default Example;
```

# React / Apollo Code Sandbox

A working example is shared on the codesandbox for you to start playing around
with without having to worry about setting up your environment.

[Simple apollo and react demo](https://codesandbox.io/s/alpaca-graphql-with-apollo-boost-xky2i?file=/src/Items.js)
