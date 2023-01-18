# Custom Data

The `Itinerary` related data structures, including locations, directions
and the itinerary itself can provide you the ability to store custom data.

## Is Custom Data needed?

While it is possible to use custom data, there is also a wide range of supported
structures based on numerous use cases that Alpaca has developed. These are
preferable to using custom data, but if you have specific data requirements
unique to your use case, you can always leverage the custom data function.

By using the standard attributes, you will have the benefit of added type
validation for attributes when you persist data.

## Associating custom data to the Itinerary

The below example shows storage of an attribute of "my-field" with the value
of "Example Value". The value can be obtained on the Itinerary type using the
attribute field "attrValue".

```graphql
mutation {
  # Create an Itinerary with a custom view value
  createItinerary(
    itinerary: { attrs: [{ id: "custom/my-field", value: "Example Value" }] }
  ) {
    itinerary {
      id

      # Retrieve the value using the attribute
      value: attrValue(id: "custom/my-field")
    }
  }
}
```

This is also able to be associated with "ItineraryLocations" and
"ItineraryDirections", providing a way to associate your own custom data
to various elements within the itinerary hierarchy.

```graphql
query {
  itinerary(id: "itinerary/ABC123") {
    value: attrValue("custom/my-field")
  }
}
```

If successful, the data response would look similar to:

```json
{
  "data": {
    "itinerary": {
      "value": "Example Value"
    }
  }
}
```

## Privacy, Security

The custom data element does not provide a suitable environment to store
sensitive information. It may be possible to consider an encryption PKI
storage, but is not recommended.

In the case that you wish to store sensitive user data, our recommendation is
for you to consider storing a user reference or key (as a form of foreign
key) against your created itinerary, and then join/map that sensitive
information back onto your application.
