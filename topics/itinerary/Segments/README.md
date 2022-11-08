# Segments

Segments provide a mechanism available to associate itinerary items, such as
the Itinerary Location or Itinerary Directions to a specific group. Segments
are most commonly used to break a trip into several parts, and can be used for
use-cases such as "Day one" or "Week one" etc.

Segments can be used to provide the user a selection in order to view a specific
part of a trip.

## Managing Segments

Segments are added by using attributes. You can define your itinerary segments
against the itinerary, which is where you can configure your collection.

```graphql
# Updates an itinerary to add in segments.

mutation UpdateItinerarySegments {
  # Use the updateItinerary() mutation
  updateItinerary(
    # Supply the itinerary ID
    id: "itinerary/ABC123"
    # Upsert the attribute for the segments
    itinerary: {
      upsertAttrs: [
        {
          # Provide the segment ID of "itinerary/segments"
          id: "itinerary/segments", 
          # Provide the segments value
          value: [
            # Day one, Day two, etc
            { id: "day-one", title: "Day one", color: "#FF0000" },
            { id: "day-two", title: "Day two", color: "#00FF00" }
          ]
        }
      ]
    }
  ) {
    # Read back the changed data
    itinerary {
      # Identifiers
      id
      __typename
      
      # Obtain the attribute value
      segments: attrValue(id: "itinerary/segments")
    }
  }
}
```

Note: Segment attributes can be created and added at any supported mutation, 
such as `createItinerary`, `createItineraryLocation` etc. and are not limited
to update.

You can then add trip segment identifiers to each of the itinerary items.

```graphql
# Assign a series of segments to your itinerary locations. Be sure to first
# add your segments using the "itinerary/segment" attribute avaialble on the 
# itinerary.

mutation UpdateItineraryLocationSegments {
  # use updateItineraryLocation()
  updateItineraryLocation(
    # Supply the itinerary location ID
    id: "itinerary/ABC123"
    # Update the location
    location: {
      upsertAttrs: [
        # Add the association of segment IDs
        # Value as correlates to the "itinerary/segments" ids
        {
          id: "itinerary/location/segments"
          value: ["my-UID"]
        }
      ]
    }
  ) {
    # Read back the changed data
    itinerary {
      # Identifiers
      id
      __typename
      
      # Add in the segments
      segments: attrValue(id: "itinerary/location/segments")
    }
  }
}
```

## Querying itinerary segments

Query the itinerary children or descendants and restrict the results to a 
specific segment ID.

```graphql
# Use the `segmentIds`

query ListItineraryLocations {
  # query the itinerary
  itinerary(
    # Supply the itinerary ID
    id: "itinerary/ABC123"
  ) {
    # List the children
    children(
      # Query the locations
      type: ItineraryLocation
      # Limit the first 10
      first: 10
      # Limit the results to records with segment ID
      segmentIds: ["day-one"]
    ) {
      edges {
        node {
          # Identifier
          id
          __typename
          
          ... on ItineraryLocation {
            # Name of the location associated with "day-one"
            title
            place { name }
            
            # Should contain the id "day-one" in the collection
            segmentIds: attrValue(id: "itinerary/location/segments")
          }
        }
      }
    }
  }
}
```