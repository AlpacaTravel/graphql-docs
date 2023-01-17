# Creating Itineraries

You can create itineraries directly with GraphQL, allowing you to integrate
functionality such as creating curated lists, shortlists, planning road-trips or
offering itinerary planning features into your website or app. The Alpaca Travel
itineraries support a wide range of functionality and can transition from simple
lists to multi-day, multi-modal itineraries able to model all travel movements.
Itineraries also support detailed mapping data and GPS tracks, enabling you to
also have powerful maps to assist users.

### Prerequisits

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

If successful, the response will read back the created itinerary ID which can
be used in subsequent queries or mutations.

```json
{
  "data": {
    "createItinerary": {
      "itinerary": {
        "id": "itinerary/123"
      }
    }
  }
}
```

## Association to a Profile

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

## Creating an itinerary with Auto Routing

Alpaca can manage creating navigation routes between each of the itinerary
locations that are added to your itinerary. You can enable this by creating
your itinerary with the `autoRoute` feature enabled with a default route mode
supplied.

```graphql
# Creates an itinerary, and configures it to assign automatic routes. Automatic
# routes will assist basic itineraries by sequentially linking locations that
# are added with directions, providing information about moving between these
# locations.

mutation CreateItineraryWithCarAutoRoute {
  # When using the createItinerary mutation to create our itinerary
  createItinerary(
    itinerary: {
      # Add our basic required fields
      title: "Example Itinerary"
      # Indicate the behaviour to auto route using Car as the default mode
      autoRoute: { defaultMode: Car }
    }
  ) {
    # Read back the created itinerary
    itinerary {
      # Access the Identifier, required for further query/mutations
      id
    }
  }
}
```

Learn more about [Automatic Routing](/topics/itinerary/Automatic%20Routing/README.md).

## Additional Resources

- [Obtaining your profile IDs](/example-operations/profile/GetAuthorizedProfiles.graphql)
- [Adding Locations](/topics/itinerary/Adding%20Locations/README.md)
- [Querying an Itinerary](/topics/itinerary/Querying%20an%20Itinerary/README.md)
- [Automatic Routing](/topics/itinerary/Automatic%20Routing/README.md)
- [Deleting an Itinerary](/example-operations/itinerary/DeleteItinerary.graphql)
