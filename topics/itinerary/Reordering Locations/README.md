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

## Additional Resources

- [Querying an Itinerary](/topics/itinerary/Querying%20an%20Itinerary/README.md)
- [Adding Locations](/topics/itinerary/Adding%20Locations/README.md)
- [Deleting an Itinerary Location](/example-operations/itinerary/DeleteItineraryLocation.graphql)
