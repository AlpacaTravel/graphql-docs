
# GraphQL Example Operations

The following area provides a number of example operations to perform common
requirements of applications and sites using Alpaca Travel GraphQL API.

Each section of this area is broken up by the resource type. If you are still
new to the Alpaca Travel GraphQL API, you may want to review the initial
GraphQL Articles also located in this repository first.  
  

### Collection

- **[Create Collection](/example-operations/collection/CreateCollection.graphql)**
  Creates a collection for the supplied profile
- **[Delete Collection Item](/example-operations/collection/DeleteCollectionItem.graphql)**
  Removes a collection item from a collection
- **[Get Collection](/example-operations/collection/GetCollection.graphql)**
  Loads information about the supplied collection ID
- **[List Collection Items](/example-operations/collection/ListCollectionItems.graphql)**
  Performs a query on a collection in order to obtain basic locations
- **[List Collections](/example-operations/collection/ListCollections.graphql)**
  Load the collections available for a profile
- **[Update Collection](/example-operations/collection/UpdateCollection.graphql)**
  Update the collection details

#### Collection Location

- **[Create Collection Location](/example-operations/collection/location/CreateCollectionLocation.graphql)**
  Creates a Collection Location within a collection
- **[Create Collection Location With External Reference](/example-operations/collection/location/CreateCollectionLocationWithExternalReference.graphql)**
  Creates a collection location with a reference to an external primary key reference, so that we can track ID's to synchronize data between platforms
- **[Find Collection Location By External Refs](/example-operations/collection/location/FindCollectionLocationByExternalRefs.graphql)**
  Queries collection items based on a ID within an external platform
- **[Find Collection Locations By Tags](/example-operations/collection/location/FindCollectionLocationsByTags.graphql)**
  Queries for collection locations from a collection by a supplied tag
- **[Get Collection Location](/example-operations/collection/location/GetCollectionLocation.graphql)**
  Loads in a specific collection location
- **[Update Collection Location Add External Reference](/example-operations/collection/location/UpdateCollectionLocationAddExternalReference.graphql)**
  Update a record to store a corresponding identifier in an external system
- **[Update Collection Location Tags](/example-operations/collection/location/UpdateCollectionLocationTags.graphql)**
  Simply updates tags on locations, so that they can grouped or labeled
- **[Update Collection Location Title](/example-operations/collection/location/UpdateCollectionLocationTitle.graphql)**
  Modify an existing collection location title

### Icon

- **[Delete Icon Resource](/example-operations/icon/DeleteIconResource.graphql)**
  Removes an icon
- **[List Icon Resources](/example-operations/icon/ListIconResources.graphql)**
  Lists icons that have been created for a supplied profile

#### Icon Silhouette

- **[Create Icon Silhouette](/example-operations/icon/silhouette/CreateIconSilhouette.graphql)**
  Creates an icon based on the supplied SVG path data
- **[Get Icon Silhouette](/example-operations/icon/silhouette/GetIconSilhouette.graphql)**
  Retrieves an icon by a specific ID
- **[List Icon Silhouettes](/example-operations/icon/silhouette/ListIconSilhouettes.graphql)**
  Lists icons that have been created for a supplied profile
- **[Update Icon Silhouette](/example-operations/icon/silhouette/UpdateIconSilhouette.graphql)**
  Updates an icon that exists
- **[Update Icon Silhouette Paths](/example-operations/icon/silhouette/UpdateIconSilhouettePaths.graphql)**
  Updates the paths associated to an icon

### Itinerary

- **[Create Itinerary](/example-operations/itinerary/CreateItinerary.graphql)**
  Creates an Itinerary you can use for a wide range of use cases such as lists or sequenced itieraries with the supplied title
- **[Create Itinerary With Title](/example-operations/itinerary/CreateItineraryWithTitle.graphql)**
  Creates an Itinerary you can use for a wide range of use cases such as lists or sequenced itieraries with the supplied title
- **[Delete Itinerary](/example-operations/itinerary/DeleteItinerary.graphql)**
  Removes an itinerary
- **[Find Itinerary Location Ids By Place Ids](/example-operations/itinerary/FindItineraryLocationIdsByPlaceIds.graphql)**
  Checks whether a place has been added to an itinerary, for creating a button state on an "Add to Itinerary" button
- **[Get Itinerary Icons](/example-operations/itinerary/GetItineraryIcons.graphql)**
  Obtain the icon set that is used in the itinerary
- **[List Itineraries](/example-operations/itinerary/ListItineraries.graphql)**
  Query the itineraries that are created and associated to a profile
- **[Update Itinerary Assign Car Auto Route](/example-operations/itinerary/UpdateItineraryAssignCarAutoRoute.graphql)**
  Enable "auto-route" behaviour to an existing itinerary
