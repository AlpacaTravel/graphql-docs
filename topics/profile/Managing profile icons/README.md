[//]: # "Title: Profile Icons"
[//]: # "Weight: 1"

# Adding Profile Icons

Profile Icons allow you to create icon sihouttes for use in UI components or
within maps (such as for markers).

Icons store the silhouette obtained from SVG path data. These icons that are
added to the profile will later be referenced when using icons for various
content, such as with itineraries.

The first step to working with icons is understanding how to prepare your icon
data, and then creating the icons associated with a profile. You can then later
use this icon to create icons for your itineraries.

### Prerequisites

- You'll need to know your profile ID

- You'll need to work on obtaining your and SVG view box and path data

## Understanding SVG view box and silhouette path data

When creating an icon, you need to provide two important pieces of information;
the viewBox, and the path data. The icon will be described using this data.

- [View Box](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox)

- ["d" Attribute](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d)

While the SVG object can create numerous different types of objects, including
circles, rect, animation objects, embeded objects etc, you must flatten these to
only support the creation of a silhouette for the icon.

_Example icon path data_

The below example icon has a viewBox of `0 0 1024 1024` and the path data of
`["M 100 ..."]`. These two elements are used to define the path data by
providing an idea of the view box area for the path data, as well as the array
of path data strings to recreate the icon.

```xml
<svg viewBox="0 0 1024 1024" width="32" height="32" fill="#FF0000">
  <path d="M 100 .." />
</svg>
```

Note: The width, height and fill values are not stored against the profile icon.
When the icon is used, it will be scaled automatically, and you can later define
colour selections as necessary.

## Creating Icons

Once you have obtained your icon viewBox and path data, you can create icons
that are asosciated to your profile.

An icon must profile the `paths: [String!]` property, as well as the
`viewBox: String!` and also provide `name: String!` to refer to the name. Name
should be unique to the other icons.

```graphql
# Creates an icon based on the supplied SVG path data. An icon consists
# primarily of a name, paths and viewbox, but also supports attributes for
# storing additional icon data.

mutation CreateIconSilhouette {
  # Use the createIcon() operation to create an icon
  createIconSilhouette(
    # Your profile ID
    profileId: "profile/ABC123"
    # The icon input
    icon: { name: "My Icon", viewBox: "0 0 1024 1024", paths: ["M 100 .."] }
  ) {
    # Read back the created icon
    icon {
      # Access the Identifier, required for further query/mutations
      __typename
      id
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBhAJwQEMUEBnHYpHASyghoCNjyEwdGcUALBHcjAAOQgDa12OAMoA1AOI4hpHjjCliAOhwBBGvS4Mk5WuRTkAOklxCCtOMVuiAnpwBmVHEmKIANIuWU1BwAbhIA7kwQAB5+TDAoVKLkEALCQhAEZlQoKLZxZJSuGZa4phm0SADmVGBgtCi0jMSidIaq6hqWlnDxpI00hCRkAJKGUrSiPBAwCDn8wJY4OLgAqmzcfDhQRKQIo4wAFACUnEIIBH1cKCnbQ-zUrYyLWzsjYxNTM3MHz0u4AJrTAiKAgQVwTfjDAAivxBYIhwzA6Bw5hANnhogQAHptAAhPAARgATABmVGw3AAFU2+j0SCE8VhtORwE83gQyNRAFkXPskKi-KEEGFcdFOSAAAw4KUEiVEgAsOFlCoF-l45GRAG1uUqJVKNJ0QABdHAAX2eJwWNCWyxwACUSBwWFAANYbfi3XYcWlMtpWm023DaKBQCiUXiQsDIBrg85+IgARxgtCIHCKwNcMEyfGBSfOTixPRQlyMsKWAH1yygnGcvIgy3QwLDzdaW6aQKagA)

## Listing Icons

For any icon that is created and associated with a profile, you'll be able to
list those icons to see what icons are available for that user.

You can leverage the `iconResources()` field operation to list icons for a
specific profile ID.

```graphql
# Lists icons that have been created for a supplied profile.

query ListIconSilhouettes {
  # Use the icons() operation in order to read back icons for the profile
  iconResources(
    # You will need to have your profile ID to query
    profileId: "profile/ABC123"
    # Pagination controls for relay "cursor connections"
    # See: https://relay.dev/graphql/connections.htm
    first: 10 # after: "cursor"
  ) {
    # Using a relay style "cursor connection" specification response
    edges {
      # The node will contain each icon
      node {
        # Type and ID
        id
        __typename

        # Name and other identifiers
        name
        key

        # SVG Path Information for icon path silhouette
        ... on IconSilhouette {
          viewBox
          paths
        }
      }
      # This is the cursor of this node, you can use this for passing to "after"
      # when requesting results after this record
      cursor
    }

    # Total icons
    totalCount
    # Pagination information
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEAZASwGcUicCoIkyUALAQxRwYDcEcAjBZHKAJwSMEYHADMIfHPRxEYABzkAbAsJxy+EUQUUIAdAB0khgI4wEfAJ75iKAJKUkAZW20IZlCgRlghnDlwAqkTsdOwUVEQAFACUOBBy5owEVORIcXxg5jgoEDgC9CIc9FAA1uQOZOKSoWoaWjq+5VQASl5ufFBekY1+uACabjgA7tqKOEjcIjnM9Gw4Fu21mtrstgAi2bmm5hY9S-UItmDoOPog6ss6APQAggBCAMIAjABMAMxne7gACvQA5gQkEkUg4UBpFJUJHkEIp6FYzrA+EQoQ4JlAUMlqJ80n5-DhHNwTrQPHIiOgrlcBLCLLpMiwrn8+PQ5LRjIorqiEOjMURdMS4HstEiUCcngAGPH0USePgnBEwJESbF+WI+HG9HBBQF-KTQ6kyFAWHSnECI5GSTncqhnGQJKAELRQYFpAREOQRBB7YR-Lw4NW43G4AAqtHYSAgmWGo14VBQ9EBOEEUFoTSM6tx4cj-oDgZwQYsCSkSBE6z2AYIYDLuIA+tXDQkgYhDFWNQA5eiIIsiCChSQV5AYrTmIgt8Ydz3pgMlBC7NM53OOABqAHEcL86DhbEgqnBnWIoeE0nJGCmiC43AgPBP535dHe4ml7FRnIpXO5PH7R34WCohncIAAHl+agniOk64gAvlWUHgcGtDEOQNChrwCrmnEojZPBZCZggAA08yDE6aQwMEmEIVUIFEGeSA6tMZxSjKyo5rgQyhi6CDbCQ2rQrIiikFI0pZHQCECJQGRVmaSrpjBXx5j29BjIeYEBjkcaKA8bioLJvwAkCGIpICO7Onsx4+lu4ifuBDBEK2CAASgOnXjmyBgA8qFSQGMF+DBEEgBBQA)

If you know what the icon ID is, you will be able to directly load the icon by
and ID. You can either use `iconResource()` or `node()` query operations.

```graphql
# Retrieves an icon by a specific ID. You can use the icon() or node() to
# achieve this.

query GetIconSilhouette {
  # Use the icon() operation to retrieve by an ID
  iconResource(id: "icon/ICON123") {
    # Identifiers
    id
    __typename

    # Obtain what you want from the icon
    name
    key

    ... on IconSilhouette {
      viewBox
      paths
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEAlBFAJwEsEA3BAZxwEMkcSoIGAjATzpyoAcEoSAMyY4AkgBEAdDgCaEGDij0cMKghwoAFuqYsAFAEocEIjiQQwCQxogAdJLlpRNZShpdVJ9+wEcYCIk4AcUJRZiQAZRIAG015QhR1YHscHFwAVTV3HXDrCD4iWhQSFhscIkJSCnUOOgYJFMZwgip5IigrEjB0HFsQXSQAelEAYQB5ADkARgAmAGY+o2SGVLSxS1QhMiIqRtSuvZwAfSOUdj4kWkRvFdTcMdYUWhIGAHdNIpx2eRxX+hQcIIiBA4NkmixDpdrrccABrBDsG6rHCSVHGerhKKxeIoRI4ZbI1LkMivABCEAAHodUjwippdjCAL6NZlIRkgRlAA)

## Update Icons

You can update icons once they have been created with the ID that is supplied
for each icon associated with a profile. To update an icon silhouette you can
leverage the `updateIconSilhouette()` field operation.

```graphql
# Updates the paths associated to an icon.

mutation UpdateIconSilhouette {
  # Update the icon leveraging the updateIcon() operation
  updateIconSilhouette(
    id: "icon/ICON123"
    icon: {
      # Provide the corresponding view box
      viewBox: "0 0 1024 1024"
      # Provide the icon silhouette path data
      paths: ["M 100 ... "]
    }
  ) {
    # Read back the modified icon
    icon {
      # Identifiers
      id
      __typename

      # Data that has been updated by updateIcon operation
      viewBox
      paths
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBVABzAEMUEBnHFACwRwNOsuPPOgEtSEwqIdikOdlAhIAdAB0kUuDBSl2o-ES4BJEUgDK7ADbUIMBCjI5gUnDlyESJmnWFKdCAG4IATsQDm7JJ6q0cGBUydVEACgBKHAgCdwVRc0DghFCtXX1DYwQwxIt2MHQcCRAHJAB6VQBhAHkAOQBGACYAZmLcoQ1Cs0ELXtwABTcIZ3y6OxwRNzcKAlEwHz8RhAB3HAAjCAAPdosl5YAhLcLigAYcM-qTxoAWHEubtp7eyxxB4dH-ew0ccnSDIxMDBoOBsxB29EY5EKAG1igBZO4nM5iFFFEAAXXaAF9ElFus9cAAlBDEHhrYhQADWnxwcAg8wAZuxuB0Ek9WYJ8c8XqowMgUOwme5yOD8uCAPrilAAT1iSGIiCk4NwABFSMR-KQcNQWOsEMgkjYWWtpYa1N8YnEBWzuTg9odtuyLECmNjEjikFiQFigA)

## Removing Icons

You can easily remove icons at any stage with the ID. You can leverage the
`deleteIconResource()` field operation.

```graphql
# Removes an icon.

mutation DeleteIcon {
  # Use the deleteIcon operation to remove an icon
  deleteIconResource(
    # Supply your ID of the icon to remove (no undo)
    id: "icon/ICON123"
  ) {
    # Select back the ID of the icon that was removed
    id
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEAlBOCANwQGccBDJHASygiQDoAdJNuGFSlWxnACIIANghQIAkgxrA2OHLgCqZBDhQALVWBFjJ0nBAAOCAE48+NFBBwnCJVdTrS5ObaPFTGBMhBgmoCAAULvK4AMowhobCAJ44Mb4mOBICBgBmappO-FY2dqQ4gUjWMEiQAJQhdGDoOCwg9IwA9BIAwgDyAHIAjABMAMz1LuU4sjTyCjhhOlAoOABGlFAA1pmqKelr2ZbqPDgA7pQUtkSkYFW05+MAvmzXINdAA)

Note: If you remove icons that are used in the application, the resources will
return null in the queries.
