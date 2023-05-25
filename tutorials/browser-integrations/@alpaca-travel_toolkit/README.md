[//]: # "Title: Legacy Embedding"
[//]: # "Weight: 3"

# Alpaca Toolkit

The [Alpaca Toolkit](https://developer.alpacamaps.com/) provides a method of
integrating assets provided by Alpaca Travel. These assets include various
prebuilt area guides, maps and itinerary layouts.

## Example Inline Scripts

Using the below script examples, you can configure the behaviour and content
using data attributes. The examples load an itinerary and an area guide into the
`alpaca-container` div. You can style CSS for the presentation of the elements
as appropriate for your site.

_Example: Presenting an itinerary using a script tag_

The below example will draw an itinerary onto the page of your site. The
specific itinerary is configured by changing the `data-id` data attribute on the
script tag. The `data-view-mode` attribute can configure the layout presentation
that is used to present the asset. The `data-container-id` will configured&#x20;
which div to replace the contents with the asset once it is ready. Finally, the
`data-inline` data attribute will load the asset on page, allowing it to share
the local storage access (opposed to using an iframe to seperate).

```html
<!-- Example of configuring script -->
<div class="alpaca-wrapper alpaca-itinerary">
  <div id="alpaca-container">
    <!-- Recommended: Add you strategy here for the loading presentation -->
    <span class="loading">Loading...</span>
  </div>
  <script
    src="https://cdn.alpacamaps.com/scripts/alpaca-widget@v2.js"
    data-id="journey/94d8276c-fd26-11ea-96fe-067ec0c7e8f4"
    data-view-mode="article"
    data-container-id="alpaca-container"
    data-inline="true"
  ></script>
</div>
```

_Example: Presenting an area guide using a script tag_

The below example places an area guide on the page, as defined by the `data-id`
data attribute. It is configured to run `inline`, necessary to operate the asset
on the same domain to share the local storage access. The content will load into
the `alpaca-container` div once the application has downloaded and is ready to
boot.

This example also passes through some query parameters, in order to filter the
content to a specific state of the application.

```html
<!-- Example of configuring script -->
<div class="alpaca-wrapper alpaca-area-guide">
  <div id="alpaca-container">
    <!-- Recommended: Add you strategy here for the loading presentation -->
    <span class="loading">Loading...</span>
  </div>
  <script
    src="https://cdn.alpacamaps.com/scripts/alpaca-widget@v2.js"
    data-id="locale/wine-australia"
    data-container-id="alpaca-container"
    data-inline="true"
    data-query-params="tags:prefilter=_appointment_only"
  ></script>
</div>
```

_Example: Advanced customisation of base URL's and API links_

In certain circumstances, you may be advised to change the URL's that are being
used for the toolkit to communicate with. These could be to do with changing the
domain for custom domains, or changing API targets for preview releases.

```html
<!-- Example of configuring script with changing URL endpoints -->
<div class="alpaca-wrapper alpaca-area-guide">
  <div id="alpaca-container">
    <!-- Recommended: Add you strategy here for the loading presentation -->
    <span class="loading">Loading...</span>
  </div>
  <script lang="text/javascript">
    // Modify the API URL for the content
    var API_URL = 'https://embed.alpacamaps.com/api/v1'; // Default
    // Modify the v2 API URL for the trip planning
    var ALPACA_API_URL_V2 = 'https://withalpaca.com/api/v2'; // Default
  </script>
  <script
    src="https://cdn.alpacamaps.com/scripts/alpaca-widget@v2.js"
    data-id="locale/wine-australia"
    data-container-id="alpaca-container"
    data-inline="true"
    data-base-url="https://made.withalpaca.com/"
  ></script>
</div>
```

## Shared Itinerary Creation

Assets can be enabled to provide itinerary planning features within the
JavaScript application. You can integrate and share the itinerary planning
features more broadly into the application via GraphQL.

- You can leverage [Itinerary](/topics/itinerary) GraphQL functions within your
  website application

- You need to read/write to the local storage key detailed here in order to have
  the assets and your website application kept in sync

_Example integrations_

- Full functioning Itinerary Creation, including simple lists and automatically
  routed itineraries

- Create "Add to Itinerary" buttons on your website application that can
  determine whether a
  [place is present within an itinerary](topics/itinerary/Location/Checking%20if%20a%20place%20is%20within%20an%20itinerary/README.md)

- Show the number of places added to a users itinerary

- Present a list of the places added to the itinerary

- Add, remove and reorder places

- Automatically create routes between an itinerary

_Requirements_ You must be using the script tag with "inline=true" in order to
leverage this feature. This is required due to the shared local storage, which
is used to store the selected itinerary ID's.

### Local Storage

Alpaca assets access the reference to the current itinerary being edited via the
local storage key `alpaca:add-to-itinerary:itinerary:ref:selected`. The value of
this must be in the format of `alpaca://<itinerary-id>`, such as:

`alpaca://itinerary/62rrSQLRqmPcER0YTQr2g1`

You can listen to local storage events in order to obtain the reference to the
itinerary as it is created.

- Read the created itinerary from the localStorage key&#x20;
  `alpaca:add-to-itinerary:itinerary:ref:selected` on load to obtain any&#x20;
  itinerary that is in progress

- Add an event handler to the window.localStorage so that if a new itinerary is
  started in the asset, you will also then have access to the ID

- Push any newly created itineraries made outside the asset to local storage so
  that the asset also can use the itinerary.

#### Vanilla JavaScript

As an example gist, the below provides a basic javascript event handler for
subscribing to the local storage to obtain the created itinerary.

```javascript
// Create a window variable in sync with the current itinerary
var itineraryId = null;

// Local storage key for accessing the current selected itinerary
var localStorageKey = "alpaca:add-to-itinerary:itinerary:ref:selected";
// Local storage key for accessing all the known itineraries (multiple list)
var localStorageKeyList = "alpaca:add-to-itinerary:itinerary:refs:known";

/**
 * Obtain the current value of local storage for the selected itinerary
 */
function getLocalStorageItineraryId() {
  // Access the current itinerary ref from the local storage
  try {
    // Update the local variable
    var localStorageItineraryRef = window.localStorage.getItem(localStorageKey);
    if (typeof localStorageItineraryRef === "string") {
      return localStorageItineraryRef.replace("alpaca://", "");
    }
  } catch (err) {
    // There is an issue accessing the window local storage (SecurityError)
    console.warn(err);
  }
  return null;
}

/**
 * Set the local storage itinerary to a supplied itinerary ID
 * @param {string|null} id ID of the itinerary to set into local storage
 */
function setLocalStorageItineraryId(id) {
  try {
    // Correct the ID to be a ref
    var ref = (() => {
      if (typeof id === "string") {
        return "alpaca://" + id.replace("alpaca://", "");
      }
      return null;
    })();

    // Set the itinerary ID reference into local storage
    window.localStorage.setItem(localStorageKey, ref);
  } catch (e) {
    // Error handling...
    console.error(e);
  }
}

// Add an event listener to local storage to update our local variable
window.addEventListener("storage", () => {
  // When the local storage is updated, keep it in sync
  var localStorageItineraryRef = getLocalStorageItineraryId();
  if (localStorageItineraryRef !== itineraryId) {
    itineraryId = localStorageItineraryRef;
    // You can do something else with the updated itinerary ID here...
    // callMyFunc(...)
  }
});

// Set the itinerary ID when we boot
itineraryId = getLocalStorageItineraryId();
```

- [Mozilla Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

- [Mozilla Local Storage Event](https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event)

### Custom Events

Alpaca also triggers custom events on the window that you can subscribe and
observe. These are triggered by the application when certain events happen, and
can bne an alternative to listening to the storage layer.

```javascript
// Create an event handler to listen to events from Alpaca
function alpacaEventHandler(event) {
  var method = event.detail.method;

  console.log("Caught an event, such as createItinerary or deleteItinerary");
}

// Register to the window as the event target
window.addEventListener("alpaca", alpacaEventHandler);
```

- [Mozilla EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

### Further References

- [Creating an itinerary](/topics/itinerary/Creating%20an%20itinerary/README.md)
