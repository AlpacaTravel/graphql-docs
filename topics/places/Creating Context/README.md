# Creating Contextualisation around Places

Creating contextualization of a place for travelers can be beneficial for
several reasons when it comes to planning:

- It helps to give travelers a better sense of the location and how it relates
  to other places. By providing information about distances, bearings, and
  durations, travelers can better understand how long it will take to reach a
  destination, and what other places are nearby.

- It allows travelers to make more informed decisions about how to plan their
  trip. Knowing the distance and duration of a journey can help travelers to
  plan their itinerary more effectively, and decide which places to visit and
  how much time to allocate to each location.

- It helps to provide a sense of perspective and scale. By providing information
  about distances and bearings, travelers can better understand the size and
  layout of an area, and how it relates to other places.

- It enhances the overall travel experience by providing context and a deeper
  understanding of the place.

Alpaca Travel GraphQL API provides developers with a variety of tools to help
build contextualization for users. The API provides information such as
distances, estimated travel times, and isochrone representations of distance and
duration for different modes of transport. Additionally, it also provides
bearings, compass, line of site distances, and links to Google Maps for live
traffic and turn-by-turn directions. These tools can be used to help users plan
their itinerary more effectively, orient themselves in relation to landmarks and
points of interest, and navigate unfamiliar locations with ease. Overall, Alpaca
Travel GraphQL API can be a powerful tool for developers looking to create a
more comprehensive and meaningful travel experience for their users.

## Table of Contents

## Simplifying Orientation: Simple Contextualization

Simple contextualization refers to the collection of tools and information
provided by Alpaca Travel GraphQL API that aim to simplify users' orientation
and understanding of their surroundings. These tools include bearings and
compass information, line of sight distances, and links to Google Maps for live
traffic and turn-by-turn directions. With these features, developers can provide
users with a sense of direction and orientation, as well as help them navigate
unfamiliar locations with ease.

### Navigating with Bearings: Understanding Direction

Including compass or bearings in a travel itinerary can be helpful for several
reasons.

First, it can provide users with a sense of direction and orientation as they
navigate unfamiliar locations. This can be especially useful for outdoor
activities such as hiking or camping, where a compass can be a critical tool for
navigation.

Second, providing compass or bearing information can also help users to orient
themselves in relation to landmarks, points of interest, or other locations.
This can make it easier for users to locate specific places or to plan their
movements more effectively.

The below example uses the "towards" operation to provide a series of positions
to determine the bearing and compass.

```graphql
query GetPlaceBearings {
  place(id: "place/facebook:page:mavisthegrocer") {
    towards(positions: [{ lon: 145.0028, lat: -37.8027 }]) {
      bearing
      compass
    }
  }
}
```

If successful, the resulting response will look like the following:

```json
{
  "data": {
    "place": {
      "towards": [
        {
          "bearing": 84.87297636433495,
          "compass": "E"
        }
      ]
    }
  }
}
```

### Line of Sight Distance: Enhancing Navigation

This feature enables developers to calculate the distance between two points on
a map, as the crow flies, regardless of the presence of obstacles like buildings
or mountains. This can be especially useful for outdoor activities such as
hiking or camping, where a clear line of sight can be critical for navigation.
By providing line of sight distances, the API can help users to orient
themselves in relation to landmarks, points of interest, or other locations, and
to plan their movements more effectively.

Using the "towards" operation, similar to the method to obtain the bearings, you
can provide multiple positions to calculate the line-of-sight distance

```graphql
query GetPlaceLineOfSightDistances {
  place(id: "place/facebook:page:mavisthegrocer") {
    towards(positions: [{ lon: 145.0028, lat: -37.8027 }]) {
      distance(unit: Kilometers)
    }
  }
}
```

The expected response will look like the following:

```json
{
  "data": {
    "place": {
      "towards": [
        {
          "distance": 0.5098599748002429
        }
      ]
    }
  }
}
```

You can also use alternative metric or imperial units.

### Google Maps Integration: Live Navigation

