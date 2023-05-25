[//]: # "Label: experimental"
[//]: # "Weight: 11"
[//]: # "TOC: false"
[//]: # "Layout: 1-col"

# Content Links

Content links allow you to associate content in to the itinerary.

<aside class="note">
  This feature is currently experimental and is not supported in the current
  embeds or itinerary editor.
</aside>

## Creating associations to other Itineraries

It is possible to create an associated link between itineraries. This method
facilitates the interlinking of itineraries, such as listing itineraries within
another itinerary.

```graphql
# Creates a link between itineraries from one itinerary to another.

mutation CreateItineraryLinkItinerary(
  $itineraryId: ID!
  $itineraryLinkItinerary: CreateItineraryLinkItineraryInput!
) {
  createItineraryLinkItinerary(
    itineraryId: $itineraryId
    link: $itineraryLinkItinerary
  ) {
    link {
      id
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBhAJwQEMUEBnHYnAGwEskBrHAIwRQHcFkc6UGEBYgToUcAMwIQ4OCEgS9+8oQQCeOFBCpIIKABaCAdAB0kpuDBSk6c-EVIIAkksHDVAGQaNnAlaoAUpjg4ACR8vm6OYOg4jgAiAIRBoeHKbp5MPmlqMYQkZFmuahneLn6OSAAOlklIAJQ4wMlQ9gVl6V6FfoFIwcGpRapRMWHtalHJwfRMIwN+JV1uyQ1NvX3TzKt9fXRgkzgAvslHSAcgB0A)

## Querying Links

With links, you are able to access information from one itinerary to another

```graphql
# Query the itinerary links

query listItineraryLinks($itineraryId: ID!, $first: Int!, $after: String) {
  itinerary(
    # Supply the itinerary ID
    id: $itineraryId
  ) {
    # Select the associated itinerary links using the children selector
    children(
      # Limit to querying the itinerary links
      type: ItineraryLink
      # Using the relay "cursor connection" specification for pagination
      # See: https://relay.dev/graphql/connections.htm
      first: $first
      after: $after
    ) {
      edges {
        node {
          # ID/Types
          id
          __typename

          # Specific information drawn from the linked itinerary
          ... on ItineraryLinkItinerary {
            id
            title

            # Resolve the linked itinerary
            itinerary {
              title
              synopsis
            }
          }
        }
        # Obtain the cursor to pass back as the "after" property
        cursor
      }
      # Total number of links
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBFGBAJwE8cUALBHASxRqWIENScAbBgawGcAdJfgEdCrDtxQBJeoyIsSAGS7cAFABI6DZqQlh0OCQBEAhABocqgGY0i4vRNSnzTCymJ6AyiiIMA5gEocYH4cWmktEmVgkJxcdxgAB3i2MkpqDRk5fQMokJpdc3TwnSiAoKRomJx3BDYEKBRyKhwmbm5oGiZXMFDNWVElHBhuX0bqKAoaNjAiZBxuGrqUCCIcnHHJ6eRI8orKxTg6cggcYWISEdSejP6kHlWQlBJ4hDswvoUue8qAVWGkH1GOBmbCYZF4IFgNmWawgSEY9RosPBc2eUBoVignUR5Qs0PiTB8DCxSJ2FViCBeOAoKBQ8W46AA9AzgaCAHRgBAANwZPlk8QogjYDKgsPh9Fh3FZ1LgXysNhQeks1nEX2criIirVxFWpS+CDAPgQ3ECXxCSAgHJNpN2IVwhgZABUnkbTdE8q6QgB9T2PZ5IJiIfgeyruVHomhQWhIXFEODE8rTJgAdxxRAgcEBHFu+qu4WDrILOFh+jeckUtykvUyZRtNvd1tr5DotSDDdruAASkaIGxOdRLlnODnCu9g7lS6wa43dvQUC2243uCRzXSaHwF7sAL7B7cb3eN3AAeQARigmAxAZC2kQjjh8a0cMemFBOM1jZdwVqViA72nnkRHldK9li+fddlwB0IDPNgcCQeBj2IIsLHYJQviWaCAGEIBgVAvnxQ17FxK1GwoFoADkEAADxQAAFAkEFdZAwAwmAoRWNswJCMDd03EBNyAA)
