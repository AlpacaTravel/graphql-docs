<div align="center">
  <img alt="Developer Documentation" src="https://developer.alpacamaps.com/_media/logo.svg" height="75" width="75" />
</div>

# Alpaca Travel GraphQL API

> The [Alpaca Travel](https://alpaca.travel) GraphQL API provides developers
> with easy access to the platform's itinerary content for use in interactive
> applications and user interfaces.

- Easily access and manipulate itinerary data through a GraphQL API

- Incorporate platform's itinerary content into custom interactive applications
  and user interfaces such as travel itinerary planners and trip planning
  websites.

- Retrieve and display itinerary information, including maps, routes, places and
  uploaded content, in desired format.

- Engage with your audience and offer personalized travel experience by
  providing basic itinerary planning features.

- Convenient tool for including platform's itinerary content in your project,
  and for providing your users the ability to create and update itineraries.

The Alpaca Travel platform supports a wide range of itineraries, including:

- Road-trips

- Walking and hiking trails

- Flights and other modes of transportation

- Top-10 lists and other types of curated content

The Alpaca Travel platform offers more than just itinerary management, it also
includes features such as guide and directory creation, location search and
place information loading to enhance the functionality of your travel-related
application or website.

## Documentation Overview

The Alpaca Travel Platform is accessed using GraphQL, a powerful and easily
integrated techology for your website or application. You can read some
supporting information on GraphQL and why it is used below.

- **[Getting Started](#getting-started)** Starting guides for developers around
  the Alpaca Travel GraphQL API.

- **[Example Operations](/example-operations)** We have put together concrete
  examples of typical calls to the API in our
  [example operations](/example-operations) section. These will assist you
  become familiar with GraphQL as well as the capabilities of the platform.

- **[Example Applications](#example-applications)** We have provided some
  working examples of apps for you to play and adapt that demonstrates the
  technology in use.

- **[Mapping](https://github.com/AlpacaTravel/mapping-docs)** In addition to the
  GraphQL API, we also provide hosted mapping services for accessing and
  presenting data on maps. You can access these services by visiting our
  [mapping documentation](https://github.com/AlpacaTravel/mapping-docs) for more
  information.

### GraphQL Endpoint

In order to interact with the Alpaca Travel API, you will need to use GraphQL.
The GraphQL endpoint for the Alpaca Travel API is:

    https://withalpaca.com/api/graphql?accessToken=<YOUR_API_KEY>

When using the root endpoint, it is important to authenticate via providing your
`accessToken` (which is your API Key) as a query parameter.

- **[Token Authorization](/topics/graphql/Token%20Authorization/)** Understand
  more about Alpaca Travel API Keys and Tokens

- **[GraphQL Topics](/topics/graphql/)** Getting started with GraphQL

- **[Apollo Sandbox](/topics/graphql/Apollo%20Sandbox/)** Use the GraphQL
  Sandbox in order to explore and execute queries and mutations against the
  Alpaca GraphQL API from your web browser

- **[Schema Reference](/reference)** Generated documentation based on the Alpaca
  Travel GraphQL Scheme to assist with understanding data types and operations

## Getting Started

### Itinerary

If you are new to the Alpaca Travel GraphQL API, we have created a series of
guides that can familiarize you with the GraphQL API based on some common
starting points developers have.

> We recommend you start with the following guides to familiarize yourself with
> the queries and mutations available with the GraphQL API

- **[Reading from Itineraries](/getting-started/itinerary/Reading%20from%20Itineraries/)**
  Read and access content from itineraries created on the Alpaca Platform

- **[Managing a List](/getting-started/itinerary/Managing%20a%20List/)** Create,
  update and manage a curated list of locations for users

- **[Managing a Trip](/getting-started/itinerary/Managing%20a%20Trip/)** Create
  and manage a trip with routes and directions between locations

- **[Example Itinerary Operations](/example-operations/itinerary/)** A series of
  GraphQL documents that provide examples for working with itinerary operations

- **[Specific Topics](/topics/itinerary/)** Specific reference topics for
  working with itineraries

### Collections

Collections support the ability to create groups of places or itineraries to
power your website or application.

- **[Working with Collections](topics/collection)** Understand how to manage
  collections and your place library

- **[Example Collection Operations](/example-operations/collection/)** A series
  of GraphQL documents that provide examples for working with collection and
  collection location operations

### Places / Place Information

We support working with various place providers on the platform, to access place
information and keep your place information up to date.

- **[Working with Places](topics/places)** Understand how to work with places on
  Alpaca, including integration with various place provides such as OSM,
  Australian Tourism Data Warehouse (ATDW), and Facebook Pages. Learn how to
  access opening hours or other place attributes.

### Other References

- **[GraphQL Topics](/topics/graphql)** Get started with GraphQL and understand
  some specific related topics

- **[Example Operations](/example-operations/)** Example operations across the
  full Alpaca Travel GraphQL API

- **[Working with Media](topics/media)** Upload media and query media to display
  in your application or website

- **[Working with Positions](topics/position)** Access global information about
  a position, such as region, time-zone or ISO data, or local data such as
  information about a location from the ABS dataset

- **[Working with Icons](topics/icons/)** Manage profile icons sets and
  associate them with Itineraries

### JavaScript

Any GraphQL client can be used with JavaScript but the below guides may assist
you getting started with JavaScript.

- **[References](https://alpaca.travel/reference)** Examples of displaying
  content in the browser

- **[Making GraphQL Calls](topics/javascript/Making%20GraphQL%20Calls/README.md)**
  Simple methods for executing GraphQL using JavaScript

- **[Create React App](topics/javascript/Create%20React%20App/README.md)** Get
  started with a template to build React Apps in Typescript/Apollo with added
  codegen to make development faster.

- **[React Apollo Client](topics/javascript/react/Apollo%20Client/)** Get
  started with React and Apollo Client to access an itinerary

- **[Alpaca GraphQL JavaScript SDK](https://github.com/AlpacaTravel/graph-sdk)**
  (New) SDKs based on popular JavaScript development environments, including
  `React`, `Vue`, `Svelte` and `Stencil`. The SDK provides options for
  developers such as leveraging `urql`, `graphql-request`, `react-query` and
  `apollo`.

## Example Applications

We have included some example stand-alone code that you can use to build upon in
order to display content from the Alpaca Travel service.

These are provided as working examples you can modify for your own uses.

- **[Browser Examples](https://alpaca.travel/reference)** We have some examples
  of interactive maps that display in your browser.

- **[React/Apollo Load Itinerary](https://codesandbox.io/s/alpaca-travel-react-apollo-client-itinerary-t37bg9)**
  Simple example of a react application loading an itinerary using the
  "itinerary" operation.

- **[React Place Slider](https://codesandbox.io/s/alpaca-travel-collection-location-sliding-cards-2kpjt?file=/src/components/Slider.js)**
  Example loading a "slider" of location cards from a collection pulling in
  information from Australian Tourism Data Warehouse (ATDW). You can customise
  and run this in browser as a demo (code sandbox).

- **[React Opening Hours](https://codesandbox.io/s/alpaca-travel-graphql-opening-hours-cggl9?file=/src/opening-hours/opening-hours.tsx)**
  Example loading of a place opening hours, demonstrating some presentation of
  current status or schedule for a series of dates.

More examples to come

## Example Operations

A catalogue of example [GraphQL queries and mutations](/example-operations) are
provided as example gists for you to refer to for specific functionality.

## Support :thumbsup:

Alpaca Travel offers support for API clients. Clients are provided access to
Basecamp to manage integration projects, or alternatively questions can be
directed to <sayhello@alpaca.travel>.

## Contributing

We are happy to accept pull-requests, suggestions and corrections.

We have quality control mechanisms to assist in keeping the documentation is
kept maintained. This includes GitHub actions to validate site links as well as
valid GraphQL examples (in both .graphql files and featuring in markdown).

Sections such as the [reference](reference/README.md) is managed external to
this repository and can't be changed. In that case, please describe the change
to us in an Issue, and we will resolve.

### Quick Edits

You can make quick edits through GitHub by using the pencil :pencil2: edit
process and submit a pull request.

### Further Edits

Alternatively, you can pull down the git repo to make your changes. You can
check your changes by using the following commands:

    npm i
    npm test

Note: This documentation package is validated against GraphQL and we check to
make sure we don't have dead links. Please check against mistakes using
`npm test` above.

## Legal Statement

Copyright © 2020-2022 Alpaca Travel. All rights reserved.

Please be aware that use of this API is subject to an services agreement with
Alpaca Travel.
