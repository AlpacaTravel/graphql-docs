[//]: # "Title: Adding Routes and Directions"
[//]: # "Weight: 7"

# Adding Directions

A key part of an itinerary is to assist the user understand their movements.
Alpaca offers services to assist providing information to users viewing your
itineraries.

Alpaca can provide automatic routing to assist this process, of you can create
your own directions to represent more complex directions and their
representations. Various modes of transportation are supported to represent the
movements of the traveller.

Alpaca supports a data structure to support manual data or automatic directions
searching through a search service offered by Alpaca. You can also supply a
single mode of transportation, or support mutli-modal transport.

### Prerequisites

- You'll need an itinerary you want to add to and locate the Itinerary ID

- The itinerary will need to be unassigned to a profile, or you'll need your
  private API Key

## Automatic Routing for added locations

You can get started with directions by leveraging the
[Automatic Routing](/topics/itinerary/Directions/Automatic%20Routing/README.md)
capability that does not require you manually add directions. As you add
locations to your itinerary, directions will be added automatically.

## Adding a Car Route

The below example creates itinerary directions between two locations that are
existing in your itinerary.

The single segment supplied is a Car segment, that is automatically searched for
the best path to take.

```graphql
# Creates itinerary directions for between locations in an itinerary manually.
# Can be used to create directions instead of using the Itinerary autoRoute
# method or for where the itinerary is to contain multiple ways to move between
# locations (alternative modes of transport between locations) or to provide
# optional route options that may bypass specific locations in a sequence.

mutation CreateItineraryDirections {
  # use createItineraryDirections to create directions in an itinerary
  createItineraryDirections(
    # Supply the itinerary ID
    itineraryId: "itinerary/ABC123"
    # Provide the model for directions
    directions: {
      # Provide the route for the directions
      route: {
        segments: [
          # Create segments for each mode. Add additional segments sequentially
          # here as we support modal, e.g. Foot -> Car -> Foot etc. depending on
          # the fidelity of the directions
          {
            # Indicate the mode of transport for this route segment
            mode: Car
            # Indicate whether we should search for this route
            useRouteSearching: true
          }
        ]
      }
      # Contextualise the directions from origin/destination
      # Origin itinerary location
      originId: "itinerary/ABC123/item/startABC123"
      # Position under the destination itinerary location
      positionAtEnd: {
        # Destination itinerary location
        parentId: "itinerary/ABC123/item/endpointABC123"
      }
    }
  ) {
    # Query what was affected as a response
    cascaded {
      created {
        id
        __typename
      }
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBhAJwQEMUEBnHASxSqQQOIIE8cwqipaIlKAzCARwAjBCgDuCZDgA20UlR6U6OYkmq16jFjjhqYxGTOYA6ADpJceNSIQ4Y5BGBwoIOKEVJ32nbr2q8ZMTOEHz25HQA5i4AFnYAkpoMTKzEMK4AShDpCBa4iCgxECFCAkLicUSxdjR0yTpUlK7uPCjEKnAwMrQADjJ24sTMTW5wEABudqISUkh5svJ+lAAUhmQESAqTusUUOKEujLw9gii2M9JyUApKAJT7Qs09BBNUYLmW+z1+hjgvOV8lrFSLohiJmD1iORKOQeggoFQ+FQoAtrkCVMQcI4AI4wZBQBDmOZITptPz4TxkRJ1bTMAAiHHhQOAFhwOFwDjsHhIVKStIZvkU-ma3K8bEZXCFynUNlqWhSrPclIQ1PlLAFTKly0VbNwAGUYD0+qxCjU+SkcPE6TqNDSUvEwOgcGYQHL6swAPQAQQAQngAIwAJgAzC6bbgAAovcZvOymnbvGQ4MriwVKG0+TVKJ0s9Rs-OR6Ox6p-bJkZOCEuZyXpvP50s5HM2+uOSKIVDkJ0AbWb9fZFJ5dlb7ZQ-ErJCgMQThJwXrAzmC7B+SeHyFHWIQuLXVEMxl79dwlTsUJwkixhpOBDOYzAhgANDhCZETDgAGIQCBnAC0AD58EwcF-N8PzOMQoBfd44SQdgkGiHh9wLEskUTGhWAOeNqyWBC2VzPs8P7eJoORMV4xvOx0KOWFTgrR4YkaBty1XVBsPzMinWsAgWN1S0iLRAY4lNcohyKLpnEcJhJxo2J6P+MguPCBAshyPUSAIScoidFACDxFiAF8EIAXV7fS60QvBWgQAAPFADBkRo4ziVMs38PgXjgB4qEiOgPXechNBuYk8NwAB5AhPJUN1aVRALe0EcKkAdJ0XUilJvT9INgw9GgEDgD0-KYFBfQDEMw1M7iIwgCJyRgaCGCrCh-PJFKdCuGKypwE4qqFL0UAAUWgpt2u4ukGroALbTVVhWr8BDISIVBEudV1zRYNLisy7LcuQMATjoQr0pKkBjJtEy2XuXDEIARTxHQKhBQZKGIPg+CZJxVEev4KBOXgPnra5yGud5nAuv7lWBhC3gQgB9KGUAhZBiEQY7TNOnATN0kBdKAA)

## Adding a GPS Track (manual path)

You can also specify directions such as providing a manual track from GPS data.

Provide the GPS observations as the `positions`, and it is not necesarry to use
`useRouteSearching`.

```graphql
# Creates itinerary directions for between locations in an itinerary by
# supplying all the point information with a custom mode of transportation.

mutation CreateItineraryDirectionsWithManualPositions {
  # use createItineraryDirections to create directions in an itinerary
  createItineraryDirections(
    # Supply the itinerary ID
    itineraryId: "itinerary/ABC123"
    # Provide the model for directions
    directions: {
      # Provide the route for the directions
      route: {
        segments: [
          # Add in a segment that is not using route searching and supplies
          # the points
          {
            # Indicate the mode of transport for this route segment
            mode: DogSled
            # Provide the information for the segment
            useRouteSearching: false
            positions: [
              # List the positions for the route
              { lon: 24.235839843749996, lat: 60.600453043068256 }
              { lon: 23.3184814453125, lat: 61.00507574751817 }
              { lon: 24.532470703125, lat: 61.39145881217429 }
              { lon: 25.784912109375, lat: 61.090168316050516 }
              { lon: 25.323486328124996, lat: 60.63548951646859 }
            ]
          }
        ]
      }
      # Contextualise the directions from origin/destination
      # Origin itinerary location
      originId: "itinerary/ABC123/item/startABC123"
      # Position under the destination itinerary location
      positionAtEnd: {
        # Destination itinerary location
        parentId: "itinerary/ABC123/item/endpointABC123"
      }
    }
  ) {
    # Query what was affected as a response
    cascaded {
      created {
        id
        __typename
      }
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBhAJwQEMUEBnHASxSqQQOIIE8cwqipaIlKAzCARwAjBCgDuCZDgA20UlR6U6OYkmq16jFiOYAdJLnIwADiZnM6Ac1UyZOFAAsEOExDopqSAQTgKeOOI0jqo4sOQoEHA4cBBgLhB8Doy8bgQo-kgAdAYGcDAZ3OqEJGQAkpoMTMwAIhwIXIq8AOrBALJqMMQyAAoQ5DRNlMAGODi4MOQuUESkCBV0VSx1nEWUkWGzZGz1jUpequqDWtWjm6Xzldq1u2sAFGdjuADKpuasTi7HS6xlNY8aRbXMpgdA4PQgb7XAD0AEEAEJ4ACMACYAMwQgG4HoECAANyo8QczhicQQ9h8O1WQwB7GpSjBI3UYxZ2NxBKJnxwuIKLkpXLpDTWALGPLIjJFLKmVkQqHIYIA2pKWeMcLCwGADsQcNLZZ4nKRqJQkBBPJNrNyILydSQCFBHBa1JrjGYZFQKMrWcSXG4PORPWMmSrg16ykh2FA5t7SUTEsk1OQ0p5+Q7KGKXLrkCgAyzYvEwTUIFZnjIEGAc08cDj8YSXFy6D4-EUcCmMwgZVmKzhJggAEpWsjPW326xgvjdKZdtwDNaKruVgAyVAi0eng32rctvPnOGAsh4YJRABYsuiAKwADjRAE4L0e0QB2I-Xl8ANgANLJSGDXwAGLJ-r+R5nmiQGga+F4omer44AAvjue5yEgh5olkaJIneF5IkewHoVBn4yN+OCvkiWS-r+Z6-g+Z5PtRGFIg+cEIfuyE4MeWQgceD5Ub+eFngRREkWh17YZeWEogxR4oteTHMiGIaIQebFnlkD53iJEm-tej78V+KA-qRWm-kiEHoX+lFniZsnyfJimsVBaHokeF6vmiKLic+14fnpP7-q5Z7OdelmvkeEFnjJ8FyTZOAALo5pFNlxVFYwJcGuB4DwZAAB4oF0bpTNGgp7LwLa4tEghUFYdDQvEER0Jkkq4AA8gQlUqFC1T7pGRSShVVVICCYIQh1LBwoiqJotCNAIHA0IREwKAIsi6KYslqp9DOTTduGDCFRQmiZICJw6HI3VNJKa5FLCKAAKLhhKa2VjU+31c2I2sKdDWPa4TBZoN4KQlc1Rjctk3TbNyBgL6qBLRNq0hqlKVnAAlLuWI4AAijADCsOIjiGuIxCUMQfB8EKZaqMT3IUG4vAIACkbkJG8SakGwYzBcrOeoSnoAPq8ygzAmMgxCIJKiPWbJsEgLBQA)

## Showing directions to and from a location

When querying an itinerary location, you can query the corresponding directions
for a given location.

```graphql
# Query an itinerary location and load the associated inbound or outbound
# directions

query QueryItineraryLocationDirections {
  # Use the itineraryLocation operation
  node(
    # Supply the itinerary location ID
    id: "itinerary/ABC123/item/DEF456"
  ) {
    ... on ItineraryLocation {
      # Query the data you want for the itinerary location, such as
      # content or information about the place
      title
      place {
        address {
          locality
        }
        maki
        layers {
          name
        }
      }
      # Query any itinerary directions to or from this location
      directions(first: 2) {
        edges {
          # Inbound or outbound direction
          direction
          node {
            # Query the ItineraryDirection here
            durationMin
            distance
            route {
              segments {
                mode
              }
            }
          }
        }
      }
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBFGBAJwE8cBDJHASxWqWPNJwBtpy6IrKxWJzeKABYIKAZzHRqHBL3oAjCDCS8IRHEpSLlYADpJcYakQRROSMfv0BHQswLESASToMiTEgBl25gCLHTczEcYH0cHFwAVTFRYVFaekZSbygOai4NAAdGczCcJAgwBAAKPPDcAGUYTMyWMjiaVySyNlTzHCdfMpowdBxdEAS3DwB6AEEAIQBhAEYAJgBmEdoEOBHfAFEAMQAWAFYANgG8gEoQ7oA6K40qF0T3ZJ90qlCqcPfcB2YGsA5yHBIShwAHdKCgcAAzNQ4BpDZp8NrPAA0ODEMCgQnE3XKOCgXBQyHB0PoUKIcDSGXI2nBDVq5CgCGxMNoLEZb3eODpDPO7I5FDAYBMEh5fL5rXILFoJCZ4QAvjKcOSANbUBUscgkYjBV6ijlIciIBXy3lypmfOxkShkOEPMhGExmZ7BFAQDTqCFECBwGFCajBcW5E04e2BJ3FCHGMQoPpzM463WyADmCG1CpxTiQ2hUbo0MC0SmzIcdXDTwYCxaQpYKRRFuo55scPtEd2GpH8DvaIhMpfCYBg7nMAFl6D2y1HKAzR5686J43WOTFE4hUKmg-PFYU2euOcbtzhd-OD6Kj+8TwfjbKQLKgA)

## Showing directions as part of an list of locations

When displaying a sequence of locations, such as a summary of the locations on
an itinerary and the directions moving between these locations, you can use the
edge data available between locations to query the connecting directions.

```graphql
# Query the itinerary locations, with information about the directions between
# each of the locations

query QueryItineraryLocationsWithDirections {
  itinerary(
    # Supply the itinerary ID
    id: "itinerary/ABC123"
  ) {
    # Select the associated itinerary locations using the children selector
    children(
      # Limit to querying the itinerary locations
      type: ItineraryLocation
      # Using the relay "cursor connection" specification for pagination
      # See: https://relay.dev/graphql/connections.htm
      first: 10
    ) {
      edges {
        node {
          # ID/Types
          id
          __typename
          # Specific information drawn from the Itinerary Location
          ... on ItineraryLocation {
            # Query the itinerary location
            place {
              # Peel off what information we want from to show about the place
              name
              # Take what level from the address we want
              address {
                locality
              }
              # Categories, like restaurant, hotel etc
              layers {
                name
              }
            }
          }
        }
        # Additionally, query the routes between the locations as edge data,
        # which will obtain directions from the itinerary that arrive (Inbound)
        # to this location, from the last location in the edge sequence
        directions(first: 1, direction: Inbound) {
          nodes {
            # Duration
            durationMin
            # Access the route modes (e.g. Car, etc)
            route {
              segments {
                # Access polyline or geojson for each segment
                mode
              }
            }
            # Query any other ItineraryDirections data here..
          }
        }
        # Obtain the cursor to pass back as the "after" property
        cursor
      }
      # Total number of locations
      totalCount
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBFGBAJwE8cUALBHASxRqWIENScAbaJ+iJAZwBocAdzoVaSAGYQicLjR44mAIwgwU5KjjA0iCKNz44lCFEITIAOklwImUMRAkbqHKHJ68rVgI6FWBYhIASXpGIhYSABlOA14AdVEAER09WJxgKxxaUOZSAApMrJxcAGUYAAdytjJKajoGXLIgxMKsmjB0HAsQerCIgHoAQQAhAGEARgAmAGZuwoBKdNbinBKENlTnRV5eaBouBDBshvDWV3dDGF4GAHMt+xo2MF0kHF511Ollh6eXgteillcJEaHA6OQIDhfIFblteo12DF5HxllkUCRyghOiEThFom4DKiVgBVa5IO61HC6NhMMjdWBEXZEHBQHiMfTI7pvTFQGgSGgE5E4KTM8pMG4MC5E0rmToUFAocq8dD9frU2kAOjACAAbv0buFyhRvGx+qykOzYhr5XAifzGShOuMAAzLRYZAGAw43BC8JaewE4JAQbX+wOB3DNfoAFQxvqJgPaCaKAH0U+jMUgmIhk0DVjy+QLxCLZAYtOEhK8JEQIHAtji+qx8VKA+GNe2cAoG41m2WPeHw7gAqxKfDTmRzoTWwOqnZqP2B4OcAAFcxsTsSJxCChcYvSUtCszCJioYU1usoSG8CgQISKFRqLazqAIXOBrM56eL3DRpgAa2obddw2HV1jPWstiYMBnl9P0jyEE8UDfQEoJgnYw0XAdzjYOgSGQooAF98LzUYDhuaQaF9QQcIAqlfRQJgYHCVBBBvFAwJMKBiPYWliD9BdMPfbNXy-AciNEwFxMEqSxOTXBBmg+oeCYNhqkEaER00Gs1F9IwTDMZAtknZE-SYP1vWoMAuCYfg5OECgBTEERVM7JQGIYLQUg5DxwIvTQxwiDRdxYIgaFAnA8iCJAHyQMB5jsy8NBoP1jJ4QRqwgykaV4dRUteDzKQst4EGhJAX2TbRdG8vg8ntHKnUESrUmRbFotUWL3TfYNtX4-DcESJiW0ErIwEGgwAFkGD6nBBigF90MpbT2JwOAQ10vIEA1G4NRwUiiEETj4okoolvnbj3huRBUF646l1m+a-XKCBqhwxhO2ZH0IAAK12KtpBwWx7GKy7kCQ27A1W7VuJk6TpuHMgTzICBamZbtx2SKq0ishicCoXR2zfGHAyJwFcAAeTcpgCs0BkmQhHAxXQpQ7D-bYtm6JgJHYoguXKGtMSIdFk1pr5pxJlZo2RlSg3gYxmUcRFBQ8IlLwYthRnasHJMKcSCJAAigA)

## Additional Resources

- [Automatic Routing](/topics/itinerary/Directions/Automatic%20Routing/README.md)

- [Querying an Itinerary](/topics/itinerary/Querying%20an%20Itinerary/README.md)
