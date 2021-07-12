
# GraphQL Example Operations

The following area provides a number of example operations to perform common
requirements of applications and sites using Alpaca Travel GraphQL API.

Each section of this area is broken up by the resource type. If you are still
new to the Alpaca Travel GraphQL API, you may want to review the initial
GraphQL Articles also located in this repository first.  
  

### Collection

- **[Collection](/example-operations/collection/Collection.graphql)**
  Loads information about the collection.
- **[Collection Items](/example-operations/collection/CollectionItems.graphql)**
  Performs a query on a collection in order to obtain basic locations
- **[Collections](/example-operations/collection/Collections.graphql)**
  Load the collections available for a profile
- **[Create Collection](/example-operations/collection/CreateCollection.graphql)**
  Creates a collection for the supplied profile
- **[Delete Collection Item](/example-operations/collection/DeleteCollectionItem.graphql)**
  Removes a collection item from a collection
- **[Update Collection](/example-operations/collection/UpdateCollection.graphql)**
  Update the collection details

#### Collection Location

- **[Collection Location](/example-operations/collection/location/CollectionLocation.graphql)**
  Loads in a specific collection location
- **[Collection Locations By Tag](/example-operations/collection/location/CollectionLocationsByTag.graphql)**
  Queries for collection locations from a collection by a supplied tag
- **[Collection Locations Order By Modified Desc](/example-operations/collection/location/CollectionLocationsOrderByModifiedDesc.graphql)**
  
- **[Collection Location With External Reference](/example-operations/collection/location/CollectionLocationWithExternalReference.graphql)**
  Queries collection items based on a ID within an external platform
- **[Create Collection Location](/example-operations/collection/location/CreateCollectionLocation.graphql)**
  Creates a Collection Location within a collection
- **[Create Collection Location With External Reference](/example-operations/collection/location/CreateCollectionLocationWithExternalReference.graphql)**
  Creates a collection location with a reference to an external primary key reference, so that we can track ID's to synchronize data between platforms
- **[Update Collection Location Add External Reference](/example-operations/collection/location/UpdateCollectionLocationAddExternalReference.graphql)**
  Update a record to store a corresponding identifier in an external system
- **[Update Collection Location Tags](/example-operations/collection/location/UpdateCollectionLocationTags.graphql)**
  Simply updates tags on locations, so that they can grouped or labeled
- **[Update Collection Location Title](/example-operations/collection/location/UpdateCollectionLocationTitle.graphql)**
  Modify an existing collection location title

### Itinerary

- **[Check Itinerary Place Present](/example-operations/itinerary/CheckItineraryPlacePresent.graphql)**
  Checks whether a place has been added to an itinerary, for creating a button state on an "Add to Itinerary" button
- **[Create Itinerary](/example-operations/itinerary/CreateItinerary.graphql)**
  Creates an Itinerary you can use for a wide range of use cases such as lists or sequenced itieraries.
- **[Create Itinerary Associated To Profile](/example-operations/itinerary/CreateItineraryAssociatedToProfile.graphql)**
  Creates an itinerary and associates it to the supplied profile ID
- **[Create Itinerary With Car Auto Route](/example-operations/itinerary/CreateItineraryWithCarAutoRoute.graphql)**
  Creates an itinerary, and configures it to assign automatic routes
- **[Delete Itinerary](/example-operations/itinerary/DeleteItinerary.graphql)**
  Removes an itinerary
- **[Profile Itineraries](/example-operations/itinerary/ProfileItineraries.graphql)**
  Query the itineraries that are created and associated to a profile
- **[Update Itinerary Assign Car Auto Route](/example-operations/itinerary/UpdateItineraryAssignCarAutoRoute.graphql)**
  Enable "auto-route" behaviour to an existing itinerary
- **[Update Itinerary Direction Mode](/example-operations/itinerary/UpdateItineraryDirectionMode.graphql)**
  Updates an itinerary directions to switch the mode of transportation from one mode (such as car) to an alterative mode, such as foot
- **[Update Itinerary Title](/example-operations/itinerary/UpdateItineraryTitle.graphql)**
  Modify an existing Itinerary by changing the title

#### Itinerary Directions

- **[Create Itinerary Directions](/example-operations/itinerary/directions/CreateItineraryDirections.graphql)**
  Creates itinerary directions for between locations in an itinerary manually
- **[Create Itinerary Directions With Manual Positions](/example-operations/itinerary/directions/CreateItineraryDirectionsWithManualPositions.graphql)**
  Creates itinerary directions for between locations in an itinerary by supplying all the point information with a custom mode of transportation.

#### Itinerary Location

- **[Create Itinerary Location](/example-operations/itinerary/location/CreateItineraryLocation.graphql)**
  Add a location to our itinerary, associating the place to Mavis The Grocer using the Facebook Page identifier
- **[Create Itinerary Location With Additional Positions](/example-operations/itinerary/location/CreateItineraryLocationWithAdditionalPositions.graphql)**
  Adds a location to an itinerary, also supplying additional positions to help describe the location more accurately for a visiting user.
- **[Create Itinerary Location With Atdw Place](/example-operations/itinerary/location/CreateItineraryLocationWithAtdwPlace.graphql)**
  Add a location to our itinerary, associating the place to Mavis The Grocer using the ATDW Product identifier
- **[Create Itinerary Location With Auto Route Options](/example-operations/itinerary/location/CreateItineraryLocationWithAutoRouteOptions.graphql)**
  Adds a new location to an itinerary that has auto route enabled, and customises the auto-route behaviour so that it uses an alternative mode of transport when adding
