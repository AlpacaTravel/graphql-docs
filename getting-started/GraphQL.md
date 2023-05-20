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
https://graphql.withalpaca.travel?accessToken=pk.XXX
```

Your `accessToken` is unique and will define what scope of services you have
access to.

## Making Requests

GraphQL allows developers many options for making requests. GraphQL requests are
made via HTTP Post calls, including your query. The query can be sent as a plain
text, making it possible to use simple HTTP fetch requests.

In addition to using basic HTTP requests, many additional libraries are
available to assist manage your calls.
