# Working with OpenStreetMaps (OSM)

Supporting one of the largest sources of place information, Alpaca integrates
into OpenStreetMaps to allow referencing of place data from the platform.

## Place Identification

Alpaca have adopted a naming convention that supports addressing data from OSM
using OSM identifiers.

`place/openstreetmap:<osmtype>:<osmid>`

| OpenStreetMap ID         | Alpaca Place ID                   |
| ------------------------ | --------------------------------- |
| Type: Node, ID: 21579127 | place/openstreetmap:node:21579127 |

## Place Search Source

To leverage place search, you can supply the `sources` parameter of
`OpenStreetMap` in order to search from OSM for place information.
