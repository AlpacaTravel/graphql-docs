# Mapping

<img alt="Mapping Data" src="./map.png" width="803" height="598" />

> Alpaca makes it easy for developers to present and work with content on maps.
> You can access GIS information through our API, of use our mapping service
> which creates consumeable mapping data to plug straight into mapping products

A core focus of the Alpaca `Itinerary` structures is to support content to be
presented on maps. As such, Alpaca provides a wide range geographic information
to be stored and accessed around your content.

Alpaca provides data that can be used with mapping clients, from desktop
mapping software such as QGis, or with popular website mapping clients such as
Mapbox, Google Maps, Leaflet or Pigeon Maps.

Alpaca provides access to the underlying mapping data via the GraphQL API, but
also provides various mapping services (which as documented
[here](https://github.com/AlpacaTravel/mapping-docs)).

### Prerequisits

- GraphQL development environment (or GraphQL Playground)
- Your API Key
- Itinerary IDs to query

# Querying Data via the API

Alpaca API uses a number of data types when used for querying mapping
information for your content. These data types will return the underlying
mapping information in various popular formats.

## Coordinates

Coordinates are described by the `PositionType`. This provides the ability to
query longitude/latitude information from the platform.

## GeoJSON

GeoJSON is a popular GIS format that can represent a wide range of features,
such as points, linestrings and polygons. It is a relatively verbose format,
but can usually be dropped immediately as a data source into most mapping
technologies.

The `GeoJSON` data type offered by Alpaca also allows you to simplify the
complexity of features. This gives you a basic optimisation option when querying
data from the platform.

## Encoded Polylines

Polylines are an optimised representation for a linestring feature and available
for representing continous line data. We also offer simplication to reduce
the density of the data.

# Accessing mapping services

As mentioned above, you can use the GraphQL API or alternatively access our
mapping service which provides an optimised and idiomatic environment for
working with popular mapping technologies.

[View the documentation for our mapping services](https://github.com/AlpacaTravel/mapping-docs).

## Hosted datasets

Alpaca provides a specification for GeoJSON and Vector Tiles, as well as a
hosted vector tile service which enables developers easy way to access data.

These services can be accessed without leveraging the GraphQL API/

[View information about accessing data sets](https://github.com/AlpacaTravel/mapping-docs).

## SVG and other representations

<img src="./svg-basic-styled.png" alt="SVG Output for styling" />

In addition to detailed mapping representations and access via the API, Alpaca
Travel also provides unstyled SVG documents that can be styled using CSS or
via alternative design software.

The SVG's contain unique features to assist the common use cases of SVG, such
as producing generalised representations of routes (through simplifying
routes or introducing bezier splines) as well as choosing base map landmarks,
such as administrative boundaries (countries, regions, suburbs, postal etc) or
tourism regions.

See the [mapping service documentation](https://github.com/AlpacaTravel/mapping-docs)
for more information about leveraging SVGs.

# Projection and Coordinate Reference System (CRS)

The coordinate reference system used by default in Alpaca is the the popular
Web [Mercator projection](https://en.wikipedia.org/wiki/Mercator_projection).
This is used by a majority of web mapping technology. Alpaca uses the
[https://epsg.io/3857](EPSG:3857/WGS 84).
