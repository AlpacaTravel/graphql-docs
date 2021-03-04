# Custom Data

The `Itinerary` related data structures, including locations, directions
and the itinerary itself can provide you the ability to store custom data.

## Is Custom Data needed?

While it is possible to use custom data, there is also a wide range of supported
structures based on numerous use cases that Alpaca has developed. These are
preferable to using custom data, but if you have specific data requirements
unique to your use case, you can always leverage the custom data function.

## Topics TBD TODO

- Adding custom data
- Querying custom data
- Obtaining a list of supported attributes for use cases

## Privacy, Security

The custom data element does not provide a suitable environment to store
sensitive information. It may be possible to consider an encryption PKI
storage, but is not recommended.

In the case that you wish to store sensitive user data, our recommendation is
for you to consider storing a user reference or key (as a form of foreign
key) against your created itinerary, and then join/map that sensitive
information back onto your application.
