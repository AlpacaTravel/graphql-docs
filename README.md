<div align="center">
  <img alt="Developer Documentation" src="https://developer.alpacamaps.com/_media/logo.svg" height="75" width=75 />
</div>

# Alpaca Travel GraphQL API Documentation

> [Alpaca Travel](https://alpaca.travel) offers an GraphQL API for developers to
> build tourism websites and travel applications.

We are offering documentation within this Github repository for developers to
reference when planning and performing integration with the Alpaca Travel
services.

## What is it?

> The API is offered as a set of services to enable developers and product
> managers to build the travel related product they really wanted to.

We are offering the Alpaca Travel services to assist you do things like:

- A **places database** to power your website or application information
- A service to build your own users **trip planning services**, such as
  favorites lists or complex multi-day itineraries
- A service to access many **tracks, trails, trips and itineraries** authored on
  the Alpaca Travel platform
- A **powerful toolkit** of related services to build travel applications,
  including accessing routing, travel information, media management, nearby
  services and more
- Out of the box place **provider integration services** to access and keep your
  information up to date
- **GIS mapping services** to display maps and create interactive content with
  higher engagement
- **Platform as a service** capabilities, including CDN, image
  resizing/optimisation, vector tile creation and hosting with uptime SLAs
- **Export** data capabilities to PDF, GPX, KML, GeoJSON, Polyline and more
- Built on **GraphQL** to leverage a great data experience
- Backed by ongoing active research and development and commercial support

At [Alpaca Travel](https://alpaca.travel), we leverage the API for building our
editor and client applications. We will be continuing to add capabilities and
perform R&D work in order to offer enhance what your application or website can
do.

## Mapping Services

In addition to accessing information with our API, we also provide hosted
mapping services for accessing and presenting data on maps. You can read the
[mapping services documentation](https://github.com/AlpacaTravel/mapping-docs).

## Getting Started with the Alpaca GraphQL API

The Alpaca Travel API is accessed using GraphQL, a powerful and easily
integrated techology for your website or application. You can read some
supporting information on GraphQL and why it is used below.

- **[Topics](#topics)** - We are grouping together common requirements have
  under [topics](#topics) to bring developers up to speed quickly on certain
  concepts they may need.
- **[Tutorials](#tutorials)** - We will also be expanding on examples and topics
  to create series in the form of [tutorials](#tutorials) to expand upon
  concepts and create complete working examples.
- **[Example Applications](#example-applications)** - We have provided some
  working examples of apps for you to play and adapt that demonstrates the
  technology in use.
- **[Example Operations](/example-operations)** - We have put together concrete
  examples of typical calls to the API in our
  [example operations](/example-operations) section. These will assist you
  become familiar with GraphQL as well as the capabilities of the platform.

Finally, we have a [GraphQL Playground](https://withalpaca.com/api/graphql)
which is a way to quickly experiment with the real API in order to run GraphQL
queries and mutations.

### Endpoint URL

In order to interact with GraphQL, you will need to use the following root
endpoint:

```
https://withalpaca.com/api/graphql?accessToken=<YOUR_API_KEY>
```

When using the root endpoint, it is important to authenticate via providing your
`accessToken` (which is your API Key) as a query parameter.

#### GraphQL Playground

GraphQL offers an introspection capability with a defined schema. This helps you
develop the query that suits your specific use case or technical needs without
having to go through a lot of API Documentation. Through the GraphQL Playground,
you can try out your queries and mutations directly onto the GraphQL
environment.

Visit the [GraphQL Playground](https://withalpaca.com/api/graphql). Remember to
add your `?accessToken=` to the URL

#### New to GraphQL?

GraphQL is a flexible data query language that allows you to design queries that
match your use case. Opposed to making several REST API requests or over/under
fetching data for your application, you craft a query to obtain the data you
need.

GraphQL is sent as JSON using a standard HTTP request. This makes it possible
for many different languages and frameworks capable of being able to execute
GraphQL calls to the Alpaca Travel GraphQL API.

If you are new to GraphQL, the following educational resources may be helpful as
a starting point.

- [Introduction to GraphQL](https://graphql.org/learn/)
- [How to GraphQL](https://www.howtographql.com/)
- [Guides and Best Practices](https://www.graphql.com/guides/)
- [GraphQL Clients](https://graphql.org/graphql-js/graphql-clients/)
- [Awesome GraphQL](https://github.com/chentsulin/awesome-graphql)

GraphQL implementations can be simple as executing a query, and can then perform
better tools to handle caching and more advanced topics to support your app.

## Authentication

You will need to obtain your API Key in order to authenticate your application
when making calls to GraphQL. We accept the API Key as an `?accessToken=` query
parameter.

### Authorisation

Your API Key will have different read and write scopes, depending on when it is
created. By default, Alpaca Travel offers both private and public API Keys. A
private API Key will enable the application to perform mutations on profiles
it has been assigned, where the public API Key is read only access to content.

- **Public Scope** Able to read from assigned profiles and author anonymous
  itineraries. For use in front-end applications without priviledges to the
  profile.
- **Private Scope** Able to read/write from assigned profiles (full access).
  Do not share this API Key with the public.

### Obtaining your API Key

Your API Key is available by request during our BETA testing phase. Please
contact us via <sayhello@alpaca.travel> or following the URL
<https://alpaca.travel>. You must agree to the terms and conditions to use
this service.

## Terminology

As a broad starting point to understanding the terminology and parts of the
GraphQL service:

- A **Collection** provides a way to manage information about your locations
- An **Itinerary** helps you represent favourites, tracks and trails, trips and
  itineraries

## Topics

The following sections can help you become familiar with the GraphQL API for
your purposes.

More coming soon. Make us a suggestion.

### Itinerary

Itineraries are the data structure to store simple lists to complex
multi-segment scheduled itineraries (and what is in-between).

- **[Creating an itinerary](topics/itinerary/Creating%20an%20itinerary/README.md)**
  Start with creating an itinerary either anonymously or assigned to a profile,
  to house your saved/favourited list, trail, track, trip or itinerary
- **[Checking if a place is within an itinerary](topics/itinerary/Checking%20if%20a%20place%20is%20within%20an%20itinerary/README.md)**
  Determine if a place you are viewing is already within an itinerary
- **[Adding Locations](topics/itinerary/Adding%20Locations/README.md)**
  Add locations to your itinerary
- **[Showing/Querying an Itinerary](topics/itinerary/Querying%20an%20Itinerary/README.md)**
  Present the itinerary back to the user
- **[Automatic Routing](topics/itinerary/Automatic%20Routing/README.md)**
  Leverage the automatic routing feature of itineraries, to automatically
  provide directions between locations
- **[Places of interest](topics/itinerary/Places%20of%20interest/README.md)**
  Creating places of interest associated to locations
- **[Reordering Locations](topics/itinerary/Reordering%20Locations/README.md)**
  Provide the ability for the user to reorder the itinerary to suit
- **[Adding Directions](topics/itinerary/Adding%20Directions/README.md)**
  Add more complex directions, including multi-modal or manual directions (such
  as GPS tracks)
<<<<<<< HEAD
- **[Adding Photos](topics/itinerary/Adding%20Photos/README.md)**
  Add photos for itinerary or itinerary locations
=======
- **[Segments](topics/itinerary/Segments/README.md)**
  Group itinerary items into trip segments
>>>>>>> b6e65ddff6e50111b628c7c88e49485fc032e015
- **[Mapping](topics/itinerary/Mapping/README.md)**
  Accessing information from the API as a GIS data source for itinerary
  information

### Collections

Collections support the ability to create groups of places or itineraries to
power your website or application.

- **[Managing collection locations](topics/collection/Managing%20collection%20locations/README.md)**
  Managing collection locations, including listing, creating, updating and
  removing
- **[Importing Locations](topics/collection/Importing%20Locations/README.md)**
  Working with concepts of importing 3rd party locations from another platform

### Places / Place Information

We support working with various place providers on the platform, to access place
information and keep your place information up to date.

- **[Working with Open Street Map (OSM)](topics/places/Working%20with%20OSM/README.md)** Access
  information directly from OpenStreetMaps database
- **[Australian Tourism Data Warehouse (ATDW)](topics/places/Working%20with%20the%20ATDW/README.md)**
  Alpaca provides the ability to query and use data from the ATDW API through a
  GraphQL interface, allowing you to easily structure the data into itineraries
  or your own collections, as well as access all the rich data from ATDW in a
  convenient and consistent way, speeding up your integration. You can also
  store additional data beside ATDW data, including missing places or additional
  data attributes (tags, custom data etc)
- **[Accessing Hours](topics/places/Accessing%20Hours/README.md)**
  Access information about opening hours of a vendor, and present them in
  time zone appropriate formats.
- **[Standard place attributes](topics/places/Standard%20place%20attributes/README.md)**
  Standardised place attributes used to provide extensible information around
  places.

Other providers integrated include; TripAdvisor, Zomato, Yelp, WOF, GeoNames,
Foursquare, Facebook, Wikidata are more.

### Position

- **[Position attributes](topics/position/Position%20attributes/README.md)**
  Access global information about a position, such as region, time-zone or ISO
  data, or local data such as information about a location from the ABS dataset

### Media

Various media can be accessed on the Alpaca platform.

- **[Uploading photos](topics/media/Uploading%20photos/README.md)** Upload
  photos to be served in content leveraging optimising and serving via CDN
- **[Using Unsplash](topics/media/Using%20unsplash/README.md)** Referencing a
  photo on the unsplash platform
- **[Querying media](topics/media/Querying%20media/README.md)** Querying media

### Icons

- **[Managing profile icons](topics/icons/Managing%20profile%20icons/README.md)**
  Managing profile icon sets
- **[Associating itinerary icons](topics/icons/Associating%20itinerary%20icons/README.md)**
  Associating icons for use in itineraries

### GraphQL

Topics across our API can be explored from the following list;

- **[Pagination using cursor connections](/topics/graphql/Pagination%20using%20cursor%20connections/README.md)**
  Using the standarised best practice for pagination using cursor connections
- **[Attributes](/topics/graphql/Attributes/README.md)**
  Using attributes to access or update extended data for resources, including
  storing localisation or custom values against supported resources

### JavaScript

- **[Making GraphQL Calls](topics/javascript/Making%20GraphQL%20Calls/README.md)**
  Simple methods for executing GraphQL using JavaScript
- **[Create React App](topics/javascript/Create%20React%20App/README.md)**
  Get started with a template to build React Apps in Typescript/Apollo with
  added codegen to make development faster.

### Alpaca GraphQL JavaScript SDK

- **[Alpaca GraphQL JavaScript SDK](https://github.com/AlpacaTravel/graph-sdk)** (New)
  SDKs based on popular JavaScript development environments, including `React`,
  `Vue`, `Svelte` and `Stencil`. The SDK provides options for developers such as
  leveraging `urql`, `graphql-request`, `react-query`and `apollo`.

## Tutorials

React

- [Connecting to Apollo](tutorials/react/Connecting%20to%20Apollo/README.md)
- [Connecting to URQL](tutorials/react/Connecting%20URQL/README.md)

More Coming soon

## Example Applications

We have included some example stand-alone code that you can use to build upon
in order to display content from the Alpaca Travel service.

These are provided as working examples you can modify for your own uses.

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

## GraphQL Schema Reference

You can [review the reference schema documentation](reference/README.md).

## Support :thumbsup:

Alpaca Travel offers support for API clients. Clients are provided access to
Basecamp to manage integration projects, or alternatively questions can be
directed to <sayhello@alpaca.travel>.

## Contributing

We are happy to accept pull-requests, suggestions and corrections.

We have quality control mechanisms to assist in keeping the documentation is
kept maintained. This includes GitHub actions to validate site links as well
as valid GraphQL examples (in both .graphql files and featuring in markdown).

Sections such as the [reference](reference/README.md) is managed external to
this repository and can't be changed. In that case, please describe the change
to us in an Issue, and we will resolve.

### Quick Edits

You can make quick edits through GitHub by using the pencil :pencil2: edit
process and submit a pull request.

### Further Edits

Alternatively, you can pull down the git repo to make your changes. You can
check your changes by using the following commands:

```
npm i
npm test
```

Note: This documentation package is validated against GraphQL and we check
to make sure we don't have dead links. Please check against mistakes using
`npm test` above.

## Legal Statement

Copyright © 2020-2021 Alpaca Travel. All right reserved.