- **[Delete Itinerary Location](/example-operations/itinerary/location/DeleteItineraryLocation.graphql)**
  Removes an itinerary item, such as a location
- **[Itinerary Location Directions](/example-operations/itinerary/location/ItineraryLocationDirections.graphql)**
  Query an itinerary location and load the associated inbound or outbound directions
- **[Itinerary Locations As Simple List](/example-operations/itinerary/location/ItineraryLocationsAsSimpleList.graphql)**
  Query the itinerary locations for an itinerary, and access basic information about the place
- **[Itinerary Locations With Directions](/example-operations/itinerary/location/ItineraryLocationsWithDirections.graphql)**
  Query the itinerary locations, with information about the directions between each of the locations
- **[Move Itinerary Location](/example-operations/itinerary/location/MoveItineraryLocation.graphql)**
  Move an itinerary location to a relative position to another item in the itinerary
- **[Move Itinerary Location To Start](/example-operations/itinerary/location/MoveItineraryLocationToStart.graphql)**
  Reorder/move the itinerary location to the start of the sequence
- **[Update Itinerary Location As Optional](/example-operations/itinerary/location/UpdateItineraryLocationAsOptional.graphql)**
  Updates an itinerary location and marks the itinerary location as an optional stop

### Media

- **[Media Image](/example-operations/media/MediaImage.graphql)**
  Loads a media resource of type MediaImage
- **[Update Photo Content](/example-operations/media/UpdatePhotoContent.graphql)**
  Modifies a media asset to change various attributes or content

#### Media Upload

- **[Process Photo Upload Progress](/example-operations/media/upload/ProcessPhotoUploadProgress.graphql)**
  Finalise an upload process commenced with startMediaUpload, supplying content and associations to profile
- **[Start Photo Upload](/example-operations/media/upload/StartPhotoUpload.graphql)**
  Request information to commence a photo upload via HTTPs

### Place

- **[Date Range Open Closed Times](/example-operations/place/DateRangeOpenClosedTimes.graphql)**
  Obtain the open/closed hours for the place given a period, such as the upcoming week or future date range
- **[Place Contextual Orientation](/example-operations/place/PlaceContextualOrientation.graphql)**
  Query a place and contextualise it's location to other points of interest such as accomodation, towns, or other contextual places you are showing in relation to another place
- **[Place Currency](/example-operations/place/PlaceCurrency.graphql)**
  Queries the currency used in the country for a place.
- **[Place Navigation Links](/example-operations/place/PlaceNavigationLinks.graphql)**
  Queries a place to identify navigation links to generate URL's to send the user to obtain navigation links using their preferred service
- **[Place Time Zone](/example-operations/place/PlaceTimeZone.graphql)**
  Queries the timezone for a place.
- **[Search Address By Position](/example-operations/place/SearchAddressByPosition.graphql)**
  Searches to find addresses by supplied position lon/lat.
- **[Search Locality By Position](/example-operations/place/SearchLocalityByPosition.graphql)**
  Searches to find a locality by supplied position lon/lat.
- **[Search Place By Address](/example-operations/place/SearchPlaceByAddress.graphql)**
  Searches by text to find matching addresses.
- **[Upcoming Open Closed Times](/example-operations/place/UpcomingOpenClosedTimes.graphql)**
  Query the next series of open/closed hours for a place, in order to present information whether the venue is open, closed, opening soon, closing soon, etc.

#### Place Provider: Australian Tourism Data Warehouse

- **[Place ATDWWinery](/example-operations/place/atdw/PlaceATDWWinery.graphql)**
  Load information about a winery from Australian Tourism Data Warehouse
- **[Search Place Autocomplete From ATDW](/example-operations/place/atdw/SearchPlaceAutocompleteFromATDW.graphql)**
  Search the Australian Tourism Data Warehouse (ATDW) for places using an autocomplete style text query

### Profile

- **[Authorized Profiles](/example-operations/profile/AuthorizedProfiles.graphql)**
  Uses a query with the supplied AccessToken/API Key in order to determine the associated authorized profiles
- **[Profile](/example-operations/profile/Profile.graphql)**
  Load a query by a supplied profile identifier.
- **[Update Profile](/example-operations/profile/UpdateProfile.graphql)**
  Update profile details (such as name, bio, website) for a supplied profile

#### Profile Social

- **[Approve Profile Request](/example-operations/profile/social/ApproveProfileRequest.graphql)**
  Approves a profile follow request to follow another profile
- **[Claim Handle](/example-operations/profile/social/ClaimHandle.graphql)**
  Claim a handle for a profile, associating something more friendly
- **[Deny Profile Follow](/example-operations/profile/social/DenyProfileFollow.graphql)**
  Denies a profiles request to follow another profile.
- **[Follow Profile Request](/example-operations/profile/social/FollowProfileRequest.graphql)**
  Requests to follow from one profile to another profile.
- **[Profile Follows](/example-operations/profile/social/ProfileFollows.graphql)**
  Query to list which profiles who follows a supplied profile.
- **[Profiles By Handle](/example-operations/profile/social/ProfilesByHandle.graphql)**
  Queries for profiles based on a registered handle claimed for profiles.
- **[Unfollow Profile](/example-operations/profile/social/UnfollowProfile.graphql)**
  Unfollows a profile.

### Route

- **[Routes Between Positions](/example-operations/route/RoutesBetweenPositions.graphql)**
  Queries routes that exist through the supplied positions


## Contributing

If you would like to share an operation that is useful to others, please send us
a pull request with the operation created in the appropriate sub-folder. If you
need to correct a comment, please update the operations directly, and not the 
generated markdown
  