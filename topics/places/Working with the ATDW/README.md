# Working with the Australian Tourism Data Warehouse (ATDW)

> The Alpaca GraphQL API allows you to connect to ATDW in a single integration,
> accessing product information as well as performing search, and adding those
> products to your own collection. In addition to loading the information from
> ATDW, you can add your own tags, categories and other attributes to the data.
> You can also put ATDW data into Itineraries, to form itineraries that are kept
> up to date with information from organisations that update when data in ATDW
> updates.

Alpaca provide an integration directly into the Australian Tourism Data
Warehouse (ATDW) to enable you to leverage their API and service for information
about Australian tourism products.

This information becomes easily accessible to drive your place database or be
integrated seemlessly into lists, itineraries and more. Leveraging the Alpaca
API, information accessed from the ATDW will be sync'd refreshed automatically,
saving you the need to write additional integrations.

The Australian Tourism Data Warehouse, commonly shortenned to ATDW, is a private
company owned by the state tourism bodies, and offers servies for Australian
Tourism Operators to offer information about their products to distributors.
With an ATDW distributor agreement, you can access a wealth of information about
different tourism operators in Australia. This information is encouraged to be
kept up to date, as it is used by the state tourism providers, RTO's and other
commercial distributors to list information about the business.

### Prerequisits

- Your ATDW API Key has been associated with your profile (connect application)
- You have your Alpaca API Key for querying GraphQL

## Place Identification

The Australian Tourism Data Warehouse (ATDW) uses a unique product ID to
reference different products on their platform. These product IDs are a string
of characters that look like "5cae80be57a096cd7084b6ab".

These product IDs can be used to retrieve information for different types of
content on the ATDW such as:

- Accommodation
- Attractions
- Events
- Tours

To reference an ATDW place in the Alpaca platform, you will need to use the
format "place/atdw:product:<product_id>", where <product_id> is the product ID
of the place you want to reference. For example, to reference the ATDW place
with the product ID "5cae80be57a096cd7084b6ab", you would use the identifier
"place/atdw:product:5cae80be57a096cd7084b6ab" in the Alpaca platform.

`place/atdw:product:<product_id>`

Please note that Alpaca also supports other place providers such as Facebook and
OpenStreetMap, each one of them has their unique identifier format.

```graphql
# Load information about a winery from Australian Tourism Data Warehouse

query GetWinery {
  # use the place() query to load information about a specific winery
  place(id: "place/atdw:product:5732b88b19f4a4ae38aa1974") {
    # Identifiers/Type
    id
    __typename

    # Basic information
    name
    description

    # Various contact methods for the place
    contact {
      facebookUrl
      twitterUrl
      instagramUrl
      bookingUrl
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

    # Required attribution/tracking for the place for ATDW
    attribution {
      pixel
    }

    # Address Information
    address {
      addressLineOne
      locality
      region
      postalCode
    }

    # Geo Coordinates
    position {
      lon
      lat
    }

    # Layers/Categories
    layers {
      name
    }

    # Wine specific attributes...
    # There are many attributes that can be obtain about places which we have
    # catalogued, this example draws from specific wine information
    # Wine Varieties
    wineVarieties: attr(id: "place/wine-varieties") {
      value
    }
    # Wine Alternative Styles
    wineAlternativeStyles: attr(id: "place/wine-alternative-styles") {
      value
    }
    # Wine Viticultural Practices
    wineViticulturalPractices: attr(
      id: "place/winemaking-viticultural-practices"
    ) {
      value
    }
    # Wine Regions
    wineRegions: attr(id: "place/wine-regions") {
      value
    }
    # Some additional...
    # Accreditations for Venue
    accreditations: attr(id: "place/accreditations") {
      value
    }
    # Cuisine Types
    cuisineTypes: attr(id: "place/cuisine-types") {
      value
    }
    # Accessibility
    accessibility: attr(id: "place/accessible-comment") {
      value
    }
  }
}
```

Example Response

