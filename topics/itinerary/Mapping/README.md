# Mapping

A core focus of the Alpaca `Itinerary` structures is to support content to be
presented on maps. As such, Alpaca provides a wide range geographic information
to be stored and accessed around your content.

### Prerequisits

- GraphQL development environment (or GraphQL Playground)
- Your API Key
- Itinerary IDs to query

# Querying Data

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

# Vector Tiles

Alpaca generates corresponding vector tiles for the content stored within the
platform. Vector tiles make maps load fast, as well as provide the ability to
stylise the data how you prefer.

# Projection and Coordinate Reference System (CRS)

The coordinate reference system used by default in Alpaca is the the popular
Web [Mercator projection](https://en.wikipedia.org/wiki/Mercator_projection).
This is used by a majority of web mapping technology. Alpaca uses the
[https://epsg.io/3857](EPSG:3857/WGS 84).
