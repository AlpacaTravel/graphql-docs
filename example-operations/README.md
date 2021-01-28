
# GraphQL Example Operations

The following area provides a number of example operations to perform common
requirements of applications and sites using Alpaca Travel GraphQL API.

Each section of this area is broken up by the resource type. If you are still
new to the Alpaca Travel GraphQL API, you may want to review the initial
GraphQL Articles also located in this repository first.  
  

### Collection

- **[Create Collection](/example-operations/collection/CreateCollection.graphql)**
  Creates a collection for the supplied profile
- **[Create Collection Location](/example-operations/collection/CreateCollectionLocation.graphql)**
  Creates a Collection Location within a collection
- **[Create Collection Location With External Reference](/example-operations/collection/CreateCollectionLocationWithExternalReference.graphql)**
  Creates a collection location with a reference to an external primary key reference, so that we can track ID's to synchronize data between platforms
- **[Delete Collection Item](/example-operations/collection/DeleteCollectionItem.graphql)**
  Removes a collection item from a collection
- **[Query Collection Items](/example-operations/collection/QueryCollectionItems.graphql)**
  Performs a query on a collection in order to obtain basic locations
- **[Query Collection Location](/example-operations/collection/QueryCollectionLocation.graphql)**
  Loads in a specific collection location
- **[Query Collection Locations By Tag](/example-operations/collection/QueryCollectionLocationsByTag.graphql)**
  Queries for collection locations from a collection by a supplied tag
- **[Query Collection Location With External Reference](/example-operations/collection/QueryCollectionLocationWithExternalReference.graphql)**
  Queries collection items based on a ID within an external platform
- **[Query Collections](/example-operations/collection/QueryCollections.graphql)**
  Load the collections available for a profile
- **[Update Collection Location Add External Reference](/example-operations/collection/UpdateCollectionLocationAddExternalReference.graphql)**
  Update a record to store a corresponding identifier in an external system
- **[Update Collection Location Tags](/example-operations/collection/UpdateCollectionLocationTags.graphql)**
  Simply updates tags on locations, so that they can grouped or labeled
- **[Update Collection Location Title](/example-operations/collection/UpdateCollectionLocationTitle.graphql)**
  Modify an existing collection location title

### Itinerary

- **[Check Itinerary Place Present](/example-operations/itinerary/CheckItineraryPlacePresent.graphql)**
  Checks whether a place has been added to an itinerary, for creating a button state on an "Add to Itinerary" button
- **[Create Itinerary](/example-operations/itinerary/CreateItinerary.graphql)**
  Creates an Itinerary you can use for a wide range of use cases such as lists or sequenced itieraries.
- **[Create Itinerary Associated To Profile](/example-operations/itinerary/CreateItineraryAssociatedToProfile.graphql)**
  Creates an itinerary and associates it to the supplied profile ID
- **[Create Itinerary Directions](/example-operations/itinerary/CreateItineraryDirections.graphql)**
  Creates itinerary directions for between locations in an itinerary manually
- **[Create Itinerary Directions With Manual Positions](/example-operations/itinerary/CreateItineraryDirectionsWithManualPositions.graphql)**
  Creates itinerary directions for between locations in an itinerary by supplying all the point information with a custom mode of transportation.
- **[Create Itinerary Location](/example-operations/itinerary/CreateItineraryLocation.graphql)**
  Add a location to our itinerary, associating the place to Mavis The Grocer using the Facebook Page identifier
- **[Create Itinerary Location With Additional Positions](/example-operations/itinerary/CreateItineraryLocationWithAdditionalPositions.graphql)**
  Adds a location to an itinerary, also supplying additional positions to help describe the location more accurately for a visiting user.
- **[Create Itinerary Location With Atdw Place](/example-operations/itinerary/CreateItineraryLocationWithAtdwPlace.graphql)**
  Add a location to our itinerary, associating the place to Mavis The Grocer using the ATDW Product identifier
