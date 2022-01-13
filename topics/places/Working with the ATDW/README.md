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

Alpaca have adopted a naming convention that supports addressing product from
ATDW. Each product in ATDW is assigned an identifier, and you can use that
identifier to access the information through the Alpaca API.

| ATDW Product ID          | Alpaca Place ID                             |
| ------------------------ | ------------------------------------------- |
| 5cae80be57a096cd7084b6ab | place/atdw:product:5cae80be57a096cd7084b6ab |

## Querying an ATDW Product

Alpaca maintain mapping to the Alpaca GraphQL place schema, which enables you
to query information from ATDW similar to how you access it from any of our
other integrations (such as with TripAdvisor, Foursquare, Zomato, Open Street
Maps and more).

```graphql
# Load information about a winery from Australian Tourism Data Warehouse

query QueryPlaceATDWWinery {
  # use the place() query to load information about a specific winery
  place(id: "place/wineryABC123") {
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
    accessibility: attr(id: "place/accessibility") {
      value
    }
  }
}
```

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
    text: "Mavis the Grocer"
    # Supply Australian Tourism Data Warehouse as source
    sources: [AustralianTourismDataWarehouse]
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
