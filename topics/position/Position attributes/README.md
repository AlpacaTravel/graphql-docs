# Position Attributes

A position longitude and latitude coordinate for a projected coordinate system.

```graphql
query {
  # Supported on place or any other type with a Position
  place(id: "place/facebook:page:mavisthegrocer") {
    # The position type represents a coordinate (longitude and latitude)
    position {
      # Coordinate References
      lon
      lat
      # latLon, lonLat etc if preferred to access as an array

      # Access the timezone at the coordinate
      timezone: attrValue(id: "place/time-zone")
      # Access the currency for the country
      currency: attrValue(id: "place/country-currency")

      # Further information, such as regions..
      iso3166: attrValue(id: "place/iso-3166-1-alpha-3")

      # Australian information, such as locality, gov, etc
      locality: attrValue(id: "place/abs:locality")
      lga: attrValue(id: "place/abs:local-government-area")
      electoral: attrValue(id: "place/abs:commonwealth-electoral-division")
      tourismRegion: attrValue(id: "place/abs:tourism-region")
    }
  }
}
```

## Projected Coordinate System

Alpaca has adopted the [EPSG:3857](https://epsg.io/3857) projected coordinate
system used for rendering maps in Google Maps, OpenStreetMap, Mapbox etc.

## Accessing information about a coordinate

Alpaca provides extended attributes about a supplied coordinate reference to
allow developers a easy way to access further information about the location.

### Geographical Attributes

To assist in macro global geographical placement of places, the following
attributes are available.

| ID                          | Name                    | Type   |
| --------------------------- | ----------------------- | ------ |
| `place/iso-3166-2`          | ISO-3166-2              | string |
| `place/iso-3166-1-alpha-2`  | ISO 3166-1 alpha-2      | string |
| `place/iso-3166-1-alpha-3`  | ISO 3166-1 alpha-3      | string |
| `place/continent`           | Continent               | string |
| `place/subregion`           | Subregion               | string |
| `place/region-wb`           | Region (World Bank)     | string |
| `place/region-un`           | Region (United Nations) | string |
| `place/country`             | Country                 | string |
| `place/country-formal-name` | Country Formal Name     | string |
| `place/region`              | Region                  | string |
| `place/region-abbreviation` | Region (Abbrev)         | string |
| `place/time-zone`           | Time zone               | string |
| `place/country-currency`    | Currency                | object |

### Australian Bureau of Statistics (ABS)

To assist in geographical placement against ABS data, the following place
attributes are available in Australia.

| ID                                               | Name                                 | Type   |
| ------------------------------------------------ | ------------------------------------ | ------ |
| `place/abs:local-government-area`                | Local Government Area                | string |
| `place/abs:local-government-area-code`           | Local Government Area Code           | string |
| `place/abs:tourism-region`                       | Tourism Region                       | string |
| `place/abs:tourism-region-code`                  | Tourism Region Code                  | string |
| `place/abs:commonwealth-electoral-division`      | Commonwealth Electoral Division      | string |
| `place/abs:commonwealth-electoral-division-code` | Commonwealth Electoral Division Code | string |
| `place/abs:region`                               | State                                | string |
| `place/abs:state-code`                           | State Code                           | string |
| `place/abs:state-suburb-code`                    | State Suburb Code                    | string |
| `place/abs:locality`                             | Locality                             | string |
| `place/abs:postal-code`                          | Postal code                          | string |

ABS data is obtained from the latest available data sets, which are updated in
line with the census data. The next census data is due June 2022.

### Wine Australia

To assist in geographical placement against Wine Australia information, the
following attributes are available in Australia.

| ID                                     | Name                    | Type   |
| -------------------------------------- | ----------------------- | ------ |
| `place/wineaustralia:zone`             | Wine Zone               | string |
| `place/wineaustralia:zone-number`      | Wine Zone (number)      | number |
| `place/wineaustralia:region`           | Wine Region             | string |
| `place/wineaustralia:region-number`    | Wine Region (number)    | number |
| `place/wineaustralia:subregion`        | Wine Subregion          | string |
| `place/wineaustralia:subregion-number` | Wine Subregion (number) | number |
