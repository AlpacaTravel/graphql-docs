# Position Numbering

When displaying a map or itinerary, it is often helpful to display a sequence to
represent visiting places in order. While you are able to query GraphQL to
obtain and represent ordering in your application how you want, the GraphQL API
also provides some fields to assist common use cases.

Using GraphQL queries, it is possible to query and access numbering for queries.
This can be used for presenting basic numeric ordering in your list or for when
you load a specific itinerary location.

- Using `edge` data provided by `children` or `descendants` queries, you can
  access the `edgePositionNumber`. This will provide a numeric value for the
  returned as a position relative to the other edges returned as a sequence

- Using `siblingPositionNumber` on `ItineraryLocation` and `ItineraryDirection`,
  you can access the position relative to the other child siblings

You can modify the numbering behaviour with the optional `skipOptional` or\\
`skipOmitList` query parameters. These default to `true`, and will provide a
null number on nodes that have been marked as optional, or excluded from being
returned in a list.

## Sibling Numbering

When loading information about a specific itinerary location, you may wish to
identify a numbering that could be displayed as relative to the other siblings.

To determine a position number for the node, you can use the
`siblingPositionNumber()` and determine any constraints, such as the type or any
skip behaviour for any of the siblings.

```graphql
# Identify a number for a specific itinerary location without loading the list
# of siblings.

query ItineraryLocationSiblingPositionNumber {
  # Query the itinerary location directly
  node(id: "itinerary/ABC123/location/DEF456") {
    ... on ItineraryLocation {
      # Identifiers
      id
      __typename

      # Create a numeric representation for this itinerary location
      position: siblingPositionNumber(
        # Reduce the sibling types to just Itinerary Locations
        type: ItineraryLocation
        # Control the omits with further properties
        skipOptional: true
        skipOmitList: true
      )
    }
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/) |
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBJMZFASwDMBPHAQxyXgCMEAnHUiFmgZwAcEoziUHMRJJmVJpQA20KiQhIcAdxEALCDBQ4ZVMMSQBzHClUJtxTigA6SXBFI5OxelP0HOAOhs2AjjGaUeKLikgAysvJIAMrOroYAChBOkQByDMw4wDY4OLgAiv6SxqbCwUwS0hHECjh6THwoUuTZtBCEABTEYOg4ViAi+iHkAPQAggBCAMIAjABMAMzDMlBy1UjDACIAogBiACwArABsfQCUmS05Htc4NUGD5WFVNVmKOe+4BEQCzJyX711-jkAPrAlDkXhIKiIbxvd65HCTepyMw0OiIJiCHD1bj1ThEVY1NgsEwWUoPCraZ5IIE4bhJAYKHpOFxuRLJNZpOCMJjtWk5XAAJQQYBgUDMJjMLLiRnBvE4xggOAAVjBLPgypTwitIn84fDjBCED17mJHuRtYSafr4bhJgoUEwIFJimYIHARAqVCZWDAmJKWLiILx-cQEHqDe9OABrYjcADy3EiVCkPUd-n5jljCY9KFCFhQaaYGZtOFO-wAvi0q0gKyAK0A)

## Edge Numbering

Additionally, if you are presenting a list of itinerary locations via a
connection response of `children()` and `descendants()`, you can use the edge
numbering to assist determine a number.

To determine a position number for the edge, you can use the
`edgePositionNumber()` and determine any constraints, such as the type or any
skip behaviour.

```graphql
# Leverage the connection edge data to create a position number for each of the
# edges returned.

query ItineraryEdgePositionNumber {
  # When querying the children determine a position number
  itinerary(id: "itinerary/ABC123") {
    # Using the edge data for children
    children(type: ItineraryLocation, first: 10) {
      edges {
        # The node information ...
        node {
          id
          __typename
        }

        # Determine a position number, relative to the current edge
        position: edgePositionNumber(
          type: ItineraryLocation
          # Control the omits with further properties
          skipOptional: true
          skipOmitList: true
        )
      }
    }

    # Using the edge data for descendants
    descendants(type: ItineraryLocation, first: 10) {
      edges {
        # The node information ...
        node {
          id
          __typename
        }

        # Determine the position number, relative to the current edge
        position: edgePositionNumber(
          type: ItineraryLocation
          # Control the omits with further properties
          skipOptional: true
          skipOmitList: true
        )
      }
    }
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/) |
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEAZBANwQCcBDAcwRxQAtqoIkkEoUBLJnBMKnMMijI0IOKCQSDqwgA4QAzuw5ck8AEakcAMwgluZKLRwQtNegB0kuHlXk4JKGCRZgAdJcsBHGKQCeOAEkOFnISXwBRXgQABQUlTiQAOXVNYEscHFwAdXokHG8-diQKMwZadgAbMAk8sAQUUjgi6Rw5RWU81TgNEnSceJCyMIAKdjB0HHMQAdIh3wB6AEEAIQBhAEYAJgBmKYBKHDS8jMycAFVFYtLuKP5BYR09Q0rq5D6M56qa4ZRfGQQJkFmqFfHhoIIEgAabTsEjyFATdYABgORxOJxsCDsaPRJ1wABV6DgkBA6v0kI84BCuK5ae9cSSyTjcScxvSWQB9Dm-f5IMiIdknAC+HmOLNwABF6o1mjhZHEOsSUiRoRIKhDiCJrrASDUUDcqIKMm14kwJpjYu0EsluqRhkaTjyAYFgrMwmCoNSkA6MrhVkwUCQIBVrhAmig7AB3JRGLROOiaGRB-4kDhYn04eQAa3YMgA8jIOmQKhNAz4M9nc3nw3h2PDSyRy2LcXtBSLm+36bgLkUSgmDdQBEJtLp+FioMgBKh5PS6vIJ0gpxGfn9nUDBu7wR1oVpYfWcMjUYLMdiHQSiYzqEVKV6cLT3M30ZfDhm2Y-cVynXyBe+Mp3f6cUoNCQTQsNcJqKl0PSqgg6ocJqKCiP2Op6gODoQQk5pRJappJMq9oARkTqAq6IIel6GZ+gGQYhv2YZKFGMbaPG9B6EmEApmmM6EZmOb5oWCTFg2TYsuilb5jWdYIjQjYIA6rbvu26JKTg7ZCiAQpAA)
