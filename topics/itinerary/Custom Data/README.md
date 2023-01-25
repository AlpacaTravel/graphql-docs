# Custom Data

The `Itinerary` related data structures, including locations, directions and the
itinerary itself can provide you the ability to store custom data.

Custom data is facilitated through attributes. Each attribute that you use for
custom data should be prefixed with `custom/` and then contain a kebab-case
field name. For example `custom/my-field`.

Use Case:

- Storing a reference to an ID that is meaningful to you

- Associating basic values against itinerary values

Custom data allow you to store basic `JSON` data but this custom data is limited
to reading back the value in queries using `attrs` an `attrValue` queries. Do
not store large values within the itinerary or it could reduce the performance
of the application and GraphQL response rates.

## Privacy, Security

The custom data element does not provide a suitable environment to store
sensitive information. It may be possible to consider an encryption PKI storage,
but is not recommended.

In the case that you wish to store sensitive user data, our recommendation is
for you to consider storing a user reference or key (as a form of foreign key)
against your created itinerary, and then join/map that sensitive information
back onto your application.

## Is Custom Data needed?

While it is possible to use custom data, there is also a wide range of supported
structures based on numerous use cases that Alpaca has developed. These are
preferable to using custom data, but if you have specific data requirements
unique to your use case, you can always leverage the custom data function.

By using the standard attributes, you will have the benefit of added type
validation for attributes when you persist data.

## Itinerary

The below example shows storage of an attribute of "my-field" with the value of
"Example Value". The value can be obtained on the Itinerary type using the
attribute field "attrValue".

```graphql
mutation CreateItineraryWithCustomData {
  # Create an Itinerary with a custom view value
  createItinerary(
    itinerary: {
      title: "Example itinerary with custom data in an attribute"
      attrs: [{ id: "custom/my-field", value: "Example Value" }]
    }
  ) {
    itinerary {
      id
      modified

      value: attrValue(id: "custom/my-field")
    }
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/) |
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAIBhAJwXwQElCkELcKBPAdQJQAsyYBnFBDgARfLhLAAOqRIBiclRolcpegUbM2JAO5duKkrEHCSANwIId53ABsYCGSSNKUdBkxasAFE+ckuDU82dEk-fxJCFFsEUKkQAFEAD1w4AAcYgI8tVl19IwEhOBIwcQDSVRUUFAoCACMcRxBw-3wa-lCAbWAAsDiQYyKAejhWAFoAM0tbMHiAGht7WJJ45NSMhBIANTsHeJIAXwBdFoO-AEow2WdAzS8riJvZ6-84CDACKYRnluczXeWbQoOyW3gIfRWA0KwhG4y+M3i51OfjOSAOIAOQA)

Alternatively, you can manage custom data using an update and upsert attribute
action.

```graphql
mutation UpdateItineraryWithCustomData {
  updateItinerary(
    id: "itinerary/ABC123"
    itinerary: {
      upsertAttrs: [{ id: "custom/my-field", value: "Updated Value" }]
    }
  ) {
    itinerary {
      id
      modified

      value: attrValue(id: "custom/my-field")
    }
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/) |
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAIBVABzHwQElCkEAnXJgTwHUCUALAYRgBnFBDgARfLhLAAOqRIwqNegUYt2ACjkkdJAmHQkZIbquas2AegCCAIT4BGAEwBmY9t2m1Fw7Pm6FCkFmFGsUFCZBQwBtYD0DIxBYYVFLODYAWgAzAgQAGzBjABoSADdcPJgEQ2NKahQEMBIANQqq4xIAXwBdDx1OjwBKaT69BnN2Ef9PQumdOAgwAhzGuVGdcsrqknwI1q2NfRqkoRE4NMyVguNB0YH5e86QTqA)

This is also able to be associated with "ItineraryLocations" and
"ItineraryDirections", providing a way to associate your own custom data to
various elements within the itinerary hierarchy.

```graphql
query GetItineraryCustomFieldValue {
  itinerary(id: "itinerary/ABC123") {
    id
    value: attrValue(id: "custom/my-field")
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/) |
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAOIIoCSKAlkvgIaEDCMAzihHAGLUIA2YAGr0+uIsAA6SIkWo06eRgQAU1MOiISQc2g0IB6AIIAhJgEYATAGYtASnFSZMtY6cA3Ebg30UKPMNEEVXVNEFh2Tn04AgBaADNeATtXAF8pFJAUoA)

If successful, the data response would look similar to:

```json
{
  "data": {
    "itinerary": {
      "id": "itinerary/ABC123",
      "value": "Updated Value"
    }
  }
}
```

Finally, you can also remove attributes using the deleteAttrs which can take the
name of your custom attribute.

```graphql
mutation RemoveItineraryCustomField {
  updateItinerary(
    id: "itinerary/ABC123"
    itinerary: { deleteAttrs: [{ id: "custom/my-value" }] }
  ) {
    itinerary {
      id
      modified

      # Null
      value: attrValue(id: "custom/my-value")
    }
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/) |
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAIAlBOCANwQElCkEAnXZgTwGEYBnFCOADECCADZgSwADqkSMAA5h89RizbsAFDJI6SBMOhJSQBVaw4B6AIIAhTgEYATAGZj23aYJNz7Q8BJgYggoCFYoKMw8hgDa-vqGxrB8AhZw7AC01LiiMAjGJAC+ALqF7gCUku46nt7qlbK6emBVulRgBABmIs1ILToAxCQAcjCion0kWTkIhvgRAGrZuRrxRiBJ-HCpGVO5xmUtBe5HSAUgBUA)

