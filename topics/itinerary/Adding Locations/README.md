# Adding Locations to Itineraries

Using GraphQL, you can locations to your itinerary.

Locations added to an itinerary contain information for the audience such as the
place they are visiting, as well as any personalised content about that location
(such as stories/phgotos or supplying reasons to visit the place).

## Prerequisits

- You'll need an itinerary you want to add to and locate the Itinerary ID
- The itinerary will need to be unassigned to a profile, or you'll need your
  private API Key

## Adding an place

Locations contain the content and information about a particular place on earth.
Our itineraries can add specific information to contextualise a visit to this
location, as well as supply information about the physical place itself.

```graphql
# Add a location to our itinerary, associating the place to Mavis The Grocer
# using the Facebook Page identifier. Once the location is added to the
# itinerary, we query back the create items on the itinerary.

mutation CreateItineraryLocation {
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
        # Referencing the place from Facebook
        id: "place/facebook:page:mavisthegrocer"
        # Providing the position lon/lat
        position: { lon: 144.99702, lat: -37.8031099 }
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
      placeIds: ["place/123"]
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
