# Standard Place Attributes

Alpaca maintain a series of standard place attributes that are used to collate
and standardise information access from various place providers. These place
attributes can also provide data structures that can be used to extend the
information further than what is provided by a standard place provider.

## Background to Attributes

- Attributes are a mechanism in the Alpaca GraphQL in order to offer
  extensibility of data relating to resources
- Attributes have a specific ID and data structure supported for the official
  attributes, but attributes can be used for your own extensible data
- Attributes can also have locale based values, enabling localisation for
  content

## Standardised Place Attributes

The below table is by no way the full supported attribute structure, but will be
extended and eventually built based on our internal definitions over time.

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