Google Maps integration is a feature provided by Alpaca Travel GraphQL API,
allowing developers to enhance navigation for users by providing live traffic
and turn-by-turn directions. This feature enables developers to link to Google
Maps directly from their application, providing users with real-time information
about traffic conditions, construction, and other potential delays. The
integration also allows users to see their current location, and get directions
to their destination. By providing live navigation via Google Maps, the API can
help users to navigate unfamiliar locations with ease, and to plan their
movements more effectively.

```graphql
query GetGoogleMapsDirections {
  place(id: "place/facebook:page:mavisthegrocer") {
    navigationUrl(provider: Google)
  }
}
```

The expected response will look like the following:

```json
{
  "data": {
    "place": {
      "navigationUrl": "https://www.google.com/maps/dir/?api=1&destination=-37.8031099,144.99702"
    }
  }
}
```

## Building Advanced Context: Advanced Planning Tools

Building advanced context refers to the collection of tools provided by Alpaca
Travel GraphQL API that help to provide more detailed and specific information
for users when planning their trip. These tools include providing distance and
duration estimates via specific modes of transportation, such as car, foot, and
bike modes, as well as supplying isochrone results. These features allow
developers to give users a better understanding of the time and effort required
to reach a destination, and can help users to make more informed decisions about
how to plan their trip.

### Distance and Duration Estimates: Personalized Planning

Distance and duration estimates are a useful tool provided by Alpaca Travel
GraphQL API, allowing developers to provide personalized planning for users.
This feature enables developers to calculate distances and durations for
specific modes of transportation, such as car, foot, and bike modes, between
places. This can help users to plan their itinerary more effectively by
providing them with accurate information about the time and effort required to
reach a destination, and can help users to decide which mode of transportation
to use based on the distance and duration of the journey. This feature can be
especially useful for travelers who are looking for more specific information
about how to plan their trip. By providing distance and duration estimates for
specific modes of transportation, the API can help users to make more informed
decisions about how to plan their trip, and can greatly enhance their travel
experience.

Using the "routes" operation, you can supply a mode of transport as well as the
positions of the start and end points.

```graphql
# Queries routes that exist through the supplied positions. Supports a wide
# range of different travel modes and waypoints

query FindRoutesBetweenPositions {
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

The expected result will look similar to the following:

```json
{
  "data": {
    "routes": {
      "nodes": [
        {
          "segments": [
            {
              "distance": 6.1256070000000005,
              "duration": 8.873483333333333,
              "elevation": {
                "min": 2.42,
                "max": 34.57
              }
            }
          ]
        }
      ]
    }
  }
}
```

Note, it is also possible in this query to include the request of `geojson` or
`polyline` in order to obtain the route path to visually show the user on the
interface if necessary.

### Isochrone Representations: Understanding Reachability

Isochrone representations are a powerful tool provided by Alpaca Travel GraphQL
API, allowing developers to provide an understanding of reachability for users.
This feature allows developers to call the API to obtain a representation of the
area that can be reached within a certain amount of time, using a specific mode
of transportation, such as walking. For example, developers can use this feature
to create a representation of the area that can be reached within 5 minutes of
walking from a hotel or accommodation. This can help users to understand how
close they are to landmarks, points of interest, or other locations, and can
help them to plan their movements more effectively. Additionally, this feature
can be used to create a more comprehensive and meaningful travel experience for
users by providing them with the necessary information to understand their
location and plan their itinerary more effectively.

```graphql
query GetNearbyIsochrone {
  # Search for the polygon representation of where you can walk within 5 minutes
  # of a given location
  isochrone(
    center: { lon: 144.99702, lat: -37.8031099 }
    duration: 5
    mode: Foot
  ) {
    polygon
  }
}
```

The expected result will be a polygon representation of the area you could walk
within 5 minutes.

```json
{
  "data": {
    "isochrone": [
      {
        "polygon": {
          "coordinates": [
            [
              [
                144.9990909360146,
                -37.802132365527726
              ],
              [
                144.99893424098792,
                -37.8014406722361
              ],
              ...
            ]
          ],
          "type": "Polygon"
        }
      }
    ]
  }
}
```
