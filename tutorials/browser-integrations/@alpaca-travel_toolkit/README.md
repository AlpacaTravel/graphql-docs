# Alpaca Toolkit

The (Alpaca Toolkit)[https://developer.alpacamaps.com/] provides a method of
integrating assets provided by Alpaca Travel. These assets include various
prebuilt area guides, maps and itinerary layouts.

_Example: Presenting an itinerary using a script tag_

```javascript
<!-- Example of configuring includes -->
<div class="alpaca-wrapper">
  <div id="alpaca-container"><span class="loading">Loading...</span></div>
  <script
    src="https://cdn.alpacamaps.com/scripts/alpaca-widget@v2.js"
    data-id="journey/94d8276c-fd26-11ea-96fe-067ec0c7e8f4"
    data-view-mode="article"
    data-container-id="alpaca-container"
    data-inline="true"
  ></script>
</div>
```

## Shared Itinerary Creation

Assets can be enabled to provide itinerary planning features within the
JavaScript application. You can integrate and share the itinerary planning
features more broadly into the application via GraphQL.

- You can leverage [Itinerary](/topics/itinerary) GraphQL functions within
  your website application
- You need to read/write to the local storage key detailed here in order to
  have the assets and your website application kept in sync

_Requirements_
You must be using the script tag with "inline=true" in order to leverage this
feature. This is required due to the shared local storage, which is used to
store the selected itinerary ID's.

### Local Storage

Alpaca assets access the reference to the current itinerary being edited
via the local storage key `alpaca:add-to-itinerary:itinerary:ref:selected`. The
value of this must be in the format of `alpaca://<itinerary-id>`, such as:

`alpaca://itinerary/62rrSQLRqmPcER0YTQr2g1`

You can listen to local storage events in order to obtain the reference to the
itinerary as it is created.

- [Mozilla Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Mozilla Local Storage Event](https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event)

#### Vanilla JavaScript

```javascript
// Create a window variable in sync with the current itinerary
var itineraryId = null;

// Local storage key for accessing the current selected itinerary
var localStorageKey = 'alpaca:add-to-itinerary:itinerary:ref:selected'

/**
 * Obtain the current value of local storage for the selected itinerary
 */
function getLocalStorageItineraryId() {
  // Access the current itinerary ref from the local storage
  try {
    // Update the local variable
    localStorageItineraryRef = window.localStorage.getItem(localStorageKey);
    if (typeof localStorageItineraryRef === 'string') {
      return localStorageItineraryRef.replace('alpaca://', '');
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
      if (typeof id === 'string') {
        return 'alpaca://' + id.replace('alpaca://', '');
      }
      return null;
    })();

    // Set the itinerary ID reference into local storage
    window.localStorage.setItem(localStorageKey, ref);
  }
}

// Add an event listener to local storage to update our local variable
window.addEventListener('storage', () => {
  // When the local storage is updated, keep it in sync
  localStorageItineraryRef = getLocalStorageItineraryId();
  if (localStorageItineraryRef !== itineraryId) {
    itineraryId = localStorageItineraryRef;
    // You can do something else with the updated itinerary ID here...
    // callMyFunc(...)
  }
})

// Set the itinerary ID when we boot
itineraryId = getLocalStorageItineraryId();
```

### Further References

- [Creating an itinerary](/topics/itinerary/Creating%20an%20itinerary/README.md)