- **[Create Itinerary Location With Auto Route Options](/example-operations/itinerary/CreateItineraryLocationWithAutoRouteOptions.graphql)**
  The below example provides a simple illustration of adding a fake place to an itinerary with autoRoute enabled, and customising the auto-route behaviour so that it uses an alternative mode of transport when adding
- **[Create Itinerary With Car Auto Route](/example-operations/itinerary/CreateItineraryWithCarAutoRoute.graphql)**
  Creates an itinerary, and configures it to assign automatic routes
- **[Delete Itinerary](/example-operations/itinerary/DeleteItinerary.graphql)**
  Removes an itinerary
- **[Delete Itinerary Location](/example-operations/itinerary/DeleteItineraryLocation.graphql)**
  Removes an itinerary item, such as a location
- **[Move Itinerary Location](/example-operations/itinerary/MoveItineraryLocation.graphql)**
  Move an itinerary location to a relative position to another item in the itinerary
- **[Move Itinerary Location To Start](/example-operations/itinerary/MoveItineraryLocationToStart.graphql)**
  Reorder/move the itinerary location to the start of the sequence
- **[Query Itinerary Locations As Simple List](/example-operations/itinerary/QueryItineraryLocationsAsSimpleList.graphql)**
  Query the itinerary locations for an itinerary, and access basic information about the place
- **[Query Profile Itineraries](/example-operations/itinerary/QueryProfileItineraries.graphql)**
  Query the itineraries that are created and associated to a profile
- **[Update Itinerary Assign Car Auto Route](/example-operations/itinerary/UpdateItineraryAssignCarAutoRoute.graphql)**
  Enable "auto-route" behaviour to an existing itinerary
- **[Update Itinerary Title](/example-operations/itinerary/UpdateItineraryTitle.graphql)**
  Modify an existing Itinerary by changing the title

### Media

- **[Process Photo Upload Progress](/example-operations/media/ProcessPhotoUploadProgress.graphql)**
  Finalise an upload process commenced with startMediaUpload, supplying content and associations to profile
- **[Start Photo Upload](/example-operations/media/StartPhotoUpload.graphql)**
  Request information to commence a photo upload via HTTPs
- **[Update Photo Content](/example-operations/media/UpdatePhotoContent.graphql)**
  Modifies a media asset to change various attributes or content

### Place

- **[Query Place ATDWWinery](/example-operations/place/QueryPlaceATDWWinery.graphql)**
  Load information about a winery from Australian Tourism Data Warehouse
- **[Query Place Contextual Orientation](/example-operations/place/QueryPlaceContextualOrientation.graphql)**
  Query a place and contextualise it's location to other points of interest such as accomodation, towns, or other contextual places you are showing in relation to another place
- **[Query Place Navigation Links](/example-operations/place/QueryPlaceNavigationLinks.graphql)**
  Queries a place to identify navigation links to generate URL's to send the user to obtain navigation links using their preferred service
- **[Search Place Autocomplete From ATDW](/example-operations/place/SearchPlaceAutocompleteFromATDW.graphql)**
  Search the Australian Tourism Data Warehouse (ATDW) for places using an autocomplete style text query
- **[Search Place Reverse](/example-operations/place/SearchPlaceReverse.graphql)**
  Queries a position and returns with matching places

### Profile

- **[Query Authorized Profiles](/example-operations/profile/QueryAuthorizedProfiles.graphql)**
  Uses a query with the supplied AccessToken/API Key in order to determine the associated authorized profiles

### Route

- **[Query Routes Between Positions](/example-operations/route/QueryRoutesBetweenPositions.graphql)**
  Queries routes that exist through the supplied positions


## Contributing

If you would like to share an operation that is useful to others, please send us
a pull request with the operation created in the appropriate sub-folder. If you
need to correct a comment, please update the operations directly, and not the 
generated markdown
  