```json
{
  "data": {
    "place": {
      "id": "place/atdw:product:5732b88b19f4a4ae38aa1974",
      "__typename": "Place",
      "name": "Heathcote Winery",
      "description": "<p>Heathcote Winery is one of the pioneer wineries of the Heathcote Region and has established a reputation as one of the icon wineries of the Region.</p><p>Heathcote Winery specialises in the production of Shiraz and has a  premium range of wines sourced entirely from estate vineyards. The Mail Coach Shiraz, upon which Heathcote Winery has built its reputation, delivers a quintessential Heathcote Shiraz that is the envy of many other producers. Three single vineyard wines, the Slaughterhouse Paddock Shiraz, The Origin Shiraz, and Heathcote Winery's signature wine The Wilkins Shiraz complete the super premium range</p><p>Tastings at Heathcote Winery are free and also include the estate Vermentino, Viognier, Grenache Rose and an enticing Fortified Shiraz, the Slaughterfied, to complete the experience.</p><p>The unique Cellar Door  in Heathcote's Main Street is open seven days a week and light fare to compliment the wines is available on weekends and public holidays.</p>",
      "contact": {
        "facebookUrl": "http://www.facebook.com/heathcotewinery/",
        "twitterUrl": "https://twitter.com/heathcotewinery",
        "instagramUrl": "https://www.instagram.com/heathcotewinery",
        "bookingUrl": null
      },
      "images": {
        "nodes": ...
      },
      "attribution": [
        {
          "pixel": "https://atlas.atdw-online.com.au/pixel?productId=5732b88b19f4a4ae38aa1974&distributorId={distributorId}&language=ENGLISH&syndicationMethod=API"
        }
      ],
      "address": {
        "addressLineOne": "185 High Street",
        "locality": "Heathcote",
        "region": "Victoria",
        "postalCode": "3523"
      },
      "position": {
        "lon": 144.70510430000002,
        "lat": -36.9188535
      },
      "layers": [
        {
          "name": "Food and Drink"
        },
        {
          "name": "Wineries"
        }
      ],
      "wineVarieties": {
        "value": [
          {
            "type": "Red wines",
            "varieties": ["Shiraz / Syrah"]
          },
          {
            "type": "White wines",
            "varieties": ["Vermentino", "Viognier"]
          },
          {
            "type": "Fortified Wine",
            "varieties": ["Vintage Fortified"]
          }
        ]
      },
      "wineAlternativeStyles": {
        "value": ["Vegan or Vegetarian Wine"]
      },
      "wineViticulturalPractices": {
        "value": [
          "Hand-picked",
          "Single Vineyard",
          "Estate Grown",
          "Family Run"
        ]
      },
      "wineRegions": {
        "value": ["Heathcote", "Central Victoria (zone)"]
      },
      "accreditations": {
        "value": ["Quality Tourism Accreditation"]
      },
      "cuisineTypes": {
        "value": ["Australian", "Light Meals", "Share Plates"]
      },
      "accessibility": {
        "value": "Caters for people who use a wheelchair. Caters for people with sufficient mobility to climb a few steps but who would benefit from fixtures to aid balance. (This includes people using walking frames and mobility aids)"
      }
    }
  }
}
```

You can also find all the attributes that are available for a location with the
following query:

```graphql
query {
  place(id: "place/atdw:product:5732b88b19f4a4ae38aa1974") {
    id

    # Load the first 30 attributes for the product
    attrs(first: 30) {
      edges {
        node {
          id
          value
        }
      }
    }
  }
}
```

### Position Attributes

Alpaca offers a additional attributes that can be used to enhance the data
available about a location.

```graphql
query GetPlace {
  place(id: "place/atdw:product:5732b88b19f4a4ae38aa1974") {
    position {
      lon
      lat

      # Access the timezone at the coordinate
      timezone: attrValue(id: "place/time-zone")

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
        "lon": 144.70510430000002,
        "lat": -36.9188535,
        "timezone": "UTC+10:00",
        "iso3166": "AU-VIC",
        "locality": "Heathcote (Vic.)",
        "lga": "Greater Bendigo (C)",
        "electoral": "Euroa (Northern Victoria)",
        "tourismRegion": "Bendigo Loddon"
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

You can also leverage the place search capabilities of the API by specifying
the `sources` as `AustralianTourismDataWarehouse`.

```graphql
# Search the Australian Tourism Data Warehouse (ATDW) for places using an
# autocomplete style text query. Search includes highlighting for results
# and summarising places into 2 main/secondary labels

