# Associating Itinerary Icons

An Itinerary can have an icon set that can be used for assigning to various
itinerary locations.

Note: You will need to first create the profile icons that will be used in your
itinerary icon set. See
[managing profile icons](/topics/icons/Managing%20profile%20icons/README.md).

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
        }
        # Add other icons to your itinerary icon set
        { name: "Sleep", resourceId: "icon/DEF234" }
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
              __typename

              # Data for icon
              ... on IconSilhouette {
                id
                viewBox
                paths
              }
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

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/)
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBVABzAEMUEBnHFACwRwEsoIlLjzzp7SEwcB3ejRzEkOAJIp6SBACdiMgJ4A6cUxY4AZhBnDRgqbPkLhMhAB0kuJnAIRyPHBA1VaDNa3aduvFBGE4CGSd6ABsEABphSj4EEJConFhyXzh6clJ6ZnIlCws4GBQM5nwibgkDOUUxdxxgCxwcXAAZBAA3QwBzOho6GFKyculKhQAKAEpHAkNJYt8cPpIyFzp9IaM3LPr5-oRBw0URrYbcPHscBQgYHVX94zEAESOGMHQcMxAb4YB6AEEAIQAwgBGABMAGZ3k8TjtlgxJGtFPNyFIOrDCItdvDbmIkAQCk9PkZXnVRA0ybgAaZuDhpHw4RV1oxitZbMiZiwnsccABNS78ULxaQOObUYjtRJUsg+VxM9RaHQ9AJBDShOgqmTJTkShBldyvADaWoaJLJpvJOAAcsRELDZQxRBcrvSEcY7fYUEayUhrQhXu8AKKkSGks3mgBKCA0smQUG6rgejmcisCwTCG1EUElPE9DVMHCusbELzeHzUv0BoIhIE9AF9PbgfmBeBAetcanNHdcscN0zh3Z7gDSfX6QABlMIIAjvSJ5y4yQvF96yr73f0AMXBABZ3jg6yGzYPvYgR-cINOcLOC7tF6XmF8AOIACTEYM3AFYd3vQwBdJ5fnATCa4Y6rwABGxBQAA1ra3brMQGhRlAUqaPQsRgOQBKwYiQGmrgRbIJIKqyBh+4NPQYBagA+pRKAKFMR7mEgWq4BGxBgRB0Gyh4HBQFwyFzDQaTOrcWpcSM6rJK8QIAAzSYBno8F0lA4aGNIQGAdAqapjTiBpqD0EROjyrCLJ2Pomykap5E5mS1G0fRPq5JZoa4FaNrGYqdqmWymRMc5ZoMU52m4TgAAqMpqBeFBzrGOAjGwPF8cKfjJsqqpjDZubRVetSZeaAAKaVpna5EEQZqEanlDR2XRyCOX5wVmrg9ykMQmjaOmVU4EoPWOKI1TMKOoTUJcCAoEsWmNc8XUNK0qF8H8EAAB4zQEpDUCRU1kv+jV7nlzTQMQIRpA4MBnE4tpqHlsprgKNk7WaD0NA9-57jWIA1kAA)

Note: You can create your icons when you create your itinerary (via using
`createItinerary()` mutation), and also can `createIcons()`, `updateIcons()` and
`deleteIcons()` when managing icon sets with the `updateItinerary()` field.

## Listing an Itinerary Icon Set

Your itinerary icon set can be accessed along with other icon field data using
the `icon()` field. This is a relay style pagination result.

