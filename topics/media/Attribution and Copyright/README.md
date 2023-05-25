[//]: # "Title: Photo Attribution"
[//]: # "Weight: 3"

# Photo Attribution and Copyright

Media inside the alpaca.travel platform can allow content creators to attach
additional information to their content, such as to provide attribution and
copyright.

When building and designing your application, you must display the attribution
and copyright information with any photos displayed.

Alpaca makes it easy for you to access this information across the API for
photos.

```graphql
query getMediaImage($id: ID!) {
  # Use the mediaResource() to load MediaImage types
  mediaResource(
    # Supply your Media Resource ID
    id: $id
  ) {
    # In this query, we are accessing the image
    ... on MediaImage {
      # Image credits
      copyright
      attribution

      # More detailed attribution
      attributionUrl: attrValue(id: "attribution-url")
      attributionHtml: attrValue(id: "attribution-html")
      photographer: attrValue(id: "photographer")
      usageTerms: attrValue(id: "usage-terms")
      licenseUrl: attrValue(id: "license-url")
      licenseShortName: attrValue(id: "license-short-name")
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAOYIoCyCYAlgIYCScdZAFACQ1jpEMAiAQgCURYAB0kRIgGIiAVQDOCIigAWyxLToAlBAogw8UBKxEoIRADYQ6YIlS1MWylAQAOeiVM31d+w8asXlIyRADKMG5ulsQEBnj21PREfvHGvHzBUlw8nGDBIuKSIbIMkmo0CkQ4+AQANEQA7sp0eC1QxgoKNEgkKupENMxkWUQAdBNEEJIO9E5koqNSpcPKUG20KApLRFAQbgR4NCSqKDt0KChHAEYwKDTTEjuyFBBtRGDkdDSW1EQXVxot3uj2KIX+lxudweSDkeEsPABeAAanRLLhWDkiGIQEigdDpgBaQyWHFCc6Q-EgpAACRQcAREKuqPRJixOLxwJhhNODLJOzcqgg5hIeDogvwiMhLIx7JAguFEFF4vUeH5YJCMAUzgAKvg4Aopcy0bLuNiQFrnISUPrtiByRqpJYaMYkEo4YykTK2Wacc7XUpifD1eCnS7kEowkK8CgAHJ0RBGlEmn08P3ht0IQkKaMoQlIBMIEMhAC+wTLSBLIBLQA)

<aside class="warning">
  Application developers and designers need to consider the use of media such as
  photos that may have the requirement of displaying suitable attribution and 
  copyright.
</aside>
