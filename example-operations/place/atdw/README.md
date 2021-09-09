# Place Provider: Australian Tourism Data Warehouse

- **[Get Place ATDWWinery](/example-operations/place/atdw/GetPlaceATDWWinery.graphql)**
  Load information about a winery from Australian Tourism Data Warehousequery getPlaceATDWWinery($placeId: ID!) {   use the place() query to load information about a specific winery   This example is a winery in Mornington Peninsula/Red Hill  place(id: $placeId) {     Identifiers/Type    id    __typename     Basic information    name    description     Various contact methods for the place    contact {      facebookUrl      twitterUrl      instagramUrl      bookingsUrl    }     Required attribution/tracking for the place for ATDW    attribution {      pixel    }     Address Information    address {      addressLineOne      locality      region      postalCode    }     Geo Coordinates    position {      lon      lat    }     Layers/Categories    layers {      name    }     Wine specific attributes
- **[Search Place Autocomplete From ATDW](/example-operations/place/atdw/SearchPlaceAutocompleteFromATDW.graphql)**
  Search the Australian Tourism Data Warehouse (ATDW) for places using an autocomplete style text query

[View other place operation examples](/example-operations/place)