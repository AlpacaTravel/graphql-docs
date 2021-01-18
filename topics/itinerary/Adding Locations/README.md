### Adding Locations to Itineraries

Using GraphQL, you can locations to your itinerary.

Locations added to an itinerary contain information for the audience such as the
place they are visiting, as well as any personalised content about that location
(such as stories/phgotos or supplying reasons to visit the place).

#### Prerequisits

- You'll need an itinerary you want to add to and locate the Itinerary ID
- The itinerary will need to be unassigned to a profile, or you'll need your
  private API Key

#### Adding an place

Locations contain the content and information about a particular place on earth.
Our itineraries can add specific information to contextualise a visit to this
location, as well as supply information about the physical place itself.

```graphql-github
itinerary/CreateItineraryLocation.graphql
```

If you leave the place.id field empty, you'll need to supply all the information
about the place. If you have supplied a place.id, we will using this to join on
information about this place when you query the itinerary.

#### Preferred Positions

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

#### Adding custom Read More URL's
