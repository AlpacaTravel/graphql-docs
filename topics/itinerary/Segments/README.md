[//]: # "Weight: 15"

# Segments

Segments provide a mechanism available to associate itinerary items, such as the
Itinerary Location or Itinerary Directions to a specific group. Segments are
most commonly used to break a trip into several parts, and can be used for
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
          id: "itinerary/segments"
          # Provide the segments value
          value: [
            # Day one, Day two, etc
            { id: "day-one", title: "Day one", color: "#FF0000" }
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

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBVABzAEMUEBnHYpHASxVqQQCdjmBPHFCKsMOmuQQBzRKnIA6ADpIZcGClK0INQiTIBJBk1YcAyiLEpKwGThy48QrgAsEOGEVIItjFm3YAKAJQ55ihhUzBydNbXcOT2DzXD1HAgAbThQ7OnDdTg0AEWi6MHQcKRB6NwyAegBBACEAYQBGACYAZiLcywIhZhRbe1IUZloAIwV7ADMIZh6cIVFkY1ySnQ8C0xpzdcdOlAqUfvICgG1c9ZxVk-OLHAAFZggAN1owexT7GaMcbJwIUcLi9I8ym85uRWmsLuZHgUiosIuxAYZgaDwetcDd7o9nqkgeIcHdiAkYAhjuc8QSEIdiRdcFliJwVAgADQ4GnJADuECZCBQUEp52AeSh4FpAFp6UUmQwUAlyb8WV8mOKcFAIAkJoKsAAxDUABl12qKOAAvryTvzIb8SOxhSh2YrJdLBXKbRBFcrVcx1bqtbqDcaweCALq8v0XIP+kM4XxnFE4ABKCGI-EGxCgAGsplAbNRhAh+OpiAt-hxTsTcBonqhaKNaCwQf6IWBiQB9JsodgEZDERAyUs4ADyg0UjCmfQGwzIuPxhOJ2OMBVHADUpwhPOboUW4bOQSBvLkI37DSBDUA)

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
