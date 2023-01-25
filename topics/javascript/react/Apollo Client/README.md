# Apollo React Client

This document describes using Apollo Client version `3` for React.

## Getting Started

We recommend that you start with the latest documentation for
[Apollo React Client](https://www.apollographql.com/docs/react/get-started/).
This will cover the installation and additional overview of configuring your
application for using Apollo Client

### Client Configuration

Once you have installed apollo and referenced their documentation, you can
configure the client like the below:

```javascript
// Set your access token
const accessToken = "YOUR_API_KEY";

// Create a client
const client = new ApolloClient({
  uri: `https://withalpaca.com/api/graphql?accessToken=${accessToken}`,
  cache: new InMemoryCache(),
});
```

## Simple Example

The below example shows a simple example of using React v18 and Apollo Client v3
together to call the Alpaca Travel GraphQL API with an example operation. We
will create minimal example with a query that accesses an itinerary.

We will assume that you have setup your React application environment, and added
the required dependencies for Apollo to your application.

```bash
npm install @apollo/client graphql
```

First, we will use a standard `index.js` file in this example that will load our
react application on to the HTML element "root".

```javascript
// index.js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

Next, we will create an `App.js` file that will configure our application with
an Apollo client provided to the "ApolloProvider". This will enable our
application to use the Apollo client with the "useQuery" hook.

```javascript
// App.js
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Our component we will write to perform the query and display the result
import DisplayItinerary from "./DisplayItinerary";

// Set your access token
const accessToken = "YOUR_API_KEY";

// Create a client
const client = new ApolloClient({
  uri: `https://withalpaca.com/api/graphql?accessToken=${accessToken}`,
  cache: new InMemoryCache(),
});

// Provide the application the apollo client
export default function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>
          My first Alpaca GraphQL app{" "}
          <span role="img" aria-label="launch">
            🚀
          </span>
        </h1>
        <DisplayItinerary />
      </div>
    </ApolloProvider>
  );
}
```

You will need to substitute your secret or public key in to the above code.

Next you will want to create a component that will make calls to the Alpaca
Travel GraphQL API. In this example, we will perform a simple operation in order
to read from an itinerary.

Using "useQuery" we can provide a GQL query operation to fetch our itinerary and
then display it using a component.

```javascript
// DisplayItinerary.jsx
import { useQuery, gql } from "@apollo/client";

// Our example query
const GET_ITINERARY = gql`
  query GetItinerary($id: ID!) {
    itinerary(id: $id) {
      id
      __typename

      title
      synopsis
    }
  }
`;

// Create a component to load a specific itinerary
function DisplayItinerary() {
  // Apollo useQuery calls our query supplying an itinerary ID to load
  const { loading, error, data } = useQuery(GET_ITINERARY, {
    variables: {
      id: "itinerary/458UEs3vKr8asSekgzPcKg",
    },
  });

  // Handle application state
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  // Display the itinerary information retrieved from the server
  return (
    <>
      <h2>{data.itinerary.title}</h2>
      <p>{data.itinerary.synopsis}</p>
    </>
  );
}

export default DisplayItinerary;
```

The expected response from the server would be like the following:

```json
{
  "data": {
    "itinerary": {
      "id": "itinerary/458UEs3vKr8asSekgzPcKg",
      "__typename": "Itinerary",
      "title": "Wild West Coast",
      "synopsis": "A road trip showcasing Tasmania's World Heritage wilderness and wild untamed west coast."
    }
  }
}
```

Booting your application you should be presented with the Itinerary information
for the itinerary "Wild West Coast".

You can view the above application on
[CodeSandbox](https://codesandbox.io/s/alpaca-travel-react-apollo-client-itinerary-t37bg9)
. Make sure you update your API Key with your own API Key otherwise you will be
presented with a message "Invalid bearer token".

## Recommendations

### Configure Apollo for Cursor-based Pagination

The Alpaca Travel GraphQL API leverages a consistent pagination strategy based
on the Relay Connections (also known as "Cursor-based"). This pagination
strategy covers numerous query operations and you can configure the Apollo Cache
to understand and handle pagination correctly for your application.

You should refer to the
[Apollo Pagination](https://www.apollographql.com/docs/react/pagination/overview)
section to understand more about how Apollo covers pagination, and specifially
you can refer to the section on
[Cursor-based pagination](https://www.apollographql.com/docs/react/pagination/cursor-based)
and refer to the "Relay-style cursor pagination" section.

The below is an example of configuring the `InMemoryCache` object so that it can
better handle pagination in your application when using common query operations
on Itinerary, ItineraryLocation and Place types. It leverages the
"relayStylePagination" utility to try first, opposed to manual merging.

```javascript
import { relayStylePagination } from "@apollo/client/utilities";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        Itinerary: {
          fields: {
            children: relayStylePagination([
              "type",
              "placeIds",
              "segmentIds",
              "@connection",
              ["key"],
            ]),
            descendants: relayStylePagination([
              "type",
              "placeIds",
              "segmentIds",
              "parentType",
              "depthMin",
              "depthMax",
              "@connection",
              ["key"],
            ]),
            mediaContainers: relayStylePagination(),
          },
        },
        ItineraryLocation: {
          fields: {
            children: relayStylePagination([
              "type",
              "segmentIds",
              "placeIds",
              "@connection",
              ["key"],
            ]),
            descendants: relayStylePagination([
              "type",
              "parentType",
              "placeIds",
              "segmentIds",
              "depthMax",
              "depthMin",
              "@connection",
              ["key"],
            ]),
            mediaContainers: relayStylePagination(),
          },
        },
        Place: {
          fields: {
            mediaContainers: relayStylePagination(),
          },
        },
      },
    },
  },
});
```

Where using Cursor-based operations, you may need to provide additional type
policies in your cache configuration.
