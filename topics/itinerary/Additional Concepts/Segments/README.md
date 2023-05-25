[//]: # "Title: List and Trail Segmentation"
[//]: # "Weight: 8"
[//]: # "TOC: false"
[//]: # "Layout: 1-col"

# Segments

Segments provide a mechanism available to associate itinerary items, such as the
Itinerary Location or Itinerary Directions to a specific group. Segments are
most commonly used to break a trip into several parts.

Segments can be used to provide the user a selection in order to view a specific
part of a trip.

## Managing Segments

Segments are added to your itinerary as an itinerary item.

```graphql
# Creates an Itinerary Segment, which can be used to break up a list into
# smaller discrete sections.

mutation createItinerarySegment(
  $itineraryId: ID!
  $itinerarySegment: CreateItinerarySegmentInput!
) {
  createItinerarySegment(
    itineraryId: $itineraryId
    segment: $itinerarySegment
  ) {
    segment {
      id
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBhAJwQEMUEBnHYpHASRQEskEDiCBPHAZQQHNFUAGhwB3ABYMoYnFGo4ARghwxyCMDhQQFRYgGtlAByo4ANg3IocTTQB0kucnGImTLHGHNQiZHKqiMIJHIAOjs7OBgUUgZAmR0yeiYWNnYefmQUAAo7HBwAEgZGZlYOWjB0OgARAEIc-MKkktS+ARQKwhIEouSONNbaJANI2qQAShxgOq9OhETilL6M7Jpcq26msoqC9ZSyutzVdNQthvneloy68cmVg4vUCf3VhjAngF86j6Q3kDegA)

Note: Segment attributes can be created and added at any supported mutation,
such as `createItinerary`, `createItineraryLocation` etc. and are not limited to
update.

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
        { id: "itinerary/location/segments", value: ["my-UID"] }
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

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBBAZwIEsBzJHAQxwIQCdiECcIAzGhUxVZlCHAJ4QYdHMRTEk9SnQE4ANtEoSISAgDocAIQQ0RuvjlbE6BFAB0kuSmDCDho2l2QpmMEklI4UAC13mQcUlpWQB6J24LECoUFAYAIxgUXUoAN0piSnl4+V1Vbz9LXCCpOhkBdUtLOCTlYnyAVQAHMGUEAEkJUvKAGSUVJABlTkjmYEscHFx3XRgWts7gstk+qDrVAAoASgmcOdbkxe6V-vqkDd3J3EG5pvk5X10SkLlFNYGcdoARS7EwdBwAWeywEoTwWgAwgBGABMAGYAr9cM0DgY-ApTqpfm91kgAeMKJMiXNaHQUHhYqYAQBtX5Eqb4WwFFJEaCZD5sDjOVCfL4EOlE3AANSyMBZOCgEDodAQ8javH4j0BgS6L3CIxc-OixDA-MJ9MmwD+AKBqpBoRxA3V3NcAQANDh0vIxTSAnABABaBrfAIAXRwAF8Bb7fkHCVscAT6bgAEoIGw4eKUKAAa2ZEp8lE8CDsB0ov2B5UjAtw7TALmIxnoeoNfwFAH16ygBE1kJREFV9YLGXZJOmIpqBQOeADlHERc6EBsdSaVUtyhbMUhraMAjsu2HJmGAyAA0A)

## Listing the Itinerary Segments

You can use the `children` field operation in order to obtain a list of the
segments.

```graphql
# Query the itinerary segments for an itinerary.

query listItinerarySegments($itineraryId: ID!, $first: Int!, $after: String) {
  itinerary(
    # Supply the itinerary ID
    id: $itineraryId
  ) {
    # Select the associated itinerary segments using the children selector
    children(
      # Limit to querying the itinerary segments
      type: ItinerarySegment
      # Using the relay "cursor connection" specification for pagination
      # See: https://relay.dev/graphql/connections.htm
      first: $first
      after: $after
    ) {
      edges {
        node {
          # ID/Types
          id
          __typename

          # Specific information drawn from the Itinerary Segment
          ... on ItinerarySegment {
            title
            color
            contrastColor
          }
        }
        # Obtain the cursor to pass back as the "after" property
        cursor
      }
      # Total number of locations
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBFGBAJwE8cUALBHASxRqWIENScBnBAc0VTZwDMIRHEyS16jIixIA6ADpIFAR0KsANjTYoAkhOakAylx4o2ACgAkdBvpLaw6HNoAiAQgA0OC-xpEtj7VQPLyZ+FGJHAxQiBk4AShxgBRxxGylSM2SUnFwDGAAHfLUySmprSWknZyyUmgcvctt7LISksWzchDUEKBRyKhE2NmgaJnCwVIrWDm5kUxwYNlj+6igKGjUwImR2Lp6UIRqcNY2t5Ez27JycABkaODpyCBwVYhJl0snbXdneI5SUCR8ggAnp0iQjL8UP9rgBVJZITgrHDbNRMMhyECwPxCY4QJCMXo0fGY9jAqA0HxQMbEsSCYT5JicBg0kmXDo4IwgnAUFAofJsdAAeiFqPRMjACAAbkLOFJ8hQlGohVB8YT6Pi2DJeXAYT4-ChHN5fFoYaFwkQjebiEdWjCEGBOAg+G0rlckBBJYkYVdcC4hQAVIHOn3ZOqhlIAfUjgOBSCYiAUEeuBnJlJoUFoSHpcFZYi2TAA7nSiBA4MjdGlKpCTMmZPWcPinGDpDW5t72W7svQUN1kylVWpDp2u3jUFItABhCBDojJgC+ocXI5SuAA8gAjFBMBjI7HDYQHHCMoY4DdMKAAa0GyMx1rnIGPpeBREBof3w67y67uADEG3ag4Eg8AbsQjb8DgQ7UhqSBsDCBwAdOMCoDCjJOoEggdqOPJMGwAByCAAB4oAACkyCChsgYCTjAOJziO37ZIxy7ziA85AA)

## Querying itinerary segments

Query the itinerary children or descendants and restrict the results to a&#x20;
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
            place {
              name
            }

            # Should contain the id "day-one" in the collection
            segmentIds: attrValue(id: "itinerary/location/segments")
          }
        }
      }
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBVAZwRxQAtiADIgc0VQEkwCKAdJNgRxgQCcBPHABkAlgRT0UwpLwCG-QdBmSISAjmBscOXF14CyxYZOk85fTTiNTZ-ABQWtuAMowADq4A2+8peM2B9AAiDpZg6DgsIFYmZgD0AIIAQgDCAIwATADMkRYAlOohuCJiJD5QpMIeYDzIIeWV1cj2SFqt2jgAitz8pcQeisqqIVoofK4I4RLWpvIDwirD7SJwRr04AGbCPCWpAAyLm9so4XuLRcIrKGs1BDAeKGooEDg1UBA8TDgA7kakODR0K5BRYA5DiJjhADakTAMj4AFoVAhIgBdEL5DQtNo4BBgagINSY7GtJAQMDEInE1q4Rhg4SbXiLNrCMBM1oAfXZo3GSBkiDYbK0ADoRTgVDgpjFZlAlPMWpSqdScAA5PnECDrNb9GWDHAyAgEaDCJS476-CLgOGI6Q5LGKkZGDzIu32zwyKAUwXY3n8l2KgC+Ar9VOcpAgdzAODeqBkUjWLItsIRSMilhaBijEA8Tqggy9WlBDAhepQKB4ADUZB5uLYWeFItF-LFtbKVLFCw9IrkvYHg1pe8SB60h73-SB-UA)
