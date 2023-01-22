# Working with OpenStreetMap (OSM)

The Alpaca Travel GraphQL API allows developers to build curated lists and full
trip itineraries for travel. The integration with OpenStreetMap (OSM) allows
developers to search and plot places on to their itineraries, and access
information such as opening hours, address, and more from the OSM database.
Additionally, Alpaca links information from OSM to Wikidata and MediaWiki,
providing access to broader information about the place, such as photos and
official websites, population statistics, and more.

In this technical guide, we will provide information to developers building apps
or websites on top of the Alpaca API, to help them leverage the OSM integration.
We will cover topics such as:

- Alpaca Travel GraphQL API allows integration with OpenStreetMap (OSM) to
  access information such as opening hours, address, etc.
- Alpaca links OSM information to Wikidata and MediaWiki, providing access to
  broader information such as photos and population statistics.
- ID structures, how to identify OSM ID's, adding a place to an itinerary,
  information that can be loaded from OSM, and further information accessible
  from Wikidata and MediaWiki.
- Additional functionality includes resolving multiple references of a relation
  and node to return the most accurate information and linking OSM information
  to Wikidata and MediaWiki.

## What is OpenStreetMap?

[OpenStreetMap](https://www.openstreetmap.org/) (OSM) is a collaborative project
that creates and provides free geographic data and map images to anyone who
wants them. It is a community-driven project that allows users to contribute,
edit, and use map data. The data is collected and maintained by a community of
volunteers, who map the world using GPS devices, aerial imagery, and other
sources.

OSM provides a wide range of data that can be used for various purposes, such
as:

- Creating maps for websites and mobile apps
- Geocoding and reverse geocoding
- Routing and navigation
- Point-of-interest (POI) data for location-based services
- Geodata analysis
- 3D visualization
- Disaster response and humanitarian aid

OSM data is available under an open license, which allows for free use and
distribution, even for commercial purposes. This makes it a popular choice for a
wide range of applications, from small hobby projects to large-scale enterprise
solutions. With OSM, developers can access a wealth of geographic data to build
powerful and informative applications.

## Place Identifiers

OpenStreetMap (OSM) uses three main types of objects inside its database: nodes,
ways, and relations. Nodes represent a single location, while relations can
define a number of objects, such as a city or a building. Sometimes a node is a
label for the broader relation, such as the node representing the label for
"Melbourne", but it is part of a relation that contains more information, such
as the Wikidata, bounds for maps, etc.

In OSM, identifiers are presented in the format "type" + "ID", for example
"N123" for a node or "R123" for a relation.

`place/openstreetmap:<osmtype>:<osmid>`

| OpenStreetMap ID            | Alpaca Place ID                      |
| --------------------------- | ------------------------------------ |
| Type: Node, ID: 21579127    | place/openstreetmap:node:21579127    |
| Type: Relation, ID: 4246124 | place/openstreetmap:relation:4246124 |

To reference a node or relation in the Alpaca Travel GraphQL API, the format is
"place/openstreetmap:" + "osmtype" (node, relation, way) + ":" + "osmid". For
example, to reference a node with ID 123 in OSM, the identifier in Alpaca would
be "place/openstreetmap:node:123", and for a relation with ID 123, the
identifier would be "place/openstreetmap:relation:123".

It is important to note that when referencing a node or relation in Alpaca, the
"osmtype" and "osmid" must be separated by a colon (:), and the identifier must
start with "place/openstreetmap:".

To identify the OSM ID's from Nominatim or other search platforms, you can use
the Overpass API, which allows to extract information from the OpenStreetMap
database. You can also use the Nominatim service that is provided by
OpenStreetMap, which you can search for a place and get the OSM ID.

In summary, to reference a place in the Alpaca API, developers need to use the
OSM identifier in the format "place/openstreetmap:osmtype:osmid". You can use
the Overpass API or Nominatim to find the OSM identifier for a place.

```graphql
query GetPlace {
  place(id: "place/openstreetmap:node:21579127") {
    name

    # Access the label
    position {
      lon
      lat
    }

    # Access the bounds for the place
    bounds {
      w
      s
      e
      n
    }
  }
}
```

```json
{
  "data": {
    "place": {
      "name": "Melbourne",
      "position": {
        "lon": 144.9631608,
        "lat": -37.8142176
      },
      "bounds": {
        "w": 144.44405,
        "s": -38.49937,
        "e": 146.1925,
        "n": -37.40175
      }
    }
  }
}
```

## Labels and Information

To help developers work with place information from OSM more efficiently, Alpaca
offers additional functionality. One of these features is the ability to resolve
multiple references of a relation and node that potentially reference the same
place. This is useful because, in OSM, a place can be represented by both a node
(a single location) and a relation (a broader object that contains multiple
locations).

For example, a node might represent the label for "Melbourne", but it is part of
a relation that contains more information, such as the Wikidata, bounds for
maps, etc. Alpaca allows developers to access the broader 'bounds' of the parent
relation, but use the position of the label. This can be useful for plotting
places on a map or for providing more accurate location-based information.

To take advantage of this functionality, developers can reference the place in
the Alpaca API using the "place/openstreetmap:osmtype:osmid" format, as
explained in the previous section. Alpaca will automatically resolve the
information and return the most accurate and relevant information for the place.

Additionally, Alpaca allows you to access broader information about the place,
such as photos and population statistics. Furthermore, it links information from
OSM to Wikidata and MediaWiki, providing access to broader information about the
place. This is useful for accessing photos of towns, or information about
population etc.

In summary, Alpaca offers additional functionality to assist working with place
information from OSM, such as resolving multiple references of a relation and
node to return the most accurate and relevant information, and linking
information from OSM to Wikidata and MediaWiki, to provide developers with more
context and information about the place.

```graphql
query GetPlace {
  place(id: "place/openstreetmap:node:21579127") {
    name

    # Translated names
    nameAR: attrValue(id: "place/name", locale: "ar")

    # Offical websites
    websiteUrl

    # Access some deeper information
    population: attrValue(id: "place/population")
    wikidata: attrValue(id: "place/wikipedia-url", locale: "en")

    # Mapping data
    position {
      lon
      lat
    }
    bounds {
      w
      s
      e
      n
    }

    # Images
    images: mediaContainers(first: 3) {
      nodes {
        resource {
          ... on MediaImage {
            url(bestFit: [200, 200])
            copyright
            attribution
            caption
          }
        }
      }
    }

    # Source and Attribution
    contributor
  }
}
```

```json
{
  "data": {
    "place": {
      "name": "Melbourne",
      "nameAR": "ملبورن",
      "websiteUrl": "https://www.melbourne.vic.gov.au/Pages/home.aspx",
      "population": 4347955,
      "wikidata": "https://en.wikipedia.org/wiki/Melbourne",
      "position": {
        "lon": 144.9631608,
        "lat": -37.8142176
      },
      "bounds": {
        "w": 144.44405,
        "s": -38.49937,
        "e": 146.1925,
        "n": -37.40175
      },
      "images": {
        "nodes": [
          ...
        ]
      },
      "contributor": "OpenStreetMap"
    }
  }
}
```

### Extended Place Information via Wikidata

Wikidata is a free and open-source knowledge base that can be read and edited by
both humans and machines. It is a collaborative project run by the Wikimedia
Foundation and is closely connected to Wikipedia. Wikidata stores structured
data and can be used to provide additional information, such as translations
and relationships between different pieces of information.

For places and locations, Wikidata provides a wealth of information, such as:

- Names and translations of the place in different languages
- Coordinates and location data
- Demographics and population data
- Historical information
- Political and administrative information, such as country, state, and city
- Cultural and architectural information, such as landmarks and heritage sites
- Information about local economy and industry
- Information about the place's climate and geology
- And more

All this information is linked to the corresponding Wikipedia articles and other
sources of information to make it as accurate as possible. Wikidata allows
developers to access a large amount of information about a place in a structured
and consistent manner.

### Place Photos via MediaWiki

MediaWiki is an open-source software that is used to power Wikipedia and other
Wikimedia projects. It is a powerful and flexible platform for creating and
managing wikis, which are websites that allow users to easily create and edit
web pages. MediaWiki is used to store and organize large amounts of information,
including text, images, videos, and other media.

One of the features of MediaWiki is the ability to upload and organize images
and other media. Alpaca Travel API leverages this feature by providing links to
photos from MediaWiki for the places in your itinerary. This allows developers
to access a wide variety of high-quality photos of the places they are
interested in, which can be used to enhance the user experience and provide
more information about the place. The photos can be used for different purposes,
such as creating visual itineraries, displaying photos on maps, and more.

### Place Icons

Where possible, Alpaca have mapped OpenStreetMap places against the CC0 Creative
Commons Attribution icons offered by Mapbox called
[Maki](https://labs.mapbox.com/maki-icons/).

> Maki is an icon set made for map designers. Maki includes icons for common
> points of interest like parks, museums, and places of worship. Each icon is
> available as a 15px by 15px SVG file. Maki is open source and
> [CC0](https://creativecommons.org/publicdomain/zero/1.0/) licensed

This makes it easy to style and present places of interest that are added to
your Alpaca itinerary and a wide range of icons that can be used with
information from OSM.

```graphql
query GetPlaceMaki($placeId: ID!) {
  place(id: $placeId) {
    id
    position {
      lon
      lat
    }
    maki
  }
}
```

### Position Attributes

Alpaca offers a additional attributes that can be used to enhance the data
available about a location.

```graphql
query GetPlace {
  place(id: "place/openstreetmap:node:21579127") {
    position {
      lon
      lat

      # Access the timezone at the coordinate
      timezone: attrValue(id: "place/time-zone")
      # Access the currency for the country
      currency: attrValue(id: "place/country-currency")

      # Further information, such as regions..
      iso3166: attrValue(id: "place/iso-3166-2")

      # Australian information, such as locality, gov, etc
      locality: attrValue(id: "place/abs:locality")
      lga: attrValue(id: "place/abs:local-government-area")
      electoral: attrValue(id: "place/abs:commonwealth-electoral-division")
      tourismRegion: attrValue(id: "place/abs:tourism-region")
    }
  }
}
```

The response if successful will look like the following:

```json
{
  "data": {
    "place": {
      "position": {
        "lon": 144.9631608,
        "lat": -37.8142176,
        "timezone": "UTC+10:00",
        "currency": {
          "code": "AUD",
          "num": 36,
          "minor": 2,
          "name": "Australian dollar",
          "symbols": [
            "A$",
            "A＄",
            "＄",
            "$",
            "dollar",
            "dollars",
            "Dollar",
            "Dollars",
            "A﹩",
            "﹩"
          ]
        },
        "iso3166": "AU-VIC",
        "locality": "Melbourne",
        "lga": "Melbourne (C)",
        "electoral": "Melbourne (Northern Metropolitan)",
        "tourismRegion": "Melbourne"
      }
    }
  }
}
```

### Opening Hours

Where opening hours are available, you can use the Alpaca platform to interpret
and display opening hours of locations.

- Search for a upcoming or future range
- Localise the hours to a different timezone
- Identify public holidays that could affect opening hours
- Change the format and display for dates and times

Alpaca also offers the inclusion of Public Holidays in order to flag to users
of your website or application that they may have affected operating hours
due to local observed public holidays.

```graphql
# Obtain the open/closed hours for the place given a period, such as the
# upcoming week or future date range. Includes information on local public
# holidays that could affect opening hours.

query QueryDateRangeOpenClosedTimes($placeId: ID!) {
  # Use the place() operation
  place(id: $placeId) {
    # Access the opening hours (where specified)
    hours {
      # Use the forDays operation to obtain days across a range of dates. By
      # default, without any arguments the next 7 days will be selected. You
      # can change the range by specifying an alternative offset (which allows
      # you to specify values like { days: 14 }) or provide a specific start and
      # end dates (as ISO-8601 date strings)
      forDays {
        # Date/day, as ISO-8601, or as formatted for presentation using the
        # Unicode Technical Standard #35 Date Field Symbols
        date(format: "EEE, MMM d")
        # Whether there is a public holiday for this date detected for this
        # region on this date
        publicHolidays
        # Obtain the intervals for this date, requesting the opening status
        # status is optional, otherwise use Open/Closed to specify your pref
        intervals(status: Open) {
          # Hours, from/to as ISO-8601 string, or formatted using the Unicode
          # Technical Standard #35 Date Field Symbols
          from(format: "h:mm a")
          to(format: "h:mm a")
          # Status (Open/Closed)
          status
          # Any corresponding comment for the opening hours
          comment
        }
      }
    }
  }
}
```

```json
{
  "data": {
    "place": {
      "hours": {
        "forDays": [
          {
            "date": "Mon, Jan 23",
            "publicHolidays": [],
            "intervals": [
              {
                "from": "7:00 AM",
                "to": "3:30 PM",
                "status": "Open",
                "comment": null
              }
            ]
          },
          {
            "date": "Tue, Jan 24",
            "publicHolidays": [],
            "intervals": [
              {
                "from": "7:00 AM",
                "to": "3:30 PM",
                "status": "Open",
                "comment": null
              }
            ]
          },
          {
            "date": "Wed, Jan 25",
            "publicHolidays": [],
            "intervals": [
              {
                "from": "7:00 AM",
                "to": "3:30 PM",
                "status": "Open",
                "comment": null
              }
            ]
          },
          {
            "date": "Thu, Jan 26",
            "publicHolidays": ["Australia Day"],
            "intervals": [
              {
                "from": "7:00 AM",
                "to": "3:30 PM",
                "status": "Open",
                "comment": null
              }
            ]
          },
          {
            "date": "Fri, Jan 27",
            "publicHolidays": [],
            "intervals": [
              {
                "from": "7:00 AM",
                "to": "3:30 PM",
                "status": "Open",
                "comment": null
              }
            ]
          },
          {
            "date": "Sat, Jan 28",
            "publicHolidays": [],
            "intervals": [
              {
                "from": "8:00 AM",
                "to": "3:30 PM",
                "status": "Open",
                "comment": null
              }
            ]
          },
          {
            "date": "Sun, Jan 29",
            "publicHolidays": [],
            "intervals": [
              {
                "from": "9:00 AM",
                "to": "3:30 PM",
                "status": "Open",
                "comment": null
              }
            ]
          }
        ]
      }
    }
  }
}
```

See More:

- [Accessing Hours](/topics/places/Accessing%20Hours/)

## Searching for Places

## Nominatim (by OSM)

> [Nominatim](https://nominatim.org/release-docs/develop/api/Search/) (from the
> Latin, 'by name') is a tool to search OSM data by name and address and to
> generate synthetic addresses of OSM points (reverse geocoding).

Nominatim is a search service offered by OpenStreetMap (OSM) that allows
developers to search for places and addresses using free-text queries. It uses a
geocoding algorithm to match the query with the most relevant place or address.
It can return results in various formats, such as JSON, XML, and CSV.

To use Nominatim for searching for places from OSM, developers can send a HTTP
GET request to the Nominatim API endpoint with the search query and other
parameters, such as the format of the response, the limit of the number of
results, the language, and more. The API will return a list of search results,
each containing information such as the OSM ID, the type of the object (node,
way, or relation), the name of the place, the address, the bounding box, and
more.

It is recommended to use Nominatim API with care and to follow the usage policy
to avoid overloading the service and get the best results. Also, it's
recommended to cache results and use bounding box or viewbox parameters to limit
the results to the area of interest.

## 3rd Party OpenStreetMap Search Options

Several search engines are available to be able to efficiently search for
OpenStreetMap locations.

You can use these services which will allow you to locate your OpenStreetMap
place identifiers and then can use these to add to your Alpaca itineraries.

- LocationIQ - https://locationiq.com/
- GeocodeEarth - https://geocode.earth/
