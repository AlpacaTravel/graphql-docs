# Making GraphQL Calls

GraphQL is sent as JSON across HTTP. This makes it possible for many different
languages and frameworks capable of being able to execute GraphQL calls to
the Alpaca Travel GraphQL API.

## Getting Started using Fetch

The Fetch API provides a JavaScript interface to making requests and reading
responses. Fetch is [widely](https://caniuse.com/#feat=fetch) supported on
modern browsers and provides a replacement for the older XMLHttpRequest style
requests.

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
  {
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
`;

function Example() {
  const { loading, error, data } = useQuery(COLLECTION_ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.collectionItems.nodes(
    ({ id, title, synopsis, preferredMedia }) => (
      <div key={id}>
        <img
          altText={preferredMedia.altText}
          url={preferredMedia.thumbnail.url}
        />
        <h2>{title}</h2>
        <p>{synopsis}</p>
      </div>
    )
  );
}

export default Example;
```

A working example is shared on the codesandbox below:

[Simple apollo and react demo](https://codesandbox.io/s/alpaca-graphql-with-apollo-boost-xky2i?file=/src/Items.js)
