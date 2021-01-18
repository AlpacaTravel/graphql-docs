# Schema Types

<details>
  <summary><strong>Table of Contents</strong></summary>

  * [Query](#query)
  * [Mutation](#mutation)
  * [Objects](#objects)
    * [Attribute](#attribute)
    * [AttributeConnection](#attributeconnection)
    * [AttributeEdge](#attributeedge)
    * [Bounds](#bounds)
    * [ClaimProfileUsernamePayload](#claimprofileusernamepayload)
    * [Collection](#collection)
    * [CollectionConnection](#collectionconnection)
    * [CollectionEdge](#collectionedge)
    * [CollectionItemConnection](#collectionitemconnection)
    * [CollectionItemEdge](#collectionitemedge)
    * [CollectionLocation](#collectionlocation)
    * [CreateCollectionLocationPayload](#createcollectionlocationpayload)
    * [CreateCollectionPayload](#createcollectionpayload)
    * [CreateItineraryCollectionPayload](#createitinerarycollectionpayload)
    * [CreateItineraryDirectionsPayload](#createitinerarydirectionspayload)
    * [CreateItineraryLocationPayload](#createitinerarylocationpayload)
    * [CreateItineraryPayload](#createitinerarypayload)
    * [DeleteCollectionItemPayload](#deletecollectionitempayload)
    * [DeleteCollectionPayload](#deletecollectionpayload)
    * [DeleteItineraryItemPayload](#deleteitineraryitempayload)
    * [DeleteItineraryPayload](#deleteitinerarypayload)
    * [Elevation](#elevation)
    * [FinalizeMediaUploadPayload](#finalizemediauploadpayload)
    * [Isochrone](#isochrone)
    * [Itinerary](#itinerary)
    * [ItineraryAutoRoute](#itineraryautoroute)
    * [ItineraryCollection](#itinerarycollection)
    * [ItineraryConnection](#itineraryconnection)
    * [ItineraryDirections](#itinerarydirections)
    * [ItineraryDirectionsDurations](#itinerarydirectionsdurations)
    * [ItineraryEdge](#itineraryedge)
    * [ItineraryItemCascadedChanges](#itineraryitemcascadedchanges)
    * [ItineraryItemConnection](#itineraryitemconnection)
    * [ItineraryItemEdge](#itineraryitemedge)
    * [ItineraryLocation](#itinerarylocation)
    * [Media](#media)
    * [MediaImage](#mediaimage)
    * [MediaImageExif](#mediaimageexif)
    * [MediaImageSource](#mediaimagesource)
    * [MoveItineraryItemPayload](#moveitineraryitempayload)
    * [PageInfo](#pageinfo)
    * [Place](#place)
    * [PlaceAddress](#placeaddress)
    * [PlaceAttribution](#placeattribution)
    * [PlaceConnection](#placeconnection)
    * [PlaceContact](#placecontact)
    * [PlaceEdge](#placeedge)
    * [PlaceLayer](#placelayer)
    * [PlaceTowards](#placetowards)
    * [Position](#position)
    * [Profile](#profile)
    * [ProfileConnection](#profileconnection)
    * [ProfileEdge](#profileedge)
    * [PublishItineraryPayload](#publishitinerarypayload)
    * [Request](#request)
    * [Route](#route)
    * [RouteConnection](#routeconnection)
    * [RouteEdge](#routeedge)
    * [RouteSegment](#routesegment)
    * [SearchResult](#searchresult)
    * [SearchResultMatch](#searchresultmatch)
    * [StartMediaUploadPayload](#startmediauploadpayload)
    * [UpdateCollectionLocationPayload](#updatecollectionlocationpayload)
    * [UpdateCollectionPayload](#updatecollectionpayload)
    * [UpdateItineraryCollectionPayload](#updateitinerarycollectionpayload)
    * [UpdateItineraryDirectionsPayload](#updateitinerarydirectionspayload)
    * [UpdateItineraryLocationPayload](#updateitinerarylocationpayload)
    * [UpdateItineraryPayload](#updateitinerarypayload)
    * [UpdateMediaResourcePayload](#updatemediaresourcepayload)
    * [UpdateProfilePayload](#updateprofilepayload)
  * [Inputs](#inputs)
    * [AttributeIdentifierInput](#attributeidentifierinput)
    * [AttributeInput](#attributeinput)
    * [BoundsCircleInput](#boundscircleinput)
    * [BoundsInput](#boundsinput)
    * [CreateCollectionInput](#createcollectioninput)
    * [CreateCollectionLocationInput](#createcollectionlocationinput)
    * [CreateItineraryCollectionInput](#createitinerarycollectioninput)
    * [CreateItineraryDirectionsInput](#createitinerarydirectionsinput)
    * [CreateItineraryInput](#createitineraryinput)
    * [CreateItineraryLocationInput](#createitinerarylocationinput)
    * [CreateMediaResourceInput](#createmediaresourceinput)
    * [ElevationInput](#elevationinput)
    * [GeoJsonSimplification](#geojsonsimplification)
    * [GeoJsonSimplificationRamerDouglasPeucker](#geojsonsimplificationramerdouglaspeucker)
    * [ItineraryAutoRouteInput](#itineraryautorouteinput)
    * [ItineraryDirectionsDurationsInput](#itinerarydirectionsdurationsinput)
    * [ItineraryItemPositionAfterSibling](#itineraryitempositionaftersibling)
    * [ItineraryItemPositionAtEnd](#itineraryitempositionatend)
    * [ItineraryItemPositionAtStart](#itineraryitempositionatstart)
    * [ItineraryItemPositionBeforeSibling](#itineraryitempositionbeforesibling)
    * [ItineraryItemPositionOnLastCollection](#itineraryitempositiononlastcollection)
    * [PlaceInput](#placeinput)
    * [PositionInput](#positioninput)
    * [RouteInput](#routeinput)
    * [RouteSegmentInput](#routesegmentinput)
    * [UpdateCollectionInput](#updatecollectioninput)
    * [UpdateCollectionLocationInput](#updatecollectionlocationinput)
    * [UpdateItineraryCollectionInput](#updateitinerarycollectioninput)
    * [UpdateItineraryDirectionsInput](#updateitinerarydirectionsinput)
    * [UpdateItineraryInput](#updateitineraryinput)
    * [UpdateItineraryLocationInput](#updateitinerarylocationinput)
    * [UpdateMediaResourceInput](#updatemediaresourceinput)
    * [UpdateProfileInput](#updateprofileinput)
  * [Enums](#enums)
    * [AngleUnit](#angleunit)
    * [CompassPoint](#compasspoint)
    * [DistanceUnit](#distanceunit)
    * [DurationUnit](#durationunit)
    * [IsochroneMode](#isochronemode)
    * [ItineraryItemType](#itineraryitemtype)
    * [MediaUploadStatus](#mediauploadstatus)
    * [PlaceNavigationUrlProvider](#placenavigationurlprovider)
    * [PlaceSearchSource](#placesearchsource)
    * [ProfileFollowStatus](#profilefollowstatus)
    * [ProfileFollowStatusAction](#profilefollowstatusaction)
    * [RouteMode](#routemode)
    * [RouteSearchableMode](#routesearchablemode)
  * [Scalars](#scalars)
    * [Boolean](#boolean)
    * [Float](#float)
    * [ID](#id)
    * [Int](#int)
    * [JSON](#json)
    * [String](#string)
  * [Interfaces](#interfaces)
    * [CollectionItem](#collectionitem)
    * [ItineraryItem](#itineraryitem)
    * [MediaResource](#mediaresource)
    * [Node](#node)

</details>

## Query
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#node">Node</a></td>
<td>

Get a resource that implements Node by id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>profile</strong></td>
<td valign="top"><a href="#profile">Profile</a></td>
<td>

Obtains a profile by a provided id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>authorizedProfiles</strong></td>
<td valign="top"><a href="#profileconnection">ProfileConnection</a>!</td>
<td>

Query for all authorised profiles

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>profiles</strong></td>
<td valign="top"><a href="#profileconnection">ProfileConnection</a>!</td>
<td>

Search profiles

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">username</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>routes</strong></td>
<td valign="top"><a href="#routeconnection">RouteConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">positions</td>
<td valign="top">[<a href="#positioninput">PositionInput</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mode</td>
<td valign="top"><a href="#routesearchablemode">RouteSearchableMode</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>place</strong></td>
<td valign="top"><a href="#place">Place</a></td>
<td>

Get a place by id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>placeSearch</strong></td>
<td valign="top"><a href="#placeconnection">PlaceConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">text</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">focus</td>
<td valign="top"><a href="#positioninput">PositionInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">bounds</td>
<td valign="top"><a href="#boundsinput">BoundsInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sources</td>
<td valign="top">[<a href="#placesearchsource">PlaceSearchSource</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">layers</td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">thirdPartyQuery</td>
<td valign="top"><a href="#json">JSON</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">maxLabelLength</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>placeAutocompleteSearch</strong></td>
<td valign="top"><a href="#placeconnection">PlaceConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">text</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">focus</td>
<td valign="top"><a href="#positioninput">PositionInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">bounds</td>
<td valign="top"><a href="#boundsinput">BoundsInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sources</td>
<td valign="top">[<a href="#placesearchsource">PlaceSearchSource</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">layers</td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">thirdPartyQuery</td>
<td valign="top"><a href="#json">JSON</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">maxLabelLength</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>placeAddressSearch</strong></td>
<td valign="top"><a href="#placeconnection">PlaceConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">borough</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">country</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">county</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locality</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">neighbourhood</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">postalCode</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">region</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">streetAddress</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sources</td>
<td valign="top">[<a href="#placesearchsource">PlaceSearchSource</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">layers</td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">thirdPartyQuery</td>
<td valign="top"><a href="#json">JSON</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">maxLabelLength</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>placeReverseSearch</strong></td>
<td valign="top"><a href="#placeconnection">PlaceConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">focus</td>
<td valign="top"><a href="#positioninput">PositionInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sources</td>
<td valign="top">[<a href="#placesearchsource">PlaceSearchSource</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">layers</td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">thirdPartyQuery</td>
<td valign="top"><a href="#json">JSON</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">maxLabelLength</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collection</strong></td>
<td valign="top"><a href="#collection">Collection</a></td>
<td>

Get a collection by id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collections</strong></td>
<td valign="top"><a href="#collectionconnection">CollectionConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">profileId</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">discriminator</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collectionItem</strong></td>
<td valign="top"><a href="#collectionitem">CollectionItem</a></td>
<td>

Obtains an CollectionItem by a provided id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The collection item identifier, in the form of item/XYZ

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collectionItems</strong></td>
<td valign="top"><a href="#collectionitemconnection">CollectionItemConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">profileId</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The profile owner of the item, in the form of profile/XYZ

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">collectionIds</td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td>

The collection identifiers that items are associated to, in the form of collection/XYZ

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">keyword</td>
<td valign="top"><a href="#string">String</a></td>
<td>

A supplied keyword to locate items, checking the title, synopsis, description and tags of items

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">tags</td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td>

The tags that are applied to the item

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sectionIds</td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td>

The collection sections that the items are associated to

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">resourceIds</td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td>

The resource identifiers that the items are associated to

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">boundsCircle</td>
<td valign="top"><a href="#boundscircleinput">BoundsCircleInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">bounds</td>
<td valign="top"><a href="#boundsinput">BoundsInput</a></td>
<td>

A bounds expression that the item positions must fall within

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">customExternalRefs</td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td>

The attribute custom/external-ref attribute associations that are to be returned

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">customExternalSources</td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td>

The attribute custom/external-source attribute associations that are to be returned

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>itinerary</strong></td>
<td valign="top"><a href="#itinerary">Itinerary</a></td>
<td>

Get an itinerary by id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>itineraries</strong></td>
<td valign="top"><a href="#itineraryconnection">ItineraryConnection</a>!</td>
<td>

Query itineraries that belong to a profile

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">profileId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">keyword</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isochrone</strong></td>
<td valign="top">[<a href="#isochrone">Isochrone</a>!]!</td>
<td>

Query for fetching isochrone

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">center</td>
<td valign="top"><a href="#positioninput">PositionInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">duration</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Duration for isochrone in minutes

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mode</td>
<td valign="top"><a href="#isochronemode">IsochroneMode</a>!</td>
<td></td>
</tr>
</tbody>
</table>

## Mutation
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>createProfileFollowRequest</strong></td>
<td valign="top"><a href="#request">Request</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">fromProfile</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">toProfile</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>setProfileFollowStatus</strong></td>
<td valign="top"><a href="#request">Request</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">fromProfile</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">toProfile</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">status</td>
<td valign="top"><a href="#profilefollowstatusaction">ProfileFollowStatusAction</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cancelProfileFollow</strong></td>
<td valign="top"><a href="#request">Request</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">fromProfile</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">toProfile</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>claimProfileUsername</strong></td>
<td valign="top"><a href="#claimprofileusernamepayload">ClaimProfileUsernamePayload</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">username</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">profile</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateProfile</strong></td>
<td valign="top"><a href="#updateprofilepayload">UpdateProfilePayload</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">profile</td>
<td valign="top"><a href="#updateprofileinput">UpdateProfileInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startMediaUpload</strong></td>
<td valign="top"><a href="#startmediauploadpayload">StartMediaUploadPayload</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filename</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">contentType</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>finalizeMediaUpload</strong></td>
<td valign="top"><a href="#finalizemediauploadpayload">FinalizeMediaUploadPayload</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">token</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">profileId</td>
<td valign="top"><a href="#id">ID</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mediaResource</td>
<td valign="top"><a href="#createmediaresourceinput">CreateMediaResourceInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateMediaResource</strong></td>
<td valign="top"><a href="#updatemediaresourcepayload">UpdateMediaResourcePayload</a>!</td>
<td>

Update a media resource with updated properties

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The id of the media resource to update

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mediaResource</td>
<td valign="top"><a href="#updatemediaresourceinput">UpdateMediaResourceInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createCollection</strong></td>
<td valign="top"><a href="#createcollectionpayload">CreateCollectionPayload</a>!</td>
<td>

The return fields available after creating a collection

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">profileId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">collection</td>
<td valign="top"><a href="#createcollectioninput">CreateCollectionInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateCollection</strong></td>
<td valign="top"><a href="#updatecollectionpayload">UpdateCollectionPayload</a>!</td>
<td>

Updates a collection

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">collection</td>
<td valign="top"><a href="#updatecollectioninput">UpdateCollectionInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteCollection</strong></td>
<td valign="top"><a href="#deletecollectionpayload">DeleteCollectionPayload</a>!</td>
<td>

Delete an collection

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The id of the collection to delete

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteCollectionItem</strong></td>
<td valign="top"><a href="#deletecollectionitempayload">DeleteCollectionItemPayload</a>!</td>
<td>

The fields available after the collection is deleted

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the collection deleted

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createCollectionLocation</strong></td>
<td valign="top"><a href="#createcollectionlocationpayload">CreateCollectionLocationPayload</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">collectionId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The collection ID to associate this collection item to, in the form of collection/XYZ

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">location</td>
<td valign="top"><a href="#createcollectionlocationinput">CreateCollectionLocationInput</a>!</td>
<td>

The collection location to be created

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateCollectionLocation</strong></td>
<td valign="top"><a href="#updatecollectionlocationpayload">UpdateCollectionLocationPayload</a>!</td>
<td>

The fields avaialble after updating the collection location

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The id of the collection location updated

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">location</td>
<td valign="top"><a href="#updatecollectionlocationinput">UpdateCollectionLocationInput</a>!</td>
<td>

The updated collection location

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createItinerary</strong></td>
<td valign="top"><a href="#createitinerarypayload">CreateItineraryPayload</a>!</td>
<td>

Create a new itinerary

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">itinerary</td>
<td valign="top"><a href="#createitineraryinput">CreateItineraryInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">profileId</td>
<td valign="top"><a href="#id">ID</a></td>
<td>


The id of the profile that will own the created itinerary

Omit to create an anonymous itinerary


</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateItinerary</strong></td>
<td valign="top"><a href="#updateitinerarypayload">UpdateItineraryPayload</a>!</td>
<td>

Updates a itinerary

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">itinerary</td>
<td valign="top"><a href="#updateitineraryinput">UpdateItineraryInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteItinerary</strong></td>
<td valign="top"><a href="#deleteitinerarypayload">DeleteItineraryPayload</a>!</td>
<td>

Delete an itinerary

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The id of the itinerary to delete

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>publishItinerary</strong></td>
<td valign="top"><a href="#publishitinerarypayload">PublishItineraryPayload</a>!</td>
<td>

Publish an itinerary making it publically accessible

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The id of the itinerary to publish

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>moveItineraryItem</strong></td>
<td valign="top"><a href="#moveitineraryitempayload">MoveItineraryItemPayload</a>!</td>
<td>

Move an ItineraryItem

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The itinerary item identifier, in the form of item/XYZ

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">positionAtStart</td>
<td valign="top"><a href="#itineraryitempositionatstart">ItineraryItemPositionAtStart</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">positionAtEnd</td>
<td valign="top"><a href="#itineraryitempositionatend">ItineraryItemPositionAtEnd</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">positionAfterSibling</td>
<td valign="top"><a href="#itineraryitempositionaftersibling">ItineraryItemPositionAfterSibling</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">positionBeforeSibling</td>
<td valign="top"><a href="#itineraryitempositionbeforesibling">ItineraryItemPositionBeforeSibling</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">positionOnLastCollection</td>
<td valign="top"><a href="#itineraryitempositiononlastcollection">ItineraryItemPositionOnLastCollection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteItineraryItem</strong></td>
<td valign="top"><a href="#deleteitineraryitempayload">DeleteItineraryItemPayload</a>!</td>
<td>

Delete an ItineraryItem

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The itinerary item identifier of the removed item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createItineraryCollection</strong></td>
<td valign="top"><a href="#createitinerarycollectionpayload">CreateItineraryCollectionPayload</a>!</td>
<td>

Create a new ItineraryCollection item inside the given itinerary

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">itineraryId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The itinerary identifier for this itinerary collection to be created within, in the form of itinerary/XYZ

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">collection</td>
<td valign="top"><a href="#createitinerarycollectioninput">CreateItineraryCollectionInput</a>!</td>
<td>

The fields for creating the itinerary collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateItineraryCollection</strong></td>
<td valign="top"><a href="#updateitinerarycollectionpayload">UpdateItineraryCollectionPayload</a>!</td>
<td>

Update an ItineraryCollection

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The itinerary collection identifier, in the form of item/XYZ

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">collection</td>
<td valign="top"><a href="#updateitinerarycollectioninput">UpdateItineraryCollectionInput</a>!</td>
<td>

The fields to update on the itinerary collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createItineraryLocation</strong></td>
<td valign="top"><a href="#createitinerarylocationpayload">CreateItineraryLocationPayload</a>!</td>
<td>

Create a new ItineraryLocation item inside the given itinerary

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">itineraryId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The itinerary identifier, in the form of itinerary/XYZ

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">location</td>
<td valign="top"><a href="#createitinerarylocationinput">CreateItineraryLocationInput</a>!</td>
<td>

The input fields for creating the itinerary location

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">autoRoute</td>
<td valign="top"><a href="#routesegmentinput">RouteSegmentInput</a></td>
<td>

Modify the first segment of the route automatically created by autoRoute when creating an ItineraryLocation

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateItineraryLocation</strong></td>
<td valign="top"><a href="#updateitinerarylocationpayload">UpdateItineraryLocationPayload</a>!</td>
<td>

Update an ItineraryLocation

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The itinerary location identifier, in the form of item/XYZ

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">location</td>
<td valign="top"><a href="#updateitinerarylocationinput">UpdateItineraryLocationInput</a>!</td>
<td>

The fields for updating the itinerary location

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createItineraryDirections</strong></td>
<td valign="top"><a href="#createitinerarydirectionspayload">CreateItineraryDirectionsPayload</a>!</td>
<td>

Create a new ItineraryDirections item inside the given itinerary

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">itineraryId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The itinerary identifier, in the form of itinerary/XYZ

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">directions</td>
<td valign="top"><a href="#createitinerarydirectionsinput">CreateItineraryDirectionsInput</a>!</td>
<td>

The directions input fields

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateItineraryDirections</strong></td>
<td valign="top"><a href="#updateitinerarydirectionspayload">UpdateItineraryDirectionsPayload</a>!</td>
<td>

Update an ItineraryDirections

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The itinerary directions identifier, in the form of item/XYZ

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">directions</td>
<td valign="top"><a href="#updateitinerarydirectionsinput">UpdateItineraryDirectionsInput</a>!</td>
<td>

The fields to update on the itinerary directions item

</td>
</tr>
</tbody>
</table>

## Objects

### Attribute

Additional data defined on a resource

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>


The attribute identifier

Has the form "{{resource_type}}/{{attribute_name}}"
eg: The "title" attribute on an item will have the id: "item/title"

Custom attributes have the form "custom/{{attribute_name}}"

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>

The attribute value, can be any JSON-serialisable type

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>meta</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>

Optional attribute metadata, can be any JSON-serialisable type

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>locale</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Optional string representing the locale of the attribute value

</td>
</tr>
</tbody>
</table>

### AttributeConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#attributeedge">AttributeEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#attribute">Attribute</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### AttributeEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#attribute">Attribute</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Bounds

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>w</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>s</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>e</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>n</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ws</strong></td>
<td valign="top">[<a href="#float">Float</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>en</strong></td>
<td valign="top">[<a href="#float">Float</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>wsen</strong></td>
<td valign="top">[[<a href="#float">Float</a>!]!]!</td>
<td></td>
</tr>
</tbody>
</table>

### ClaimProfileUsernamePayload

Response of claiming a username

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>profile</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>username</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The username that was claimed

</td>
</tr>
</tbody>
</table>

### Collection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The Globally Unique ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>profile</strong></td>
<td valign="top"><a href="#profile">Profile</a>!</td>
<td>

Profile that owns this collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>created</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The date when the collection was created

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>modified</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The date when the collection was last modified

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A supplied title for this collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>synopsis</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A short text summary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A longer text description

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

A series of strings applied to label this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>media</strong></td>
<td valign="top">[<a href="#media">Media</a>!]!</td>
<td>

A collection of Media objects representing images or other media

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>preferredMedia</strong></td>
<td valign="top"><a href="#media">Media</a></td>
<td>

A single Media object representing the preferred media to use

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attr</strong></td>
<td valign="top"><a href="#attribute">Attribute</a></td>
<td>

Arbitrary JSON value stored on this resource, keyed by an id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrValue</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>

Shortcut for the attr.value, returns null if the attribute doesn't exist

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrs</strong></td>
<td valign="top">[<a href="#attribute">Attribute</a>!]!</td>
<td>

Query multiple attributes by id and optionally locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">attrs</td>
<td valign="top">[<a href="#attributeidentifierinput">AttributeIdentifierInput</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>allAttrs</strong></td>
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Return all attributes on the resource

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrsById</strong></td>
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Query multiple attributes with the same id and optionally locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>discriminator</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A label used to differentiate types of collections

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>item</strong></td>
<td valign="top"><a href="#collectionitem">CollectionItem</a></td>
<td>

Returns an item belonging to this collection by id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>items</strong></td>
<td valign="top"><a href="#collectionitemconnection">CollectionItemConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">keyword</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">tags</td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sectionIds</td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">resourceIds</td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">boundsCircle</td>
<td valign="top"><a href="#boundscircleinput">BoundsCircleInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">bounds</td>
<td valign="top"><a href="#boundsinput">BoundsInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">customExternalRefs</td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
</tbody>
</table>

### CollectionConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#collectionedge">CollectionEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#collection">Collection</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### CollectionEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#collection">Collection</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### CollectionItemConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#collectionitemedge">CollectionItemEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#collectionitem">CollectionItem</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### CollectionItemEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#collectionitem">CollectionItem</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### CollectionLocation

A CollectionItem used to represents a single location association to a place.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The unique identifier, taking the shape of item/XYZ

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>profile</strong></td>
<td valign="top"><a href="#profile">Profile</a>!</td>
<td>

The associated profile owner

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>created</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The date when the collection-item was created

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>modified</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The date when the collection-item was last modified

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The supplied title

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>synopsis</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A short text summary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A longer text description

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

A series of strings applied to label this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>media</strong></td>
<td valign="top">[<a href="#media">Media</a>!]!</td>
<td>

A collection of Media objects representing images or other media

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>preferredMedia</strong></td>
<td valign="top"><a href="#media">Media</a></td>
<td>

A single Media object representing the preferred media to use

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attr</strong></td>
<td valign="top"><a href="#attribute">Attribute</a></td>
<td>

Arbitrary JSON value stored on this resource, keyed by an id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrValue</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>

Shortcut for the attr.value, returns null if the attribute doesn't exist

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrs</strong></td>
<td valign="top">[<a href="#attribute">Attribute</a>!]!</td>
<td>

Query multiple attributes by id and optionally locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">attrs</td>
<td valign="top">[<a href="#attributeidentifierinput">AttributeIdentifierInput</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>allAttrs</strong></td>
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Return all attributes on the resource

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrsById</strong></td>
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Query multiple attributes with the same id and optionally locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>place</strong></td>
<td valign="top"><a href="#place">Place</a>!</td>
<td>

The associated place information for this location

</td>
</tr>
</tbody>
</table>

### CreateCollectionLocationPayload

The fields available to return after creating a new collection location

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>location</strong></td>
<td valign="top"><a href="#collectionlocation">CollectionLocation</a></td>
<td>

The created collection location

</td>
</tr>
</tbody>
</table>

### CreateCollectionPayload

The return fields avaialble after creating a collection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>collection</strong></td>
<td valign="top"><a href="#collection">Collection</a></td>
<td></td>
</tr>
</tbody>
</table>

### CreateItineraryCollectionPayload

The fields available after creating an itinerary collection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>collection</strong></td>
<td valign="top"><a href="#itinerarycollection">ItineraryCollection</a></td>
<td>

The created itinerary collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>itinerary</strong></td>
<td valign="top"><a href="#itinerary">Itinerary</a>!</td>
<td>

The modified itinerary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cascaded</strong></td>
<td valign="top"><a href="#itineraryitemcascadedchanges">ItineraryItemCascadedChanges</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### CreateItineraryDirectionsPayload

The itinerary directions return fields available after creating the itinerary directions

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>directions</strong></td>
<td valign="top"><a href="#itinerarydirections">ItineraryDirections</a></td>
<td>

The created itinerary directions item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>itinerary</strong></td>
<td valign="top"><a href="#itinerary">Itinerary</a>!</td>
<td>

The modified itinerary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cascaded</strong></td>
<td valign="top"><a href="#itineraryitemcascadedchanges">ItineraryItemCascadedChanges</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### CreateItineraryLocationPayload

The fields available after creating an itinerary location

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>location</strong></td>
<td valign="top"><a href="#itinerarylocation">ItineraryLocation</a></td>
<td>

The itinerary location that was created

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>itinerary</strong></td>
<td valign="top"><a href="#itinerary">Itinerary</a>!</td>
<td>

The modified itinerary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cascaded</strong></td>
<td valign="top"><a href="#itineraryitemcascadedchanges">ItineraryItemCascadedChanges</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### CreateItineraryPayload

The fields available after creating an itinerary

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>itinerary</strong></td>
<td valign="top"><a href="#itinerary">Itinerary</a></td>
<td>

The newly created itinerary

</td>
</tr>
</tbody>
</table>

### DeleteCollectionItemPayload

The fields available after deleting a collection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The ID of the collection, in the form of collection/XYZ

</td>
</tr>
</tbody>
</table>

### DeleteCollectionPayload

The available payload after performing a delete collection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The ID of the deleted collection

</td>
</tr>
</tbody>
</table>

### DeleteItineraryItemPayload

Deletes a itinerary item

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The itinerary item identifier, in the form of item/XYZ

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>itinerary</strong></td>
<td valign="top"><a href="#itinerary">Itinerary</a>!</td>
<td>

The modified itinerary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cascaded</strong></td>
<td valign="top"><a href="#itineraryitemcascadedchanges">ItineraryItemCascadedChanges</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### DeleteItineraryPayload

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The ID of the deleted itinerary

</td>
</tr>
</tbody>
</table>

### Elevation

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>gain</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>loss</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
</tbody>
</table>

### FinalizeMediaUploadPayload

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#mediauploadstatus">MediaUploadStatus</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>media</strong></td>
<td valign="top"><a href="#mediaresource">MediaResource</a></td>
<td></td>
</tr>
</tbody>
</table>

### Isochrone

Isochrone for the given position with duration and vehicle

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>duration</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">unit</td>
<td valign="top"><a href="#durationunit">DurationUnit</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>copyrights</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mode</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bounds</strong></td>
<td valign="top"><a href="#bounds">Bounds</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>polygon</strong></td>
<td valign="top"><a href="#json">JSON</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">simplify</td>
<td valign="top"><a href="#geojsonsimplification">GeoJsonSimplification</a></td>
<td></td>
</tr>
</tbody>
</table>

### Itinerary

An itinerary type is used to structure a series of items representing a travel itinerary

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The Globally Unique ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>profile</strong></td>
<td valign="top"><a href="#profile">Profile</a></td>
<td>

Profile that owns this itinerary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>created</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The date when the itinerary was created

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>modified</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The date when the itinerary was last modified

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>item</strong></td>
<td valign="top"><a href="#itineraryitem">ItineraryItem</a></td>
<td>

Returns a single item from this itinerary by id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>autoRoute</strong></td>
<td valign="top"><a href="#itineraryautoroute">ItineraryAutoRoute</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The supplied title

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>synopsis</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A short text summary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A longer text description

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

A series of strings applied to label this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>media</strong></td>
<td valign="top">[<a href="#media">Media</a>!]!</td>
<td>

A collection of Media objects representing images or other media

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>preferredMedia</strong></td>
<td valign="top"><a href="#media">Media</a></td>
<td>

A single Media object representing the preferred media to use

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>descendants</strong></td>
<td valign="top"><a href="#itineraryitemconnection">ItineraryItemConnection</a>!</td>
<td>

The descending items within this itinerary item

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by item type
eg: "ItineraryCollection"

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">parentType</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by type of the item's parent
eg: "ItineraryCollection"


</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">placeIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>


Optionally look for items that contain any of the given places
Only looks at the place field on ItineraryLocations


</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">depthMax</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Optionally limit the depth of the traversal

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">depthMin</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Optionally limit the minimum depth of the traversal

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>children</strong></td>
<td valign="top"><a href="#itineraryitemconnection">ItineraryItemConnection</a>!</td>
<td>

The immediate associated children itinerary items

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by item type
eg: "ItineraryCollection"

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">parentType</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by type of the item's parent
eg: "ItineraryCollection"


</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">placeIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>


Optionally look for items that contain any of the given places
Only looks at the place field on ItineraryLocations


</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attr</strong></td>
<td valign="top"><a href="#attribute">Attribute</a></td>
<td>

Arbitrary JSON value stored on this resource, keyed by an id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrValue</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>

Shortcut for the attr.value, returns null if the attribute doesn't exist

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrs</strong></td>
<td valign="top">[<a href="#attribute">Attribute</a>!]!</td>
<td>

Query multiple attributes by id and optionally locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">attrs</td>
<td valign="top">[<a href="#attributeidentifierinput">AttributeIdentifierInput</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrsById</strong></td>
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Query multiple attributes with the same id and optionally locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>allAttrs</strong></td>
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Return all attributes on the resource

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bounds</strong></td>
<td valign="top"><a href="#bounds">Bounds</a></td>
<td>

Bounds for the itinerary item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>elevation</strong></td>
<td valign="top"><a href="#elevation">Elevation</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### ItineraryAutoRoute

Automatically generate ItineraryDirections that connect sibling ItineraryLocations

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>defaultMode</strong></td>
<td valign="top"><a href="#routemode">RouteMode</a>!</td>
<td>

The default mode of transport to use for the generated ItineraryDirections

</td>
</tr>
</tbody>
</table>

### ItineraryCollection

An itinerary item representing a collection of other itinerary items

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The supplied title

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>synopsis</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A short text summary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A longer text description

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

A series of strings applied to label this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>media</strong></td>
<td valign="top">[<a href="#media">Media</a>!]!</td>
<td>

A collection of Media objects representing images or other media

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>preferredMedia</strong></td>
<td valign="top"><a href="#media">Media</a></td>
<td>

A single Media object representing the preferred media to use

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>itinerary</strong></td>
<td valign="top"><a href="#itinerary">Itinerary</a>!</td>
<td>

The itinerary this item belongs to

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>before</strong></td>
<td valign="top"><a href="#itineraryitem">ItineraryItem</a></td>
<td>

The sibling item that comes before this item

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by item type
eg: "ItineraryCollection"

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">parentType</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by type of the item's parent
eg: "ItineraryCollection"


</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">placeIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>


Optionally look for items that contain any of the given places
Only looks at the place field on ItineraryLocations


</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>after</strong></td>
<td valign="top"><a href="#itineraryitem">ItineraryItem</a></td>
<td>

The sibling item that comes after this item

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by item type
eg: "ItineraryCollection"

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">parentType</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by type of the item's parent
eg: "ItineraryCollection"


</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">placeIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>


Optionally look for items that contain any of the given places
Only looks at the place field on ItineraryLocations


</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>parent</strong></td>
<td valign="top"><a href="#itineraryitem">ItineraryItem</a></td>
<td>

The parent item of this item

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by item type
eg: "ItineraryCollection"

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">parentType</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by type of the item's parent
eg: "ItineraryCollection"


</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">placeIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>


Optionally look for items that contain any of the given places
Only looks at the place field on ItineraryLocations


</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ancestors</strong></td>
<td valign="top"><a href="#itineraryitemconnection">ItineraryItemConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by item type
eg: "ItineraryCollection"

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">parentType</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by type of the item's parent
eg: "ItineraryCollection"


</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">placeIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>


Optionally look for items that contain any of the given places
Only looks at the place field on ItineraryLocations


</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>descendants</strong></td>
<td valign="top"><a href="#itineraryitemconnection">ItineraryItemConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by item type
eg: "ItineraryCollection"

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">parentType</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by type of the item's parent
eg: "ItineraryCollection"


</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">placeIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>


Optionally look for items that contain any of the given places
Only looks at the place field on ItineraryLocations


</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">depthMax</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Optionally limit the maximum depth of the traversal

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">depthMin</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Optionally limit the minimum depth of the traversal

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>children</strong></td>
<td valign="top"><a href="#itineraryitemconnection">ItineraryItemConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by item type
eg: "ItineraryCollection"

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">parentType</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by type of the item's parent
eg: "ItineraryCollection"


</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">placeIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>


Optionally look for items that contain any of the given places
Only looks at the place field on ItineraryLocations


</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attr</strong></td>
<td valign="top"><a href="#attribute">Attribute</a></td>
<td>

Arbitrary JSON value stored on this resource, keyed by an id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrValue</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>

Shortcut for the attr.value, returns null if the attribute doesn't exist

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrs</strong></td>
<td valign="top">[<a href="#attribute">Attribute</a>!]!</td>
<td>

Query multiple attributes by id and optionally locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">attrs</td>
<td valign="top">[<a href="#attributeidentifierinput">AttributeIdentifierInput</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrsById</strong></td>
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Query multiple attributes with the same id and optionally locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>allAttrs</strong></td>
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Return all attributes on the resource

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bounds</strong></td>
<td valign="top"><a href="#bounds">Bounds</a></td>
<td>

Bounds for the itinerary item

</td>
</tr>
</tbody>
</table>

### ItineraryConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#itineraryedge">ItineraryEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#itinerary">Itinerary</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### ItineraryDirections

An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The supplied title

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>synopsis</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A short text summary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A longer text description

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

A series of strings applied to label this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>media</strong></td>
<td valign="top">[<a href="#media">Media</a>!]!</td>
<td>

A collection of Media objects representing images or other media

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>preferredMedia</strong></td>
<td valign="top"><a href="#media">Media</a></td>
<td>

A single Media object representing the preferred media to use

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>itinerary</strong></td>
<td valign="top"><a href="#itinerary">Itinerary</a>!</td>
<td>

The itinerary this item belongs to

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>before</strong></td>
<td valign="top"><a href="#itineraryitem">ItineraryItem</a></td>
<td>

The sibling item that comes before this item

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by item type
eg: "ItineraryCollection"

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">parentType</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by type of the item's parent
eg: "ItineraryCollection"


</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">placeIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>


Optionally look for items that contain any of the given places
Only looks at the place field on ItineraryLocations


</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>after</strong></td>
<td valign="top"><a href="#itineraryitem">ItineraryItem</a></td>
<td>

The sibling item that comes after this item

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by item type
eg: "ItineraryCollection"

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">parentType</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by type of the item's parent
eg: "ItineraryCollection"


</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">placeIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>


Optionally look for items that contain any of the given places
Only looks at the place field on ItineraryLocations


</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>parent</strong></td>
<td valign="top"><a href="#itineraryitem">ItineraryItem</a></td>
<td>

The parent item of this item

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by item type
eg: "ItineraryCollection"

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">parentType</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by type of the item's parent
eg: "ItineraryCollection"


</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">placeIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>


Optionally look for items that contain any of the given places
Only looks at the place field on ItineraryLocations


</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ancestors</strong></td>
<td valign="top"><a href="#itineraryitemconnection">ItineraryItemConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by item type
eg: "ItineraryCollection"

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">parentType</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by type of the item's parent
eg: "ItineraryCollection"


</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">placeIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>


Optionally look for items that contain any of the given places
Only looks at the place field on ItineraryLocations


</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>descendants</strong></td>
<td valign="top"><a href="#itineraryitemconnection">ItineraryItemConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by item type
eg: "ItineraryCollection"

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">parentType</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by type of the item's parent
eg: "ItineraryCollection"


</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">placeIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>


Optionally look for items that contain any of the given places
Only looks at the place field on ItineraryLocations


</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">depthMax</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Optionally limit the maximum depth of the traversal

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">depthMin</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Optionally limit the minimum depth of the traversal

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>children</strong></td>
<td valign="top"><a href="#itineraryitemconnection">ItineraryItemConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by item type
eg: "ItineraryCollection"

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">parentType</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by type of the item's parent
eg: "ItineraryCollection"


</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">placeIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>


Optionally look for items that contain any of the given places
Only looks at the place field on ItineraryLocations


</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attr</strong></td>
<td valign="top"><a href="#attribute">Attribute</a></td>
<td>

Arbitrary JSON value stored on this resource, keyed by an id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrValue</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>

Shortcut for the attr.value, returns null if the attribute doesn't exist

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrs</strong></td>
<td valign="top">[<a href="#attribute">Attribute</a>!]!</td>
<td>

Query multiple attributes by id and optionally locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">attrs</td>
<td valign="top">[<a href="#attributeidentifierinput">AttributeIdentifierInput</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrsById</strong></td>
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Query multiple attributes with the same id and optionally locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>allAttrs</strong></td>
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Return all attributes on the resource

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bounds</strong></td>
<td valign="top"><a href="#bounds">Bounds</a></td>
<td>

Bounds for the itinerary item

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">excludeDescendants</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>origin</strong></td>
<td valign="top"><a href="#itinerarylocation">ItineraryLocation</a></td>
<td>

The item that is the starting point of the directions

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>route</strong></td>
<td valign="top"><a href="#route">Route</a>!</td>
<td>

The route details of this directions item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>durations</strong></td>
<td valign="top">[<a href="#itinerarydirectionsdurations">ItineraryDirectionsDurations</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>durationMin</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>durationMax</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>distance</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>elevation</strong></td>
<td valign="top"><a href="#elevation">Elevation</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### ItineraryDirectionsDurations

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>duration</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>label</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### ItineraryEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#itinerary">Itinerary</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### ItineraryItemCascadedChanges

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>deletedIds</strong></td>
<td valign="top">[<a href="#id">ID</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>created</strong></td>
<td valign="top">[<a href="#itineraryitem">ItineraryItem</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updated</strong></td>
<td valign="top">[<a href="#itineraryitem">ItineraryItem</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### ItineraryItemConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#itineraryitemedge">ItineraryItemEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#itineraryitem">ItineraryItem</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### ItineraryItemEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#itineraryitem">ItineraryItem</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### ItineraryLocation

An itinerary item representing a location with an associated place in the itinerary

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The supplied title

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>synopsis</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A short text summary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A longer text description

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

A series of strings applied to label this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>media</strong></td>
<td valign="top">[<a href="#media">Media</a>!]!</td>
<td>

A collection of Media objects representing images or other media

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>preferredMedia</strong></td>
<td valign="top"><a href="#media">Media</a></td>
<td>

A single Media object representing the preferred media to use

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>itinerary</strong></td>
<td valign="top"><a href="#itinerary">Itinerary</a>!</td>
<td>

The itinerary this item belongs to

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>before</strong></td>
<td valign="top"><a href="#itineraryitem">ItineraryItem</a></td>
<td>

The sibling item that comes before this item

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by item type
eg: "ItineraryCollection"

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">parentType</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by type of the item's parent
eg: "ItineraryCollection"


</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">placeIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>


Optionally look for items that contain any of the given places
Only looks at the place field on ItineraryLocations


</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>after</strong></td>
<td valign="top"><a href="#itineraryitem">ItineraryItem</a></td>
<td>

The sibling item that comes after this item

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by item type
eg: "ItineraryCollection"

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">parentType</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by type of the item's parent
eg: "ItineraryCollection"


</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">placeIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>


Optionally look for items that contain any of the given places
Only looks at the place field on ItineraryLocations


</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>parent</strong></td>
<td valign="top"><a href="#itineraryitem">ItineraryItem</a></td>
<td>

The parent item of this item

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by item type
eg: "ItineraryCollection"

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">parentType</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by type of the item's parent
eg: "ItineraryCollection"


</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">placeIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>


Optionally look for items that contain any of the given places
Only looks at the place field on ItineraryLocations


</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ancestors</strong></td>
<td valign="top"><a href="#itineraryitemconnection">ItineraryItemConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by item type
eg: "ItineraryCollection"

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">parentType</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by type of the item's parent
eg: "ItineraryCollection"


</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">placeIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>


Optionally look for items that contain any of the given places
Only looks at the place field on ItineraryLocations


</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>descendants</strong></td>
<td valign="top"><a href="#itineraryitemconnection">ItineraryItemConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by item type
eg: "ItineraryCollection"

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">parentType</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by type of the item's parent
eg: "ItineraryCollection"


</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">placeIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>


Optionally look for items that contain any of the given places
Only looks at the place field on ItineraryLocations


</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">depthMax</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Optionally limit the maximum depth of the traversal

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">depthMin</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Optionally limit the minimum depth of the traversal

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>children</strong></td>
<td valign="top"><a href="#itineraryitemconnection">ItineraryItemConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by item type
eg: "ItineraryCollection"

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">parentType</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by type of the item's parent
eg: "ItineraryCollection"


</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">placeIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>


Optionally look for items that contain any of the given places
Only looks at the place field on ItineraryLocations


</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attr</strong></td>
<td valign="top"><a href="#attribute">Attribute</a></td>
<td>

Arbitrary JSON value stored on this resource, keyed by an id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrValue</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>

Shortcut for the attr.value, returns null if the attribute doesn't exist

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrs</strong></td>
<td valign="top">[<a href="#attribute">Attribute</a>!]!</td>
<td>

Query multiple attributes by id and optionally locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">attrs</td>
<td valign="top">[<a href="#attributeidentifierinput">AttributeIdentifierInput</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrsById</strong></td>
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Query multiple attributes with the same id and optionally locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>allAttrs</strong></td>
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Return all attributes on the resource

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bounds</strong></td>
<td valign="top"><a href="#bounds">Bounds</a>!</td>
<td>

Bounds for the itinerary item

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">excludeDescendants</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>place</strong></td>
<td valign="top"><a href="#place">Place</a>!</td>
<td>

The place details of this location

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>position</strong></td>
<td valign="top"><a href="#position">Position</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>geoJson</strong></td>
<td valign="top"><a href="#json">JSON</a>!</td>
<td>

The representation of a location, as a GeoJSON FeatureCollection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>optional</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Whether the location is an optional stop

</td>
</tr>
</tbody>
</table>

### Media

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>resource</strong></td>
<td valign="top"><a href="#mediaresource">MediaResource</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### MediaImage

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

Unique identifier for the media

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>profile</strong></td>
<td valign="top"><a href="#profile">Profile</a></td>
<td>

The associated profile owner

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>provider</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The provider for the media

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>caption</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attribution</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>copyright</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>altText</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

A series of strings representing applied labels to the media

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attr</strong></td>
<td valign="top"><a href="#attribute">Attribute</a></td>
<td>

Arbitrary JSON value stored on this resource, keyed by an id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrValue</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>

Shortcut for the attr.value, returns null if the attribute doesn't exist

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrs</strong></td>
<td valign="top">[<a href="#attribute">Attribute</a>!]!</td>
<td>

Query multiple attributes by id and optionally locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">attrs</td>
<td valign="top">[<a href="#attributeidentifierinput">AttributeIdentifierInput</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>allAttrs</strong></td>
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Return all attributes on the resource

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrsById</strong></td>
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Query multiple attributes with the same id and optionally locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>originalSize</strong></td>
<td valign="top">[<a href="#int">Int</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Provides the URL of the media

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The specific source key to obtain the URL

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">bestFit</td>
<td valign="top">[<a href="#int">Int</a>!]</td>
<td>

The dimensions as [width,height] to identify a preffered source for the media

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>source</strong></td>
<td valign="top"><a href="#mediaimagesource">MediaImageSource</a></td>
<td>

Provides a specific source for the media, based often on different encoding or different sizing

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The specific source key to obtain the URL

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">bestFit</td>
<td valign="top">[<a href="#int">Int</a>!]</td>
<td>

The dimensions as [width,height] to identify a preffered source for the media

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sources</strong></td>
<td valign="top">[<a href="#mediaimagesource">MediaImageSource</a>!]!</td>
<td>

A collection of sources for the media

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>exifIds</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>exif</strong></td>
<td valign="top"><a href="#mediaimageexif">MediaImageExif</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### MediaImageExif

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#json">JSON</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### MediaImageSource

An source for a media image

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The content-type of the media source

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A optional key available to consistently identify an available source

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The URL to the media source

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>width</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

The width of the media

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>height</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

The height of the media

</td>
</tr>
</tbody>
</table>

### MoveItineraryItemPayload

Moves the itinerary item

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>item</strong></td>
<td valign="top"><a href="#itineraryitem">ItineraryItem</a></td>
<td>

The fields for the item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>itinerary</strong></td>
<td valign="top"><a href="#itinerary">Itinerary</a>!</td>
<td>

The modified itinerary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cascaded</strong></td>
<td valign="top"><a href="#itineraryitemcascadedchanges">ItineraryItemCascadedChanges</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### PageInfo

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>hasPreviousPage</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hasNextPage</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startCursor</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>endCursor</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### Place

A defined location in the world

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

Unique identifier for the place

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The name of the place

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for title. (Prefer title instead)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>synopsis</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A short summary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A longer description

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

A collection of strings used to label this place

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address</strong></td>
<td valign="top"><a href="#placeaddress">PlaceAddress</a>!</td>
<td>

The address of the place

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>position</strong></td>
<td valign="top"><a href="#position">Position</a>!</td>
<td>

The position of the place

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bounds</strong></td>
<td valign="top"><a href="#bounds">Bounds</a></td>
<td>

The bounding box around the place

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hours</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The operating hours for this place, as encoded in OpenStreetMap hours specification

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>maki</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>contributor</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Source of the place data

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attr</strong></td>
<td valign="top"><a href="#attribute">Attribute</a></td>
<td>

Arbitrary JSON value stored on this resource, keyed by an id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrValue</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>

Shortcut for the attr.value, returns null if the attribute doesn't exist

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrs</strong></td>
<td valign="top">[<a href="#attribute">Attribute</a>!]!</td>
<td>

Query multiple attributes by id and optionally locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">attrs</td>
<td valign="top">[<a href="#attributeidentifierinput">AttributeIdentifierInput</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>allAttrs</strong></td>
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Return all attributes on the resource

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrsById</strong></td>
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Query multiple attributes with the same id and optionally locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attribution</strong></td>
<td valign="top"><a href="#placeattribution">PlaceAttribution</a>!</td>
<td>

The required attribution required when using this place information

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>contact</strong></td>
<td valign="top"><a href="#placecontact">PlaceContact</a>!</td>
<td>

Contact information supplied for this place

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>layers</strong></td>
<td valign="top">[<a href="#placelayer">PlaceLayer</a>!]!</td>
<td>

Layers associated to this place

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>media</strong></td>
<td valign="top">[<a href="#media">Media</a>!]!</td>
<td>

Media supplied with the place information, such as images of the places

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>preferredMedia</strong></td>
<td valign="top"><a href="#media">Media</a></td>
<td>

A single Media object representing the preferred media to use

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>navigationUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">provider</td>
<td valign="top"><a href="#placenavigationurlprovider">PlaceNavigationUrlProvider</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>towards</strong></td>
<td valign="top">[<a href="#placetowards">PlaceTowards</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">positions</td>
<td valign="top">[<a href="#positioninput">PositionInput</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### PlaceAddress

The address data of a place

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>addressLineOne</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addressLineThree</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addressLineTwo</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>administrativeGroup</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>area</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>country</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>countryCode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>crossStreet</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>locality</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>postalCode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>region</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>regionCode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### PlaceAttribution

Describes the attribution requirements associated with the place.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>text</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Text Attribution required for this place

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>link</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A link required for this place

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>license</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Specific licensing information for this place if known

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pixel</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The required tracking pixel

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>media</strong></td>
<td valign="top"><a href="#media">Media</a></td>
<td>

Any media to be used in attribution, such as watermarks

</td>
</tr>
</tbody>
</table>

### PlaceConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#placeedge">PlaceEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#place">Place</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### PlaceContact

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>phoneNumber</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>emailAddress</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bookingsUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>facebookUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>twitterUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>instagramUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### PlaceEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#place">Place</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>single</strong></td>
<td valign="top"><a href="#searchresult">SearchResult</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>main</strong></td>
<td valign="top"><a href="#searchresult">SearchResult</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>secondary</strong></td>
<td valign="top"><a href="#searchresult">SearchResult</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### PlaceLayer

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### PlaceTowards

Place bearing and distance information towards point

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>position</strong></td>
<td valign="top"><a href="#position">Position</a>!</td>
<td>

The point current place towards at

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bearing</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">unit</td>
<td valign="top"><a href="#angleunit">AngleUnit</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>distance</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">unit</td>
<td valign="top"><a href="#distanceunit">DistanceUnit</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>compass</strong></td>
<td valign="top"><a href="#compasspoint">CompassPoint</a>!</td>
<td>

Compass point towards given point

</td>
</tr>
</tbody>
</table>

### Position

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>lonLat</strong></td>
<td valign="top">[<a href="#float">Float</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>latLon</strong></td>
<td valign="top">[<a href="#float">Float</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lat</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lon</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Profile

Profile

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The Globally Unique ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The name of the profile

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The type of the profile

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requireFollowApprove</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Indicates if follows on this profile require manual approval

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>username</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The username

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bio</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A short biography

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The Website URL

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>followers</strong></td>
<td valign="top"><a href="#profileconnection">ProfileConnection</a>!</td>
<td>

Profiles that follow this profile

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">status</td>
<td valign="top"><a href="#profilefollowstatus">ProfileFollowStatus</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">username</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>following</strong></td>
<td valign="top"><a href="#profileconnection">ProfileConnection</a>!</td>
<td>

Profiles that this profile follows

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">status</td>
<td valign="top"><a href="#profilefollowstatus">ProfileFollowStatus</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">username</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### ProfileConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#profileedge">ProfileEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#profile">Profile</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### ProfileEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#profile">Profile</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### PublishItineraryPayload

The published itinerary

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>itinerary</strong></td>
<td valign="top"><a href="#itinerary">Itinerary</a></td>
<td></td>
</tr>
</tbody>
</table>

### Request

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#profilefollowstatus">ProfileFollowStatus</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Route

The representation of a route path taken

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>segments</strong></td>
<td valign="top">[<a href="#routesegment">RouteSegment</a>!]!</td>
<td>

The segments of this route

</td>
</tr>
</tbody>
</table>

### RouteConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#routeedge">RouteEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#route">Route</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### RouteEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#route">Route</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### RouteSegment

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

WARNING: this ID is unstable, modifying the route might change the ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mode</strong></td>
<td valign="top"><a href="#routemode">RouteMode</a>!</td>
<td>

The mode of transport to be taken. eg: car, walk, kayak, etc

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positions</strong></td>
<td valign="top">[<a href="#position">Position</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>useRouteSearching</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>geoJson</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>

The representation of this path as encoded as geojson FeatureCollection type

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">simplify</td>
<td valign="top"><a href="#geojsonsimplification">GeoJsonSimplification</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>duration</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

The estimated duration for this path

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">unit</td>
<td valign="top"><a href="#durationunit">DurationUnit</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>distance</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

The estimated distance for this path

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">unit</td>
<td valign="top"><a href="#distanceunit">DistanceUnit</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>polyline</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The path representation as encoded as a polyline format

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">simplify</td>
<td valign="top"><a href="#geojsonsimplification">GeoJsonSimplification</a></td>
<td></td>
</tr>
</tbody>
</table>

### SearchResult

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>label</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>matches</strong></td>
<td valign="top">[<a href="#searchresultmatch">SearchResultMatch</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### SearchResultMatch

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>offset</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>length</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### StartMediaUploadPayload

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>token</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The upload token, required when finalising the upload

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The url to upload media to (via HTTP POST)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>fields</strong></td>
<td valign="top"><a href="#json">JSON</a>!</td>
<td>

Data to pass with the upload

</td>
</tr>
</tbody>
</table>

### UpdateCollectionLocationPayload

The fields available after the collection location has been updated

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>location</strong></td>
<td valign="top"><a href="#collectionlocation">CollectionLocation</a></td>
<td>

The collection location that was updated

</td>
</tr>
</tbody>
</table>

### UpdateCollectionPayload

The available fields after updating a collection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>collection</strong></td>
<td valign="top"><a href="#collection">Collection</a></td>
<td>

The updated collection

</td>
</tr>
</tbody>
</table>

### UpdateItineraryCollectionPayload

The fields available after updating the itinerary collection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>collection</strong></td>
<td valign="top"><a href="#itinerarycollection">ItineraryCollection</a></td>
<td>

The itinerary collection that was created

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>itinerary</strong></td>
<td valign="top"><a href="#itinerary">Itinerary</a>!</td>
<td>

The modified itinerary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cascaded</strong></td>
<td valign="top"><a href="#itineraryitemcascadedchanges">ItineraryItemCascadedChanges</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### UpdateItineraryDirectionsPayload

The fields available after updating the itinerary directions item

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>directions</strong></td>
<td valign="top"><a href="#itinerarydirections">ItineraryDirections</a></td>
<td>

The updated itinerary directions item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>itinerary</strong></td>
<td valign="top"><a href="#itinerary">Itinerary</a>!</td>
<td>

The modified itinerary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cascaded</strong></td>
<td valign="top"><a href="#itineraryitemcascadedchanges">ItineraryItemCascadedChanges</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### UpdateItineraryLocationPayload

The fields available after updating a location

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>location</strong></td>
<td valign="top"><a href="#itinerarylocation">ItineraryLocation</a></td>
<td>

The updated itinerary location

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>itinerary</strong></td>
<td valign="top"><a href="#itinerary">Itinerary</a>!</td>
<td>

The modified itinerary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cascaded</strong></td>
<td valign="top"><a href="#itineraryitemcascadedchanges">ItineraryItemCascadedChanges</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### UpdateItineraryPayload

The available fields after updating a itinerary

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>itinerary</strong></td>
<td valign="top"><a href="#itinerary">Itinerary</a></td>
<td>

The updated itinerary

</td>
</tr>
</tbody>
</table>

### UpdateMediaResourcePayload

The updated media resource after the action

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>resource</strong></td>
<td valign="top"><a href="#mediaresource">MediaResource</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### UpdateProfilePayload

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>profile</strong></td>
<td valign="top"><a href="#profile">Profile</a></td>
<td></td>
</tr>
</tbody>
</table>

## Inputs

### AttributeIdentifierInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>locale</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### AttributeInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#json">JSON</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>meta</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>locale</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### BoundsCircleInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>position</strong></td>
<td valign="top"><a href="#positioninput">PositionInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>radius</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### BoundsInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>n</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>e</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>s</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>w</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### CreateCollectionInput

Creates a collection

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>discriminator</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>synopsis</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrs</strong></td>
<td valign="top">[<a href="#attributeinput">AttributeInput</a>!]</td>
<td></td>
</tr>
</tbody>
</table>

### CreateCollectionLocationInput

The input to create a collection location

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Title for this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>synopsis</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A short summary text content for this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A longer description content for this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td>

A collection of strings used to label this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrs</strong></td>
<td valign="top">[<a href="#attributeinput">AttributeInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>place</strong></td>
<td valign="top"><a href="#placeinput">PlaceInput</a>!</td>
<td>

The associated place record for this location

</td>
</tr>
</tbody>
</table>

### CreateItineraryCollectionInput

Creates an itinerary item collection type

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The title for the itinerary item collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>synopsis</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrs</strong></td>
<td valign="top">[<a href="#attributeinput">AttributeInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionAtStart</strong></td>
<td valign="top"><a href="#itineraryitempositionatstart">ItineraryItemPositionAtStart</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionAtEnd</strong></td>
<td valign="top"><a href="#itineraryitempositionatend">ItineraryItemPositionAtEnd</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionAfterSibling</strong></td>
<td valign="top"><a href="#itineraryitempositionaftersibling">ItineraryItemPositionAfterSibling</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionBeforeSibling</strong></td>
<td valign="top"><a href="#itineraryitempositionbeforesibling">ItineraryItemPositionBeforeSibling</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionOnLastCollection</strong></td>
<td valign="top"><a href="#itineraryitempositiononlastcollection">ItineraryItemPositionOnLastCollection</a></td>
<td></td>
</tr>
</tbody>
</table>

### CreateItineraryDirectionsInput

The input fields to creating new itinerary directions items

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The title

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>synopsis</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrs</strong></td>
<td valign="top">[<a href="#attributeinput">AttributeInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>originId</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The origin itinerary location item, in the form of item/XYZ

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>route</strong></td>
<td valign="top"><a href="#routeinput">RouteInput</a>!</td>
<td>

The route of this item, must include at least one route segment

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>durations</strong></td>
<td valign="top">[<a href="#itinerarydirectionsdurationsinput">ItineraryDirectionsDurationsInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>distance</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>elevation</strong></td>
<td valign="top"><a href="#elevationinput">ElevationInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionAtStart</strong></td>
<td valign="top"><a href="#itineraryitempositionatstart">ItineraryItemPositionAtStart</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionAtEnd</strong></td>
<td valign="top"><a href="#itineraryitempositionatend">ItineraryItemPositionAtEnd</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionAfterSibling</strong></td>
<td valign="top"><a href="#itineraryitempositionaftersibling">ItineraryItemPositionAfterSibling</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionBeforeSibling</strong></td>
<td valign="top"><a href="#itineraryitempositionbeforesibling">ItineraryItemPositionBeforeSibling</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionOnLastCollection</strong></td>
<td valign="top"><a href="#itineraryitempositiononlastcollection">ItineraryItemPositionOnLastCollection</a></td>
<td></td>
</tr>
</tbody>
</table>

### CreateItineraryInput

Creates a itinerary

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The title for the itinerary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>synopsis</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrs</strong></td>
<td valign="top">[<a href="#attributeinput">AttributeInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>autoRoute</strong></td>
<td valign="top"><a href="#itineraryautorouteinput">ItineraryAutoRouteInput</a></td>
<td>

Enable auto routing, or set to null to disable

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>elevation</strong></td>
<td valign="top"><a href="#elevationinput">ElevationInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### CreateItineraryLocationInput

The fields to create an itinerary location

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The title

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>synopsis</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrs</strong></td>
<td valign="top">[<a href="#attributeinput">AttributeInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>position</strong></td>
<td valign="top"><a href="#positioninput">PositionInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>place</strong></td>
<td valign="top"><a href="#placeinput">PlaceInput</a>!</td>
<td>

The place information

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>optional</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether this is an optional location on the itinerary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionAtStart</strong></td>
<td valign="top"><a href="#itineraryitempositionatstart">ItineraryItemPositionAtStart</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionAtEnd</strong></td>
<td valign="top"><a href="#itineraryitempositionatend">ItineraryItemPositionAtEnd</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionAfterSibling</strong></td>
<td valign="top"><a href="#itineraryitempositionaftersibling">ItineraryItemPositionAfterSibling</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionBeforeSibling</strong></td>
<td valign="top"><a href="#itineraryitempositionbeforesibling">ItineraryItemPositionBeforeSibling</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionOnLastCollection</strong></td>
<td valign="top"><a href="#itineraryitempositiononlastcollection">ItineraryItemPositionOnLastCollection</a></td>
<td></td>
</tr>
</tbody>
</table>

### CreateMediaResourceInput

Uploads a media resource

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attribution</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>caption</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>copyright</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrs</strong></td>
<td valign="top">[<a href="#attributeinput">AttributeInput</a>!]</td>
<td></td>
</tr>
</tbody>
</table>

### ElevationInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>gain</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>loss</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
</tbody>
</table>

### GeoJsonSimplification

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>ramerDouglasPeucker</strong></td>
<td valign="top"><a href="#geojsonsimplificationramerdouglaspeucker">GeoJsonSimplificationRamerDouglasPeucker</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### GeoJsonSimplificationRamerDouglasPeucker

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>tolerance</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>highQuality</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
</tbody>
</table>

### ItineraryAutoRouteInput

Automatically generate ItineraryDirections that connect sibling ItineraryLocations

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>defaultMode</strong></td>
<td valign="top"><a href="#routemode">RouteMode</a></td>
<td>

The default mode of transport to use for the generated ItineraryDirections, if excluded defaults to Car

</td>
</tr>
</tbody>
</table>

### ItineraryDirectionsDurationsInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>duration</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>label</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### ItineraryItemPositionAfterSibling

Positions the item after a sibling

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>siblingId</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The sibling itinerary item identifier, in the form of item/XYZ

</td>
</tr>
</tbody>
</table>

### ItineraryItemPositionAtEnd

Positions the item at the end position of its siblings

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>parentId</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The parent itinerary item identifier, in the form of item/XYZ

</td>
</tr>
</tbody>
</table>

### ItineraryItemPositionAtStart

Positions the item at the start position of its siblings

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>parentId</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The parent itinerary item identifier, in the form of item/XYZ

</td>
</tr>
</tbody>
</table>

### ItineraryItemPositionBeforeSibling

Positions the item before a sibling

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>siblingId</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The sibling itinerary item identifier, in the form of item/XYZ

</td>
</tr>
</tbody>
</table>

### ItineraryItemPositionOnLastCollection

Positions the itinerary item to the last position of the last itinerary collection item

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>searchUnder</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The itinerary item identifier to limit descendent searching withing

</td>
</tr>
</tbody>
</table>

### PlaceInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>position</strong></td>
<td valign="top"><a href="#positioninput">PositionInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### PositionInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>lon</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lat</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### RouteInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>segments</strong></td>
<td valign="top">[<a href="#routesegmentinput">RouteSegmentInput</a>!]!</td>
<td>

The segments of this route

</td>
</tr>
</tbody>
</table>

### RouteSegmentInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>mode</strong></td>
<td valign="top"><a href="#routemode">RouteMode</a></td>
<td>

The mode of transport to be taken on this segment, defaults to Car

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positions</strong></td>
<td valign="top">[<a href="#positioninput">PositionInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>useRouteSearching</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether to plan out a route using the positions. Defaults to true if the mode is searchable and otherwise will be set to false

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>distance</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>duration</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
</tbody>
</table>

### UpdateCollectionInput

Updates a collection

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The title for the collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>synopsis</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>upsertAttrs</strong></td>
<td valign="top">[<a href="#attributeinput">AttributeInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteAttrs</strong></td>
<td valign="top">[<a href="#attributeidentifierinput">AttributeIdentifierInput</a>!]</td>
<td></td>
</tr>
</tbody>
</table>

### UpdateCollectionLocationInput

The fields for the collection location to update

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Title for this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>synopsis</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A longer description content for this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A longer description content for this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td>

A collection of strings used to label this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>place</strong></td>
<td valign="top"><a href="#placeinput">PlaceInput</a></td>
<td>

The associated place information for this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>upsertAttrs</strong></td>
<td valign="top">[<a href="#attributeinput">AttributeInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteAttrs</strong></td>
<td valign="top">[<a href="#attributeidentifierinput">AttributeIdentifierInput</a>!]</td>
<td></td>
</tr>
</tbody>
</table>

### UpdateItineraryCollectionInput

The intinerary collection fields to update

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The title for the itinerary collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>synopsis</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>upsertAttrs</strong></td>
<td valign="top">[<a href="#attributeinput">AttributeInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteAttrs</strong></td>
<td valign="top">[<a href="#attributeidentifierinput">AttributeIdentifierInput</a>!]</td>
<td></td>
</tr>
</tbody>
</table>

### UpdateItineraryDirectionsInput

The input fields to update the itinerary directions

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The title for the itinerary directions

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>synopsis</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>upsertAttrs</strong></td>
<td valign="top">[<a href="#attributeinput">AttributeInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteAttrs</strong></td>
<td valign="top">[<a href="#attributeidentifierinput">AttributeIdentifierInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>originId</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The origin/starting itinerary location item, in the form of item/XYZ

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>route</strong></td>
<td valign="top"><a href="#routeinput">RouteInput</a></td>
<td>

The route of this item, must include at least one route segment

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>distance</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>durations</strong></td>
<td valign="top">[<a href="#itinerarydirectionsdurationsinput">ItineraryDirectionsDurationsInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>elevation</strong></td>
<td valign="top"><a href="#elevationinput">ElevationInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### UpdateItineraryInput

Updates a itinerary

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The title for the itinerary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>synopsis</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>upsertAttrs</strong></td>
<td valign="top">[<a href="#attributeinput">AttributeInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteAttrs</strong></td>
<td valign="top">[<a href="#attributeidentifierinput">AttributeIdentifierInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>autoRoute</strong></td>
<td valign="top"><a href="#itineraryautorouteinput">ItineraryAutoRouteInput</a></td>
<td>

Enable auto routing, or set to null to disable

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>elevation</strong></td>
<td valign="top"><a href="#elevationinput">ElevationInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### UpdateItineraryLocationInput

The fields to update on an itinerary location

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The title

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>synopsis</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>upsertAttrs</strong></td>
<td valign="top">[<a href="#attributeinput">AttributeInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteAttrs</strong></td>
<td valign="top">[<a href="#attributeidentifierinput">AttributeIdentifierInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>position</strong></td>
<td valign="top"><a href="#positioninput">PositionInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>place</strong></td>
<td valign="top"><a href="#placeinput">PlaceInput</a></td>
<td>

The place information

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>optional</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether the location specified is optional on the itinerary

</td>
</tr>
</tbody>
</table>

### UpdateMediaResourceInput

Updates a media resource

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attribution</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>caption</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>copyright</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>upsertAttrs</strong></td>
<td valign="top">[<a href="#attributeinput">AttributeInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteAttrs</strong></td>
<td valign="top">[<a href="#attributeidentifierinput">AttributeIdentifierInput</a>!]</td>
<td></td>
</tr>
</tbody>
</table>

### UpdateProfileInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bio</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requireFollowApprove</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
</tbody>
</table>

## Enums

### AngleUnit

Angle unit

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>Degrees</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Radians</strong></td>
<td></td>
</tr>
</tbody>
</table>

### CompassPoint

Points on the compass rose

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>N</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>E</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>S</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SW</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>W</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NW</strong></td>
<td></td>
</tr>
</tbody>
</table>

### DistanceUnit

Distance unit

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>Kilometers</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Feet</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Miles</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Meters</strong></td>
<td></td>
</tr>
</tbody>
</table>

### DurationUnit

Duration unit

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>Seconds</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Minutes</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Hours</strong></td>
<td></td>
</tr>
</tbody>
</table>

### IsochroneMode

Mode of transport for an isochrone

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>Car</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Bike</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Foot</strong></td>
<td></td>
</tr>
</tbody>
</table>

### ItineraryItemType

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ItineraryCollection</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ItineraryLocation</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ItineraryDirections</strong></td>
<td></td>
</tr>
</tbody>
</table>

### MediaUploadStatus

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>AwaitingUpload</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Processing</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Complete</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ProcessingFailed</strong></td>
<td></td>
</tr>
</tbody>
</table>

### PlaceNavigationUrlProvider

Navigation service provider

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>Google</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Apple</strong></td>
<td></td>
</tr>
</tbody>
</table>

### PlaceSearchSource

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>OpenStreetMap</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Facebook</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>OpenAddresses</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Geonames</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Yelp</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>AustralianTourismDataWarehouse</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Zomato</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TripAdvisor</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>WhosOnFirst</strong></td>
<td></td>
</tr>
</tbody>
</table>

### ProfileFollowStatus

Profile follow status

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>Pending</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Approved</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Denied</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Cancelled</strong></td>
<td></td>
</tr>
</tbody>
</table>

### ProfileFollowStatusAction

Profile follow status action

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>Approve</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Deny</strong></td>
<td></td>
</tr>
</tbody>
</table>

### RouteMode

Modes of transport

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>Bike</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Boat</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Bus</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Car</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Cruise</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DogSled</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Foot</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Hike</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Kayak</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Motorcycle</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MountainBike</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Plane</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Train</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Transit</strong></td>
<td></td>
</tr>
</tbody>
</table>

### RouteSearchableMode

Subset of RouteModes supporting route search

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>Bike</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Bus</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Car</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Foot</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Hike</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Motorcycle</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MountainBike</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Transit</strong></td>
<td></td>
</tr>
</tbody>
</table>

## Scalars

### Boolean

The `Boolean` scalar type represents `true` or `false`.

### Float

The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).

### ID

The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.

### Int

The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.

### JSON

The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).

### String

The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.


## Interfaces


### CollectionItem

A collection item contains data about a single entity and is assigned within a collection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The unique identifier, taking the shape of item/XYZ

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>profile</strong></td>
<td valign="top"><a href="#profile">Profile</a>!</td>
<td>

The associated profile owner

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>created</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The date when the collection-item was created

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>modified</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The date when the collection-item was last modified

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The supplied title

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>synopsis</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A short text summary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A longer text description

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

A series of strings applied to label this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>media</strong></td>
<td valign="top">[<a href="#media">Media</a>!]!</td>
<td>

A collection of Media objects representing images or other media

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>preferredMedia</strong></td>
<td valign="top"><a href="#media">Media</a></td>
<td>

A single Media object representing the preferred media to use

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attr</strong></td>
<td valign="top"><a href="#attribute">Attribute</a></td>
<td>

Arbitrary JSON value stored on this resource, keyed by an id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrValue</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>

Shortcut for the attr.value, returns null if the attribute doesn't exist

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrs</strong></td>
<td valign="top">[<a href="#attribute">Attribute</a>!]!</td>
<td>

Query multiple attributes by id and optionally locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">attrs</td>
<td valign="top">[<a href="#attributeidentifierinput">AttributeIdentifierInput</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>allAttrs</strong></td>
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Return all attributes on the resource

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrsById</strong></td>
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Query multiple attributes with the same id and optionally locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select

</td>
</tr>
</tbody>
</table>

### ItineraryItem

An item in an itinerary as part of the tree

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The supplied title

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>synopsis</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A short text summary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A longer text description

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

A series of strings applied to label this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>media</strong></td>
<td valign="top">[<a href="#media">Media</a>!]!</td>
<td>

A collection of Media objects representing images or other media

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>preferredMedia</strong></td>
<td valign="top"><a href="#media">Media</a></td>
<td>

A single Media object representing the preferred media to use

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>itinerary</strong></td>
<td valign="top"><a href="#itinerary">Itinerary</a>!</td>
<td>

The itinerary this item belongs to

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>before</strong></td>
<td valign="top"><a href="#itineraryitem">ItineraryItem</a></td>
<td>

The sibling item that comes before this item

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by item type
eg: "ItineraryCollection"

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">parentType</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by type of the item's parent
eg: "ItineraryCollection"


</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">placeIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>


Optionally look for items that contain any of the given places
Only looks at the place field on ItineraryLocations


</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>after</strong></td>
<td valign="top"><a href="#itineraryitem">ItineraryItem</a></td>
<td>

The sibling item that comes after this item

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by item type
eg: "ItineraryCollection"

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">parentType</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by type of the item's parent
eg: "ItineraryCollection"


</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">placeIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>


Optionally look for items that contain any of the given places
Only looks at the place field on ItineraryLocations


</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>parent</strong></td>
<td valign="top"><a href="#itineraryitem">ItineraryItem</a></td>
<td>

The parent item of this item

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by item type
eg: "ItineraryCollection"

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">parentType</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by type of the item's parent
eg: "ItineraryCollection"


</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">placeIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>


Optionally look for items that contain any of the given places
Only looks at the place field on ItineraryLocations


</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ancestors</strong></td>
<td valign="top"><a href="#itineraryitemconnection">ItineraryItemConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by item type
eg: "ItineraryCollection"

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">parentType</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by type of the item's parent
eg: "ItineraryCollection"


</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">placeIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>


Optionally look for items that contain any of the given places
Only looks at the place field on ItineraryLocations


</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>descendants</strong></td>
<td valign="top"><a href="#itineraryitemconnection">ItineraryItemConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by item type
eg: "ItineraryCollection"

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">parentType</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by type of the item's parent
eg: "ItineraryCollection"


</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">placeIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>


Optionally look for items that contain any of the given places
Only looks at the place field on ItineraryLocations


</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">depthMax</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Optionally limit the maximum depth of the traversal

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">depthMin</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Optionally limit the minimum depth of the traversal

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>children</strong></td>
<td valign="top"><a href="#itineraryitemconnection">ItineraryItemConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by item type
eg: "ItineraryCollection"

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">parentType</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>


Optionally filter by type of the item's parent
eg: "ItineraryCollection"


</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">placeIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>


Optionally look for items that contain any of the given places
Only looks at the place field on ItineraryLocations


</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attr</strong></td>
<td valign="top"><a href="#attribute">Attribute</a></td>
<td>

Arbitrary JSON value stored on this resource, keyed by an id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrValue</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>

Shortcut for the attr.value, returns null if the attribute doesn't exist

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrs</strong></td>
<td valign="top">[<a href="#attribute">Attribute</a>!]!</td>
<td>

Query multiple attributes by id and optionally locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">attrs</td>
<td valign="top">[<a href="#attributeidentifierinput">AttributeIdentifierInput</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrsById</strong></td>
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Query multiple attributes with the same id and optionally locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>allAttrs</strong></td>
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Return all attributes on the resource

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bounds</strong></td>
<td valign="top"><a href="#bounds">Bounds</a></td>
<td>

Bounds for the itinerary item

</td>
</tr>
</tbody>
</table>

### MediaResource

Representing media such as images/photos as well as other types such as video or audio

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

Unique identifier for the media

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>profile</strong></td>
<td valign="top"><a href="#profile">Profile</a></td>
<td>

The associated profile owner

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>provider</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The provider for the media

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>caption</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attribution</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>copyright</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>altText</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

A series of strings representing applied labels to the media

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attr</strong></td>
<td valign="top"><a href="#attribute">Attribute</a></td>
<td>

Arbitrary JSON value stored on this resource, keyed by an id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrValue</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>

Shortcut for the attr.value, returns null if the attribute doesn't exist

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrs</strong></td>
<td valign="top">[<a href="#attribute">Attribute</a>!]!</td>
<td>

Query multiple attributes by id and optionally locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">attrs</td>
<td valign="top">[<a href="#attributeidentifierinput">AttributeIdentifierInput</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>allAttrs</strong></td>
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Return all attributes on the resource

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrsById</strong></td>
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Query multiple attributes with the same id and optionally locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select

</td>
</tr>
</tbody>
</table>

### Node

An object with a Globally Unique ID

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The Globally Unique ID of the object.

</td>
</tr>
</tbody>
</table>
