# Connecting Apollo

_Note: This document is out of date and we recommend you referencing the
topic of [React Apollo Client](/topics/javascript/react/Apollo%20Client/)_

This guide will quickly setup a React single-page application using
create-react-app, and configure it using Apollo to connect to the Alpaca
Travel API.

You can bypass the need for this tutorial now by reviewing the
[Alpaca GraphQL JavaScript SDK For React/Apollo](https://github.com/AlpacaTravel/graph-sdk/tree/develop/packages/react-apollo)
which allows you to add capabilities to your existing applications.

Apollo is the industry-standard GraphQL implementation, proving the data graph
layer that connects modern apps to the cloud. It is popular to use for its' ease
of getting started, and that you can incrementally adopt features such as
caching as you advance. The alternative fully-featured client is Relay offered
by Facebook which offers an advanced environment but requires more learning.

- Very popular with a lot of learning resources available
- An ecosystem to offer solutions to a wide range of challenges
- Backed by significant investment
- Decent documentation

## Getting Started

We've chosen to simplify the setup of a React application by using the
[Create React App](https://github.com/facebook/create-react-app) project.
This project is recommended by the React team for when you are learning React or
creating a new single-page app. While it is quick to setup, it offers a
reasonable toolset using the latest JavaScript features and provides a nice
developer experience while optimising for production.

### One line install

Using the below command, you will be up and running with a React application and
a connection to the Alpaca Travel API through Apollo Boost.

This package uses:

- Typescript (recommended)
- Apollo Client
- GraphQL Codegen (for generating types and hooks)

```shell
npx create-react-app my-project --template @alpaca-travel/typescript-apollo-codegen
```

Note in the above, we are using `npx` which is not a typo. It is a package
runner installed with npm 5.2+.

[Refer to the documentation](https://github.com/AlpacaTravel/cra-template-typescript-apollo-codegen)
for help with this template.

### Update your API Key

Create a `.env` file and replace `REACT_APP_ALPACA_ACCESS_TOKEN=...` with your
API Key.

```
REACT_APP_ALPACA_ACCESS_TOKEN=<your-api-public-key>
```

### Start the development server

You can now start the React development server and launch your browser.

```shell
npm start
# or
yarn start
```

For any issues starting your React application, refer to the
[Create React App Documentation](https://github.com/facebook/create-react-app).

## Alternatively, add to an existing React App

You can add Apollo to your existing react application using the following:

- `@apollo/client`: The main package we will be using
- `graphql`: For working with our grapql queries

```shell
npm install @apollo/client graphql
# or
yarn add @apollo/client graphql
```

### Configuring the GraphQL Client

Apollo will be used as the client to connect to the Alpaca Travel API. All
GraphQL clients send requests to a single "root endpoint" which is shown below.
We will configure this into our app in the next section.

`https://withalpaca.com/api/graphql?accessToken=<YOUR_API_KEY>`

#### Adding in the required environment variables

A preferred way of configuring the environment of your application is to use
`.env`. If you have your own preferred way or your own security protocols to
follow for managing environment variables, you can bypass this step and
configure the apollo URI yourself.

Create a file in your project called `.env` with the following

```
# .env
REACT_APP_ALPACA_GRAPHQL_ENDPOINT=https://withalpaca.com/api/graphql
REACT_APP_ALPACA_ACCESS_TOKEN=<your-api-public-key>
```

Update the `<your-api-public-key>` section in the above with your API Key.

Info: You will need to restart the development server after changing .env files.

Warning: Generally, .env files <strong>should be</strong> checked in to source
control with the exclusion of .env.local or .env.production.

For more information on managing environment variables see Create React App's
[Adding Custom Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/).

#### Configuring ApolloClient

Create the new file `src/client.js`. We can then import `ApolloClient` from
`apollo-boost` and add the GraphQL endpoint to the `uri` property of the options
object.

```javascript
// src/client.js
import { ApolloClient, InMemoryCache } from "@apollo/client";

// Access the environment variables to configure the URI
const endpoint = process.env.REACT_APP_ALPACA_GRAPHQL_ENDPOINT;
const accessToken = process.env.REACT_APP_ALPACA_ACCESS_TOKEN;

const client = new ApolloClient({
  uri: `${endpoint}?accessToken=${accessToken}`,
  cache: new InMemoryCache(),
});

export default client;
```

### Integrating into React

Now that we have our environment setup with a `client.js` file exporting the
apollo client, we can integrate the client into React.

In your `src/index.js`, we will first import the ApolloProvider which will
provide the client through context to your React application and hooks and the
provide it our configured client.

```javascript
// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import client from "./client";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

### An example query

We can now run a query in a React Component and start querying the API for data.

```javascript
// src/App.js
import React from "react";
import { useQuery, gql } from "@apollo/client";

const PLACE = gql`
  query getPlace($placeId: ID!) {
    place(id: $placeId) {
      name
      contact {
        facebookUrl
      }
      address {
        locality
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(PLACE, {
    variables: { placeId: "place/facebook:place:370266736485353" },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>
        When in Melbourne, go for a coffee at{` `}
        <a href={data.place.contact.facebookUrl}>{data.place.name}</a> in{` `}
        {data.place.address.locality} 🦙☕ 🚀
      </h2>
    </div>
  );
}

export default App;
```

## You are ready!

You've now got a working React application configured to send requests to the
Alpaca Travel API using Apollo Boost.
