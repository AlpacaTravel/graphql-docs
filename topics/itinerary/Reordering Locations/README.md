[//]: # "Weight: 6"

# Reordering locations

Often, a user may wish to reorder the itinerary to suit their preferences. Using
the `moveItineraryItem` operation, you can position a location to the location
of your preference.

### Prerequisitcs

- You'll need an itinerary you want to add to and locate the Itinerary ID

- The itinerary will need to be unassigned to a profile, or you'll need your
  private API Key

## Moving to before/after another location

You can also contextualise the position of the location against another location
via `positionBeforeSibling` or `positionAfterSibling`.

```graphql
# Move an itinerary location to a relative position to another item in the
# itinerary. You can leverage a query like this allowing the user to drag the
# location to a position after another element, or specify it to be the first
# in a collection by switching the position to positionAtStart.

mutation MoveItineraryLocation {
  # Use the moveItineraryItem operation to moving around locations
  moveItineraryItem(
    # Supply your itinerary item (or location)
    id: "itinerary/ABC123/item/DEF456"
    # Determine the strategy to position the element
    # Also includes options: positionAtEnd, position<After/Before>Sibling,
    # positionAtStart, positionOnLastCollection etc
    positionAfterSibling: { siblingId: "itinerary/ABC123/item/SIBLING" }
  ) {
    # Query back the affected items if necessary. Useful for determining any
    # changes to directions if you are locally caching them
    cascaded {
      created {
        id
        __typename
      }
      updated {
        id
        __typename
      }
      deletedIds
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBZCANwRwEMkcBLFSpBAJ1PoE8cAbaUmiClCMnPQRsulYjgAOEAM7VKPHHzJIIKABYMqKBHCq8NAHSS45dRiwB0OAJoQYOKOXYJijAOYlSOAI4wGrNkoAaxJ1SmkyNg4Ad1o3RQ0cGGlNJTB3BIQjXA5Hbl5+LylZfLIAM216ZVUNKuEdZBQAGhwIKukJBChKMtZqRX4AI1DEssp6aRRsvQEoCCiu0sHWaViUKDU4zMkZOQUlYr2kAEEUAGUUJhQLIyM4GEvSgmIASRozJmYAGU5S4CMcDhcABVFLbOBEBBvWgMT5vHStTqMUpKCGELZMOxIMDsX7yJDSAE4NFQ96wljwuAACiJgNwZxgEgkbFYzDsVVM5L62l0VLauLy+IAlLSqGB0DgDCBOeZmAB6Y4AIQAwgBGABMAGY5dQdHKACIAUQAYgAWACsADYpaLcPqEJU4DDtpNkQg3KwDrsUYl6ohULacMc2NJ+LQoGwYGAEBEIBJ8tIJYd8qdDdiWsn8QAeY4VBhyxUIMptBAAPjOlEGgSQbiagczPFOFyuGe9+IA8kgvqRJsr5mxFvicA6oKKGyc8-QK1W4hLgDhZDOay9xZLpWTZQqVRrtbq4HKzi9FV8XgA5ADiUpwAF8iUKcP8KICgTgAIp+Fg4QakKBBbakMoykWBAcT3CIehwOgoBjaRPisUEixgNgcGLKpo0dWgMSQZhAw2cgPAiNJxkHHhwLKHA2XsJgSFyUgolYRwNi2dQdFFRxpEcaMcUfZ9nygIQuBAh9RV4ygwBE58AH1JJQZhOiQUhEAk28n14xkwEE7iJMBMTtJwaTZPkxSslU58VN4wFowHbQwBXQlTPMm8jGvEBryAA)

## Moving to Start/End of list

A simple example can leverage the use of `positionAtStart` or `positionAtEnd`.

```graphql
# Reorder/move the itinerary location to the start of the sequence. Useful
# depending on the way you reorder you drag-drop functionality. You can also
# position using relative positional references, such as positionBeforeSibling
# or positionAfterSibling if easier. If you are using multi-segment collections
# you can optionally define using parentId property

mutation MoveItineraryLocationToStartPosition {
  # Use the moveItineraryItem operation to moving around locations
  moveItineraryItem(
    # Supply your itinerary item (or location)
    id: "itinerary/ABC123"
    # Determine the strategy to position the element
    # Also includes options: positionAtEnd, position<After/Before>Sibling, etc
    positionAtStart: {}
  ) {
    # Query back the affected items if necessary. Useful for determining any
    # changes to directions if you are locally caching them
    cascaded {
      created {
        id
        __typename
      }
      updated {
        id
        __typename
      }
      deletedIds
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEAlBCAJzASIHo4IA3BHFACzoEsVmkyBDIgTxwBtonNhCT0I9JjgDOKbihwQAZpLrSEARxjIoCAHQ4AquqUx+AHSS5SAB2Rh2Ac0VjGdAO6c+PCDBxFCEjIcHz8wIk5HAFpwiBscUyQoESROflYeAwBNXxwoTjE06QhLXBsIaVZmURwYSqRnAP5hZloccsqUtP8EJTIdBGkAGhkYKAYcTml2iqrRACFe4gQAZWYAI3SG0sUiGc7qpABBJRQyNc2nHGYVBCnmMgMASRVQyYDa+uc4MzYo9UciFQeQg-H4CGSh2kOze+TEcS6YL4pCU7DodSuNm4yBQTzA7SIcTIKB4lksPzkKRwAFkaAgnmwOBFeAAZIQpAAqEBWciIKAACrMqcBLDgcLhjHQ3DgqLQGWjmTwGQg4Io7BEqSgJLKrtxfEh8YJ8iloWIZXT5UzuEqznAABSisXinArGA2Gz8by+PZVK28a62nB24gCdmHACUjrFzDA6Bw5hAvq4vHIR3mAGEAIwAJgAzAmo86ACIIM5EOBo1QyFAahCOPha-ZzVxSBDgoEoQu4I78YrXJL8GCkaYIqFxjrNo4oACiBpGE5SAB4TmXyIslMsAHwXLaOEalqCFheHKc8+Rx4AAX0d4ZwIrNYtwAEVtP71pwoABrKucJR9ZIIPirAqtMNw4BwujSNI1oGJKpj8AkIakGWFZILqSCkg+zrjAUjiDOIOAOAEkKiKBry5Niob5EieQfgwVxuHAhb5NI+SkPi95Ok6UABMIgF3oWXExoJToAPqiSSdipIgInXlhYpumAfEcSJ0ZgKpODiZJyCcDJ8k4HJXFiqQ4JnGAeKmlxhkGZYl4gJeQA)

## Additional Resources

- [Querying an Itinerary](/topics/itinerary/Querying%20an%20Itinerary/README.md)

- [Adding Locations](/topics/itinerary/Adding%20Locations/README.md)

- [Deleting an Itinerary Location](/example-operations/itinerary/location/DeleteItineraryLocation.graphql)
