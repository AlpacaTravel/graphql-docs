# Places of Interest

A common structuring of locations can include some hierarchical associations
between locations.

## Leveraging hierachical structuring

Leveraging the position descriptive features of the itinerary mutations, you
are able to create relative placing between locations, such as having a location
associated acting as a parent to children locations.

An example hierarchy as shown below could therefore be setup with an itinerary
that has a top level set of positions, as well as places of interest that are
associated under each of the top-level locations.

- Melbourne
  - Federation Square
  - NGV
- Sydney
  - Sydney Harbour Bridge

## Example of creating a place of interest location under another location

```graphql
# Creates a location as a place of interest from a top-level location.

mutation CreatePlaceOfInterestLocation {
  # Create the location as normal using the createItineraryLocation()
  createItineraryLocation(
    # Supply the itinerary to create the location within
    id: "itinerary/ABC123"
    # Supply the information to create the location
    location: {
      # Create the content for the place of interest
      title: "My Place of Interest"
      # Add the place
      place: { lon: 144, lat: -37 }
      # Important: Position at the end of the places of interest for a location
      positionAtEnd: {
        # This is the top-level location ID
        parentId: "itinerary/ABC123/location/DEF123"
      }
    }
  ) {
    location {
      # Identifiers
      id
      __typename

      # Parent association
      parent {
        # Identifiers
        # This would be the top level location
        id
        __typename
      }

      # Read back whatever else you desire
    }
  }
}
```