- **[Update Itinerary Direction Mode](/example-operations/itinerary/UpdateItineraryDirectionMode.graphql)**
  Updates an itinerary directions to switch the mode of transportation from one mode (such as car) to an alterative mode, such as foot
- **[Update Itinerary Icons](/example-operations/itinerary/UpdateItineraryIcons.graphql)**
  Updates the icons associated with an Itinerary
- **[Update Itinerary Photos](/example-operations/itinerary/UpdateItineraryPhotos.graphql)**
  Updates an itinerary with a selection of photos
- **[Update Itinerary Segments](/example-operations/itinerary/UpdateItinerarySegments.graphql)**
  Updates an itinerary to add in segments
- **[Update Itinerary Title](/example-operations/itinerary/UpdateItineraryTitle.graphql)**
  Modify an existing Itinerary by changing the title

#### Itinerary Directions

- **[Create Itinerary Directions](/example-operations/itinerary/directions/CreateItineraryDirections.graphql)**
  Creates itinerary directions for between locations in an itinerary manually

#### Itinerary Location

- **[Associate Itinerary Location Icon](/example-operations/itinerary/location/AssociateItineraryLocationIcon.graphql)**
  Associates an itinerary icon composition with an itinerary location
- **[Create Itinerary Location](/example-operations/itinerary/location/CreateItineraryLocation.graphql)**
  Add a location to our itinerary, associating the place to Mavis The Grocer using the Facebook Page identifier
- **[Create Itinerary Location With Additional Positions](/example-operations/itinerary/location/CreateItineraryLocationWithAdditionalPositions.graphql)**
  Adds a location to an itinerary, also supplying additional positions to help describe the location more accurately for a visiting user
- **[Delete Itinerary Location](/example-operations/itinerary/location/DeleteItineraryLocation.graphql)**
  Removes an itinerary item, such as a location
- **[List Itinerary Directions For Itinerary Location](/example-operations/itinerary/location/ListItineraryDirectionsForItineraryLocation.graphql)**
  Query an itinerary location and load the associated inbound or outbound directions
- **[List Itinerary Locations](/example-operations/itinerary/location/ListItineraryLocations.graphql)**
  Query the itinerary locations for an itinerary, and access basic information about the place
- **[List Itinerary Locations With Itinerary Directions](/example-operations/itinerary/location/ListItineraryLocationsWithItineraryDirections.graphql)**
  Query the itinerary locations, with information about the directions between each of the locations
- **[Move Itinerary Location After Sibling](/example-operations/itinerary/location/MoveItineraryLocationAfterSibling.graphql)**
  Move an itinerary location to a relative position to another item in the itinerary
- **[Move Itinerary Location To Start](/example-operations/itinerary/location/MoveItineraryLocationToStart.graphql)**
  Reorder/move the itinerary location to the start of the sequence
- **[Update Itinerary Location As Optional](/example-operations/itinerary/location/UpdateItineraryLocationAsOptional.graphql)**
  Updates an itinerary location and marks the itinerary location as an optional stop
- **[Update Itinerary Location Photos](/example-operations/itinerary/location/UpdateItineraryLocationPhotos.graphql)**
  Updates an itinerary location with a selection of photos
- **[Update Itinerary Location Segments](/example-operations/itinerary/location/UpdateItineraryLocationSegments.graphql)**
  Assign a series of segments to your itinerary locations

### Media

- **[Get Media Image](/example-operations/media/GetMediaImage.graphql)**
  Loads a media resource of type MediaImage
- **[Update Photo Content](/example-operations/media/UpdatePhotoContent.graphql)**
  Modifies a media asset to change various attributes or content

#### Media Upload

- **[Process Photo Upload Progress](/example-operations/media/upload/ProcessPhotoUploadProgress.graphql)**
  Finalise an upload process commenced with startMediaUpload, supplying content and associations to profile
- **[Start Photo Upload](/example-operations/media/upload/StartPhotoUpload.graphql)**
  Request information to commence a photo upload via HTTPs

### Place

- **[Find Open Closed Times For Place By Date Range](/example-operations/place/FindOpenClosedTimesForPlaceByDateRange.graphql)**
  Obtain the open/closed hours for the place given a period, such as the upcoming week or future date range
- **[Get Place Contextual Orientation](/example-operations/place/GetPlaceContextualOrientation.graphql)**
  Query a place and contextualise it's location to other points of interest such as accomodation, towns, or other contextual places you are showing in relation to another place
- **[Get Place Currency](/example-operations/place/GetPlaceCurrency.graphql)**
  Queries the currency used in the country for a place
- **[Get Place Navigation Links](/example-operations/place/GetPlaceNavigationLinks.graphql)**
  Queries a place to identify navigation links to generate URL's to send the user to obtain navigation links using their preferred service
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
  Load information about a winery from Australian Tourism Data Warehouse
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
  Approves a profile follow request to follow another profile
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
  