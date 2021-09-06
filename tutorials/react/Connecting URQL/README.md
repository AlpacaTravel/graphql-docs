# Connecting URQL

This guide will quickly setup a React single-page application using
create-react-app, and configure it using URQL in order to send and receive
data from the Alpaca Travel API

You can bypass the need for this tutorial now by reviewing the
[Alpaca GraphQL JavaScript SDK For URQL](https://github.com/AlpacaTravel/graph-sdk/tree/develop/packages/urql)
which allows you to add capabilities to your existing applications.

URQL is a highly customisable and versatile GraphQL client that is popular for
its simple to advanced use. The aim is to create something lightweight, opposed
to traditionally larger frameworks such as Apollo or Relay.

- Lightweight and "blazingly" fast
- Extensible at the core to support wider use cases
- Effective caching
- Great for a basic app, through to larger more complex projects

## Getting Started

We've chosen to simplify the setup of a React application by using the
[Create React App](https://github.com/facebook/create-react-app) project. This
project is recommended by the React team for when you are learning React or
creating a new single-page app. While it is quick to setup, it offers a
reasonable toolset using the latest JavaScript features and provides a nice
developer experience while optimising for production.

### One line install

Using the below command, you will be up and running with a React application and
a connection to the Alpaca Travel API through urql.

```shell
npx create-react-app my-project --template @alpaca-travel/urql
```

Note in the above, we are using `npx` which is not a typo. It is a package
runner installed with npm 5.2+.

### Update your API Key

Modify the `.env` file and replace `REACT_APP_ALPACA_ACCESS_TOKEN=...` with your
API Key.

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

URQL is a single package that provides the same client for React, Preact and
Svelte. The below is based on the
[urql quickstart](https://formidable.com/open-source/urql/docs/).

- `urql`: The main package we will be using
- `graphql`: For working with our grapql queries

```shell
npm install urql graphql
# or
yarn add urql graphql
```

### Configuring the GraphQL Client

URQL will be used as the client to connect to the Alpaca Travel API. All GraphQL
clients send requests to a single "root endpoint" which is shown below. We will
configure this into our app in the next section.

`https://withalpaca.com/api/graphql?accessToken=<YOUR_API_KEY>`

#### Adding in the required environment variables

A preferred way of configuring the environment of your application is to use
`.env`. If you have your own preferred way or your own security protocols to
follow for managing environment variables, you can bypass this step and
configure the urql URI yourself.

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

#### Creating the URQL Client

Create the new file `src/client.js`. We can then import `createClient` from
`urql` and add the GraphQL endpoint to the `url` property of the options object.

```javascript
// src/client.js
import { createClient } from "urql";

// Access the environment variables to configure the URI
const endpoint = process.env.REACT_APP_ALPACA_GRAPHQL_ENDPOINT;
const accessToken = process.env.REACT_APP_ALPACA_ACCESS_TOKEN;

const client = createClient({
  url: `${endpoint}?accessToken=${accessToken}`,
});

export default client;
```

### Integrating into React

Now that we have our environment setup with a `client.js` file exporting the
urql client, we can integrate the client into React.

In your `src/index.js`, we will first import the Provider which will provide the
client through context to your React application and hooks and the provide it
our configured client.

```javascript
// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "urql";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import client from "./client";

ReactDOM.render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
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
import { useQuery } from "urql";

const PLACE = /* GraphQL */ `
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
  const [result] = useQuery({
    query: PLACE,
    variables: { placeId: "place/facebook:place:370266736485353" },
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

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
Alpaca Travel API using URQL.
