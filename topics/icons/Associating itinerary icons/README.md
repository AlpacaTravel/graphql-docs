# Accociating Itinerary Icons

An Itinerary can have an icon set that can be used for assigning to various
itinerary locations.

Note: You will need to first create the profile icons that will be used in your
itinerary icon set. See [managing profile icons](../Managing%20profile%20icons/README.md).

## Creating your Itinerary Icon Sets

Your itinerary icons allow you to include a series of icons from your profile.
These are composed into a series of icons that you can use through-out your
itinerary.

```graphql
# Updates the icons associated with an Itinerary. Icons for an itinerary are
# composed of the icons associated to a profile, as well as customisations.

mutation UpdateItineraryIcons {
  # Leverage the updateItinerary() operation to update the itinerary icons
  updateItinerary(
    # Use your itinerary ID
    id: "itinerary/ABC123"
    # Update the itinerary using the UpdateItineraryInput
    itinerary: {
      # Create new itinerary icon compositions
      # You will need to have created the icons for the profile first
      createIcons: [
        {
          # Name the icon in your itinerary icon set
          name: "Eat" 
          # Reference the ID of the profile icon created
          resourceId: "icon/ABC123"
        },
        # Add other icons to your itinerary icon set
        { name: "Sleep", resourceId: "icon/DEF234" },
        { name: "Do", resourceId: "icon/GHI345" }
      ]
    }
  ) {
    # Read back the itinerary affected fields
    itinerary {
      # Identifiers
      id
      __typename

      # Read back icons associated to this itinerary
      icons(first: 100) {
        edges {
          node {
            # Identifier for the compositions
            id
            __typename

            # Name for the icon composition
            name

            # The icon resource (associated to the profile)
            resource {
              # Profile icon identifiers
              id
              __typename

              # Data for icon
              viewBox
              paths
            }

            # Localised use of the icon
            iconFill
          }
        }
      }
    }
  }
}
```

Note: You can create your icons when you create your itinerary (via using
`createItinerary()` mutation), and also can `createIcons()`, `updateIcons()` and
`deleteIcons()` when managing icon sets with the `updateItinerary()` field.

## Listing an Itinerary Icon Set

Your itinerary icon set can be accessed along with other icon field data using
the `icon()` field. This is a relay style pagination result.

```graphql
# Obtain the icon set that is used in the itinerary.

query GetItineraryIcons{
  # Use the itinerary() field operations to select the itinerary
  itinerary(id: "itinerary/ABC123") {
    # Identifiers for the itinerary
    id
    __typename

    # Query the icons
    # Pagination controls for relay "cursor connections"
    # See: https://relay.dev/graphql/connections.htm
    icons(first: 10) {
      edges {
        node {
          # Identifiers
          id
          __typename

          # Meta naming
          name

          # Profile icon
          resource {
            # Profile icon identifiers
            id
            __typename

            # Data for icon
            viewBox
            paths
          }

          # Optional customisations
          iconFill
        }
      }
      
      # Total icons in the itinerary set
      totalCount
      pageInfo {
        hasPreviousPage
        endCursor
      }
    }
  }
}
```

## Assocating an icon to an location

Your itinerary locations can reference icons from the set, which you can 
associate to locations. 

```graphql
# Associates an itinerary icon composition with an itinerary location. This can
# be done during creation of the itinerary location, or via an update on the
# itinerary location. This example shows it being used in the
# updateItineraryLocation operation.
#
# Note: To associate an icon, you must first create an icon for the profile,
# then create an itinerary icon composition.

mutation AssociateItineraryLocationIcon {
  # Leverage the updateItinerary() operation to associate
  updateItineraryLocation(
    # Supply your itinerary ID
    id: "itinerary/ABC123"
    # Update the location
    location: {
      # This is the itinerary icon ID, and you should make sure you have
      # obtained this from first adding icons to the itinerary.
      icon: "itinerary/ABC123/icon/DEF123"
    }
  ) {
    # Read back the affected location
    location {
      id
      __typename

      # Read the itinerary icon
      icon {
        # Identifiers for the itinerary icon
        id
        __typename

        # Obtain the icon resource
        resource {
          # Profile icon identifiers
          id
          __typename

          # Data for icon
          viewBox
          paths
        }

        # ...and any other icon composition elements
        iconFill
      }
    }
  }
}
```