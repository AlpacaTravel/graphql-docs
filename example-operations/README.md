
# GraphQL Example Operations

The following area provides a number of example operations to perform common
requirements of applications and sites using Alpaca Travel GraphQL API.

Each section of this area is broken up by the resource type. If you are still
new to the Alpaca Travel GraphQL API, you may want to review the initial
GraphQL Articles also located in this repository first.  
  

### Collection

- **[Create Collection](/example-operations/collection/CreateCollection.graphql)**
  Creates a collection for the supplied profilemutation createCollection($profileId: ID!, $title: String!) {   Use the createCollection()  createCollection(     Provide the profile ID to assign this collection to     Use authorizedProfiles() to determine your profiles attached to the API     Key    profileId: $profileId     Supply the data for the collection    collection: {       Title of your collection      title: $title       Differentiate the style of collection if necessary      discriminator: Collection    }  ) {     Query back the created collection    collection {       Identifiers for the created collection      id      __typename       Should return "My Collection"      title    }  }}
- **[Delete Collection Item](/example-operations/collection/DeleteCollectionItem.graphql)**
  Removes a collection item from a collectionmutation deleteCollectionItem($id: ID!) {   Use the deleteCollectionItem() operation  deleteCollectionItem(     Supply the ID of the record to remove    id: $id  ) {     select back a response of the ID of the removed item    id  }}
- **[Get Collection](/example-operations/collection/GetCollection.graphql)**
  Loads information about the supplied collection ID
