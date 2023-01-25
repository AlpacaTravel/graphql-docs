# Searching for routes

You can request routes for various supported modes of transport.

## Searching between positions

In order to search for a route between two positions, you must supply at least 2
[positions](/reference/README.md#positioninput) and up to 50 positions overall.
You will also need to supply the
[mode](/reference/README.md#routesearchablemode) of transport.

```graphql
# Queries routes that exist through the supplied positions. Supports a wide
# range of different travel modes and waypoints

query findRoutesBetweenPositions {
  # Use the routes() query to query routes between supplied positions
  routes(
    # Supports profiles like: Car, Bike, Foot, Hike, etc
    mode: Car
    # Supply waypoints (min: 2, max 50)
    positions: [
      { lon: 144.96876776218414, lat: -37.8180097638788 }
      { lon: 144.99648571014401, lat: -37.79815352540803 }
    ]
    # Provide 1 route
    first: 1
  ) {
    nodes {
      segments {
        # Represent the response (options include: polyline, or simplify etc)
        geoJson

        # Access some information about the distance/duration/elevation
        # Control the units that are use
        distance(unit: Kilometers)
        duration(unit: Minutes)
        elevation {
          min(unit: Meters)
          max(unit: Meters)
        }
      }
    }
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/) |
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBFGBAJwEsEBnHIiGFCnFACwEMUcEAPE8tp6mAOaMGjBDnIwADpIA2ZMDkkRyJFCQhJyAOhwBlKUqIpKzHAHcSYBAB0kuIsyQCxEAGY4wJV6+LJeDgDcEGRw4CCsTJAUzZgBPJRJUcltbAEdCIlicV0SwACUaOnIAIQQUMwRkAAVlVXVNHGBbHBxcAFVyMSYxfiKACgBKHHTiLJQIYYys3voAIzKK5HEDOQQFJRU1DWSkFpnyPuaW1r0DCCNKSWocmXo5AGsEdBwAYWYiABocYpJHr4AxCAQFBfAASvwQXzKUCOLTCVmebyIsJO+mkMiyMXiEESxhwfTgiWeACYvnBmBwcABWAAMAxRGzq22eAG0US1gDgZBpngBGAAs-K0AE4AGwADgA7KLJdLibzxfyBV8ZKxngBaADMkq04oVNJpwulmql4vFOAAvuzGlyeTgBULhWL+eKqZLeTSHZ6VWqcFqdZLhXqqZqqcSqfyaeKaZrLSiALoo3BVagBSxiXlUQo2XbHHJEHh8o5DJq5lpIcL0UvHY6dASIJKNa0tXB5BBXCh+EQ9ChKTRiPoQSRbBqJKAyGAIxQQDFyJCQnDncQkOCyLxZaH0ss1nDOCAAKXIGhS25ruAAglAoBRKEfEDhEq5zuSRzhmLNCt2PNwUI5rwB6MAYAcEd-2CBAAlYepmxOF4NBQagQm6HAYCQVRKCYVg3yIMQYE6GDPB4P8ED6VDVGeABpEhuUQOgCy3HdjiAkD6lItCUGeABZRJaAoBjGPYW5INfasBLhRI2PInBOLKYhyH4sTyQ4SSOOk2T6Jgq1TzjbctJaLSLRAC0gA)
