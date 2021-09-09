# Collection Location

- **[Create Collection Location](/example-operations/collection/location/CreateCollectionLocation.graphql)**
  Creates a Collection Location within a collectionmutation createCollectionLocation(  $collectionId: ID!  $title: String!  $longitude: Float!  $latitude: Float!  $tags: [String!]  $placeId: ID) {   use createCollectionLocation for this operation  createCollectionLocation(     Supply the collection to place the collection location within    collectionId: $collectionId     Supply the data for the location model    location: {       Provide content for the collection item       Synopsis, tags, description, media, website etc
- **[Create Collection Location With External Reference](/example-operations/collection/location/CreateCollectionLocationWithExternalReference.graphql)**
  Creates a collection location with a reference to an external primary key reference, so that we can track ID's to synchronize data between platforms
- **[Find Collection Location By External Refs](/example-operations/collection/location/FindCollectionLocationByExternalRefs.graphql)**
  Queries collection items based on a ID within an external platform
- **[Find Collection Locations By Tags](/example-operations/collection/location/FindCollectionLocationsByTags.graphql)**
  Queries for collection locations from a collection by a supplied tag
- **[Get Collection Location](/example-operations/collection/location/GetCollectionLocation.graphql)**
  Loads in a specific collection locationquery getCollectionLocation($id: ID!) {  collectionItem(     Provide the individual collection item ID    id: $id  ) {     Identifier/Types    id    __typename
- **[Update Collection Location Add External Reference](/example-operations/collection/location/UpdateCollectionLocationAddExternalReference.graphql)**
  Update a record to store a corresponding identifier in an external systemmutation updateCollectionLocationAddExternalReference(  $id: ID!  $externalId: JSON!) {   use the updateCollectionItem  updateCollectionLocation(     Supply the ID for the record    id: $id     Update the location data    location: {       Use upsert to insert/update a record      upsertAttrs: [         Supply an external ID for this record        { id: "custom://external-id", value: $externalId }      ]    }  ) {     Query back the location updated    location {      id      __typename       Attribute will now exist on the collection item      externalId: attr(id: "custom://external-id") {        value      }    }  }}
- **[Update Collection Location Tags](/example-operations/collection/location/UpdateCollectionLocationTags.graphql)**
  Simply updates tags on locations, so that they can grouped or labeledmutation updateCollectionLocationTags($id: ID!, $tags: [String!]) {   Use the updateCollectionLocation to modify parts of the collection location  updateCollectionLocation(id: $id, location: { tags: $tags }) {    location {       Should be updated with the set of tags      tags    }  }}
- **[Update Collection Location Title](/example-operations/collection/location/UpdateCollectionLocationTitle.graphql)**
  Modify an existing collection location titlemutation updateCollectionLocationTitle($id: ID!, $title: String!) {   use the updateCollectionLocation() operation  updateCollectionLocation(     ID of record to update    id: $id     Update the data for the location    location: { title: $title }  ) {     Query back data after the mutation for the response    location {       Should now become the supplied title      title    }  }}

[View other collection operation examples](/example-operations/collection)