## Itinerary Location

Similarly to the Itinerary actions, you can use various operations in order to
manage your custom data for Itinerary Locations. The operations are
"createItineraryLocation", "updateItineraryLocation" and you can query
individual locations either through itinerary "children" or "descendent" queries
of via the "node" query.

```graphql
mutation UpdateItineraryLocationWithCustomData {
  updateItineraryLocation(
    id: "itinerary/ABC123"
    location: { upsertAttrs: [{ id: "custom/my-field", value: "A Value" }] }
  ) {
    itinerary {
      id
      modified

      value: attrValue(id: "custom/my-field")
    }
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/) |
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAIBVABzHwQElCkEAnXJgTwBlp8ikB1AigAWAYRgBnFBDgARfLhLAAOqRIwqNegUYt2XKD2IAKFSTMkCYdCSUhB25qzYB6AIIAhEQEYATAGZbU3MAG25CYmtgNQpxZhRXFBQmcWsAbSjLa1tYSWlnODYAWgAzAgRgsFsAGhIAN1xgmAQskFcSADUGptsSAF8AXT6ggEpFILN7HScx1XMLStnzOAgwAlKEBfHzesbmknwkzt2jTJsQHKk4fKL1itthrd6gp6RekF6gA)

## External source / External reference

The external source and external source reference is a special custom field that
accepts a string value.

- Use the `custom/external-ref` to contain a unique identifier per record

- Use the `custom/external-source` to attribute the identifiers to a source.
  This should be common and differentiate between different source locations you
  may have.

The external source and external reference are locations recommended for using
when relating an itinerary to your own platform.

```graphql
mutation CreateItineraryWithExternalReferences {
  createItinerary(
    itinerary: {
      title: "Example itinerary with reference to your website UUIDs"
      attrs: [
        # Use the special custom attributes for linking to your identifiers
        { id: "custom/external-ref", value: "my-reference-UUID" }
        { id: "custom/external-source", value: "website" }
      ]
    }
  ) {
    itinerary {
      id

      externalRef: attrValue(id: "custom/external-ref")
      externalSource: attrValue(id: "custom/external-source")
    }
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/) |
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAIBhAJwXwQElCkELcKBPAdQJQAsBRADxRMkuADYAlBADMmyKAgDOJYAB1SJKFRr0CjZmwAUakiZJddTFq3TLjpk4RSiENlSAG44AB2dmGlthIAdy5uEioZKiR5EhQIElYIGApghAAjBS4EEgBVHNoAEQU3O3t8FAoFGwBtUvsSAGJchWyebIUvBCgCMQ0YBTi4EnKKAjScRRIpCBTRXQBrXQBzWPjE5LMwZEIpAiZi9XrlTdcQWAGIOAB6BEFhMQBaCLcAGhIANzEYFxI3OFYntJZNEEA88oU3CQAL51ezAE6-M79QY3O4UESiB4KJIUeSvD5fH5uILpTJCSEww6mAC6dUpJgAlLYqeY9FZmUcCGA1LCSLchOixJIpDYRgA1QkGLmnc4o-n3THPEAM3nywWiADKOPkopQFQlom+UrAMuRl1RAoxWO1CDcKqp9OhaihIChQA)

```graphql
mutation CreateItineraryLocationWithExternalReferences {
  createItineraryLocation(
    itineraryId: "itinerary/ABC123"
    location: {
      title: "My Itinerary Location"
      place: { position: { lon: 1, lat: 2 } }
      attrs: [
        # Use the special custom attributes for linking to your identifiers
        { id: "custom/external-ref", value: "my-reference-UUID" }
        { id: "custom/external-source", value: "website" }
      ]
    }
  ) {
    location {
      id

      externalRef: attrValue(id: "custom/external-ref")
      externalSource: attrValue(id: "custom/external-source")
    }
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/) |
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAIBhAJwXwQElCkELcKBPAGWnyKQHUCUACwCiADxRMkuADYAlBADMmyKAgDOJYAB1SJKFRr0CjZm05RuxABQ6SdkgONMWrWmHQktIRyZcB6AEEAITIARgAmAGYvW3tpLkJiD21dexJCFGkEDy8AWVYSI182EnNLJBjU+wAHaVxVZJJqiDVHJM0SeKQPUIAaTvwPcJIAX1HYtPwUCjUPAG0JtJIAYhIAVTUEdMEttWqEKAIZPRg1FAg4EimKAgAjHHUSBQgKTuMAa2MAc3SIElYIDBXgQwMhCAoCEw1Is0sAHO5PCBYGcLn4EOJJDIALRUBRefoANxkMGyiLgrBximUSFUWLWa1oABEvOMqrD4TkkadznA0RiKFJpFi1ICKKp8SQidISZyAO4IW6tCQskYwkgAXUWqt0AEpNIt4hZEqQUkt4To1eiJAKZPIFB5rgA1YkIKwgznInl862Cyl4kA6y38wUAZVFDSuKGmzulrvdiM9qKtmKFIqB4oDWti2pGIBGQA)
