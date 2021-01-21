# Creating Itineraries

You can create itineraries directly with GraphQL, allowing you to integrate
functionality such as creating curated lists, shortlists, planning road-trips or
offering itinerary planning features into your website or app. The Alpaca Travel
itineraries support a wide range of functionality and can transition from simple
lists to multi-day, multi-modal itineraries able to model all travel movements.
Itineraries also support detailed mapping data and GPS tracks, enabling you to
also have powerful maps to assist users.

#### Prerequisits

- GraphQL development environment (or GraphQL Playground)
- Your API Key

```graphql
# Creates an Itinerary you can use for a wide range of use cases such as lists
# or sequenced itieraries.

mutation CreateItinerary {
  # Leverages the "createItinerary" mutation operation to create an itinerary
  # with some initial content
  createItinerary(
    # Supply the initial content about the itinerary
    itinerary: { title: "Basic Itinerary Example" }
  ) {
    # Read back the created itinerary
    itinerary {
      # Access the Identifier, required for further query/mutations
      id
    }
  }
}
```

##### Association to a Profile

By default, if you don't assign a profile, content is psueo-anonymous and is
public writable/editable. This allows anyone with the ID to be able to modify
the itinerary, so can suit for use cases such as public visitors to your
website.

If you wish to have content assigned to your profile you will need to supply
your profile during creation.

Itineraries with a profile assigned will enforce authorisation contraints.

```graphql
# Creates an itinerary and associates it to the supplied profile ID. If you need
# to identify your profile ID, use the query authorizedProfiles

mutation CreateItineraryAssociatedToProfile {
  createItinerary(
    # Provide the profile to assign the itinerary
    profileId: "profile/ABC123"
    # Initial itinerary content
    itinerary: { title: "Itinerary associated to profile ID" }
  ) {
    # Read back the created itinerary
    itinerary {
      # Access the ID
      id
    }
  }
}
```
