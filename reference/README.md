# Schema Types

<details>
  <summary><strong>Table of Contents</strong></summary>

  * [Query](#query)
  * [Mutation](#mutation)
  * [Objects](#objects)
    * [ApproveProfileFollowPayload](#approveprofilefollowpayload)
    * [Attribute](#attribute)
    * [AttributeConnection](#attributeconnection)
    * [AttributeEdge](#attributeedge)
    * [BillingAddress](#billingaddress)
    * [BillingDetails](#billingdetails)
    * [BillingPlan](#billingplan)
    * [BillingPrice](#billingprice)
    * [BillingPriceConnection](#billingpriceconnection)
    * [BillingPriceEdge](#billingpriceedge)
    * [BillingPriceRecurring](#billingpricerecurring)
    * [BillingProduct](#billingproduct)
    * [BillingSubscription](#billingsubscription)
    * [BillingSubscriptionConnection](#billingsubscriptionconnection)
    * [BillingSubscriptionEdge](#billingsubscriptionedge)
    * [Bounds](#bounds)
    * [CaptureMarketingInformationPayload](#capturemarketinginformationpayload)
    * [ChangeItineraryDefaultLocalePayload](#changeitinerarydefaultlocalepayload)
    * [ClaimProfileHandlePayload](#claimprofilehandlepayload)
    * [Collection](#collection)
    * [CollectionConnection](#collectionconnection)
    * [CollectionEdge](#collectionedge)
    * [CollectionItemConnection](#collectionitemconnection)
    * [CollectionItemEdge](#collectionitemedge)
    * [CollectionItemFailedToLoad](#collectionitemfailedtoload)
    * [CollectionLocation](#collectionlocation)
    * [ConnectedApp](#connectedapp)
    * [ConnectedAppConnection](#connectedappconnection)
    * [ConnectedAppEdge](#connectedappedge)
    * [CreateBillingCheckoutSessionOutput](#createbillingcheckoutsessionoutput)
    * [CreateBillingPortalSessionOutput](#createbillingportalsessionoutput)
    * [CreateCollectionLocationPayload](#createcollectionlocationpayload)
    * [CreateCollectionPayload](#createcollectionpayload)
    * [CreateConnectedAppPayload](#createconnectedapppayload)
    * [CreateIconSilhouettePayload](#createiconsilhouettepayload)
    * [CreateItineraryCollectionPayload](#createitinerarycollectionpayload)
    * [CreateItineraryDirectionsPayload](#createitinerarydirectionspayload)
    * [CreateItineraryLocationPayload](#createitinerarylocationpayload)
    * [CreateItineraryPayload](#createitinerarypayload)
    * [CreateProfilePayload](#createprofilepayload)
    * [CreateUserAgreementPayload](#createuseragreementpayload)
    * [DeleteCollectionItemPayload](#deletecollectionitempayload)
    * [DeleteCollectionPayload](#deletecollectionpayload)
    * [DeleteConnectedAppPayload](#deleteconnectedapppayload)
    * [DeleteIconResourcePayload](#deleteiconresourcepayload)
    * [DeleteItineraryItemPayload](#deleteitineraryitempayload)
    * [DeleteItineraryPayload](#deleteitinerarypayload)
    * [DeleteProfilePayload](#deleteprofilepayload)
    * [DenyProfileFollowPayload](#denyprofilefollowpayload)
    * [DuplicateItineraryPayload](#duplicateitinerarypayload)
    * [Elevation](#elevation)
    * [FinalizeMediaUploadPayload](#finalizemediauploadpayload)
    * [FollowProfilePayload](#followprofilepayload)
    * [IconComposition](#iconcomposition)
    * [IconCompositionConnection](#iconcompositionconnection)
    * [IconCompositionEdge](#iconcompositionedge)
    * [IconResourceConnection](#iconresourceconnection)
    * [IconResourceEdge](#iconresourceedge)
    * [IconResourceFailedToLoad](#iconresourcefailedtoload)
    * [IconSilhouette](#iconsilhouette)
    * [Isochrone](#isochrone)
    * [Itinerary](#itinerary)
    * [ItineraryAutoRoute](#itineraryautoroute)
    * [ItineraryCollection](#itinerarycollection)
    * [ItineraryDirections](#itinerarydirections)
    * [ItineraryDirectionsConnection](#itinerarydirectionsconnection)
    * [ItineraryDirectionsDurations](#itinerarydirectionsdurations)
    * [ItineraryDirectionsEdge](#itinerarydirectionsedge)
    * [ItineraryItemCascadedChanges](#itineraryitemcascadedchanges)
    * [ItineraryItemConnection](#itineraryitemconnection)
    * [ItineraryItemEdge](#itineraryitemedge)
    * [ItineraryLocation](#itinerarylocation)
    * [ItinerarySearchConnection](#itinerarysearchconnection)
    * [ItinerarySearchEdge](#itinerarysearchedge)
    * [ItinerarySearchNode](#itinerarysearchnode)
    * [MediaContainer](#mediacontainer)
    * [MediaContainerConnection](#mediacontainerconnection)
    * [MediaContainerEdge](#mediacontaineredge)
    * [MediaImage](#mediaimage)
    * [MediaImageExif](#mediaimageexif)
    * [MediaImageSource](#mediaimagesource)
    * [MediaResourceFailedToLoad](#mediaresourcefailedtoload)
    * [MoveItineraryItemPayload](#moveitineraryitempayload)
    * [PageInfo](#pageinfo)
    * [Place](#place)
    * [PlaceAddress](#placeaddress)
    * [PlaceAttribution](#placeattribution)
    * [PlaceContact](#placecontact)
    * [PlaceHours](#placehours)
    * [PlaceHoursForDay](#placehoursforday)
    * [PlaceHoursInterval](#placehoursinterval)
    * [PlaceHoursIntervalConnection](#placehoursintervalconnection)
    * [PlaceHoursIntervalEdge](#placehoursintervaledge)
    * [PlaceHoursIntervalHoliday](#placehoursintervalholiday)
    * [PlaceLayer](#placelayer)
    * [PlaceSearchConnection](#placesearchconnection)
    * [PlaceSearchEdge](#placesearchedge)
    * [PlaceSearchNode](#placesearchnode)
    * [PlaceTowards](#placetowards)
    * [Position](#position)
    * [Profile](#profile)
    * [ProfileConnection](#profileconnection)
    * [ProfileEdge](#profileedge)
    * [ProfileFollowConnection](#profilefollowconnection)
    * [ProfileFollowEdge](#profilefollowedge)
    * [PublishItineraryPayload](#publishitinerarypayload)
    * [ResolutionError](#resolutionerror)
    * [RevertItineraryPayload](#revertitinerarypayload)
    * [Route](#route)
    * [RouteConnection](#routeconnection)
    * [RouteEdge](#routeedge)
    * [RouteSegment](#routesegment)
    * [StartMediaUploadPayload](#startmediauploadpayload)
    * [TextSearchResult](#textsearchresult)
    * [TextSearchResultMatch](#textsearchresultmatch)
    * [UnfollowProfilePayload](#unfollowprofilepayload)
    * [UpdateBillingDetailsOutput](#updatebillingdetailsoutput)
    * [UpdateCollectionLocationPayload](#updatecollectionlocationpayload)
    * [UpdateCollectionPayload](#updatecollectionpayload)
    * [UpdateConnectedAppPayload](#updateconnectedapppayload)
    * [UpdateIconSilhouettePayload](#updateiconsilhouettepayload)
    * [UpdateItineraryCollectionPayload](#updateitinerarycollectionpayload)
    * [UpdateItineraryDirectionsPayload](#updateitinerarydirectionspayload)
    * [UpdateItineraryLocationPayload](#updateitinerarylocationpayload)
    * [UpdateItineraryPayload](#updateitinerarypayload)
    * [UpdateMediaResourcePayload](#updatemediaresourcepayload)
    * [UpdateProfilePayload](#updateprofilepayload)
    * [UserAgreement](#useragreement)
    * [UserAgreementConnection](#useragreementconnection)
    * [UserAgreementEdge](#useragreementedge)
  * [Inputs](#inputs)
    * [AttributeIdentifierInput](#attributeidentifierinput)
    * [AttributeInput](#attributeinput)
    * [BillingAddressInput](#billingaddressinput)
    * [BillingPriceInput](#billingpriceinput)
    * [BoundsCircleInput](#boundscircleinput)
    * [BoundsInput](#boundsinput)
    * [CollectionItemsSort](#collectionitemssort)
    * [CollectionsSort](#collectionssort)
    * [CreateCollectionInput](#createcollectioninput)
    * [CreateCollectionLocationInput](#createcollectionlocationinput)
    * [CreateConnectedAppInput](#createconnectedappinput)
    * [CreateIconCompositionInput](#createiconcompositioninput)
    * [CreateIconSilhouetteInput](#createiconsilhouetteinput)
    * [CreateItineraryCollectionInput](#createitinerarycollectioninput)
    * [CreateItineraryDirectionsInput](#createitinerarydirectionsinput)
    * [CreateItineraryInput](#createitineraryinput)
    * [CreateItineraryLocationInput](#createitinerarylocationinput)
    * [CreateMediaContainerInput](#createmediacontainerinput)
    * [CreateProfileInput](#createprofileinput)
    * [CreateUserAgreementInput](#createuseragreementinput)
    * [DatetimeOffset](#datetimeoffset)
    * [ElevationInput](#elevationinput)
    * [FinalizeMediaUploadInput](#finalizemediauploadinput)
    * [GeoJsonSimplification](#geojsonsimplification)
    * [GeoJsonSimplificationRamerDouglasPeucker](#geojsonsimplificationramerdouglaspeucker)
    * [ItinerariesSort](#itinerariessort)
    * [ItineraryAutoRouteInput](#itineraryautorouteinput)
    * [ItineraryDirectionsDurationsInput](#itinerarydirectionsdurationsinput)
    * [ItineraryItemPositionAfterSibling](#itineraryitempositionaftersibling)
    * [ItineraryItemPositionAtEnd](#itineraryitempositionatend)
    * [ItineraryItemPositionAtStart](#itineraryitempositionatstart)
    * [ItineraryItemPositionBeforeSibling](#itineraryitempositionbeforesibling)
    * [ItineraryItemPositionOnLastCollection](#itineraryitempositiononlastcollection)
    * [MediaContainerInput](#mediacontainerinput)
    * [MediaContainerPositionAfter](#mediacontainerpositionafter)
    * [MediaContainerPositionAtEnd](#mediacontainerpositionatend)
    * [MediaContainerPositionAtStart](#mediacontainerpositionatstart)
    * [MediaContainerPositionBefore](#mediacontainerpositionbefore)
    * [MoveMediaContainerInput](#movemediacontainerinput)
    * [PlaceInput](#placeinput)
    * [PositionInput](#positioninput)
    * [RouteInput](#routeinput)
    * [RouteSegmentInput](#routesegmentinput)
    * [UpdateBillingDetailsInput](#updatebillingdetailsinput)
    * [UpdateCollectionInput](#updatecollectioninput)
    * [UpdateCollectionLocationInput](#updatecollectionlocationinput)
    * [UpdateConnectedAppInput](#updateconnectedappinput)
    * [UpdateIconCompositionInput](#updateiconcompositioninput)
    * [UpdateIconSilhouetteInput](#updateiconsilhouetteinput)
    * [UpdateItineraryCollectionInput](#updateitinerarycollectioninput)
    * [UpdateItineraryDirectionsInput](#updateitinerarydirectionsinput)
    * [UpdateItineraryInput](#updateitineraryinput)
    * [UpdateItineraryLocationInput](#updateitinerarylocationinput)
    * [UpdateMediaContainerInput](#updatemediacontainerinput)
    * [UpdateMediaResourceInput](#updatemediaresourceinput)
    * [UpdateProfileInput](#updateprofileinput)
  * [Enums](#enums)
    * [AngleUnit](#angleunit)
    * [BillingPriceRecurringInterval](#billingpricerecurringinterval)
    * [BillingSubscriptionStatus](#billingsubscriptionstatus)
    * [CollectionDiscriminator](#collectiondiscriminator)
    * [CompassPoint](#compasspoint)
    * [ConnectedAppAuthType](#connectedappauthtype)
    * [ConnectedAppServiceKey](#connectedappservicekey)
    * [ConnectedAppType](#connectedapptype)
    * [DistanceUnit](#distanceunit)
    * [DurationUnit](#durationunit)
    * [IsochroneMode](#isochronemode)
    * [ItineraryDirectionsAccuracy](#itinerarydirectionsaccuracy)
    * [ItineraryDirectionsDirection](#itinerarydirectionsdirection)
    * [ItineraryDirectionsRestrict](#itinerarydirectionsrestrict)
    * [ItineraryItemType](#itineraryitemtype)
    * [MediaUploadStatus](#mediauploadstatus)
    * [PlaceHoursStatus](#placehoursstatus)
    * [PlaceNavigationUrlProvider](#placenavigationurlprovider)
    * [PlaceSearchSource](#placesearchsource)
    * [ProfileFollowStatus](#profilefollowstatus)
    * [ProfileType](#profiletype)
    * [RouteMode](#routemode)
    * [RouteSearchableMode](#routesearchablemode)
    * [SortDirection](#sortdirection)
  * [Scalars](#scalars)
    * [Boolean](#boolean)
    * [Float](#float)
    * [ID](#id)
    * [Int](#int)
    * [JSON](#json)
    * [String](#string)
  * [Interfaces](#interfaces)
    * [CollectionItem](#collectionitem)
    * [IconResource](#iconresource)
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
<td>

The unique identifier of the resource

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collection</strong></td>
<td valign="top"><a href="#collection">Collection</a></td>
<td>

Retrieve a collection by id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The unique identifier of the collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collections</strong></td>
<td valign="top"><a href="#collectionconnection">CollectionConnection</a>!</td>
<td>

Retrieve multiple collections

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">profileId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Filter by the profile owner of the collection

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">discriminator</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Filter by the collection's discriminator

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="#collectionssort">CollectionsSort</a>!]</td>
<td>

Sort result by given field. Results can be sorted only by one field

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collectionItem</strong></td>
<td valign="top"><a href="#collectionitem">CollectionItem</a></td>
<td>

Retrieve a collection item by id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The unique identifier of the collection item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collectionItems</strong></td>
<td valign="top"><a href="#collectionitemconnection">CollectionItemConnection</a>!</td>
<td>

Retrieve multiple collection items filtered by different criteria

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">profileId</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

Filter by the profile owner of the item

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">collectionIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Filter by the collections that items are associated to

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">keyword</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Filter by a supplied keyword, checking the title, synopsis, description and tags of items

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">tags</td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td>

Filter by the tags that are applied to the item

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sectionIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Filter by the collection sections that the items are associated to

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">resourceIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Filter by the resource identifiers that the items are associated to

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">placeIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Filter by the resource identifiers that the items are associated to

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">boundsCircle</td>
<td valign="top"><a href="#boundscircleinput">BoundsCircleInput</a></td>
<td>

A bounding circle that the item positions must fall within

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">bounds</td>
<td valign="top"><a href="#boundsinput">BoundsInput</a></td>
<td>

A bounding box that the item positions must fall within

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">externalIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Filter by the custom/external-ref attribute of the items

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">externalSources</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Filter by the custom/external-source attribute of the items

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="#collectionitemssort">CollectionItemsSort</a>!]</td>
<td>

Sort result by given field. Results can be sorted only by one field

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>connectedApp</strong></td>
<td valign="top"><a href="#connectedapp">ConnectedApp</a></td>
<td>

Obtains a connected app by a provided id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The unique identifier of the connected-app

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>connectedApps</strong></td>
<td valign="top"><a href="#connectedappconnection">ConnectedAppConnection</a>!</td>
<td>

Search connected apps

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">profileId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Filter by the profile owner of the connected-app

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">deleted</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Return only deleted applications

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">expired</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Return only expired applications

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#connectedapptype">ConnectedAppType</a></td>
<td>

Filter by the app's type

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">authType</td>
<td valign="top"><a href="#connectedappauthtype">ConnectedAppAuthType</a></td>
<td>

Filter by the app's authorization type

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">serviceKey</td>
<td valign="top"><a href="#connectedappservicekey">ConnectedAppServiceKey</a></td>
<td>

Filter by the app's service key

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>iconResource</strong></td>
<td valign="top"><a href="#iconresource">IconResource</a></td>
<td>

Obtains an IconResource with a provided id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The unique identifier of the IconResource

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>iconResources</strong></td>
<td valign="top"><a href="#iconresourceconnection">IconResourceConnection</a>!</td>
<td>

Retrieve multiple IconResources under a profile

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">profileId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Filter by the profile owner of the IconResources

</td>
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
<td>

The center (starting point) of the isochrone

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">duration</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The duration of the isochrone in minutes

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mode</td>
<td valign="top"><a href="#isochronemode">IsochroneMode</a>!</td>
<td>

The mode of transport of the isochrone

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
<td>

The unique identifier of the itinerary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>itineraries</strong></td>
<td valign="top"><a href="#itinerarysearchconnection">ItinerarySearchConnection</a>!</td>
<td>

Query itineraries that belong to a profile

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">profileId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Filter by the profile owner of the itienrary

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">keyword</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Filter by a supplied keyword, checking the title, synopsis, description and tags of itineraries

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="#itinerariessort">ItinerariesSort</a>!]</td>
<td>

Sort result by given field. Results can be sorted only by one field

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>routes</strong></td>
<td valign="top"><a href="#routeconnection">RouteConnection</a>!</td>
<td>

Look up routes for traveling along the given positions

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">positions</td>
<td valign="top">[<a href="#positioninput">PositionInput</a>!]!</td>
<td>

The positions the route should visit

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mode</td>
<td valign="top"><a href="#routesearchablemode">RouteSearchableMode</a>!</td>
<td>

The mode of transport of the route

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mediaContainer</strong></td>
<td valign="top"><a href="#mediacontainer">MediaContainer</a></td>
<td>

Retrieve a MediaContainer by id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The unique identifier of the MediaContainer

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mediaResource</strong></td>
<td valign="top"><a href="#mediaresource">MediaResource</a></td>
<td>

Retrieve a MediaResource by id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The unique identifier of the MediaResource

</td>
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
<td>

The unique identifier of the place

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>places</strong></td>
<td valign="top">[<a href="#place">Place</a>]!</td>
<td>

Get multiple places by id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#id">ID</a>!]!</td>
<td>

List of unique place identifiers

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>placeSearch</strong></td>
<td valign="top"><a href="#placesearchconnection">PlaceSearchConnection</a>!</td>
<td>

Search for places

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">text</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Filter places by a text query

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">focus</td>
<td valign="top"><a href="#positioninput">PositionInput</a></td>
<td>

A focus point that the places should be close to

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">bounds</td>
<td valign="top"><a href="#boundsinput">BoundsInput</a></td>
<td>

A bounding box that the item positions must fall within

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sources</td>
<td valign="top">[<a href="#placesearchsource">PlaceSearchSource</a>!]</td>
<td>

The place sources to search

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">layers</td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td>

The place layers to search

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">thirdPartyQuery</td>
<td valign="top"><a href="#json">JSON</a></td>
<td>

Additional third-party specific arguments

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">maxLabelLength</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Maximum text length for search results labels

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>placeAutocompleteSearch</strong></td>
<td valign="top"><a href="#placesearchconnection">PlaceSearchConnection</a>!</td>
<td>

Autocomplete for place search

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">text</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Filter places by a text query

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">focus</td>
<td valign="top"><a href="#positioninput">PositionInput</a></td>
<td>

A focus point that the places should be close to

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">bounds</td>
<td valign="top"><a href="#boundsinput">BoundsInput</a></td>
<td>

A bounding box that the item positions must fall within

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sources</td>
<td valign="top">[<a href="#placesearchsource">PlaceSearchSource</a>!]</td>
<td>

The place sources to search

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">layers</td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td>

The place layers to search

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">thirdPartyQuery</td>
<td valign="top"><a href="#json">JSON</a></td>
<td>

Additional third-party specific arguments

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">maxLabelLength</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Maximum text length for search results labels

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>placeAddressSearch</strong></td>
<td valign="top"><a href="#placesearchconnection">PlaceSearchConnection</a>!</td>
<td>

Search for places based on address details

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">borough</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Filter by borough

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">country</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Filter by country

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">county</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Filter by county

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locality</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Filter by locality

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">neighbourhood</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Filter by neighbourhood

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">postalCode</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Filter by postalCode

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">region</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Filter by region

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">streetAddress</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Filter by streetAddress

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sources</td>
<td valign="top">[<a href="#placesearchsource">PlaceSearchSource</a>!]</td>
<td>

The place sources to search

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">layers</td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td>

The place layers to search

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">thirdPartyQuery</td>
<td valign="top"><a href="#json">JSON</a></td>
<td>

Additional third-party specific arguments

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">maxLabelLength</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Maximum text length for search results labels

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>placeReverseSearch</strong></td>
<td valign="top"><a href="#placesearchconnection">PlaceSearchConnection</a>!</td>
<td>

Search for places by location

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">focus</td>
<td valign="top"><a href="#positioninput">PositionInput</a>!</td>
<td>

A focus point that the places should be close to

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sources</td>
<td valign="top">[<a href="#placesearchsource">PlaceSearchSource</a>!]</td>
<td>

The place sources to search

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">layers</td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td>

The place layers to search

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">thirdPartyQuery</td>
<td valign="top"><a href="#json">JSON</a></td>
<td>

Additional third-party specific arguments

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">maxLabelLength</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Maximum text length for search results labels

</td>
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
<td>

The unique identifier of the collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>authorizedProfiles</strong></td>
<td valign="top"><a href="#profileconnection">ProfileConnection</a>!</td>
<td>

Look up all authorised profiles

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
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
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">handle</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Filter by profile handle

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>billingPrices</strong></td>
<td valign="top"><a href="#billingpriceconnection">BillingPriceConnection</a>!</td>
<td>

List of available billing prices

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>billingSubscriptions</strong></td>
<td valign="top"><a href="#billingsubscriptionconnection">BillingSubscriptionConnection</a>!</td>
<td>

Fetch billing subscriptions associated with a profile

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">profileId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The profile id

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>billingDetails</strong></td>
<td valign="top"><a href="#billingdetails">BillingDetails</a></td>
<td>

Fetch billing details associated with a profile

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">profileId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The profile id

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userAgreements</strong></td>
<td valign="top"><a href="#useragreementconnection">UserAgreementConnection</a>!</td>
<td>

Query for fetching agreements made by this user

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">profileId</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

Filter by the profile associated with the agreement

</td>
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
<td colspan="2" valign="top"><strong>createCollection</strong></td>
<td valign="top"><a href="#createcollectionpayload">CreateCollectionPayload</a>!</td>
<td>

The return fields available after creating a collection

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">profileId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The identifier of the profile that will own the new collection

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">collection</td>
<td valign="top"><a href="#createcollectioninput">CreateCollectionInput</a>!</td>
<td>

The new collection

</td>
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
<td>

The id of the collection to update

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">collection</td>
<td valign="top"><a href="#updatecollectioninput">UpdateCollectionInput</a>!</td>
<td>

The updated collection data

</td>
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
<td>

Create a new collection-location under the given collection

</td>
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
<td colspan="2" valign="top"><strong>createConnectedApp</strong></td>
<td valign="top"><a href="#createconnectedapppayload">CreateConnectedAppPayload</a>!</td>
<td>

The return fields available after creating a connected app

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">profileId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The identifier of the profile that will own the new connected-app

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">connectedApp</td>
<td valign="top"><a href="#createconnectedappinput">CreateConnectedAppInput</a>!</td>
<td>

The new connected-app

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateConnectedApp</strong></td>
<td valign="top"><a href="#updateconnectedapppayload">UpdateConnectedAppPayload</a>!</td>
<td>

Update a connected app

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The id of the connected-app to update

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">connectedApp</td>
<td valign="top"><a href="#updateconnectedappinput">UpdateConnectedAppInput</a>!</td>
<td>

The updated connected-app data

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteConnectedApp</strong></td>
<td valign="top"><a href="#deleteconnectedapppayload">DeleteConnectedAppPayload</a>!</td>
<td>

Deleted a connected app

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The id of the connected app to delete

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createIconSilhouette</strong></td>
<td valign="top"><a href="#createiconsilhouettepayload">CreateIconSilhouettePayload</a>!</td>
<td>

Creates a new icon

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">profileId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The identifier of the profile that will own the new IconSilhouette

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">icon</td>
<td valign="top"><a href="#createiconsilhouetteinput">CreateIconSilhouetteInput</a>!</td>
<td>

The new IconSilhouette

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateIconSilhouette</strong></td>
<td valign="top"><a href="#updateiconsilhouettepayload">UpdateIconSilhouettePayload</a>!</td>
<td>

Updates a icon

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The id of the icon to update

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">icon</td>
<td valign="top"><a href="#updateiconsilhouetteinput">UpdateIconSilhouetteInput</a>!</td>
<td>

The updated icon

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteIconResource</strong></td>
<td valign="top"><a href="#deleteiconresourcepayload">DeleteIconResourcePayload</a>!</td>
<td>

Delete an icon

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The id of the icon to delete

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
<td>

Moves the item to be before all its siblings

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">positionAtEnd</td>
<td valign="top"><a href="#itineraryitempositionatend">ItineraryItemPositionAtEnd</a></td>
<td>

Moves the item to be after all of its siblings

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">positionAfterSibling</td>
<td valign="top"><a href="#itineraryitempositionaftersibling">ItineraryItemPositionAfterSibling</a></td>
<td>

Moves the item after the given sibling

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">positionBeforeSibling</td>
<td valign="top"><a href="#itineraryitempositionbeforesibling">ItineraryItemPositionBeforeSibling</a></td>
<td>

Moves the item before the given sibling

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">positionOnLastCollection</td>
<td valign="top"><a href="#itineraryitempositiononlastcollection">ItineraryItemPositionOnLastCollection</a></td>
<td>

Moves the item to the last position of the last itinerary-collection item

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">publish</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If set to true, the mutation will be automatically published.

</td>
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
<td colspan="2" align="right" valign="top">publish</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If set to true, the mutation will be automatically published.

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
<td>

The new itinerary

</td>
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
<td colspan="2" align="right" valign="top">publish</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If set to true, the new itinerary will be automatically published.

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
<td>

The id of the itinerary to update

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">itinerary</td>
<td valign="top"><a href="#updateitineraryinput">UpdateItineraryInput</a>!</td>
<td>

The fields to update on the itinerary

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">publish</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If set to true, the mutation will be automatically published.

</td>
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
<td colspan="2" valign="top"><strong>revertItinerary</strong></td>
<td valign="top"><a href="#publishitinerarypayload">PublishItineraryPayload</a>!</td>
<td>

Revert the draft version of an itinerary to last published version

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The id of the itinerary to revert

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>duplicateItinerary</strong></td>
<td valign="top"><a href="#duplicateitinerarypayload">DuplicateItineraryPayload</a>!</td>
<td>

Duplicate an itinerary, creating copy with a new id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The id of the itinerary to duplicate

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>changeItineraryDefaultLocale</strong></td>
<td valign="top"><a href="#duplicateitinerarypayload">DuplicateItineraryPayload</a>!</td>
<td>

Change the itinerary's default-locale as well the locale of attributes with the previous default-locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The id of the itinerary to duplicate

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">defaultLocale</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The new default locale for this itinerary

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
<td colspan="2" align="right" valign="top">publish</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If set to true, the mutation will be automatically published.

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
<td colspan="2" align="right" valign="top">publish</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If set to true, the mutation will be automatically published.

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
<td colspan="2" align="right" valign="top">publish</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If set to true, the mutation will be automatically published.

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
<td colspan="2" align="right" valign="top">publish</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If set to true, the mutation will be automatically published.

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
<td colspan="2" align="right" valign="top">publish</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If set to true, the mutation will be automatically published.

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
<tr>
<td colspan="2" align="right" valign="top">publish</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If set to true, the mutation will be automatically published.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startMediaUpload</strong></td>
<td valign="top"><a href="#startmediauploadpayload">StartMediaUploadPayload</a>!</td>
<td>

Start a media upload

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filename</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The file name of the media file that will be uploaded

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">contentType</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The content type of the media file that will be uploaded

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>finalizeMediaUpload</strong></td>
<td valign="top"><a href="#finalizemediauploadpayload">FinalizeMediaUploadPayload</a>!</td>
<td>

Finalize the media upload by creating a media-resource

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">token</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The upload token returned by Mutation.startMediaUpload

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">profileId</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The identifier of the profile that will own the new media-resource

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">resource</td>
<td valign="top"><a href="#finalizemediauploadinput">FinalizeMediaUploadInput</a></td>
<td>

Details of the new media-resource

</td>
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
<td colspan="2" align="right" valign="top">resource</td>
<td valign="top"><a href="#updatemediaresourceinput">UpdateMediaResourceInput</a>!</td>
<td>

The fields to update on the media-resource

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>followProfile</strong></td>
<td valign="top"><a href="#followprofilepayload">FollowProfilePayload</a>!</td>
<td>

Create a follow request between two profiles

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">fromProfileId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The follower profile

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">toProfileId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The profile being followed

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>unfollowProfile</strong></td>
<td valign="top"><a href="#unfollowprofilepayload">UnfollowProfilePayload</a>!</td>
<td>

Remove the follow between two profiles

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">fromProfileId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The follower profile

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">toProfileId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The profile being followed

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>approveProfileFollow</strong></td>
<td valign="top"><a href="#approveprofilefollowpayload">ApproveProfileFollowPayload</a>!</td>
<td>

Approve a follow request between two profiles

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">fromProfileId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The follower profile

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">toProfileId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The profile being followed

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>denyProfileFollow</strong></td>
<td valign="top"><a href="#denyprofilefollowpayload">DenyProfileFollowPayload</a>!</td>
<td>

Deny a follow request between two profiles

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">fromProfileId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The follower profile

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">toProfileId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The profile being followed

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>claimProfileHandle</strong></td>
<td valign="top"><a href="#claimprofilehandlepayload">ClaimProfileHandlePayload</a>!</td>
<td>

Claim an unclaimed handle for the given profile

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The unique identifier of the profile that will claim the handle

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">handle</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The handle to claim

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createProfile</strong></td>
<td valign="top"><a href="#createprofilepayload">CreateProfilePayload</a>!</td>
<td>

Creates a new profile with the given fields. Can only be called with a bearer token.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">profile</td>
<td valign="top"><a href="#createprofileinput">CreateProfileInput</a>!</td>
<td>

The fields to set on the new profile

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateProfile</strong></td>
<td valign="top"><a href="#updateprofilepayload">UpdateProfilePayload</a>!</td>
<td>

Updates the specified profile with the given fields

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The id of the profile to update

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">profile</td>
<td valign="top"><a href="#updateprofileinput">UpdateProfileInput</a>!</td>
<td>

The fields to update on the profile

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteProfile</strong></td>
<td valign="top"><a href="#deleteprofilepayload">DeleteProfilePayload</a>!</td>
<td>

Delete a profile

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
<td colspan="2" valign="top"><strong>captureMarketingInformation</strong></td>
<td valign="top"><a href="#capturemarketinginformationpayload">CaptureMarketingInformationPayload</a>!</td>
<td>

Capture marketing information against the given profile

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">profileId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The id of the profile to associate the information against

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">name</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">organizationType</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">intendedUses</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">leadSource</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateBillingDetails</strong></td>
<td valign="top"><a href="#updatebillingdetailsoutput">UpdateBillingDetailsOutput</a>!</td>
<td>

Update the billing details associated with a profile

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">profileId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The identifier of the profile the billing details apply to

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">billingDetails</td>
<td valign="top"><a href="#updatebillingdetailsinput">UpdateBillingDetailsInput</a>!</td>
<td>

The updated billing details

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createBillingCheckoutSession</strong></td>
<td valign="top"><a href="#createbillingcheckoutsessionoutput">CreateBillingCheckoutSessionOutput</a>!</td>
<td>

Create a billing checkout session

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">profileId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The identifier of the profile the billing details apply to

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">successUrl</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Redirect url on success

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">cancelUrl</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Redirect url on cancel

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">prices</td>
<td valign="top">[<a href="#billingpriceinput">BillingPriceInput</a>!]!</td>
<td>

The prices to checkout with

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createBillingPortalSession</strong></td>
<td valign="top"><a href="#createbillingportalsessionoutput">CreateBillingPortalSessionOutput</a>!</td>
<td>

Create a billing portal session

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">profileId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The identifier of the profile the billing details apply to

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">returnUrl</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Redirect url to return to

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createUserAgreement</strong></td>
<td valign="top"><a href="#createuseragreementpayload">CreateUserAgreementPayload</a>!</td>
<td>

The return fields available after creating a user agreement

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">profileId</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The identifier of the profile that will be associated with the agreement

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userAgreement</td>
<td valign="top"><a href="#createuseragreementinput">CreateUserAgreementInput</a>!</td>
<td>

The new user agreement

</td>
</tr>
</tbody>
</table>

## Objects

### ApproveProfileFollowPayload

Result of approving a follow request

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
<td colspan="2" valign="top"><strong>fromProfile</strong></td>
<td valign="top"><a href="#profile">Profile</a>!</td>
<td>

The follower profile

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>toProfile</strong></td>
<td valign="top"><a href="#profile">Profile</a>!</td>
<td>

The profile being followed

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#profilefollowstatus">ProfileFollowStatus</a></td>
<td>

The status of the follow request

</td>
</tr>
</tbody>
</table>

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

Connection of Attributes

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
<td>

All the edges in this page of the connection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#attribute">Attribute</a>!]!</td>
<td>

Shortcut for edges[].node

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Details regarding the current page of the connnection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The total number of items in the connection (in all pages)

</td>
</tr>
</tbody>
</table>

### AttributeEdge

Edge containing a Attribute

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
<td>

The cursor string pointing to this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#attribute">Attribute</a>!</td>
<td>

The item

</td>
</tr>
</tbody>
</table>

### BillingAddress

The address field of a BillingDetails object

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
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addressLineTwo</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>locality</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>region</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>postalCode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>countryCode</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### BillingDetails

Billing details associated with a profile

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
<td valign="top"><a href="#profile">Profile</a>!</td>
<td>

Profile that these billing details apply to

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>emailAddress</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The email address

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>givenName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The given name

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>familyName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The family name

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>organization</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The optional organization name

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address</strong></td>
<td valign="top"><a href="#billingaddress">BillingAddress</a>!</td>
<td>

The billing address

</td>
</tr>
</tbody>
</table>

### BillingPlan

A billing plan

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

The identifier for this plan

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>quantity</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The quantity

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>price</strong></td>
<td valign="top"><a href="#billingprice">BillingPrice</a></td>
<td>

The price of this plan

</td>
</tr>
</tbody>
</table>

### BillingPrice

A price available for a billing plan

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

The unique id for this price

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>product</strong></td>
<td valign="top"><a href="#billingproduct">BillingProduct</a>!</td>
<td>

The product corres

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>currency</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The currency used for this price

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>amount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The amount of this price

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recurring</strong></td>
<td valign="top"><a href="#billingpricerecurring">BillingPriceRecurring</a>!</td>
<td>

Recurrence details of the price

</td>
</tr>
</tbody>
</table>

### BillingPriceConnection

Connection of BillingPrices

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
<td valign="top">[<a href="#billingpriceedge">BillingPriceEdge</a>!]!</td>
<td>

All the edges in this page of the connection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#billingprice">BillingPrice</a>!]!</td>
<td>

Shortcut for edges[].node

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Details regarding the current page of the connnection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The total number of items in the connection (in all pages)

</td>
</tr>
</tbody>
</table>

### BillingPriceEdge

Edge containing a BillingPrice

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
<td>

The cursor string pointing to this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#billingprice">BillingPrice</a>!</td>
<td>

The item

</td>
</tr>
</tbody>
</table>

### BillingPriceRecurring

The recurrence details for a BillingPrice

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
<td colspan="2" valign="top"><strong>interval</strong></td>
<td valign="top"><a href="#billingpricerecurringinterval">BillingPriceRecurringInterval</a>!</td>
<td>

The interval type

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The number of interval per recurrence

</td>
</tr>
</tbody>
</table>

### BillingProduct

A product corresponding to a price

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

The unique id for this product

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The name of this product

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The description for this product

</td>
</tr>
</tbody>
</table>

### BillingSubscription

A billing subscription

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

The unique id for this subscription

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>profile</strong></td>
<td valign="top"><a href="#profile">Profile</a>!</td>
<td>

Profile that this billing subscription belongs to

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#billingsubscriptionstatus">BillingSubscriptionStatus</a>!</td>
<td>

The current status of this subscription

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>created</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The date when the subscription was created

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">format</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the date according to the given format specifier string.

Cannot be used with "relativeTo".

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">relativeTo</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the difference between this date and the given date.
Set to null to output the difference between this date and the current date.

Should be an ISO 8601 formatted string.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeZone</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the time zone of the date

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the output locale

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>modified</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The date when the subscription was last modified

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">format</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the date according to the given format specifier string.

Cannot be used with "relativeTo".

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">relativeTo</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the difference between this date and the given date.
Set to null to output the difference between this date and the current date.

Should be an ISO 8601 formatted string.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeZone</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the time zone of the date

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the output locale

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>plans</strong></td>
<td valign="top">[<a href="#billingplan">BillingPlan</a>!]!</td>
<td>

The plans attached to this subscription

</td>
</tr>
</tbody>
</table>

### BillingSubscriptionConnection

Connection of BillingSubscriptions

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
<td valign="top">[<a href="#billingsubscriptionedge">BillingSubscriptionEdge</a>!]!</td>
<td>

All the edges in this page of the connection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#billingsubscription">BillingSubscription</a>!]!</td>
<td>

Shortcut for edges[].node

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Details regarding the current page of the connnection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The total number of items in the connection (in all pages)

</td>
</tr>
</tbody>
</table>

### BillingSubscriptionEdge

Edge containing a BillingSubscription

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
<td>

The cursor string pointing to this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#billingsubscription">BillingSubscription</a>!</td>
<td>

The item

</td>
</tr>
</tbody>
</table>

### Bounds

A bounding box on a map defined by two positions (opposite corners of the box)

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
<td>

The west-most longitude of the bounding box

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>s</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

The south-most latitude of the bounding box

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>e</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

The east-most longitude of the bounding box

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>n</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

The north-most latitude of the bounding box

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ws</strong></td>
<td valign="top">[<a href="#float">Float</a>!]!</td>
<td>

The south-west point of the bounding box in the form: [west, south]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>en</strong></td>
<td valign="top">[<a href="#float">Float</a>!]!</td>
<td>

The north-east point of the bounding box in the form: [east, north]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>wsen</strong></td>
<td valign="top">[<a href="#float">Float</a>!]!</td>
<td>

The south-west and north-east points of the bounding box in the form: [west, south, east, north]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>minMax</strong></td>
<td valign="top">[[<a href="#float">Float</a>!]!]!</td>
<td>

The minimum and maximum points of the bounding box in the form: [minimum, maximum]

</td>
</tr>
</tbody>
</table>

### CaptureMarketingInformationPayload

The result of Mutation.captureMarketingInformation

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
<td colspan="2" valign="top"><strong>profileId</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The ID of the profile that the information is associated against

</td>
</tr>
</tbody>
</table>

### ChangeItineraryDefaultLocalePayload

Response to Mutation.changeItineraryDefaultLocale

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

The changed itinerary

</td>
</tr>
</tbody>
</table>

### ClaimProfileHandlePayload

Response of claiming a handle

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
<td>

The profile that will claim the handle

</td>
</tr>
</tbody>
</table>

### Collection

A collection type is used to group together a unordered set of items

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
<td colspan="2" align="right" valign="top">format</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the date according to the given format specifier string.

Cannot be used with "relativeTo".

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">relativeTo</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the difference between this date and the given date.
Set to null to output the difference between this date and the current date.

Should be an ISO 8601 formatted string.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeZone</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the time zone of the date

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the output locale

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
<td colspan="2" align="right" valign="top">format</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the date according to the given format specifier string.

Cannot be used with "relativeTo".

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">relativeTo</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the difference between this date and the given date.
Set to null to output the difference between this date and the current date.

Should be an ISO 8601 formatted string.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeZone</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the time zone of the date

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the output locale

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
<td colspan="2" valign="top"><strong>media</strong> ⚠️</td>
<td valign="top">[<a href="#mediacontainer">MediaContainer</a>!]!</td>
<td>

List of MediaContainers containing images or other media

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

use mediaContainers instead

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The number of media to return

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mediaContainers</strong></td>
<td valign="top"><a href="#mediacontainerconnection">MediaContainerConnection</a>!</td>
<td>

List of MediaContainers containing images or other media

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>preferredMedia</strong></td>
<td valign="top"><a href="#mediacontainer">MediaContainer</a></td>
<td>

A single MediaContainer representing the preferred media to use

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the read-more attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the website-url attribute

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
<td valign="top"><a href="#id">ID</a>!</td>
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
<td valign="top"><a href="#id">ID</a>!</td>
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
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Query multiple attributes optionally filtering by id and/or locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select. This will only apply to attributes with a locale, attributes that don't will not be excluded.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">includeNoLocale</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether or not to include attributes without locales in the results

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
<td valign="top"><a href="#collectionitemembedded">CollectionItemEmbedded</a></td>
<td>

Returns an item belonging to this collection by id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The unique identifier of the collection item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>items</strong></td>
<td valign="top"><a href="#collectionitemconnection">CollectionItemConnection</a>!</td>
<td>

Retrieve multiple collection-items belonging to this collection

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">keyword</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Filter by a supplied keyword, checking the title, synopsis, description and tags of items

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">tags</td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td>

Filter by the tags that are applied to the item

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sectionIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Filter by the collection sections that the items are associated to

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">resourceIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Filter by the resource identifiers that the items are associated to

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">boundsCircle</td>
<td valign="top"><a href="#boundscircleinput">BoundsCircleInput</a></td>
<td>

A bounding circle that the item positions must fall within

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">bounds</td>
<td valign="top"><a href="#boundsinput">BoundsInput</a></td>
<td>

A bounding box that the item positions must fall within

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">externalIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Filter by the custom/external-ref attribute of the items

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">externalSources</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Filter by the custom/external-source attribute of the items

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="#collectionitemssort">CollectionItemsSort</a>!]</td>
<td>

Sort result by given field. Results can be sorted only by one field

</td>
</tr>
</tbody>
</table>

### CollectionConnection

Connection of Collections

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
<td>

All the edges in this page of the connection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#collection">Collection</a>!]!</td>
<td>

Shortcut for edges[].node

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Details regarding the current page of the connnection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The total number of items in the connection (in all pages)

</td>
</tr>
</tbody>
</table>

### CollectionEdge

Edge containing a Collection

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
<td>

The cursor string pointing to this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#collection">Collection</a>!</td>
<td>

The item

</td>
</tr>
</tbody>
</table>

### CollectionItemConnection

Connection of CollectionItems

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
<td>

All the edges in this page of the connection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#collectionitem">CollectionItem</a>!]!</td>
<td>

Shortcut for edges[].node

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Details regarding the current page of the connnection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The total number of items in the connection (in all pages)

</td>
</tr>
</tbody>
</table>

### CollectionItemEdge

Edge containing a CollectionItem

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
<td>

The cursor string pointing to this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#collectionitem">CollectionItem</a>!</td>
<td>

The item

</td>
</tr>
</tbody>
</table>

### CollectionItemFailedToLoad

Represents an embedded CollectionItem that failed to load

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
<td colspan="2" align="right" valign="top">format</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the date according to the given format specifier string.

Cannot be used with "relativeTo".

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">relativeTo</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the difference between this date and the given date.
Set to null to output the difference between this date and the current date.

Should be an ISO 8601 formatted string.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeZone</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the time zone of the date

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the output locale

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
<td colspan="2" align="right" valign="top">format</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the date according to the given format specifier string.

Cannot be used with "relativeTo".

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">relativeTo</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the difference between this date and the given date.
Set to null to output the difference between this date and the current date.

Should be an ISO 8601 formatted string.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeZone</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the time zone of the date

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the output locale

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
<td colspan="2" valign="top"><strong>media</strong> ⚠️</td>
<td valign="top">[<a href="#mediacontainer">MediaContainer</a>!]!</td>
<td>

List of MediaContainers containing images or other media

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

use mediaContainers instead

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The number of media to return

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mediaContainers</strong></td>
<td valign="top"><a href="#mediacontainerconnection">MediaContainerConnection</a>!</td>
<td>

List of MediaContainers containing images or other media

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>preferredMedia</strong></td>
<td valign="top"><a href="#mediacontainer">MediaContainer</a></td>
<td>

The preferred MediaContainer to use

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the read-more attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the website-url attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sectionIds</strong></td>
<td valign="top">[<a href="#id">ID</a>!]!</td>
<td>

One or more sections this item belongs to

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>externalId</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

Identifier from an external source this item is associated with

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>externalSource</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The source of the item's externalId

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
<td valign="top"><a href="#id">ID</a>!</td>
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
<td valign="top"><a href="#id">ID</a>!</td>
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
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Query multiple attributes optionally filtering by id and/or locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select. This will only apply to attributes with a locale, attributes that don't will not be excluded.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">includeNoLocale</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether or not to include attributes without locales in the results

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>place</strong></td>
<td valign="top"><a href="#place">Place</a>!</td>
<td>

The associated place information for this location

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>position</strong></td>
<td valign="top"><a href="#position">Position</a>!</td>
<td>

The position of the collection-location (derived from place if not overridden)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bounds</strong></td>
<td valign="top"><a href="#bounds">Bounds</a></td>
<td>

The bounding box around the collection-location (derived from place if not overridden)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>contact</strong></td>
<td valign="top"><a href="#placecontact">PlaceContact</a>!</td>
<td>

Contact information for the collection location

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address</strong></td>
<td valign="top"><a href="#placeaddress">PlaceAddress</a>!</td>
<td>

Address information for the collection location

</td>
</tr>
</tbody>
</table>

### ConnectedApp

Connected apps stored in the profile

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

The profile associated with this connected app

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#connectedapptype">ConnectedAppType</a></td>
<td>

A key to describe the type of connection to the application

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>serviceKey</strong></td>
<td valign="top"><a href="#connectedappservicekey">ConnectedAppServiceKey</a>!</td>
<td>

This is the key relating to the service - it identifies the "App" we are connecting to

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>authType</strong></td>
<td valign="top"><a href="#connectedappauthtype">ConnectedAppAuthType</a></td>
<td>

Depending on the authentication method, this can highlight the authenticated application method (e.g. OAuth)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>scope</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Any specific scope that has been granted to the 3rd party application

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>privateConfiguration</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>

Private configuration information as encrypted JSON

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>publicId</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

A 3rd party ID or Account ID, this does not affect any of the Alpaca ID naming - for instance, if we are connecting to an Identity in OAUTH, this is the OAUTH Identity ID - This is just a place to store data

</td>
</tr>
</tbody>
</table>

### ConnectedAppConnection

Connection of ConnectedApps

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
<td valign="top">[<a href="#connectedappedge">ConnectedAppEdge</a>!]!</td>
<td>

All the edges in this page of the connection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#connectedapp">ConnectedApp</a>!]!</td>
<td>

Shortcut for edges[].node

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Details regarding the current page of the connnection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The total number of items in the connection (in all pages)

</td>
</tr>
</tbody>
</table>

### ConnectedAppEdge

Edge containing a ConnectedApp

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
<td>

The cursor string pointing to this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#connectedapp">ConnectedApp</a>!</td>
<td>

The item

</td>
</tr>
</tbody>
</table>

### CreateBillingCheckoutSessionOutput

The output after creating a billing checkout session

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
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The url for the checkout session

</td>
</tr>
</tbody>
</table>

### CreateBillingPortalSessionOutput

The output after creating a billing portal session

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
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The url for the portal session

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
<td>

The newly created collection

</td>
</tr>
</tbody>
</table>

### CreateConnectedAppPayload

The return fields available after creating a connected app

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
<td colspan="2" valign="top"><strong>connectedApp</strong></td>
<td valign="top"><a href="#connectedapp">ConnectedApp</a></td>
<td>

The newly created connected-app

</td>
</tr>
</tbody>
</table>

### CreateIconSilhouettePayload

The response after creating an IconSilhouette

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
<td colspan="2" valign="top"><strong>icon</strong></td>
<td valign="top"><a href="#iconsilhouette">IconSilhouette</a></td>
<td>

The newly created IconSilhouette

</td>
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
<td>

Other changes to the itinerary caused by the creation of the itinerary-collection

</td>
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
<td>

Other changes to the itinerary caused by the creation of the itinerary-directions

</td>
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
<td>

Other changes to the itinerary caused by the creation of the itinerary-location

</td>
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

### CreateProfilePayload

Response payload to Mutation.createProfile

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
<td>

The newly created profile

</td>
</tr>
</tbody>
</table>

### CreateUserAgreementPayload

The return fields available after creating a user agreement

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
<td colspan="2" valign="top"><strong>userAgreement</strong></td>
<td valign="top"><a href="#useragreement">UserAgreement</a></td>
<td>

The newly created user agreement

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

### DeleteConnectedAppPayload

The available payload after performing a delete connected app

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

The ID of the deleted connected app

</td>
</tr>
</tbody>
</table>

### DeleteIconResourcePayload

The response after deleting an icon

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

The ID of the deleted icon

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
<td>

Other changes to the itinerary that caused by deleting the itinerary-item

</td>
</tr>
</tbody>
</table>

### DeleteItineraryPayload

The result of deleting an itinerary

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

### DeleteProfilePayload

The result of deleting a profile

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

The ID of the profile itinerary

</td>
</tr>
</tbody>
</table>

### DenyProfileFollowPayload

Result of denying a follow request

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
<td colspan="2" valign="top"><strong>fromProfile</strong></td>
<td valign="top"><a href="#profile">Profile</a>!</td>
<td>

The follower profile

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>toProfile</strong></td>
<td valign="top"><a href="#profile">Profile</a>!</td>
<td>

The profile being followed

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#profilefollowstatus">ProfileFollowStatus</a></td>
<td>

The status of the follow request

</td>
</tr>
</tbody>
</table>

### DuplicateItineraryPayload

Response to Mutation.duplicateItinerary

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

The newly duplicated itinerary

</td>
</tr>
</tbody>
</table>

### Elevation

Elevation data

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
<td>

The cumulative elevation gain

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">unit</td>
<td valign="top"><a href="#distanceunit">DistanceUnit</a>!</td>
<td>

The unit of the output value

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>loss</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

The cumulative elevation loss

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">unit</td>
<td valign="top"><a href="#distanceunit">DistanceUnit</a>!</td>
<td>

The unit of the output value

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

The minimum elevation

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">unit</td>
<td valign="top"><a href="#distanceunit">DistanceUnit</a>!</td>
<td>

The unit of the output value

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

The maximum elevation

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">unit</td>
<td valign="top"><a href="#distanceunit">DistanceUnit</a>!</td>
<td>

The unit of the output value

</td>
</tr>
</tbody>
</table>

### FinalizeMediaUploadPayload

Result of finalizing a media upload

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
<td>

The status of this media upload

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>resource</strong></td>
<td valign="top"><a href="#mediaresource">MediaResource</a></td>
<td>

The newly created media-resource

</td>
</tr>
</tbody>
</table>

### FollowProfilePayload

Result of creating a follow request

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
<td colspan="2" valign="top"><strong>fromProfile</strong></td>
<td valign="top"><a href="#profile">Profile</a>!</td>
<td>

The follower profile

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>toProfile</strong></td>
<td valign="top"><a href="#profile">Profile</a>!</td>
<td>

The profile being followed

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#profilefollowstatus">ProfileFollowStatus</a></td>
<td>

The status of the follow request

</td>
</tr>
</tbody>
</table>

### IconComposition

An icon with styles for use in an Itinerary

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

A name for this IconComposition, should be unique across the itinerary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A key for this IconComposition. Derived from the name

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>created</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The date when the IconComposition was created

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">format</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the date according to the given format specifier string.

Cannot be used with "relativeTo".

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">relativeTo</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the difference between this date and the given date.
Set to null to output the difference between this date and the current date.

Should be an ISO 8601 formatted string.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeZone</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the time zone of the date

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the output locale

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>modified</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The date when the IconComposition was last modified

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">format</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the date according to the given format specifier string.

Cannot be used with "relativeTo".

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">relativeTo</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the difference between this date and the given date.
Set to null to output the difference between this date and the current date.

Should be an ISO 8601 formatted string.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeZone</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the time zone of the date

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the output locale

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>resource</strong></td>
<td valign="top"><a href="#iconresourceembedded">IconResourceEmbedded</a>!</td>
<td>

The Icon used by this IconComposition

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>iconFill</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Optional fill color for the icon

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shieldKey</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Indicates which shield to use

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shieldFill</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Optional fill color for the shield

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shieldStroke</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Optional stroke color for the shield

</td>
</tr>
</tbody>
</table>

### IconCompositionConnection

Connection of IconCompositions

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
<td valign="top">[<a href="#iconcompositionedge">IconCompositionEdge</a>!]!</td>
<td>

All the edges in this page of the connection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#iconcomposition">IconComposition</a>!]!</td>
<td>

Shortcut for edges[].node

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Details regarding the current page of the connnection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The total number of items in the connection (in all pages)

</td>
</tr>
</tbody>
</table>

### IconCompositionEdge

Edge containing a IconComposition

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
<td>

The cursor string pointing to this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#iconcomposition">IconComposition</a>!</td>
<td>

The item

</td>
</tr>
</tbody>
</table>

### IconResourceConnection

Connection of IconResources

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
<td valign="top">[<a href="#iconresourceedge">IconResourceEdge</a>!]!</td>
<td>

All the edges in this page of the connection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#iconresource">IconResource</a>!]!</td>
<td>

Shortcut for edges[].node

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Details regarding the current page of the connnection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The total number of items in the connection (in all pages)

</td>
</tr>
</tbody>
</table>

### IconResourceEdge

Edge containing a IconResource

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
<td>

The cursor string pointing to this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#iconresource">IconResource</a>!</td>
<td>

The item

</td>
</tr>
</tbody>
</table>

### IconResourceFailedToLoad

Represents an embedded IconResource that failed to load

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

### IconSilhouette

SVG path based IconResource

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

The profile associated with this icon

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>created</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The date when the icon was created

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">format</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the date according to the given format specifier string.

Cannot be used with "relativeTo".

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">relativeTo</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the difference between this date and the given date.
Set to null to output the difference between this date and the current date.

Should be an ISO 8601 formatted string.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeZone</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the time zone of the date

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the output locale

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>modified</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The date when the icon was last modified

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">format</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the date according to the given format specifier string.

Cannot be used with "relativeTo".

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">relativeTo</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the difference between this date and the given date.
Set to null to output the difference between this date and the current date.

Should be an ISO 8601 formatted string.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeZone</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the time zone of the date

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the output locale

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The supplied name for this icon

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The key of the icon, unique across the profile

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
<td valign="top"><a href="#id">ID</a>!</td>
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
<td valign="top"><a href="#id">ID</a>!</td>
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
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Query multiple attributes optionally filtering by id and/or locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select. This will only apply to attributes with a locale, attributes that don't will not be excluded.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">includeNoLocale</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether or not to include attributes without locales in the results

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>paths</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

SVG path data for this icon, eg: "M 100 .."

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>viewBox</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Optional SVG viewBox for this icon

</td>
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
<td>

The duration of the isochrone

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">unit</td>
<td valign="top"><a href="#durationunit">DurationUnit</a>!</td>
<td>

The unit of the output value

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>copyrights</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

Copyright details of the isochrone

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mode</strong></td>
<td valign="top"><a href="#isochronemode">IsochroneMode</a>!</td>
<td>

The mode of transport of the isochrone

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bounds</strong></td>
<td valign="top"><a href="#bounds">Bounds</a>!</td>
<td>

A bounding box around the isochrone

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>polygon</strong></td>
<td valign="top"><a href="#json">JSON</a>!</td>
<td>

The isochrone as a geojson polygon

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">simplify</td>
<td valign="top"><a href="#geojsonsimplification">GeoJsonSimplification</a></td>
<td>

Optionally simplify the geojson data

</td>
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
<td colspan="2" align="right" valign="top">format</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the date according to the given format specifier string.

Cannot be used with "relativeTo".

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">relativeTo</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the difference between this date and the given date.
Set to null to output the difference between this date and the current date.

Should be an ISO 8601 formatted string.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeZone</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the time zone of the date

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the output locale

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
<td colspan="2" align="right" valign="top">format</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the date according to the given format specifier string.

Cannot be used with "relativeTo".

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">relativeTo</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the difference between this date and the given date.
Set to null to output the difference between this date and the current date.

Should be an ISO 8601 formatted string.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeZone</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the time zone of the date

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the output locale

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>published</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The date when this itinerary was last published. Will be null on draft versions

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">format</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the date according to the given format specifier string.

Cannot be used with "relativeTo".

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">relativeTo</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the difference between this date and the given date.
Set to null to output the difference between this date and the current date.

Should be an ISO 8601 formatted string.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeZone</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the time zone of the date

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the output locale

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastPublished</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The date when the itinerary was last published

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">format</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the date according to the given format specifier string.

Cannot be used with "relativeTo".

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">relativeTo</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the difference between this date and the given date.
Set to null to output the difference between this date and the current date.

Should be an ISO 8601 formatted string.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeZone</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the time zone of the date

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the output locale

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastDraft</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The date when the draft version was last modified

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">format</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the date according to the given format specifier string.

Cannot be used with "relativeTo".

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">relativeTo</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the difference between this date and the given date.
Set to null to output the difference between this date and the current date.

Should be an ISO 8601 formatted string.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeZone</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the time zone of the date

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the output locale

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>defaultLocale</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The default locale of this itinerary's content

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
<td>

The unique identifier of the itinerary-item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>autoRoute</strong></td>
<td valign="top"><a href="#itineraryautoroute">ItineraryAutoRoute</a></td>
<td>

If true, itinerary-directions will be created to automatically route between itinerary-locations

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
<td colspan="2" valign="top"><strong>media</strong> ⚠️</td>
<td valign="top">[<a href="#mediacontainer">MediaContainer</a>!]!</td>
<td>

List of MediaContainers containing images or other media

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

use mediaContainers instead

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The number of media to return

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mediaContainers</strong></td>
<td valign="top"><a href="#mediacontainerconnection">MediaContainerConnection</a>!</td>
<td>

List of MediaContainers containing images or other media

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>preferredMedia</strong></td>
<td valign="top"><a href="#mediacontainer">MediaContainer</a></td>
<td>

The preferred MediaContainer to use

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the read-more attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the website-url attribute

</td>
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
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

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
<td colspan="2" align="right" valign="top">segmentIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Optionally look for items that belong to all of the given segments

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
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

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
<td colspan="2" align="right" valign="top">placeIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>


Optionally look for items that contain any of the given places
Only looks at the place field on ItineraryLocations


</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">segmentIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Optionally look for items that belong to all of the given segments

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>icons</strong></td>
<td valign="top"><a href="#iconcompositionconnection">IconCompositionConnection</a>!</td>
<td>

Icons that are used in this itinerary

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

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
<td valign="top"><a href="#id">ID</a>!</td>
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
<td valign="top"><a href="#id">ID</a>!</td>
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
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Query multiple attributes optionally filtering by id and/or locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select. This will only apply to attributes with a locale, attributes that don't will not be excluded.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">includeNoLocale</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether or not to include attributes without locales in the results

</td>
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
<td>

Elevation data of the itinerary

</td>
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
<td>

Unique identifier for the itinerary-item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>siblingPositionNumber</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

A number corresponding to the item's position compared to it's siblings.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>

Only count items of the given type

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skipOptional</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Don't count locations that are optional. Non-locations will always be counted.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skipOmitList</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Don't count items that have the omit-list attrubute set to true

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
<td colspan="2" valign="top"><strong>media</strong> ⚠️</td>
<td valign="top">[<a href="#mediacontainer">MediaContainer</a>!]!</td>
<td>

List of MediaContainers containing images or other media

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

use mediaContainers instead

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The number of media to return

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mediaContainers</strong></td>
<td valign="top"><a href="#mediacontainerconnection">MediaContainerConnection</a>!</td>
<td>

List of MediaContainers containing images or other media

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>preferredMedia</strong></td>
<td valign="top"><a href="#mediacontainer">MediaContainer</a></td>
<td>

The preferred MediaContainer to use

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the read-more attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the website-url attribute

</td>
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
<td colspan="2" align="right" valign="top">segmentIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Optionally look for items that belong to all of the given segments

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
<td colspan="2" align="right" valign="top">segmentIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Optionally look for items that belong to all of the given segments

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
<td colspan="2" align="right" valign="top">segmentIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Optionally look for items that belong to all of the given segments

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ancestors</strong></td>
<td valign="top"><a href="#itineraryitemconnection">ItineraryItemConnection</a>!</td>
<td>

All ancestors of the itinerary-item

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

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
<td colspan="2" align="right" valign="top">segmentIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Optionally look for items that belong to all of the given segments

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>descendants</strong></td>
<td valign="top"><a href="#itineraryitemconnection">ItineraryItemConnection</a>!</td>
<td>

All the descendants of the itinerary-item in depth-first-search order

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

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
<td colspan="2" align="right" valign="top">segmentIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Optionally look for items that belong to all of the given segments

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
<td>

All the direct children of the itinerary-item

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

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
<td colspan="2" align="right" valign="top">segmentIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Optionally look for items that belong to all of the given segments

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
<td valign="top"><a href="#id">ID</a>!</td>
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
<td valign="top"><a href="#id">ID</a>!</td>
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
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Query multiple attributes optionally filtering by id and/or locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select. This will only apply to attributes with a locale, attributes that don't will not be excluded.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">includeNoLocale</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether or not to include attributes without locales in the results

</td>
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
<td>

Unique identifier for the itinerary-item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>siblingPositionNumber</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

A number corresponding to the item's position compared to it's siblings.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>

Only count items of the given type

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skipOptional</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Don't count locations that are optional. Non-locations will always be counted.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skipOmitList</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Don't count items that have the omit-list attrubute set to true

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
<td colspan="2" valign="top"><strong>media</strong> ⚠️</td>
<td valign="top">[<a href="#mediacontainer">MediaContainer</a>!]!</td>
<td>

List of MediaContainers containing images or other media

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

use mediaContainers instead

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The number of media to return

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mediaContainers</strong></td>
<td valign="top"><a href="#mediacontainerconnection">MediaContainerConnection</a>!</td>
<td>

List of MediaContainers containing images or other media

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>preferredMedia</strong></td>
<td valign="top"><a href="#mediacontainer">MediaContainer</a></td>
<td>

The preferred MediaContainer to use

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the read-more attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the website-url attribute

</td>
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
<td colspan="2" align="right" valign="top">segmentIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Optionally look for items that belong to all of the given segments

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
<td colspan="2" align="right" valign="top">segmentIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Optionally look for items that belong to all of the given segments

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
<td colspan="2" align="right" valign="top">segmentIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Optionally look for items that belong to all of the given segments

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ancestors</strong></td>
<td valign="top"><a href="#itineraryitemconnection">ItineraryItemConnection</a>!</td>
<td>

All ancestors of the itinerary-item

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

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
<td colspan="2" align="right" valign="top">segmentIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Optionally look for items that belong to all of the given segments

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>descendants</strong></td>
<td valign="top"><a href="#itineraryitemconnection">ItineraryItemConnection</a>!</td>
<td>

All the descendants of the itinerary-item in depth-first-search order

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

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
<td colspan="2" align="right" valign="top">segmentIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Optionally look for items that belong to all of the given segments

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
<td>

All the direct children of the itinerary-item

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

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
<td colspan="2" align="right" valign="top">segmentIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Optionally look for items that belong to all of the given segments

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
<td valign="top"><a href="#id">ID</a>!</td>
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
<td valign="top"><a href="#id">ID</a>!</td>
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
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Query multiple attributes optionally filtering by id and/or locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select. This will only apply to attributes with a locale, attributes that don't will not be excluded.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">includeNoLocale</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether or not to include attributes without locales in the results

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bounds</strong></td>
<td valign="top"><a href="#bounds">Bounds</a></td>
<td>

Bounds for the itinerary-directions and it's descendants

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>origin</strong></td>
<td valign="top"><a href="#itinerarylocation">ItineraryLocation</a></td>
<td>

The itinerary-location that is the starting point of the directions

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>destination</strong></td>
<td valign="top"><a href="#itinerarylocation">ItineraryLocation</a></td>
<td>

The itinerary-location that is the ending point of the directions

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
<td>

The duration of this itinerary-directions

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>durationMin</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

The minimum duration of this itinerary-directions

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">unit</td>
<td valign="top"><a href="#durationunit">DurationUnit</a>!</td>
<td>

The unit of the output value

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>durationMax</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

The maximum duration of this itinerary-directions

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">unit</td>
<td valign="top"><a href="#durationunit">DurationUnit</a>!</td>
<td>

The unit of the output value

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>distance</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

The estimated distance of this itinerary-directions

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">unit</td>
<td valign="top"><a href="#distanceunit">DistanceUnit</a>!</td>
<td>

The unit of the output value

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>elevation</strong></td>
<td valign="top"><a href="#elevation">Elevation</a>!</td>
<td>

The elevation details of this itinerary-directions

</td>
</tr>
</tbody>
</table>

### ItineraryDirectionsConnection

Connection of ItineraryDirectionss

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
<td valign="top">[<a href="#itinerarydirectionsedge">ItineraryDirectionsEdge</a>!]!</td>
<td>

All the edges in this page of the connection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#itinerarydirections">ItineraryDirections</a>!]!</td>
<td>

Shortcut for edges[].node

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Details regarding the current page of the connnection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The total number of items in the connection (in all pages)

</td>
</tr>
</tbody>
</table>

### ItineraryDirectionsDurations

An itinerary-directions duration value

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

Unique identifier for this duration

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>duration</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

The duration value

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">unit</td>
<td valign="top"><a href="#durationunit">DurationUnit</a>!</td>
<td>

The unit of the output value

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>label</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Label for the duration

</td>
</tr>
</tbody>
</table>

### ItineraryDirectionsEdge

Edge containing a ItineraryDirections

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
<td>

The cursor string pointing to this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#itinerarydirections">ItineraryDirections</a>!</td>
<td>

The item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>direction</strong></td>
<td valign="top"><a href="#itinerarydirectionsdirection">ItineraryDirectionsDirection</a>!</td>
<td>

Whether this itinerary-directions is inbound or outbound from the itinerary-location

</td>
</tr>
</tbody>
</table>

### ItineraryItemCascadedChanges

Changes to an itinerary caused by a mutation

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
<td>

Itinerary-items that were deleted due to the mutation

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>created</strong></td>
<td valign="top">[<a href="#itineraryitem">ItineraryItem</a>!]!</td>
<td>

Itinerary-items that were created due to the mutation

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updated</strong></td>
<td valign="top">[<a href="#itineraryitem">ItineraryItem</a>!]!</td>
<td>

Itinerary-items that were updated due to the mutation

</td>
</tr>
</tbody>
</table>

### ItineraryItemConnection

Connection of ItineraryItems

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
<td>

All the edges in this page of the connection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#itineraryitem">ItineraryItem</a>!]!</td>
<td>

Shortcut for edges[].node

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Details regarding the current page of the connnection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The total number of items in the connection (in all pages)

</td>
</tr>
</tbody>
</table>

### ItineraryItemEdge

Edge containing a ItineraryItem

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
<td>

The cursor string pointing to this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#itineraryitem">ItineraryItem</a>!</td>
<td>

The item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edgePositionNumber</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

A number corresponding to the item's position in the connection.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>

Only count items of the given type

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skipOptional</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Don't count ItineraryLocations that are optional. Other types of ItineraryItems will be counted.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skipOmitList</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Don't count items that have the omit-list attrubute set to true

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>directions</strong></td>
<td valign="top"><a href="#itinerarydirectionsconnection">ItineraryDirectionsConnection</a>!</td>
<td>

List itinerary-directions connecting this node to other nodes in the connection

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">direction</td>
<td valign="top"><a href="#itinerarydirectionsdirection">ItineraryDirectionsDirection</a></td>
<td>

Filter inbound or outbound itinerary-directions

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limitImmediate</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Limit to only directions under nodes that come immediately before or after this node.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skipOptional</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Limit to only directions under nodes that are not optional locations. Will be applied before limitImmediate.

</td>
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
<td>

Unique identifier for the itinerary-item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>siblingPositionNumber</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

A number corresponding to the item's position compared to it's siblings.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>

Only count items of the given type

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skipOptional</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Don't count locations that are optional. Non-locations will always be counted.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skipOmitList</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Don't count items that have the omit-list attrubute set to true

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
<td colspan="2" valign="top"><strong>media</strong> ⚠️</td>
<td valign="top">[<a href="#mediacontainer">MediaContainer</a>!]!</td>
<td>

List of MediaContainers containing images or other media

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

use mediaContainers instead

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The number of media to return

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mediaContainers</strong></td>
<td valign="top"><a href="#mediacontainerconnection">MediaContainerConnection</a>!</td>
<td>

List of MediaContainers containing images or other media

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>preferredMedia</strong></td>
<td valign="top"><a href="#mediacontainer">MediaContainer</a></td>
<td>

The preferred MediaContainer to use

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the read-more attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the website-url attribute

</td>
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
<td colspan="2" align="right" valign="top">segmentIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Optionally look for items that belong to all of the given segments

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
<td colspan="2" align="right" valign="top">segmentIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Optionally look for items that belong to all of the given segments

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
<td colspan="2" align="right" valign="top">segmentIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Optionally look for items that belong to all of the given segments

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ancestors</strong></td>
<td valign="top"><a href="#itineraryitemconnection">ItineraryItemConnection</a>!</td>
<td>

All ancestors of the itinerary-item

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

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
<td colspan="2" align="right" valign="top">segmentIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Optionally look for items that belong to all of the given segments

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>descendants</strong></td>
<td valign="top"><a href="#itineraryitemconnection">ItineraryItemConnection</a>!</td>
<td>

All the descendants of the itinerary-item in depth-first-search order

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

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
<td colspan="2" align="right" valign="top">segmentIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Optionally look for items that belong to all of the given segments

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
<td>

All the direct children of the itinerary-item

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

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
<td colspan="2" align="right" valign="top">segmentIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Optionally look for items that belong to all of the given segments

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
<td valign="top"><a href="#id">ID</a>!</td>
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
<td valign="top"><a href="#id">ID</a>!</td>
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
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Query multiple attributes optionally filtering by id and/or locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select. This will only apply to attributes with a locale, attributes that don't will not be excluded.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">includeNoLocale</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether or not to include attributes without locales in the results

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bounds</strong></td>
<td valign="top"><a href="#bounds">Bounds</a></td>
<td>

Bounds for the itinerary-location and it's descendants

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">raw</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If true, bounds will be the raw value on the location rather than a calculated value that takes descendants into account

</td>
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
<td>

The position of the collection-location (derived from place if not overridden)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>optional</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Whether the location is an optional stop

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>contact</strong></td>
<td valign="top"><a href="#placecontact">PlaceContact</a>!</td>
<td>

Contact information for the itinerary location

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address</strong></td>
<td valign="top"><a href="#placeaddress">PlaceAddress</a>!</td>
<td>

Address information for the itinerary location

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>directions</strong></td>
<td valign="top"><a href="#itinerarydirectionsconnection">ItineraryDirectionsConnection</a>!</td>
<td>

Retrieves itinerary-directions associated with this itinerary-location

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">direction</td>
<td valign="top"><a href="#itinerarydirectionsdirection">ItineraryDirectionsDirection</a></td>
<td>

Filter inbound or outbound itinerary-directions

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">accuracy</td>
<td valign="top"><a href="#itinerarydirectionsaccuracy">ItineraryDirectionsAccuracy</a></td>
<td>

How to determine if an itinerary-directions is related to the itinerary-location

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">restrict</td>
<td valign="top"><a href="#itinerarydirectionsrestrict">ItineraryDirectionsRestrict</a></td>
<td>

Restrict search to only portions of the itinerary. If set to null, directions from any part of the itinerary will be returned

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">segmentIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Optionally look for items that belong to all of the given segments

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>icon</strong></td>
<td valign="top"><a href="#iconcomposition">IconComposition</a></td>
<td>

The IconComposition used by the this ItineraryLocation

</td>
</tr>
</tbody>
</table>

### ItinerarySearchConnection

Connection of ItinerarySearchs

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
<td valign="top">[<a href="#itinerarysearchedge">ItinerarySearchEdge</a>!]!</td>
<td>

All the edges in this page of the connection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#itinerarysearchnode">ItinerarySearchNode</a>!]!</td>
<td>

Shortcut for edges[].node

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Details regarding the current page of the connnection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The total number of items in the connection (in all pages)

</td>
</tr>
</tbody>
</table>

### ItinerarySearchEdge

Edge containing a ItinerarySearch

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
<td>

The cursor string pointing to this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#itinerarysearchnode">ItinerarySearchNode</a>!</td>
<td>

The item

</td>
</tr>
</tbody>
</table>

### ItinerarySearchNode

A result from an itinerary search

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
<td valign="top"><a href="#itinerary">Itinerary</a>!</td>
<td>

The full itinerary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The Globally Unique ID of the itinerary.

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
<td colspan="2" valign="top"><strong>created</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The date when the itinerary was created

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">format</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the date according to the given format specifier string.

Cannot be used with "relativeTo".

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">relativeTo</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the difference between this date and the given date.
Set to null to output the difference between this date and the current date.

Should be an ISO 8601 formatted string.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeZone</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the time zone of the date

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the output locale

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
<td colspan="2" align="right" valign="top">format</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the date according to the given format specifier string.

Cannot be used with "relativeTo".

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">relativeTo</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the difference between this date and the given date.
Set to null to output the difference between this date and the current date.

Should be an ISO 8601 formatted string.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeZone</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the time zone of the date

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the output locale

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>published</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The date when this itinerary was last published. Will be null on draft versions

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">format</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the date according to the given format specifier string.

Cannot be used with "relativeTo".

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">relativeTo</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the difference between this date and the given date.
Set to null to output the difference between this date and the current date.

Should be an ISO 8601 formatted string.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeZone</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the time zone of the date

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the output locale

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastPublished</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The date when the itinerary was last published

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">format</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the date according to the given format specifier string.

Cannot be used with "relativeTo".

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">relativeTo</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the difference between this date and the given date.
Set to null to output the difference between this date and the current date.

Should be an ISO 8601 formatted string.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeZone</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the time zone of the date

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the output locale

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastDraft</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The date when the draft version was last modified

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">format</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the date according to the given format specifier string.

Cannot be used with "relativeTo".

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">relativeTo</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the difference between this date and the given date.
Set to null to output the difference between this date and the current date.

Should be an ISO 8601 formatted string.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeZone</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the time zone of the date

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the output locale

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>preferredMedia</strong></td>
<td valign="top"><a href="#mediacontainer">MediaContainer</a></td>
<td>

The preferred MediaContainer to use

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bounds</strong></td>
<td valign="top"><a href="#bounds">Bounds</a></td>
<td>

Bounds for the itinerary item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalLocations</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Total number of ItineraryLocations inside this Itinerary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>defaultLocale</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The default locale of this itinerary's content

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The type of itinerary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>listed</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether this itinerary is publically listed

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>genres</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td>

The genres of this Itinerary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>externalId</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

Identifier from an external source this itinerary is associated with

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>externalSource</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The source of this itinerary's externalId

</td>
</tr>
</tbody>
</table>

### MediaContainer

A container for a MediaResource

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

Unique identifier for this container

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>resource</strong></td>
<td valign="top"><a href="#mediaresourceembedded">MediaResourceEmbedded</a>!</td>
<td>

The MediaResource inside this container

</td>
</tr>
</tbody>
</table>

### MediaContainerConnection

Connection of MediaContainers

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
<td valign="top">[<a href="#mediacontaineredge">MediaContainerEdge</a>!]!</td>
<td>

All the edges in this page of the connection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#mediacontainer">MediaContainer</a>!]!</td>
<td>

Shortcut for edges[].node

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Details regarding the current page of the connnection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The total number of items in the connection (in all pages)

</td>
</tr>
</tbody>
</table>

### MediaContainerEdge

Edge containing a MediaContainer

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
<td>

The cursor string pointing to this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#mediacontainer">MediaContainer</a>!</td>
<td>

The item

</td>
</tr>
</tbody>
</table>

### MediaImage

A MediaResource representing an image

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

Unique identifier for the media-resource

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
<td>

Text caption for the media-resource

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attribution</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Text attribution for the source of the media-resource

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>copyright</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Copyright details of the media-resource

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hasContent</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Will be true if the resource has a caption, attribution or copyright

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>altText</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alternative text for the media-resource

</td>
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
<td valign="top"><a href="#id">ID</a>!</td>
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
<td valign="top"><a href="#id">ID</a>!</td>
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
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Query multiple attributes optionally filtering by id and/or locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select. This will only apply to attributes with a locale, attributes that don't will not be excluded.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">includeNoLocale</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether or not to include attributes without locales in the results

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>originalSize</strong></td>
<td valign="top">[<a href="#int">Int</a>!]</td>
<td>

The original width and height of the image

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Provides the URL of the media

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The specific source id to obtain the URL

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">bestFit</td>
<td valign="top">[<a href="#int">Int</a>!]</td>
<td>

The dimensions as [width,height] to identify a preferred source for the media

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
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The specific source id to obtain the URL

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">bestFit</td>
<td valign="top">[<a href="#int">Int</a>!]</td>
<td>

The dimensions as [width,height] to identify a preferred source for the media

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
<td valign="top">[<a href="#id">ID</a>!]!</td>
<td>

Ids of all exif data in this media-image

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>exif</strong></td>
<td valign="top"><a href="#mediaimageexif">MediaImageExif</a></td>
<td>

Look up one exif value in this media-image by id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Unique identifier of the exif value to look up

</td>
</tr>
</tbody>
</table>

### MediaImageExif

One exif datum on a media-image

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

Unique identifier of this exif datum

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#json">JSON</a>!</td>
<td>

The exif value

</td>
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
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A optional identifier for the source

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The content-type of the media source

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

### MediaResourceFailedToLoad

Represents an embedded MediaResource that failed to load

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
<td>

Other changes to the itinerary that caused by moving the itinerary-item

</td>
</tr>
</tbody>
</table>

### PageInfo

Details regarding a page in a connnection

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
<td>

True if there is a page before this one

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hasNextPage</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

True if there is a page after this one

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startCursor</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The cursor of the first edge in this page

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>endCursor</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The cursor of the last edge in this page

</td>
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
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The Globally Unique ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>resolutionError</strong></td>
<td valign="top"><a href="#resolutionerror">ResolutionError</a></td>
<td>

If non-null, an error occured while resolving this place and only a subset of data will be accessible

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for `Place.name`

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The name of the place

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
<td valign="top"><a href="#placehours">PlaceHours</a></td>
<td>

The operating hours for this place, as encoded in OpenStreetMap hours specification

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>maki</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The maki icon for this place

</td>
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
<td valign="top"><a href="#id">ID</a>!</td>
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
<td valign="top"><a href="#id">ID</a>!</td>
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
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Query multiple attributes optionally filtering by id and/or locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select. This will only apply to attributes with a locale, attributes that don't will not be excluded.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">includeNoLocale</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether or not to include attributes without locales in the results

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attribution</strong></td>
<td valign="top">[<a href="#placeattribution">PlaceAttribution</a>!]!</td>
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
<td colspan="2" valign="top"><strong>media</strong> ⚠️</td>
<td valign="top">[<a href="#mediacontainer">MediaContainer</a>!]!</td>
<td>

List of MediaContainers supplied with the place information, such as images of the places

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

use mediaContainers instead

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The number of media to return

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mediaContainers</strong></td>
<td valign="top"><a href="#mediacontainerconnection">MediaContainerConnection</a>!</td>
<td>

List of MediaContainers supplied with the place information, such as images of the places

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>preferredMedia</strong></td>
<td valign="top"><a href="#mediacontainer">MediaContainer</a></td>
<td>

The preferred MediaContainer to use

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the read-more attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the website-url attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>navigationUrl</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A url displaying how to navigate to this place

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">provider</td>
<td valign="top"><a href="#placenavigationurlprovider">PlaceNavigationUrlProvider</a>!</td>
<td>

The provider of the navigation url

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>towards</strong></td>
<td valign="top">[<a href="#placetowards">PlaceTowards</a>!]!</td>
<td>

Calculate distance and bearing information from the specified positions to this place

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">positions</td>
<td valign="top">[<a href="#positioninput">PositionInput</a>!]!</td>
<td>

Positions to calculate against

</td>
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
<td colspan="2" valign="top"><strong>mediaResource</strong></td>
<td valign="top"><a href="#mediaresourceembedded">MediaResourceEmbedded</a></td>
<td>

Any media to be used in attribution, such as watermarks

</td>
</tr>
</tbody>
</table>

### PlaceContact

Contact information for a Place

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
<td>

Contact website for this place

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>phoneNumber</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Phone number for this place

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>emailAddress</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Email address for this place

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bookingUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Booking url for this place

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>facebookUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Facebook page for this place

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>twitterUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Twitter for this place

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>instagramUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Instagram for this place

</td>
</tr>
</tbody>
</table>

### PlaceHours

The opening hours for a place

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
<td colspan="2" valign="top"><strong>osmTag</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The opening hours formatted in the OpenStreetMap opening_hours tag format.

See: <https://wiki.openstreetmap.org/wiki/Key:opening_hours/specification>

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>weekStable</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Whether or not the hours are the same each week.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#placehoursstatus">PlaceHoursStatus</a>!</td>
<td>

Look up the open/closed status of the place for the current time or a given datetime.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">datetime</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The datetime to look up, if omitted or null, the current time will be used.

Should be an ISO 8601 formatted string.
If the timezone information is omitted, UTC will be assumed.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>comment</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Look up the place hours comment (if any) for the current time or a given datetime.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">datetime</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The datetime to look up, if omitted or null, the current time will be used.

Should be an ISO 8601 formatted string.
If the timezone information is omitted, UTC will be assumed.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>intervals</strong></td>
<td valign="top"><a href="#placehoursintervalconnection">PlaceHoursIntervalConnection</a>!</td>
<td>

Look up intervals where the opening hours status/comment for the place changes

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">from</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Look up intervals starting from this datetime. If omitted or null, the current time will be used.

Should be an ISO 8601 formatted string.
If the timezone information is omitted, UTC will be assumed.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">to</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Look up intervals up to this datetime.

If both the "to" and "offset" arguments are omitted or null, intervals will be calculated without limit.
Cannot be used with the "offset" argument.

Should be an ISO 8601 formatted string.
If the timezone information is omitted, UTC will be assumed.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">offset</td>
<td valign="top"><a href="#datetimeoffset">DatetimeOffset</a></td>
<td>

Alternative to the "to" argument, an offset from the "from" datetime.
If the "from" argument is not specified, this specifies and offset from the current time.

If both the "to" and "offset" arguments are omitted or null, intervals will be calculated without limit.
Cannot be used with the "to" argument.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">status</td>
<td valign="top"><a href="#placehoursstatus">PlaceHoursStatus</a></td>
<td>

Optionally filter to only intervals with the given status

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>forDays</strong></td>
<td valign="top">[<a href="#placehoursforday">PlaceHoursForDay</a>!]!</td>
<td>

Look up the opening hours for a specific day. Days are calculated according to the local time of the place.

Will return a maximum of 90 days.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">days</td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td>

Look up hours for the specified days.

Should be ISO 8601 formatted strings.
Time information will be ignored.
Cannot be used with the "from", "to" or "offset" arguments.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">from</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Look up hours starting from this day. If omitted or null, the current day (local time) will be used.

Should be an ISO 8601 formatted string.
Time information will be ignored.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">to</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Look up hours up to this day.

If both the "to" and "offset" arguments are omitted or null, the next 7 days from the from day will be used.
Cannot be used with the "offset" argument.

Should be an ISO 8601 formatted string.
Time information will be ignored.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">offset</td>
<td valign="top"><a href="#datetimeoffset">DatetimeOffset</a></td>
<td>

Alternative to the "to" argument, an offset from the "from" datetime.
If the "from" argument is not specified, this specifies and offset from the current time.

If both the "to" and "offset" arguments are omitted or null, the next 7 days from the from day will be used.
Cannot be used with the "to" argument.

</td>
</tr>
</tbody>
</table>

### PlaceHoursForDay

The opening hour for a place on a specific day

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
<td colspan="2" valign="top"><strong>date</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The date of the day.
A full ISO 8061 formatted datetime corresponding to 12:00 am local time.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">format</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the date according to the given format specifier string.

Cannot be used with "relativeTo".

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">relativeTo</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the difference between this date and the given date.
Set to null to output the difference between this date and the current date.

Should be an ISO 8601 formatted string.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeZone</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the time zone of the date

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the output locale

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>intervals</strong></td>
<td valign="top">[<a href="#placehoursinterval">PlaceHoursInterval</a>!]!</td>
<td>

The opening hour intervals for this day.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">status</td>
<td valign="top"><a href="#placehoursstatus">PlaceHoursStatus</a></td>
<td>

Optionally filter to only intervals with the given status

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>publicHolidays</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

The name of any public holidays on this day.

</td>
</tr>
</tbody>
</table>

### PlaceHoursInterval

The opening hours for a place during the interval between two datetimes

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
<td colspan="2" valign="top"><strong>from</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The starting datetime of this interval

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">format</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the date according to the given format specifier string.

Cannot be used with "relativeTo".

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">relativeTo</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the difference between this date and the given date.
Set to null to output the difference between this date and the current date.

Should be an ISO 8601 formatted string.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeZone</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the time zone of the date

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the output locale

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>to</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The ending datetime of this interval, will be null if there is no following interval and the status/comment will no longer change

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">format</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the date according to the given format specifier string.

Cannot be used with "relativeTo".

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">relativeTo</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the difference between this date and the given date.
Set to null to output the difference between this date and the current date.

Should be an ISO 8601 formatted string.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeZone</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the time zone of the date

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the output locale

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#placehoursstatus">PlaceHoursStatus</a>!</td>
<td>

The open/closed status of the place during this interval

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>comment</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The place hours comment (if any) during this interval

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>publicHolidays</strong></td>
<td valign="top">[<a href="#placehoursintervalholiday">PlaceHoursIntervalHoliday</a>!]!</td>
<td>

The holidays that occur during this interval

Note: Will return holidays up to a maximum of one year from the "from" date

</td>
</tr>
</tbody>
</table>

### PlaceHoursIntervalConnection

Connection of PlaceHoursIntervals

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
<td valign="top">[<a href="#placehoursintervaledge">PlaceHoursIntervalEdge</a>!]!</td>
<td>

All the edges in this page of the connection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#placehoursinterval">PlaceHoursInterval</a>!]!</td>
<td>

Shortcut for edges[].node

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Details regarding the current page of the connnection

</td>
</tr>
</tbody>
</table>

### PlaceHoursIntervalEdge

Edge containing a PlaceHoursInterval

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
<td>

The cursor string pointing to this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#placehoursinterval">PlaceHoursInterval</a>!</td>
<td>

The item

</td>
</tr>
</tbody>
</table>

### PlaceHoursIntervalHoliday

A holiday that occurs during an interval

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
<td colspan="2" valign="top"><strong>date</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The date of the holiday.
A full ISO 8061 formatted datetime corresponding to 12:00 am local time.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">format</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the date according to the given format specifier string.

Cannot be used with "relativeTo".

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">relativeTo</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the difference between this date and the given date.
Set to null to output the difference between this date and the current date.

Should be an ISO 8601 formatted string.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeZone</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the time zone of the date

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the output locale

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The name of the holiday.

</td>
</tr>
</tbody>
</table>

### PlaceLayer

A layer on a Place

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

Unique identifier for this place layer

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name for this place layer

</td>
</tr>
</tbody>
</table>

### PlaceSearchConnection

Connection of PlaceSearchs

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
<td valign="top">[<a href="#placesearchedge">PlaceSearchEdge</a>!]!</td>
<td>

All the edges in this page of the connection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#placesearchnode">PlaceSearchNode</a>!]!</td>
<td>

Shortcut for edges[].node

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Details regarding the current page of the connnection

</td>
</tr>
</tbody>
</table>

### PlaceSearchEdge

Edge containing a PlaceSearch

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
<td>

The cursor string pointing to this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#placesearchnode">PlaceSearchNode</a>!</td>
<td>

The item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>single</strong></td>
<td valign="top"><a href="#textsearchresult">TextSearchResult</a>!</td>
<td>

The one line text search result

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>main</strong></td>
<td valign="top"><a href="#textsearchresult">TextSearchResult</a>!</td>
<td>

The main line of the two line search result

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>secondary</strong></td>
<td valign="top"><a href="#textsearchresult">TextSearchResult</a>!</td>
<td>

The secondary line of the two line search result

</td>
</tr>
</tbody>
</table>

### PlaceSearchNode

A result from a place search

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

The Globally Unique ID of the place.

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
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for `Place.name`

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The name of the place

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
<td colspan="2" valign="top"><strong>address</strong></td>
<td valign="top"><a href="#placeaddress">PlaceAddress</a>!</td>
<td>

The address of the place

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>maki</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The maki icon for this place

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
<td colspan="2" valign="top"><strong>contributor</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Source of the place data

</td>
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

The point

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bearing</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

The bearing angle from the place to the point

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">unit</td>
<td valign="top"><a href="#angleunit">AngleUnit</a>!</td>
<td>

The unit of the output value

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>distance</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

The distance from the place to the point

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">unit</td>
<td valign="top"><a href="#distanceunit">DistanceUnit</a>!</td>
<td>

The unit of the output value

</td>
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

A position on a map with a longitude and latitude

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
<td>

The position in the form: [longitude, latitude]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>latLon</strong></td>
<td valign="top">[<a href="#float">Float</a>!]!</td>
<td>

The position in the form: [latitude, longitude]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lat</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

The position's latitude

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lon</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

The position's longitude

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Identifier for the Position type useful for client-side caching

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>layers</strong></td>
<td valign="top">[<a href="#placelayer">PlaceLayer</a>!]!</td>
<td>

PlaceLayers associated to this position

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
<td valign="top"><a href="#id">ID</a>!</td>
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
<td valign="top"><a href="#id">ID</a>!</td>
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
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Query multiple attributes optionally filtering by id and/or locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select. This will only apply to attributes with a locale, attributes that don't will not be excluded.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">includeNoLocale</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether or not to include attributes without locales in the results

</td>
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
<td valign="top"><a href="#profiletype">ProfileType</a>!</td>
<td>

The type of the profile

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>autoApproveFollows</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Indicates if follows on this profile are automatically approved

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>handle</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The (optional) unique handle of the profile

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
<td colspan="2" valign="top"><strong>avatar</strong></td>
<td valign="top"><a href="#mediacontainer">MediaContainer</a></td>
<td>

The avatar

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>followers</strong></td>
<td valign="top"><a href="#profilefollowconnection">ProfileFollowConnection</a>!</td>
<td>

Profiles that follow this profile

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">status</td>
<td valign="top"><a href="#profilefollowstatus">ProfileFollowStatus</a></td>
<td>

Filter by follow request status

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">handle</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Filter by follower's handle

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>following</strong></td>
<td valign="top"><a href="#profilefollowconnection">ProfileFollowConnection</a>!</td>
<td>

Profiles that this profile follows

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">status</td>
<td valign="top"><a href="#profilefollowstatus">ProfileFollowStatus</a></td>
<td>

Filter by follow request status

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">handle</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Filter by following profile's handle

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>billingDetails</strong></td>
<td valign="top"><a href="#billingdetails">BillingDetails</a></td>
<td>

Fetch billing details associated with this profile

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>billingSubscriptions</strong></td>
<td valign="top"><a href="#billingsubscriptionconnection">BillingSubscriptionConnection</a>!</td>
<td>

Fetch billing subscriptions associated with a profile

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>connectedApps</strong></td>
<td valign="top"><a href="#connectedappconnection">ConnectedAppConnection</a>!</td>
<td>

Fetch connected-apps associated with this profile

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">deleted</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Return only deleted applications

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">expired</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Return only expired applications

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#connectedapptype">ConnectedAppType</a></td>
<td>

Filter by the app's type

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">authType</td>
<td valign="top"><a href="#connectedappauthtype">ConnectedAppAuthType</a></td>
<td>

Filter by the app's authorization type

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">serviceKey</td>
<td valign="top"><a href="#connectedappservicekey">ConnectedAppServiceKey</a></td>
<td>

Filter by the app's service key

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
<td valign="top"><a href="#id">ID</a>!</td>
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
<td valign="top"><a href="#id">ID</a>!</td>
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
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Query multiple attributes optionally filtering by id and/or locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select. This will only apply to attributes with a locale, attributes that don't will not be excluded.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">includeNoLocale</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether or not to include attributes without locales in the results

</td>
</tr>
</tbody>
</table>

### ProfileConnection

Connection of Profiles

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
<td>

All the edges in this page of the connection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#profile">Profile</a>!]!</td>
<td>

Shortcut for edges[].node

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Details regarding the current page of the connnection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The total number of items in the connection (in all pages)

</td>
</tr>
</tbody>
</table>

### ProfileEdge

Edge containing a Profile

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
<td>

The cursor string pointing to this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#profile">Profile</a>!</td>
<td>

The item

</td>
</tr>
</tbody>
</table>

### ProfileFollowConnection

Connection of ProfileFollows

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
<td valign="top">[<a href="#profilefollowedge">ProfileFollowEdge</a>!]!</td>
<td>

All the edges in this page of the connection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#profile">Profile</a>!]!</td>
<td>

Shortcut for edges[].node

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Details regarding the current page of the connnection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The total number of items in the connection (in all pages)

</td>
</tr>
</tbody>
</table>

### ProfileFollowEdge

Edge containing a ProfileFollow

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
<td>

The cursor string pointing to this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#profile">Profile</a>!</td>
<td>

The item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#profilefollowstatus">ProfileFollowStatus</a>!</td>
<td>

The status of the follow request

</td>
</tr>
</tbody>
</table>

### PublishItineraryPayload

Response to Mutation.publishItinerary

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

The published itinerary

</td>
</tr>
</tbody>
</table>

### ResolutionError

Error which occurred while resolving an ID

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
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Human readable error message

</td>
</tr>
</tbody>
</table>

### RevertItineraryPayload

Response to Mutation.revertItinerary

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

The reverted itinerary

</td>
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
<tr>
<td colspan="2" valign="top"><strong>modes</strong></td>
<td valign="top">[<a href="#routemode">RouteMode</a>!]!</td>
<td>

The set of all RouteModes used by all the segments

</td>
</tr>
</tbody>
</table>

### RouteConnection

Connection of Routes

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
<td>

All the edges in this page of the connection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#route">Route</a>!]!</td>
<td>

Shortcut for edges[].node

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Details regarding the current page of the connnection

</td>
</tr>
</tbody>
</table>

### RouteEdge

Edge containing a Route

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
<td>

The cursor string pointing to this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#route">Route</a>!</td>
<td>

The item

</td>
</tr>
</tbody>
</table>

### RouteSegment

One segment of a Route

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
<td>

The way positions along this route

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>useRouteSearching</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Whether this route was searched for

</td>
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
<td>

Optionally simplify the geojson data

</td>
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
<td>

The unit of the output value

</td>
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
<td>

The unit of the output value

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>elevation</strong></td>
<td valign="top"><a href="#elevation">Elevation</a>!</td>
<td>

The estimated elevation details of this route

</td>
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
<td>

Optionally simplify the path data before encoding

</td>
</tr>
</tbody>
</table>

### StartMediaUploadPayload

Result of starting a media upload

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

### TextSearchResult

A text search result with a label and matches to highlight

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
<td>

Search result label

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>matches</strong></td>
<td valign="top">[<a href="#textsearchresultmatch">TextSearchResultMatch</a>!]!</td>
<td>

Text substring matches in the label text

</td>
</tr>
</tbody>
</table>

### TextSearchResultMatch

A details of a single result from a text search

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
<td>

Start of the match

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>length</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Length of the match

</td>
</tr>
</tbody>
</table>

### UnfollowProfilePayload

Result of unfollowing a profile

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
<td colspan="2" valign="top"><strong>fromProfile</strong></td>
<td valign="top"><a href="#profile">Profile</a>!</td>
<td>

The follower profile

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>toProfile</strong></td>
<td valign="top"><a href="#profile">Profile</a>!</td>
<td>

The profile being followed

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#profilefollowstatus">ProfileFollowStatus</a></td>
<td>

The status of the follow request

</td>
</tr>
</tbody>
</table>

### UpdateBillingDetailsOutput

The output after updating the billing details

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
<td colspan="2" valign="top"><strong>billingDetails</strong></td>
<td valign="top"><a href="#billingdetails">BillingDetails</a>!</td>
<td>

The updated billing details

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

### UpdateConnectedAppPayload

The available fields after updating a connected app

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
<td colspan="2" valign="top"><strong>connectedApp</strong></td>
<td valign="top"><a href="#connectedapp">ConnectedApp</a></td>
<td>

The updated connected app

</td>
</tr>
</tbody>
</table>

### UpdateIconSilhouettePayload

The response after updating an icon

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
<td colspan="2" valign="top"><strong>icon</strong></td>
<td valign="top"><a href="#iconsilhouette">IconSilhouette</a></td>
<td>

The updated icon

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
<td>

Other changes to the itinerary that caused by deleting the itinerary-item

</td>
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
<td>

Other changes to the itinerary that caused by deleting the itinerary-item

</td>
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
<td>

Other changes to the itinerary that caused by deleting the itinerary-item

</td>
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
<tr>
<td colspan="2" valign="top"><strong>cascaded</strong></td>
<td valign="top"><a href="#itineraryitemcascadedchanges">ItineraryItemCascadedChanges</a>!</td>
<td>

Other changes to the itinerary that caused by updating the itinerary

</td>
</tr>
</tbody>
</table>

### UpdateMediaResourcePayload

Response payload to Mutation.updateMediaResource

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
<td>

The updated media-resource

</td>
</tr>
</tbody>
</table>

### UpdateProfilePayload

Response payload to Mutation.updateProfile

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
<td>

The updated profile

</td>
</tr>
</tbody>
</table>

### UserAgreement

An agreement made by a user

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

Profile that associated with this agreement

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>date</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The date when the agreement was made

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">format</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the date according to the given format specifier string.

Cannot be used with "relativeTo".

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">relativeTo</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the difference between this date and the given date.
Set to null to output the difference between this date and the current date.

Should be an ISO 8601 formatted string.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeZone</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the time zone of the date

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the output locale

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The type of agreement

</td>
</tr>
</tbody>
</table>

### UserAgreementConnection

Connection of UserAgreements

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
<td valign="top">[<a href="#useragreementedge">UserAgreementEdge</a>!]!</td>
<td>

All the edges in this page of the connection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#useragreement">UserAgreement</a>!]!</td>
<td>

Shortcut for edges[].node

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Details regarding the current page of the connnection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The total number of items in the connection (in all pages)

</td>
</tr>
</tbody>
</table>

### UserAgreementEdge

Edge containing a UserAgreement

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
<td>

The cursor string pointing to this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#useragreement">UserAgreement</a>!</td>
<td>

The item

</td>
</tr>
</tbody>
</table>

## Inputs

### AttributeIdentifierInput

A selector for an attribute

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
<td>

The attribute identifier

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>locale</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute

</td>
</tr>
</tbody>
</table>

### AttributeInput

Defines an attribute

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
<td>

The attribute identifier

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#json">JSON</a>!</td>
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

### BillingAddressInput

Fields for update billing address field

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
<td colspan="2" valign="top"><strong>addressLineOne</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addressLineTwo</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>locality</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>region</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>postalCode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>countryCode</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### BillingPriceInput

The billing price to use

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
<td colspan="2" valign="top"><strong>priceId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The ID of a BillingPrice

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>quantity</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

The quantity, defaults to 1

</td>
</tr>
</tbody>
</table>

### BoundsCircleInput

A bounding circle on a map defined by a center positions and a radius

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
<td>

The center position of the circle

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>radius</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

The radius of the bounding circle

</td>
</tr>
</tbody>
</table>

### BoundsInput

A bounding box on a map defined by two positions (opposite corners of the box)

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
<td>

The north-most latitude of the bounding box

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>e</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

The east-most longitude of the bounding box

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>s</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

The south-most latitude of the bounding box

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>w</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

The west-most longitude of the bounding box

</td>
</tr>
</tbody>
</table>

### CollectionItemsSort

Determine how to sort CollectionItems when listing

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
<td colspan="2" valign="top"><strong>created</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td>

Sort by the created date

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>modified</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td>

Sort by the modified date

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td>

Sort by the collection-item title

</td>
</tr>
</tbody>
</table>

### CollectionsSort

Determine how to sort Collections when listing

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
<td colspan="2" valign="top"><strong>created</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td>

Sort by the created date

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>modified</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td>

Sort by the modified date

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td>

Sort by the collection title

</td>
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
<td valign="top"><a href="#collectiondiscriminator">CollectionDiscriminator</a>!</td>
<td>

A label used to differentiate types of collections

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Title of the collection

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
<td valign="top">[<a href="#string">String</a>!]</td>
<td>

A series of strings applied to label the collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the read-more attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the website-url attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrs</strong></td>
<td valign="top">[<a href="#attributeinput">AttributeInput</a>!]</td>
<td>

Additional data defined on the collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>media</strong></td>
<td valign="top">[<a href="#createmediacontainerinput">CreateMediaContainerInput</a>!]</td>
<td>

The list of MediaContainers to add to the new Collection

</td>
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

Title for the new item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>synopsis</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A short summary text content for the new item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A longer description content for the new item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td>

A collection of strings used to label the new item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the read-more attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the website-url attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sectionIds</strong></td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

One or more sections for this new item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>externalId</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

Identifier from an external source this new item is associated with

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>externalSource</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The source of this item's externalId

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrs</strong></td>
<td valign="top">[<a href="#attributeinput">AttributeInput</a>!]</td>
<td>

Additional data defined on this CollectionLocation

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>media</strong></td>
<td valign="top">[<a href="#createmediacontainerinput">CreateMediaContainerInput</a>!]</td>
<td>

The list of MediaContainers to add to the new CollectionLocation

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>place</strong></td>
<td valign="top"><a href="#placeinput">PlaceInput</a>!</td>
<td>

The associated place record for this location

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>position</strong></td>
<td valign="top"><a href="#positioninput">PositionInput</a></td>
<td>

Override for the place's position

</td>
</tr>
</tbody>
</table>

### CreateConnectedAppInput

Create a new ConnectedApp

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
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#connectedapptype">ConnectedAppType</a></td>
<td>

The type of the connected-app

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>serviceKey</strong></td>
<td valign="top"><a href="#connectedappservicekey">ConnectedAppServiceKey</a>!</td>
<td>

Identifies the service being connected to

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>scope</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Any specific scope that has been granted to the 3rd party application

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>authType</strong></td>
<td valign="top"><a href="#connectedappauthtype">ConnectedAppAuthType</a></td>
<td>

The authenticated application method

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>privateConfiguration</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>

Encrypted JSON

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>publicId</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

3rd party ID or account ID

</td>
</tr>
</tbody>
</table>

### CreateIconCompositionInput

Create an IconComposition

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
<td valign="top"><a href="#string">String</a>!</td>
<td>

A name for this IconComposition, should be unique across the itinerary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>resourceId</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID to the Icon used by this IconComposition

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>iconFill</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Optional fill color for the icon

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shieldKey</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Indicates which shield to use

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shieldFill</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Optional fill color for the shield

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shieldStroke</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Optional stroke color for the shield

</td>
</tr>
</tbody>
</table>

### CreateIconSilhouetteInput

Fields for a new IconSilhouette

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
<td valign="top"><a href="#string">String</a>!</td>
<td>

The name of the icon, key will be generated from this value and so should be unique across the profile

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>paths</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

SVG path data for this icon, eg: "M 100 .."

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>viewBox</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Optional SVG viewBox for this icon

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrs</strong></td>
<td valign="top">[<a href="#attributeinput">AttributeInput</a>!]</td>
<td>

Additional data defined on the icon

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

The title for the new itinerary-collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>synopsis</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The synopsis for the new itinerary-collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The description for the new itinerary-collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td>

The tags for the new itinerary-collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the read-more attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the website-url attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrs</strong></td>
<td valign="top">[<a href="#attributeinput">AttributeInput</a>!]</td>
<td>

Additional data defined on the collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>media</strong></td>
<td valign="top">[<a href="#createmediacontainerinput">CreateMediaContainerInput</a>!]</td>
<td>

The list of MediaContainers to add to the new ItineraryCollection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionAtStart</strong></td>
<td valign="top"><a href="#itineraryitempositionatstart">ItineraryItemPositionAtStart</a></td>
<td>

Creates the item positioned before all its siblings

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionAtEnd</strong></td>
<td valign="top"><a href="#itineraryitempositionatend">ItineraryItemPositionAtEnd</a></td>
<td>

Creates the item positioned after all its siblings

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionAfterSibling</strong></td>
<td valign="top"><a href="#itineraryitempositionaftersibling">ItineraryItemPositionAfterSibling</a></td>
<td>

Create the item positioned after the given sibling

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionBeforeSibling</strong></td>
<td valign="top"><a href="#itineraryitempositionbeforesibling">ItineraryItemPositionBeforeSibling</a></td>
<td>

Create the item positioned before the given sibling

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionOnLastCollection</strong></td>
<td valign="top"><a href="#itineraryitempositiononlastcollection">ItineraryItemPositionOnLastCollection</a></td>
<td>

Create the item at last position of the last itinerary-collection item

</td>
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

The title for the new itinerary-directions

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>synopsis</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The synopsis for the new itinerary-directions

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The description for the new itinerary-directions

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td>

The tags for the new itinerary-directions

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the read-more attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the website-url attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrs</strong></td>
<td valign="top">[<a href="#attributeinput">AttributeInput</a>!]</td>
<td>

Additional data on the new itinerary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>media</strong></td>
<td valign="top">[<a href="#createmediacontainerinput">CreateMediaContainerInput</a>!]</td>
<td>

The list of MediaContainers to add to the new ItineraryDirections

</td>
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
<td>

The duration details of the new itinerary-directions

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>distance</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

The distance of the new itinerary-directions

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>elevation</strong></td>
<td valign="top"><a href="#elevationinput">ElevationInput</a></td>
<td>

The elevation details of the new itinerary-directions

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionAtStart</strong></td>
<td valign="top"><a href="#itineraryitempositionatstart">ItineraryItemPositionAtStart</a></td>
<td>

Creates the itinerary-directions to be before all its siblings

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionAtEnd</strong></td>
<td valign="top"><a href="#itineraryitempositionatend">ItineraryItemPositionAtEnd</a></td>
<td>

Creates the itinerary-directions to be after all its siblings

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionAfterSibling</strong></td>
<td valign="top"><a href="#itineraryitempositionaftersibling">ItineraryItemPositionAfterSibling</a></td>
<td>

Creates the itinerary-directions after the given sibling

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionBeforeSibling</strong></td>
<td valign="top"><a href="#itineraryitempositionbeforesibling">ItineraryItemPositionBeforeSibling</a></td>
<td>

Creates the itinerary-directions before the given sibling

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionOnLastCollection</strong></td>
<td valign="top"><a href="#itineraryitempositiononlastcollection">ItineraryItemPositionOnLastCollection</a></td>
<td>

Creates the itinerary-directions at the last position of the last itinerary-collection item

</td>
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
<td colspan="2" valign="top"><strong>defaultLocale</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The default locale of this itinerary's content

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The title for the new itinerary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>synopsis</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The synopsis for the new itinerary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The description for the new itinerary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td>

The tags for the new itinerary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the read-more attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the website-url attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrs</strong></td>
<td valign="top">[<a href="#attributeinput">AttributeInput</a>!]</td>
<td>

Additional data on the new itinerary

</td>
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
<td>

Elevation data of the new itinerary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>media</strong></td>
<td valign="top">[<a href="#createmediacontainerinput">CreateMediaContainerInput</a>!]</td>
<td>

The list of MediaContainers to add to the new Itinerary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>icons</strong></td>
<td valign="top">[<a href="#createiconcompositioninput">CreateIconCompositionInput</a>!]</td>
<td>

The list of IconCompositions to add to the new Itinerary

</td>
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

The title for the new itinerary-location

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>synopsis</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The synopsis for the new itinerary-location

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The description for the new itinerary-location

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td>

The tags for the new itinerary-location

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the read-more attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the website-url attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrs</strong></td>
<td valign="top">[<a href="#attributeinput">AttributeInput</a>!]</td>
<td>

Additional data defined on the collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>media</strong></td>
<td valign="top">[<a href="#createmediacontainerinput">CreateMediaContainerInput</a>!]</td>
<td>

The list of MediaContainers to add to the new ItineraryLocation

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>position</strong></td>
<td valign="top"><a href="#positioninput">PositionInput</a></td>
<td>

The position of the itinerary-location

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bounds</strong></td>
<td valign="top"><a href="#boundsinput">BoundsInput</a></td>
<td>

The bounds of the itinerary-location

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>place</strong></td>
<td valign="top"><a href="#placeinput">PlaceInput</a>!</td>
<td>

The place for this new itinerary-location

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
<td colspan="2" valign="top"><strong>icon</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

Set the optional icon, passed ID must exist in the Itinerary.icons

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionAtStart</strong></td>
<td valign="top"><a href="#itineraryitempositionatstart">ItineraryItemPositionAtStart</a></td>
<td>

Creates the item positioned before all its siblings

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionAtEnd</strong></td>
<td valign="top"><a href="#itineraryitempositionatend">ItineraryItemPositionAtEnd</a></td>
<td>

Creates the item positioned after all its siblings

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionAfterSibling</strong></td>
<td valign="top"><a href="#itineraryitempositionaftersibling">ItineraryItemPositionAfterSibling</a></td>
<td>

Create the item positioned after the given sibling

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionBeforeSibling</strong></td>
<td valign="top"><a href="#itineraryitempositionbeforesibling">ItineraryItemPositionBeforeSibling</a></td>
<td>

Create the item positioned before the given sibling

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionOnLastCollection</strong></td>
<td valign="top"><a href="#itineraryitempositiononlastcollection">ItineraryItemPositionOnLastCollection</a></td>
<td>

Create the item at last position of the last itinerary-collection item

</td>
</tr>
</tbody>
</table>

### CreateMediaContainerInput

Create a MediaContainer in a MediaContainer list

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
<td colspan="2" valign="top"><strong>resourceId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

ID to a MediaResource to contain

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionBefore</strong></td>
<td valign="top"><a href="#mediacontainerpositionbefore">MediaContainerPositionBefore</a></td>
<td>

Add the MediaContainer before another container in the list

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionAfter</strong></td>
<td valign="top"><a href="#mediacontainerpositionafter">MediaContainerPositionAfter</a></td>
<td>

Add the MediaContainer after another container in the list

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionAtStart</strong></td>
<td valign="top"><a href="#mediacontainerpositionatstart">MediaContainerPositionAtStart</a></td>
<td>

Add the MediaContainer at the start of the list

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionAtEnd</strong></td>
<td valign="top"><a href="#mediacontainerpositionatend">MediaContainerPositionAtEnd</a></td>
<td>

Add the MediaContainer at the end of the list

</td>
</tr>
</tbody>
</table>

### CreateProfileInput

Input object to Mutation.createProfile

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
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#profiletype">ProfileType</a>!</td>
<td>

The type of profile

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

The website url

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>autoApproveFollows</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

If follow requests should be automatically approved for this profile

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>avatar</strong></td>
<td valign="top"><a href="#mediacontainerinput">MediaContainerInput</a></td>
<td>

The avatar image

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrs</strong></td>
<td valign="top">[<a href="#attributeinput">AttributeInput</a>!]</td>
<td>

Additional data defined on the profile

</td>
</tr>
</tbody>
</table>

### CreateUserAgreementInput

Input object to Mutation.createUserAgreement

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
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The type of agreement

</td>
</tr>
</tbody>
</table>

### DatetimeOffset

An offset in date and/or time represented as integer differences for each datetime field

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
<td colspan="2" valign="top"><strong>years</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Positive or negative difference for years

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>months</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Positive or negative difference for months

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>weeks</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Positive or negative difference for weeks

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>days</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Positive or negative difference for days

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hours</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Positive or negative difference for hours

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>minutes</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Positive or negative difference for minutes

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>seconds</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Positive or negative difference for seconds

</td>
</tr>
</tbody>
</table>

### ElevationInput

Input elevation data

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
<td>

The cumulative elevation gain

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>loss</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

The cumulative elevation loss

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

The minimum elevation

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

The maximum elevation

</td>
</tr>
</tbody>
</table>

### FinalizeMediaUploadInput

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
<td>

List of labels to apply to the new media-resource

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attribution</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Text attribution for the source of the new media-resource

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>caption</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Text caption for the new media-resource

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>copyright</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Copyright details of the new media-resource

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attrs</strong></td>
<td valign="top">[<a href="#attributeinput">AttributeInput</a>!]</td>
<td>

Additional data to define on the new media-resource

</td>
</tr>
</tbody>
</table>

### GeoJsonSimplification

Different GeoJSON simplification algorithms

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
<td>

The Ramer-Douglas-Peucker algorithm

</td>
</tr>
</tbody>
</table>

### GeoJsonSimplificationRamerDouglasPeucker

The Ramer-Douglas-Peucker algorithm

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
<td>

The amount of application applied, higher values result in more simplification

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>highQuality</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Modify the algorithm to be slower by produce higher quality results

</td>
</tr>
</tbody>
</table>

### ItinerariesSort

Determine how to sort Itineraries when listing

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
<td colspan="2" valign="top"><strong>created</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td>

Sort by the created date

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>modified</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td>

Sort by the modified date

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td>

Sort by the itinerary title

</td>
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

Input an ItineraryDirections duration value

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
<td>

The duration value

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>label</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Label for the duration

</td>
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

### MediaContainerInput

Set a singular MediaContainer

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
<td colspan="2" valign="top"><strong>resourceId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

ID to a MediaResource to contain

</td>
</tr>
</tbody>
</table>

### MediaContainerPositionAfter

Positions the MediaContainer after a sibling MediaContainer

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
<td>

The sibling MediaContainer identifier, if null it means the top of the list (ie. before the first sibling)

</td>
</tr>
</tbody>
</table>

### MediaContainerPositionAtEnd

Positions the MediaContainer at the end of the list

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
<td colspan="2" valign="top"><strong>_</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Ignored, required by GraphQL which does not allow empty input objects

</td>
</tr>
</tbody>
</table>

### MediaContainerPositionAtStart

Positions the MediaContainer at the start of the list

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
<td colspan="2" valign="top"><strong>_</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Ignored, required by GraphQL which does not allow empty input objects

</td>
</tr>
</tbody>
</table>

### MediaContainerPositionBefore

Positions the MediaContainer before a sibling MediaContainer

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
<td>

The sibling MediaContainer identifier, if null it means the bottom of the list (ie. after the last sibling)

</td>
</tr>
</tbody>
</table>

### MoveMediaContainerInput

Move a MediaContainer within a list, exactly one of the position arguments is required.

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
<td valign="top"><a href="#string">String</a>!</td>
<td>

ID to the Container to update

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionBefore</strong></td>
<td valign="top"><a href="#mediacontainerpositionbefore">MediaContainerPositionBefore</a></td>
<td>

Move the MediaContainer before another container in the list

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionAfter</strong></td>
<td valign="top"><a href="#mediacontainerpositionafter">MediaContainerPositionAfter</a></td>
<td>

Move the MediaContainer after another container in the list

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionAtStart</strong></td>
<td valign="top"><a href="#mediacontainerpositionatstart">MediaContainerPositionAtStart</a></td>
<td>

Move the MediaContainer at the start of the list

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>positionAtEnd</strong></td>
<td valign="top"><a href="#mediacontainerpositionatend">MediaContainerPositionAtEnd</a></td>
<td>

Move the MediaContainer at the end of the list

</td>
</tr>
</tbody>
</table>

### PlaceInput

Create a new place or refer to an existing place

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
<td>

Unique place identifier

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>position</strong></td>
<td valign="top"><a href="#positioninput">PositionInput</a>!</td>
<td>

The position of the place

</td>
</tr>
</tbody>
</table>

### PositionInput

A position on a map with a longitude and latitude

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
<td>

The longitude

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lat</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

The latitude

</td>
</tr>
</tbody>
</table>

### RouteInput

Create a Route

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

Create a RouteSegment

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
<td>

The way positions along this route

</td>
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
<td>

The distance for this route segment

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>duration</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

The duration for this route segment

</td>
</tr>
</tbody>
</table>

### UpdateBillingDetailsInput

The fields to change when updating the billing details

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
<td colspan="2" valign="top"><strong>emailAddress</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The email address

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>givenName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The given name

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>familyName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The family name

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>organization</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The optional organization name

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address</strong></td>
<td valign="top"><a href="#billingaddressinput">BillingAddressInput</a>!</td>
<td>

The billing address

</td>
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
<td>

The synopsis for the collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The description for the collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td>

The tags for the collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the read-more attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the website-url attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>upsertAttrs</strong></td>
<td valign="top">[<a href="#attributeinput">AttributeInput</a>!]</td>
<td>

Insert or update attributes to the collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteAttrs</strong></td>
<td valign="top">[<a href="#attributeidentifierinput">AttributeIdentifierInput</a>!]</td>
<td>

Delete attributes to the collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createMedia</strong></td>
<td valign="top">[<a href="#createmediacontainerinput">CreateMediaContainerInput</a>!]</td>
<td>

Add multiple Media with MediaResources

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>moveMedia</strong></td>
<td valign="top">[<a href="#movemediacontainerinput">MoveMediaContainerInput</a>!]</td>
<td>

Move one or move MediaContainers

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateMedia</strong></td>
<td valign="top">[<a href="#updatemediacontainerinput">UpdateMediaContainerInput</a>!]</td>
<td>

Update one or move MediaContainers

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteMedia</strong></td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Delete one or move MediaContainers

</td>
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
<td>

Shortcut for setting the read-more attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Shortcut for setting the website-url attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sectionIds</strong></td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

One or more sections for this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>externalId</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

Identifier from an external source this item is associated with

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>externalSource</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The source of this item's externalId

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>place</strong></td>
<td valign="top"><a href="#placeinput">PlaceInput</a></td>
<td>

The associated place information for this item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>position</strong></td>
<td valign="top"><a href="#positioninput">PositionInput</a></td>
<td>

Override for the place's position

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>upsertAttrs</strong></td>
<td valign="top">[<a href="#attributeinput">AttributeInput</a>!]</td>
<td>

Insert or update attributes to the collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteAttrs</strong></td>
<td valign="top">[<a href="#attributeidentifierinput">AttributeIdentifierInput</a>!]</td>
<td>

Delete attributes to the collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createMedia</strong></td>
<td valign="top">[<a href="#createmediacontainerinput">CreateMediaContainerInput</a>!]</td>
<td>

Add multiple Media with MediaResources

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>moveMedia</strong></td>
<td valign="top">[<a href="#movemediacontainerinput">MoveMediaContainerInput</a>!]</td>
<td>

Move one or move MediaContainers

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateMedia</strong></td>
<td valign="top">[<a href="#updatemediacontainerinput">UpdateMediaContainerInput</a>!]</td>
<td>

Update one or move MediaContainers

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteMedia</strong></td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Delete one or move MediaContainers

</td>
</tr>
</tbody>
</table>

### UpdateConnectedAppInput

Updates a connected app

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
<td colspan="2" valign="top"><strong>authType</strong></td>
<td valign="top"><a href="#connectedappauthtype">ConnectedAppAuthType</a></td>
<td>

The type of the connected-app

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>scope</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Any specific scope that has been granted to the 3rd party application

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>publicId</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

3rd party ID or account ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>privateConfiguration</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Encrypted JSON

</td>
</tr>
</tbody>
</table>

### UpdateIconCompositionInput

Update an IconComposition

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
<td valign="top"><a href="#string">String</a>!</td>
<td>

ID of the IconComposition to update

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Change the name

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>resourceId</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

Change the Icon used by this IconComposition

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>iconFill</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Change the fill color for the icon, set to null to remove the fill

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shieldKey</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Change which shield to use for the icon, set to null to clear the shieldFill and shieldStroke as well

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shieldFill</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Change the fill color for the shield, set to null to remove the fill

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shieldStroke</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Change the stroke color for the shield, set to null to remove the stroke

</td>
</tr>
</tbody>
</table>

### UpdateIconSilhouetteInput

Fields for updating an IconSilhouette

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
<td>

Change the name of this icon

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>paths</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td>

SVG path data for this icon, eg: "M 100 .."

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>viewBox</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Optional SVG viewBox for this icon

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>upsertAttrs</strong></td>
<td valign="top">[<a href="#attributeinput">AttributeInput</a>!]</td>
<td>

Insert or update attributes to the icon

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteAttrs</strong></td>
<td valign="top">[<a href="#attributeidentifierinput">AttributeIdentifierInput</a>!]</td>
<td>

Delete attributes to the icon

</td>
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

The title for the itinerary-collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>synopsis</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The synopsis for the itinerary-collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The description for the itinerary-collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td>

The tags for the itinerary-collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the read-more attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the website-url attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>upsertAttrs</strong></td>
<td valign="top">[<a href="#attributeinput">AttributeInput</a>!]</td>
<td>

Insert or update attributes to the itinerary-collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteAttrs</strong></td>
<td valign="top">[<a href="#attributeidentifierinput">AttributeIdentifierInput</a>!]</td>
<td>

Delete attributes to the itinerary-collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createMedia</strong></td>
<td valign="top">[<a href="#createmediacontainerinput">CreateMediaContainerInput</a>!]</td>
<td>

Add multiple Media with MediaResources

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>moveMedia</strong></td>
<td valign="top">[<a href="#movemediacontainerinput">MoveMediaContainerInput</a>!]</td>
<td>

Move one or move MediaContainers

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateMedia</strong></td>
<td valign="top">[<a href="#updatemediacontainerinput">UpdateMediaContainerInput</a>!]</td>
<td>

Update one or move MediaContainers

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteMedia</strong></td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Delete one or move MediaContainers

</td>
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
<td>

The synopsis for the itinerary-directions

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The description for the itinerary-directions

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td>

The tags for the itinerary-directions

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the read-more attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the website-url attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>upsertAttrs</strong></td>
<td valign="top">[<a href="#attributeinput">AttributeInput</a>!]</td>
<td>

Insert or update attributes to the collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteAttrs</strong></td>
<td valign="top">[<a href="#attributeidentifierinput">AttributeIdentifierInput</a>!]</td>
<td>

Delete attributes to the collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createMedia</strong></td>
<td valign="top">[<a href="#createmediacontainerinput">CreateMediaContainerInput</a>!]</td>
<td>

Add multiple Media with MediaResources

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>moveMedia</strong></td>
<td valign="top">[<a href="#movemediacontainerinput">MoveMediaContainerInput</a>!]</td>
<td>

Move one or move MediaContainers

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateMedia</strong></td>
<td valign="top">[<a href="#updatemediacontainerinput">UpdateMediaContainerInput</a>!]</td>
<td>

Update one or move MediaContainers

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteMedia</strong></td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Delete one or move MediaContainers

</td>
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
<td>

The distance of the itinerary-directions

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>durations</strong></td>
<td valign="top">[<a href="#itinerarydirectionsdurationsinput">ItineraryDirectionsDurationsInput</a>!]</td>
<td>

The duration details of the new itinerary-directions

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>elevation</strong></td>
<td valign="top"><a href="#elevationinput">ElevationInput</a></td>
<td>

The elevation details of the new itinerary-directions

</td>
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
<td colspan="2" valign="top"><strong>defaultLocale</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The default locale of this itinerary's content

</td>
</tr>
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
<td>

The synopsis for the itinerary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The description for the itinerary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td>

The tags for the itinerary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the read-more attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the website-url attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>upsertAttrs</strong></td>
<td valign="top">[<a href="#attributeinput">AttributeInput</a>!]</td>
<td>

Insert or update attributes to the collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteAttrs</strong></td>
<td valign="top">[<a href="#attributeidentifierinput">AttributeIdentifierInput</a>!]</td>
<td>

Delete attributes to the collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createMedia</strong></td>
<td valign="top">[<a href="#createmediacontainerinput">CreateMediaContainerInput</a>!]</td>
<td>

Add multiple Media with MediaResources

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>moveMedia</strong></td>
<td valign="top">[<a href="#movemediacontainerinput">MoveMediaContainerInput</a>!]</td>
<td>

Move one or move MediaContainers

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateMedia</strong></td>
<td valign="top">[<a href="#updatemediacontainerinput">UpdateMediaContainerInput</a>!]</td>
<td>

Update one or move MediaContainers

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteMedia</strong></td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Delete one or move MediaContainers

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createIcons</strong></td>
<td valign="top">[<a href="#createiconcompositioninput">CreateIconCompositionInput</a>!]</td>
<td>

Add new IconCompositions to the itinerary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateIcons</strong></td>
<td valign="top">[<a href="#updateiconcompositioninput">UpdateIconCompositionInput</a>!]</td>
<td>

Update IconCompositions in the itinerary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteIcons</strong></td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Delete one or move IconCompositions

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>autoRoute</strong></td>
<td valign="top"><a href="#itineraryautorouteinput">ItineraryAutoRouteInput</a></td>
<td>

Enable auto routing, or set to null to disable

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>autoRouteRemoveExisting</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Remove any routes that were created with auto routing

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>elevation</strong></td>
<td valign="top"><a href="#elevationinput">ElevationInput</a></td>
<td>

Elevation data of the new itinerary

</td>
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

The title for the itinerary-location

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>synopsis</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The synopsis for the itinerary-location

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The description for the itinerary-location

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td>

The tags for the itinerary-location

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the read-more attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the website-url attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>upsertAttrs</strong></td>
<td valign="top">[<a href="#attributeinput">AttributeInput</a>!]</td>
<td>

Insert or update attributes to the itinerary-collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteAttrs</strong></td>
<td valign="top">[<a href="#attributeidentifierinput">AttributeIdentifierInput</a>!]</td>
<td>

Delete attributes to the itinerary-collection

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createMedia</strong></td>
<td valign="top">[<a href="#createmediacontainerinput">CreateMediaContainerInput</a>!]</td>
<td>

Add multiple Media with MediaResources

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>moveMedia</strong></td>
<td valign="top">[<a href="#movemediacontainerinput">MoveMediaContainerInput</a>!]</td>
<td>

Move one or move MediaContainers

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateMedia</strong></td>
<td valign="top">[<a href="#updatemediacontainerinput">UpdateMediaContainerInput</a>!]</td>
<td>

Update one or move MediaContainers

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteMedia</strong></td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Delete one or move MediaContainers

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>position</strong></td>
<td valign="top"><a href="#positioninput">PositionInput</a></td>
<td>

The place for this itinerary-location

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bounds</strong></td>
<td valign="top"><a href="#boundsinput">BoundsInput</a></td>
<td>

The bounds of the itinerary-location

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>place</strong></td>
<td valign="top"><a href="#placeinput">PlaceInput</a></td>
<td>

The place for this itinerary-location

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>optional</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether the location specified is optional on the itinerary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>icon</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

Set or remove the optional icon, passed ID must exist in the Itinerary.icons

</td>
</tr>
</tbody>
</table>

### UpdateMediaContainerInput

Update a MediaContainer in a MediaContainer list

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
<td valign="top"><a href="#string">String</a>!</td>
<td>

ID to the MediaContainer to update

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>resourceId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

ID to a MediaResource

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
<td>

List of labels to apply to the media-resource

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attribution</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Text attribution for the source of the media-resource

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>caption</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Text caption for the media-resource

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>copyright</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Copyright details of the media-resource

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>upsertAttrs</strong></td>
<td valign="top">[<a href="#attributeinput">AttributeInput</a>!]</td>
<td>

Insert or update attributes to the media-resource

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteAttrs</strong></td>
<td valign="top">[<a href="#attributeidentifierinput">AttributeIdentifierInput</a>!]</td>
<td>

Delete attributes to the media-resource

</td>
</tr>
</tbody>
</table>

### UpdateProfileInput

Input object to Mutation.updateProfile

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
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#profiletype">ProfileType</a></td>
<td>

The type of profile

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The name of the profile

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

The website url

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>autoApproveFollows</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

If follow requests should be automatically approved for this profile

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>avatar</strong></td>
<td valign="top"><a href="#mediacontainerinput">MediaContainerInput</a></td>
<td>

The avatar image

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>upsertAttrs</strong></td>
<td valign="top">[<a href="#attributeinput">AttributeInput</a>!]</td>
<td>

Insert or update attributes to the profile

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteAttrs</strong></td>
<td valign="top">[<a href="#attributeidentifierinput">AttributeIdentifierInput</a>!]</td>
<td>

Delete attributes to the profile

</td>
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

### BillingPriceRecurringInterval

The interval type

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>Year</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Month</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Week</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Day</strong></td>
<td></td>
</tr>
</tbody>
</table>

### BillingSubscriptionStatus

The status of a BillingSubscription

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>Active</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Inactive</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Expired</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Cancelled</strong></td>
<td></td>
</tr>
</tbody>
</table>

### CollectionDiscriminator

All possible collection discriminators

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>Collection</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Locale</strong></td>
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

### ConnectedAppAuthType

Possible auth types for a ConnectedApp

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>Tokens</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Oauth</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Credentials</strong></td>
<td></td>
</tr>
</tbody>
</table>

### ConnectedAppServiceKey

The key of the service for a ConnectedApp

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>AustralianTourismDataWarehouse</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CrowdriffApi</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ShopifyApi</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GoogleAnalytics4</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>AlpacaLegacy</strong></td>
<td></td>
</tr>
</tbody>
</table>

### ConnectedAppType

Possible types of ConnectedApp

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>Configuration</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Credentials</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Api</strong></td>
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

### ItineraryDirectionsAccuracy

The method to determine if an ItineraryDirections is related to an ItineraryLocation

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>Location</strong></td>
<td>

Consider itinerary-directions related if the itinerary-location matches

</td>
</tr>
<tr>
<td valign="top"><strong>Place</strong></td>
<td>

Consider itinerary-directions related if the place inside the itinerary-location matches

</td>
</tr>
</tbody>
</table>

### ItineraryDirectionsDirection

Whether or not an ItineraryDirections is inbound or outbound relative to an ItineraryLocation

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>Inbound</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Outbound</strong></td>
<td></td>
</tr>
</tbody>
</table>

### ItineraryDirectionsRestrict

Restricts search for directions to a portion of an Itinerary

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ParentDescendants</strong></td>
<td>

Restrict results to include directions that are descendants of the parent item

</td>
</tr>
</tbody>
</table>

### ItineraryItemType

Possible types of ItineraryItem

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

The status of a Media upload process

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

### PlaceHoursStatus

Whether a place is open/closed or if the status is unknown

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>Open</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Closed</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Unknown</strong></td>
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

Where to search for place information

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
</tbody>
</table>

### ProfileType

Profile type

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>Individual</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Organization</strong></td>
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
<td valign="top"><strong>Bus</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Camel</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Car</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Cycling</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ElectricCar</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ElectricMotorbike</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Foot</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FourWheelDriving</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Hike</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Hitchhiking</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Horse</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>HorseAndCart</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>InlineSkate</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Minibus</strong></td>
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
<td valign="top"><strong>NordicWalking</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Rickshaw</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Run</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Scooter</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Snowshoe</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TaxiOrRideshare</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TrailRun</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Trekking</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>WalkOrRide</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Wheelchair</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Abseiling</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>AdventureBike</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>AerialLift</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>AlpineSki</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>BackcountrySki</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Barge</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Boat</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CableCar</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Canoe</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Caving</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Chairlift</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CrossCountrySky</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Cruise</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Dirtbike</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Dive</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DogSled</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Ferry</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Funicular</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Geocaching</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Glider</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Golfcar</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Gondola</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>HandGliding</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Handcycle</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Helicopter</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>HotAirBaloon</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>IceSkate</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>JetBoat</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Jetski</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Kayak</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Kitesurf</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>LightAircraft</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>LightRail</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Monorail</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Mountaineering</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NordicSki</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Orienteering</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Plane</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Quadbike</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>RockClimbing</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Row</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Rowboat</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Sail</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Skateboarding</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Skydive</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Snorkel</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Snowboard</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>StandUpPaddleBoard</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Surf</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Swim</strong></td>
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
<tr>
<td valign="top"><strong>Tubing</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>WaterSki</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>WaterTaxi</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>WhiteWaterRafting</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Windsurf</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ZipLine</strong></td>
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
<td valign="top"><strong>Camel</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Car</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Cycling</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ElectricCar</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ElectricMotorbike</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Foot</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FourWheelDriving</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Hike</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Hitchhiking</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Horse</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>HorseAndCart</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>InlineSkate</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Minibus</strong></td>
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
<td valign="top"><strong>NordicWalking</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Rickshaw</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Run</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Scooter</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Snowshoe</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TaxiOrRideshare</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TrailRun</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Trekking</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>WalkOrRide</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Wheelchair</strong></td>
<td></td>
</tr>
</tbody>
</table>

### SortDirection

Determines which order a specific field will be ordered in

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>Asc</strong></td>
<td>

Sort in ascending order

</td>
</tr>
<tr>
<td valign="top"><strong>Desc</strong></td>
<td>

Sort in descending order

</td>
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
<td colspan="2" align="right" valign="top">format</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the date according to the given format specifier string.

Cannot be used with "relativeTo".

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">relativeTo</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the difference between this date and the given date.
Set to null to output the difference between this date and the current date.

Should be an ISO 8601 formatted string.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeZone</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the time zone of the date

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the output locale

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
<td colspan="2" align="right" valign="top">format</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the date according to the given format specifier string.

Cannot be used with "relativeTo".

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">relativeTo</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the difference between this date and the given date.
Set to null to output the difference between this date and the current date.

Should be an ISO 8601 formatted string.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeZone</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the time zone of the date

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the output locale

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
<td colspan="2" valign="top"><strong>media</strong> ⚠️</td>
<td valign="top">[<a href="#mediacontainer">MediaContainer</a>!]!</td>
<td>

List of MediaContainers containing images or other media

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

use mediaContainers instead

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The number of media to return

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mediaContainers</strong></td>
<td valign="top"><a href="#mediacontainerconnection">MediaContainerConnection</a>!</td>
<td>

List of MediaContainers containing images or other media

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>preferredMedia</strong></td>
<td valign="top"><a href="#mediacontainer">MediaContainer</a></td>
<td>

The preferred MediaContainer to use

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the read-more attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the website-url attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sectionIds</strong></td>
<td valign="top">[<a href="#id">ID</a>!]!</td>
<td>

One or more sections this item belongs to

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>externalId</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

Identifier from an external source this item is associated with

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>externalSource</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The source of the item's externalId

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
<td valign="top"><a href="#id">ID</a>!</td>
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
<td valign="top"><a href="#id">ID</a>!</td>
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
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Query multiple attributes optionally filtering by id and/or locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select. This will only apply to attributes with a locale, attributes that don't will not be excluded.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">includeNoLocale</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether or not to include attributes without locales in the results

</td>
</tr>
</tbody>
</table>

### IconResource

An icon for use in the UI or Map

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

The profile associated with this icon

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>created</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The date when the icon was created

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">format</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the date according to the given format specifier string.

Cannot be used with "relativeTo".

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">relativeTo</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the difference between this date and the given date.
Set to null to output the difference between this date and the current date.

Should be an ISO 8601 formatted string.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeZone</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the time zone of the date

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the output locale

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>modified</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The date when the icon was last modified

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">format</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the date according to the given format specifier string.

Cannot be used with "relativeTo".

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">relativeTo</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Output the difference between this date and the given date.
Set to null to output the difference between this date and the current date.

Should be an ISO 8601 formatted string.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeZone</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the time zone of the date

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Set the output locale

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The supplied name for this icon

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The key of the icon, unique across the profile

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
<td valign="top"><a href="#id">ID</a>!</td>
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
<td valign="top"><a href="#id">ID</a>!</td>
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
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Query multiple attributes optionally filtering by id and/or locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select. This will only apply to attributes with a locale, attributes that don't will not be excluded.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">includeNoLocale</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether or not to include attributes without locales in the results

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
<td>

Unique identifier for the itinerary-item

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>siblingPositionNumber</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

A number corresponding to the item's position compared to it's siblings.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#itineraryitemtype">ItineraryItemType</a></td>
<td>

Only count items of the given type

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skipOptional</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Don't count locations that are optional. Non-locations will always be counted.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skipOmitList</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Don't count items that have the omit-list attrubute set to true

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
<td colspan="2" valign="top"><strong>media</strong> ⚠️</td>
<td valign="top">[<a href="#mediacontainer">MediaContainer</a>!]!</td>
<td>

List of MediaContainers containing images or other media

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

use mediaContainers instead

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The number of media to return

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mediaContainers</strong></td>
<td valign="top"><a href="#mediacontainerconnection">MediaContainerConnection</a>!</td>
<td>

List of MediaContainers containing images or other media

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>preferredMedia</strong></td>
<td valign="top"><a href="#mediacontainer">MediaContainer</a></td>
<td>

The preferred MediaContainer to use

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>readMoreUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the read-more attribute

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>websiteUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alias for the website-url attribute

</td>
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
<td colspan="2" align="right" valign="top">segmentIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Optionally look for items that belong to all of the given segments

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
<td colspan="2" align="right" valign="top">segmentIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Optionally look for items that belong to all of the given segments

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
<td colspan="2" align="right" valign="top">segmentIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Optionally look for items that belong to all of the given segments

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ancestors</strong></td>
<td valign="top"><a href="#itineraryitemconnection">ItineraryItemConnection</a>!</td>
<td>

All ancestors of the itinerary-item

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

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
<td colspan="2" align="right" valign="top">segmentIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Optionally look for items that belong to all of the given segments

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>descendants</strong></td>
<td valign="top"><a href="#itineraryitemconnection">ItineraryItemConnection</a>!</td>
<td>

All the descendants of the itinerary-item in depth-first-search order

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

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
<td colspan="2" align="right" valign="top">segmentIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Optionally look for items that belong to all of the given segments

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
<td>

All the direct children of the itinerary-item

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

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
<td colspan="2" align="right" valign="top">segmentIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Optionally look for items that belong to all of the given segments

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
<td valign="top"><a href="#id">ID</a>!</td>
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
<td valign="top"><a href="#id">ID</a>!</td>
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
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Query multiple attributes optionally filtering by id and/or locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select. This will only apply to attributes with a locale, attributes that don't will not be excluded.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">includeNoLocale</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether or not to include attributes without locales in the results

</td>
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

Unique identifier for the media-resource

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
<td>

Text caption for the media-resource

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attribution</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Text attribution for the source of the media-resource

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>copyright</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Copyright details of the media-resource

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hasContent</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Will be true if the resource has a caption, attribution or copyright

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>altText</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alternative text for the media-resource

</td>
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
<td valign="top"><a href="#id">ID</a>!</td>
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
<td valign="top"><a href="#id">ID</a>!</td>
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
<td valign="top"><a href="#attributeconnection">AttributeConnection</a>!</td>
<td>

Query multiple attributes optionally filtering by id and/or locale

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns up to the first n elements in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns elements that come after the given cursor

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The id of the attribute to select

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locale</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The locale of the attribute to select. This will only apply to attributes with a locale, attributes that don't will not be excluded.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">includeNoLocale</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether or not to include attributes without locales in the results

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