- **[List Collection Items](/example-operations/collection/ListCollectionItems.graphql)**
  Performs a query on a collection in order to obtain basic locationsquery listCollectionItems($collectionIds: [ID!], $first: Int!, $after: String) {   Use the collectionItems operation to query across items  collectionItems(     Supply which collections to query    collectionIds: $collectionIds     Pagination controls for relay "cursor connections"     See: https://relay
- **[List Collections](/example-operations/collection/ListCollections.graphql)**
  Load the collections available for a profilequery listCollections($profile: ID!, $first: Int!, $after: String) {   Use collections() operation for listing collections  collections(     Supply the profile to list profiles for    profileId: $profile     Pagination controls for relay "cursor connections"     See: https://relay
- **[Update Collection](/example-operations/collection/UpdateCollection.graphql)**
  Update the collection detailsmutation updateCollectionTitle($id: ID!, $title: String!) {   use the updateCollection  updateCollection(     Supply the ID for the record    id: $id     Update the location data    collection: { title: $title }  ) {     Query back the location updated    collection {      id      __typename       Title will now be updated to supplied value      title    }  }}

#### Collection Location

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

### Itinerary

- **[Create Itinerary](/example-operations/itinerary/CreateItinerary.graphql)**
  Creates an Itinerary you can use for a wide range of use cases such as lists or sequenced itieraries with the supplied title
- **[Create Itinerary With Title](/example-operations/itinerary/CreateItineraryWithTitle.graphql)**
  Creates an Itinerary you can use for a wide range of use cases such as lists or sequenced itieraries with the supplied title
- **[Delete Itinerary](/example-operations/itinerary/DeleteItinerary.graphql)**
  Removes an itinerarymutation deleteItinerary($id: ID!) {   Use the deleteItinerary operation to remove an itinerary  deleteItinerary(     Supply your ID of the itinerary to remove (no undo)    id: $id  ) {     Select back the ID of the itinerary that was removed    id  }}
- **[Find Itinerary Location Ids By Place Ids](/example-operations/itinerary/FindItineraryLocationIdsByPlaceIds.graphql)**
  Checks whether a place has been added to an itinerary, for creating a button state on an "Add to Itinerary" button
- **[List Itineraries](/example-operations/itinerary/ListItineraries.graphql)**
  Query the itineraries that are created and associated to a profilequery listItineraries($profileId: ID!, $first: Int!, $after: String) {   Use the itineraries operation to query for a supplied profile  itineraries(     You will need to have your profile ID to query    profileId: $profileId     Pagination controls for relay "cursor connections"     See: https://relay
- **[Update Itinerary Assign Car Auto Route](/example-operations/itinerary/UpdateItineraryAssignCarAutoRoute.graphql)**
  Enable "auto-route" behaviour to an existing itinerary
- **[Update Itinerary Direction Mode](/example-operations/itinerary/UpdateItineraryDirectionMode.graphql)**
  Updates an itinerary directions to switch the mode of transportation from one mode (such as car) to an alterative mode, such as footmutation updateItineraryDirectionMode(  $id: ID!  $mode: RouteMode  $useRouteSearching: Boolean!  $positions: [PositionInput!]) {   Use updateItineraryDirections operation to update directions  updateItineraryDirections(     Provide the itinerary directions ID to update    id: $id     Supply the directions    directions: {       Modify the route with the directions      route: {        segments: [           A single route segment
- **[Update Itinerary Title](/example-operations/itinerary/UpdateItineraryTitle.graphql)**
  Modify an existing Itinerary by changing the titlemutation updateItineraryTitle($id: ID!, $title: String!) {   Use the updateItinerary operation to modify the itinerary  updateItinerary(     Specify the itinerary ID    id: $id     Provide new data for itinerary    itinerary: {       Supply a new title for the itinerary      title: $title    }  ) {     You can query back after the mutation    itinerary {      id      __typename       Title should return "New Title"      title    }  }}

#### Itinerary Directions

- **[Create Itinerary Directions](/example-operations/itinerary/directions/CreateItineraryDirections.graphql)**
  Creates itinerary directions for between locations in an itinerary manually

#### Itinerary Location

- **[Create Itinerary Location](/example-operations/itinerary/location/CreateItineraryLocation.graphql)**
  Add a location to our itinerary, associating the place to Mavis The Grocer using the Facebook Page identifier
- **[Create Itinerary Location With Additional Positions](/example-operations/itinerary/location/CreateItineraryLocationWithAdditionalPositions.graphql)**
  Adds a location to an itinerary, also supplying additional positions to help describe the location more accurately for a visiting user
- **[Delete Itinerary Location](/example-operations/itinerary/location/DeleteItineraryLocation.graphql)**
  Removes an itinerary item, such as a locationmutation deleteItineraryLocation($id: ID!) {   Use the deleteItineraryItem operation to remove an itinerary location  deleteItineraryItem(     Supply your ID of the itinerary location to remove (no undo)    id: $id  ) {     Select back the ID of the itinerary location that was removed    id  }}
- **[List Itinerary Directions For Itinerary Location](/example-operations/itinerary/location/ListItineraryDirectionsForItineraryLocation.graphql)**
  Query an itinerary location and load the associated inbound or outbound directionsquery listItineraryDirectionsForItineraryLocation(  $id: ID!  $first: Int!  $after: String  $direction: ItineraryDirectionsDirection) {   Use the itineraryLocation operation  node(     Supply the itinerary location ID    id: $id  ) {
- **[List Itinerary Locations](/example-operations/itinerary/location/ListItineraryLocations.graphql)**
  Query the itinerary locations for an itinerary, and access basic information about the placequery listItineraryLocations($itineraryId: ID!, $first: Int!, $after: String) {  itinerary(     Supply the itinerary ID    id: $itineraryId  ) {     Select the associated itinerary locations using the children selector    children(       Limit to querying the itinerary locations      type: ItineraryLocation       Using the relay "cursor connection" specification for pagination       See: https://relay
- **[List Itinerary Locations With Itinerary Directions](/example-operations/itinerary/location/ListItineraryLocationsWithItineraryDirections.graphql)**
  Query the itinerary locations, with information about the directions between each of the locations
- **[Move Itinerary Location After Sibling](/example-operations/itinerary/location/MoveItineraryLocationAfterSibling.graphql)**
  Move an itinerary location to a relative position to another item in the itinerary
- **[Move Itinerary Location To Start](/example-operations/itinerary/location/MoveItineraryLocationToStart.graphql)**
  Reorder/move the itinerary location to the start of the sequence
- **[Update Itinerary Location As Optional](/example-operations/itinerary/location/UpdateItineraryLocationAsOptional.graphql)**
  Updates an itinerary location and marks the itinerary location as an optional stopmutation UpdateItineraryLocationAsOptional($id: ID!, $optional: Boolean!) {   Use updateItineraryLocation mutation for making changes to ItineraryLocation  updateItineraryLocation(     Supply your itinerary location that you wish to make optional    id: $id     Supply the location fields changing    location: {       Update the location to be marked as optional      optional: $optional    }  ) {     Query back your location    location {       Optional should now be true      optional    }     Optionally see what else has been affected, such as a result of the     autoroute behaviour updating new and existing ItineraryDirections when     using this feature

### Media

- **[Get Media Image](/example-operations/media/GetMediaImage.graphql)**
  Loads a media resource of type MediaImagequery getMediaImage($id: ID!) {   Use the mediaResource() to load MediaImage types  mediaResource(     Supply your Media Resource ID    id: $id  ) {     In this query, we are accessing the image
- **[Update Photo Content](/example-operations/media/UpdatePhotoContent.graphql)**
  Modifies a media asset to change various attributes or contentmutation updatePhotoContent(  $id: ID!  $caption: String  $attribution: String  $copyright: String) {   Use the updateMediaResource operation  updateMediaResource(     Supply the ID for the media, as accessed from finalizeMediaUpload    id: $id    resource: {       Update various content, such as the attribution, caption, copyright      attribution: $attribution      caption: $caption      copyright: $copyright    }  ) {     Query back what information you need once successfully modified the     content (such as updated in-memory cache values)    resource {       Identifiers      id      __typename       Updated fields      attribution      caption      copyright    }  }}

#### Media Upload

- **[Process Photo Upload Progress](/example-operations/media/upload/ProcessPhotoUploadProgress.graphql)**
  Finalise an upload process commenced with startMediaUpload, supplying content and associations to profile
- **[Start Photo Upload](/example-operations/media/upload/StartPhotoUpload.graphql)**
  Request information to commence a photo upload via HTTPsmutation startPhotoUpload($filename: String!, $contentType: String!) {   Use the startMediaUpload() operation  startMediaUpload(     Supply the filename label    filename: $filename     Supply the content type    contentType: $contentType  ) {     Request an upload token

### Place

- **[Find Open Closed Times For Place By Date Range](/example-operations/place/FindOpenClosedTimesForPlaceByDateRange.graphql)**
  Obtain the open/closed hours for the place given a period, such as the upcoming week or future date range
- **[Get Place Contextual Orientation](/example-operations/place/GetPlaceContextualOrientation.graphql)**
  Query a place and contextualise it's location to other points of interest such as accomodation, towns, or other contextual places you are showing in relation to another place
- **[Get Place Currency](/example-operations/place/GetPlaceCurrency.graphql)**
  Queries the currency used in the country for a place
- **[Get Place Navigation Links](/example-operations/place/GetPlaceNavigationLinks.graphql)**
  Queries a place to identify navigation links to generate URL's to send the user to obtain navigation links using their preferred servicequery getPlaceNavigationLinks($placeId: ID!) {   use the place node  place(     Provide a place ID, example for a cafe in Melbourne    id: $placeId  ) {     Access what is needed from the place    title     Generate out navigation urls based on different providers    google: navigationUrl(provider: Google)    apple: navigationUrl(provider: Apple)  }}
- **[Get Place Time Zone](/example-operations/place/GetPlaceTimeZone.graphql)**
  Queries the timezone for a place
- **[Get Upcoming Open Closed Times](/example-operations/place/GetUpcomingOpenClosedTimes.graphql)**
  Query the next series of open/closed hours for a place, in order to present information whether the venue is open, closed, opening soon, closing soon, etc
- **[Search Address By Position](/example-operations/place/SearchAddressByPosition.graphql)**
  Searches to find addresses by supplied position lon/lat
- **[Search Locality By Position](/example-operations/place/SearchLocalityByPosition.graphql)**
  Searches to find a locality by supplied position lon/lat
- **[Search Place By Address](/example-operations/place/SearchPlaceByAddress.graphql)**
  Searches by text to find matching addresses

#### Place Provider: Australian Tourism Data Warehouse

- **[Get Place ATDWWinery](/example-operations/place/atdw/GetPlaceATDWWinery.graphql)**
  Load information about a winery from Australian Tourism Data Warehousequery getPlaceATDWWinery($placeId: ID!) {   use the place() query to load information about a specific winery   This example is a winery in Mornington Peninsula/Red Hill  place(id: $placeId) {     Identifiers/Type    id    __typename     Basic information    name    description     Various contact methods for the place    contact {      facebookUrl      twitterUrl      instagramUrl      bookingsUrl    }     Required attribution/tracking for the place for ATDW    attribution {      pixel    }     Address Information    address {      addressLineOne      locality      region      postalCode    }     Geo Coordinates    position {      lon      lat    }     Layers/Categories    layers {      name    }     Wine specific attributes
- **[Search Place Autocomplete From ATDW](/example-operations/place/atdw/SearchPlaceAutocompleteFromATDW.graphql)**
  Search the Australian Tourism Data Warehouse (ATDW) for places using an autocomplete style text query

### Profile

- **[Get Authorized Profiles](/example-operations/profile/GetAuthorizedProfiles.graphql)**
  Uses a query with the supplied AccessToken/API Key in order to determine the associated authorized profiles
- **[Get Profile](/example-operations/profile/GetProfile.graphql)**
  Load a query by a supplied profile identifier
- **[Update Profile](/example-operations/profile/UpdateProfile.graphql)**
  Update profile details (such as name, bio, website) for a supplied profile

#### Profile Social

- **[Approve Profile Request](/example-operations/profile/social/ApproveProfileRequest.graphql)**
  Approves a profile follow request to follow another profilemutation approveProfileRequest($fromProfileId: ID!, $toProfileId: ID!) {   Use the approveProfileFollow() operation to set the follow status to   "Approved"  approveProfileFollow(     The requesting profile wishing to follow another account    fromProfile: $fromProfileId     The target profile to follow    toProfile: $toProfileId  ) {    status  }}
- **[Claim Profile Handle](/example-operations/profile/social/ClaimProfileHandle.graphql)**
  Claim a handle for a profile, associating something more friendly
- **[Deny Profile Follow](/example-operations/profile/social/DenyProfileFollow.graphql)**
  Denies a profiles request to follow another profile
- **[Find Profiles By Handle](/example-operations/profile/social/FindProfilesByHandle.graphql)**
  Queries for profiles based on a registered handle claimed for profiles
- **[Get Profile Follow Request Status](/example-operations/profile/social/GetProfileFollowRequestStatus.graphql)**
  Requests to follow from one profile to another profile
- **[Get Profile Social Statistics](/example-operations/profile/social/GetProfileSocialStatistics.graphql)**
  Query to list which profiles who follows a supplied profile
- **[Unfollow Profile](/example-operations/profile/social/UnfollowProfile.graphql)**
  Unfollows a profile

### Route

- **[Find Routes Between Positions](/example-operations/route/FindRoutesBetweenPositions.graphql)**
  Queries routes that exist through the supplied positions


## Contributing

If you would like to share an operation that is useful to others, please send us
a pull request with the operation created in the appropriate sub-folder. If you
need to correct a comment, please update the operations directly, and not the 
generated markdown
  