query SearchPlaceAutocompleteFromATDW {
  # use the placeAutocompleteSearch operation to query ATDW
  placeAutocompleteSearch(
    text: "Heathcote Winery"
    # Supply Australian Tourism Data Warehouse as source
    sources: AustralianTourismDataWarehouse
    # Provide the max number of records to return (differs by provider)
    first: 5
  ) {
    edges {
      node {
        # Place Identifier/types
        id
        __typename
        # obtain place information here...
      }
      # Autocomplete Matching
      # Main label for place
      main {
        label
        # Text matching for text highlighting on result
        matches {
          offset
          length
        }
      }
      # Secondary label for place (additional supporting text, 2nd line text)
      secondary {
        label
        # Text maching for text highlighting on result
        matches {
          offset
          length
        }
      }
    }
  }
}
```

```json
{
  "data": {
    "placeAutocompleteSearch": {
      "edges": [
        {
          "node": {
            "id": "place/atdw:product:5732b88b19f4a4ae38aa1974",
            "__typename": "PlaceSearchNode"
          },
          "main": {
            "label": "Heathcote Winery",
            "matches": [
              {
                "offset": 0,
                "length": 9
              },
              {
                "offset": 10,
                "length": 6
              }
            ]
          },
          "secondary": {
            "label": "185 High Street, Heathcote",
            "matches": [
              {
                "offset": 17,
                "length": 9
              }
            ]
          }
        },
        {
          "node": {
            "id": "place/atdw:product:56b250842661405945694454",
            "__typename": "PlaceSearchNode"
          },
          "main": {
            "label": "Sanguine Estate",
            "matches": []
          },
          "secondary": {
            "label": "77 Shurans Lane, Heathcote",
            "matches": [
              {
                "offset": 17,
                "length": 9
              }
            ]
          }
        },
        {
          "node": {
            "id": "place/atdw:product:56b250aeb042386245d58980",
            "__typename": "PlaceSearchNode"
          },
          "main": {
            "label": "Heathcote",
            "matches": [
              {
                "offset": 0,
                "length": 9
              }
            ]
          },
          "secondary": {
            "label": "VIC, Australia",
            "matches": []
          }
        },
        {
          "node": {
            "id": "place/atdw:product:56b25647b042386245d5d30f",
            "__typename": "PlaceSearchNode"
          },
          "main": {
            "label": "Domaine Asmara",
            "matches": []
          },
          "secondary": {
            "label": "61 Gibb Road, Toolleen, VIC",
            "matches": []
          }
        },
        {
          "node": {
            "id": "place/atdw:product:56b24d2b2661405945690da5",
            "__typename": "PlaceSearchNode"
          },
          "main": {
            "label": "Munari Wines",
            "matches": []
          },
          "secondary": {
            "label": "1129 Northern Hwy, Heathcote",
            "matches": [
              {
                "offset": 19,
                "length": 9
              }
            ]
          }
        }
      ]
    }
  }
}
```

## Creating an Itinerary Location with a reference to ATDW

If you are creating an itinerary (or list of saved places), you can supply
the reference to the product when creating the itinerary location.

You can see further examples of how to work with itineraries by visiting our
sections about Itineraries.

```graphql
# Add a location to our itinerary, associating the place to Mavis The Grocer
# using the ATDW Product identifier. Once the location is added to the
# itinerary, we query back the create items on the itinerary.

mutation CreateItineraryLocationWithAtdwPlace {
  # Use the createItineraryLocation mutation operation
  createItineraryLocation(
    # Supply our Itinerary to add the item to
    itineraryId: "itinerary/ABC123"
    # Describe the location
    location: {
      # Provide some optional content to personalise the itinerary
      title: "Grab a coffee"
      synopsis: "Nearby, we can find Mavis the Grocer open most days"
      # Link the location to a known place
      place: {
        # Referencing the place from ATDW
        id: "place/atdw:product:5cae80be57a096cd7084b6ab"
        # Providing the position lon/lat
        position: { lon: 144.9970825017, lat: -37.8030584810 }
      }
    }
  ) {
    # Select what we need from the itinerary or the result of the operation
    cascaded {
      created {
        # Access the itinerary location ID as needed
        __typename
        id
      }
    }
  }
}
```

See More:

- [Managing a list](/getting-started/itinerary/Managing%20a%20List/)

## Creating a Collection Location with a reference to ATDW

If you are creating a collection containing ATDW products, you can supply the
place id to collection locations.

```graphql
# Creates a Collection Location within a collection

mutation CreateCollectionLocation {
  # use createCollectionLocation for this operation
  createCollectionLocation(
    # Supply the collection to place the collection location within
    collectionId: "collection/ABC123"
    # Supply the data for the location model
    location: {
      # Provide content for the collection item
      # Synopsis, tags, description, media, website etc.
      title: "Mavis the Grocer"
      # Supply tags (we can later query on this)
      tags: ["cafe"]
      # Note: See external refs/source if you want to store your own identifiers
      # Provide a reference to the place/position for the place location
      place: {
        id: "place/atdw:product:5cae80be57a096cd7084b6ab"
        position: { lon: 144.9970825017, lat: -37.803058481 }
      }
    }
  ) {
    location {
      # Returns with the collection location just created
      id
      __typename
    }
  }
}
```
