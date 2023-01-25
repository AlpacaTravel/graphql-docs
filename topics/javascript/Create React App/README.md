# Create React App

You can easily use your own preference for application development, but a
popular approach is using React with Typescript and Apollo Client.

## Getting Started

To aid in getting your environment setup ready to develop your React
Applications with the Alpaca Travel GraphQL environment, you can get started
using these templates

### Typescript and Graphql Apollo/Codegen

By running the following command, you will have a React Application development
environment setup for Typescript and GraphQL.

```shell
$ npx create-react-app my-app --template "@alpaca-travel/typescript-apollo-codegen"
```

## Building your application

The template configures a basic react application in a similar starting point to
the standard create react app setup.

    yarn start

### Environment Configuration

You will need to place your API Key in your environment file, which for local
development can be done by creating a `.env.local` folder similar to below:

    REACT_APP_GRAPHQL_ACCESS_TOKEN=pk/sk...

### Writing Operations

You can write you GraphQL documents into the `src/graphql/` directory, such as:
`src/graphql/MyOperation.graphql`.

Once you have your first operation, you can run the following to generate your
typescript types as well as React Hooks for accessing and using your operations.

    yarn graphql-codegen

## More Resources

- [Template Repository](https://github.com/AlpacaTravel/cra-template-typescript-apollo-codegen)
