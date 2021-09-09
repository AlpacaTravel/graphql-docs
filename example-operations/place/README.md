# Place

- **[Find Open Closed Times For Place By Date Range](/example-operations/place/FindOpenClosedTimesForPlaceByDateRange.graphql)**
  Obtain the open/closed hours for the place given a period, such as the upcoming week or future date range
- **[Get Place Contextual Orientation](/example-operations/place/GetPlaceContextualOrientation.graphql)**
  Query a place and contextualise it's location to other points of interest such as accomodation, towns, or other contextual places you are showing in relation to another place
- **[Get Place Currency](/example-operations/place/GetPlaceCurrency.graphql)**
  Queries the currency used in the country for a place
- **[Get Place Navigation Links](/example-operations/place/GetPlaceNavigationLinks.graphql)**
  Queries a place to identify navigation links to generate URL's to send the user to obtain navigation links using their preferred servicequery getPlaceNavigationLinks($placeId: ID!) {   use the place node  place(     Provide a place ID, example for a cafe in Melbourne    id: $placeId  ) {     Access what is needed from the place    title     Generate out navigation urls based on different providers    google: navigationUrl(provider: Google)    apple: navigationUrl(provider: Apple)  }}
- **[Get Place Time Zone](/example-operations/place/GetPlaceTimeZone.graphql)**
  Queries the timezone for a place
- **[Get Upcoming Open Closed Times](/example-operations/place/GetUpcomingOpenClosedTimes.graphql)**
  Query the next series of open/closed hours for a place, in order to present information whether the venue is open, closed, opening soon, closing soon, etc
- **[Search Address By Position](/example-operations/place/SearchAddressByPosition.graphql)**
  Searches to find addresses by supplied position lon/lat
- **[Search Locality By Position](/example-operations/place/SearchLocalityByPosition.graphql)**
  Searches to find a locality by supplied position lon/lat
- **[Search Place By Address](/example-operations/place/SearchPlaceByAddress.graphql)**
  Searches by text to find matching addresses

## Place Provider: Australian Tourism Data Warehouse

- **[Get Place ATDWWinery](/example-operations/place/atdw/GetPlaceATDWWinery.graphql)**
  Load information about a winery from Australian Tourism Data Warehousequery getPlaceATDWWinery($placeId: ID!) {   use the place() query to load information about a specific winery   This example is a winery in Mornington Peninsula/Red Hill  place(id: $placeId) {     Identifiers/Type    id    __typename     Basic information    name    description     Various contact methods for the place    contact {      facebookUrl      twitterUrl      instagramUrl      bookingsUrl    }     Required attribution/tracking for the place for ATDW    attribution {      pixel    }     Address Information    address {      addressLineOne      locality      region      postalCode    }     Geo Coordinates    position {      lon      lat    }     Layers/Categories    layers {      name    }     Wine specific attributes
- **[Search Place Autocomplete From ATDW](/example-operations/place/atdw/SearchPlaceAutocompleteFromATDW.graphql)**
  Search the Australian Tourism Data Warehouse (ATDW) for places using an autocomplete style text query

[View other operation examples](/example-operations)