```graphql
# Obtain the icon set that is used in the itinerary.

query GetItineraryIcons {
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
            __typename

            # Data for icon
            ... on IconSilhouette {
              id
              viewBox
              paths
            }
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

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/)
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEB5AIxQEMBLJHFACwR1KggoGcEVKri3SmcYWw6FarVIpyCAE7EJATwB0AHSRKAjjEkycAcVYBJMUknSZuhkh7AlOHLgCqLdiINHZACgCUOAGakEAGwEIAAcjMUYeFAgcFj8EKDZhOmcpWSsk8RSZV1IwdBwFEFEM4wB6AEEAIQBhAEYAJgBmAs9LCmsbHF0wZDEfSR4vCAlHdMNMtOsciZwAfRmUGRCkYkQladwARXVZEfpw9ZwABWIAc3JOUkYcMxQJCD8BoZwJf2JNAtgJJiezQ3jL8wFA4AZQQCDyVBQKCCTHQJRKLz8bzk3QAbiUTlIglQVH4Sr84mFzHJIXBpntzK4fF8UHkagAGFrTawIMAnBAWZntJAQbo4VrtQXtXBdHqkPpfLmCqZtIXtOYLJYrBBrWVyjoAWVYxBwyzg5BOUu5ytV6uFRzuPlidDMRusL2+MAkUFoArN5sOltI1opdG6qHFvklarNCsWyBNyhD6twABFODrBsMKXb2nJ0zgrqZGMDvVQIOooa7U9KwCX2qjfAB3CoQAAe5esQU4VCY5YAvqnO1H3R08EEicQ-Nc+JF9UwLvto9KzAAxb1+I3duXdrm4AAqEBIw4pPHIu2SxmirC5kW3VQLqC5zfZuiQg35Ro4TE9CErBZfpxV05wyDAVSdb4JC5Zd2lA7t2xAdsgA)

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
          __typename

          # Data for icon
          ... on IconSilhouette {
            id
            viewBox
            paths
          }
        }

        # ...and any other icon composition elements
        iconFill
      }
    }
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/)
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBBAZwOgEsBDFBAnMpHElEpBAJzJYE96oI6e4ADhAIMSvHAHcGACxp1RzNpxwAbaBTFIAdDgAq0ktSi0AOklwAjBDkjMbMFkwDmOKCwQbxEAGY4U06wVWdi41Y0ZeABocCBYcADdyORwYATAKa3F-BDNcIKVQ9QjtPQNqBAAPMkEVawJpCAlqBhwrZxSCBDB6OmzclLSMgElGRRCAGSLNGIFg4q1c-oA5CEp0PQgaIlIM5JIeJGiOCBgcOBgCFBxvEhZL13dd2m5xb1i-AJwBFh8SWsj+tk+I9KHtRsFlPtxPwhCJ5mYzOcUJ46IRiFByJQRkwIRxJuFNEMDjhgGYcDhcOMEPFgk5rNkBukseCCgAKACUMzm0xQmzI2wxGTJjOGLImU14rOF5NwAGVUgIVFxjg56GLlEMACLS+hgdYmED5EIAejwACEAMIARgATABmA063AAVUGoIZYRROs9xXWpLo5MDuH0hno1AZRshxK10Vo3RVOHqJxU3TgZAA1nUHNYE9IyDSdTKYhZkTjuv5Q94fnBrrd7mQwGB2lCkOHNhH1RwFgHAy8kPrDZ3TZbbXbjS3jZqAKIAMVHjp7OAAvsLOf7e7gAEoeboWMhQdMfaxkbzeBBQSjdH2ab0Sujr3u6ws4AD6L5QHFmSGqOSQz63O5HmqOIFH2z4tiSz5FkMYDIIwNysNQbxxB2IEhGBi69iQYBQa+76fsgP4IphQY4AA8iWZBMEBEHuMQDhQL+j6BnRJwsIxkEkRuOAAAo-DctR9rqcEkAhdy4eSb4fl+RF-lxpGahQZDXO8LYSTgWiaTEdBErwsp-A0MAICgoIPsxWE4fJvaJAgEhmhAFTqeSAgUNIBDqSu8mebhuCaVocZyFwqwBHEEEwsIojiAgtSIKg7nyS2M5-Coz6eb2aXLmYS4gEuQA)
