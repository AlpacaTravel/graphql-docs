# Adding Locations to Itineraries

Using GraphQL, you can locations to your itinerary. Alpaca will organise the
locations you add for itineraries into various structures, including a simple
list through to something more complex (such as organised by segments etc).

You can leverage features such as [Automatic Routing](/topics/itinerary/Automatic%20Routing/README.md)
between the locations or presenting the data on a map to make creating
itineraries an easy function to add to your application. You can request
information about each of the locations added to your itinerary to present the
itinerary in the best possible way to your users.

Locations added to an itinerary contain information for the audience such as the
physical place they are visiting, as well as any personalised content or
planning data about that location (such as stories/photos or supplying reasons
to visit the place).

### Prerequisits

- You'll need an itinerary you want to add to and locate the Itinerary ID
- The itinerary will need to be unassigned to a profile, or you'll need your
  private API Key

## Adding a place

Locations contain the content and information about a particular place on earth.
Our itineraries can add specific information to contextualise a visit to this
location, as well as supply information about the physical place itself.

See the [CreateItineraryLocationInput](/reference#createitinerarylocationinput)
reference for a full set of information you can add for a location.

```graphql
# Add a location to our itinerary, associating the place to The Farm Cafe
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
      synopsis: "Nearby, we can find The Farm Cafe open most days"
      # Link the location to a known place
      place: {
        # Referencing the place from ATDW
        id: "place/atdw:product:5f115dfde8f9b57738878350"
        # Providing the position lon/lat
        position: { lon: 145.0043, lat: -37.8021 }
      }
    }
  ) {
    # Read back the location just created
    location {
      __typename
      id
    }
  }
}
```

If successful, you will have the following response

```json
{
  "data": {
    "createItineraryLocation": {
      "location": {
        "__typename": "ItineraryLocation",
        "id": "itinerary/ABC123/location/DEF456"
      }
    }
  }
}
```

If you leave the place.id field empty, you'll need to supply all the information
about the place. If you have supplied a place.id, we will using this to join on
information about this place when you query the itinerary.

## Checking if the place is present already in an Itinerary

You may also wish to first check whether a place is present within an itinerary,
so that you don't have the user add the place in the itinerary twice. This is
often useful for if you want to design an "Add to favourites" button, that might
inform the user the place has already been added and there is no reason to add
it again.

Note: There is no limit to adding the same place multiple times. This can
capture itineraries where the user may return to locations/places at different
times and is therefore a design feature.

Using a query, you can request to query the itinerary based on the supplied
place ID.

```graphql
# Checks whether a place has been added to an itinerary, for creating a button
# state on an "Add to Itinerary" button. If a result is returned, you may then
# want to indicate to the user it is already present in their itinerary, or
# offer them to remove it. You can pass the matching itinerary location ID that
# has this place associated from this query to the deleteItineraryItem operation

query CheckItineraryPlacePresent {
  # Use the itinerary query, supplying the itinerary ID to check
  itinerary(id: "itinerary/ABC123") {
    # Query the descendants, providing some constraints
    descendants(
      # Provide the place identifiers to check
      placeIds: ["place/atdw:product:5cae80be57a096cd7084b6ab"]
      # You may support adding a place multiple times, but for most reading
      # back one will be enough
      first: 1
    ) {
      nodes {
        # Obtain the ID, so we can remove this location using the operation
        # deleteItineraryItem() to remove the item from the itinerary.
        id
      }
      # Total Count should be greater than 0, as the place could be added more
      # than once to an itinerary
      totalCount
    }
  }
}
```

If successful, you'll be returned with a reference to the itinerary location ID

```json
{
  "data": {
    "itinerary": {
      "descendants": {
        "nodes": [
          {
            "id": "itinerary/ABC123/location/DEF456"
          }
        ],
        "totalCount": 1
      }
    }
  }
}
```

## Reordering a location

A specific topic exists to assist you with
[reordering locations](/topics/itinerary/Reordering%20Locations/README.md).

## Removing a location

```graphql
# Removes an itinerary item, such as a location

mutation DeleteItineraryLocation {
  # Use the deleteItineraryItem operation to remove an itinerary location
  deleteItineraryItem(
    # Supply your ID of the itinerary location to remove (no undo)
    id: "itinerary/ABC123/item/DEF456"
  ) {
    # Select back the ID of the itinerary location that was removed
    id
  }
}
```

## Advanced: Preferred Positions

The Location can also contain other positions that can assist with presenting
the location to the user.

For instance, for a place, your place provider may provide a position in order
to draw a pin or draw a label. This position is not the location we wish to
send the user to when actually visiting this location physically.

Further to the example, you may also wish to have the user first navigate to a
position such as a car park or entry gates.

This leads to the possibility of many different positions being used to describe
the location being added.

You can assign a preferred position using the `location.position` or add
an attribute to the location with the ID of
`itinerary/location/directions-position-preference`

We also support the use custom data to contain further positions that you wish
to store and leverage in you use case.

## Cascaded changed

You can also access in the query any cascade changes that have happened on the
itinerary.

```graphql
# Creates an itinerary location and reads back any other changes to the
# itinerary as a result of adding this location, such as additional calculated
# directions when using auto route

mutation CreateLocationWithCascadedChanges(
  $itineraryId: ID!
  $location: CreateItineraryLocationInput!
) {
  createItineraryLocation(itineraryId: $itineraryId, location: $location) {
    # Read back the location just created
    location {
      __typename
      id
    }
    # Select any other cascaded chages from the operation
    cascaded {
      created {
        __typename
        id
        # Add any fields to read from created nodes
      }
      updated {
        __typename
        id
        # Add any fields to read from created nodes
      }
      deletedIds
    }
  }
}
```

## Additional Resources

- [Creating an itinerary](/topics/itinerary/Creating%20an%20itinerary/README.md)
- [Reordering Locations](/topics/itinerary/Reordering%20Locations/README.md)
- [Automatic Routing](/topics/itinerary/Automatic%20Routing/README.md)
- [Querying an Itinerary](/topics/itinerary/Querying%20an%20Itinerary/README.md)
- [Deleting an Itinerary Location](/example-operations/itinerary/location/DeleteItineraryLocation.graphql)
