[//]: # "Weight: 3"
[//]: # "TOC: false"
[//]: # "Layout: 1-col"

# Default Locale

When creating itinerary content, it is recommended that you set the default
locale for your content.

This locale can then be read back in order to add i18n to your application.

```graphql
# Create an itinerary and specify the default locale
mutation CreateItinerary {
  createItinerary(
    itinerary: {
      # Include a title
      title: "Basic Itinerary Example"
      # Recommended: Include a BCP-47 Locale
      defaultLocale: "en"
    }
  ) {
    itinerary {
      id
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBhAJwQEMUEdikcBLFapBA4ggTwqTBwGcAHBKagDM2KABbkwCQcRgAbFDlnRishAB0kcGClLUIVQiTIBJOgyascwDThxQipBKfqNmLABQ3bNM69borL28cXGMkKFkYSQocOhRVIO841QC1EAAhYi5qKBxnczccAFEAD2I4HgSQRNtcACV+CDhEDgQwALCIqPJiHHS8AAUAWgAWAHYcABllBKpgnElpORRpqBUEVJBkNMSAXy8ASkC521oXCzZrE+9qMD2vfaRdkF2gA)

<aside class="info">
  Alpaca uses BCP-47 / ISO 639-3 IETF language codes that appear like "en".
</aside>

```graphql
# Obtain the locale to adjust your i18n translations in your application
query GetItineraryLocale {
  itinerary(id: "itinerary/ABC123") {
    id

    defaultLocale
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEB5AIxQEMBLJHFACwRwBtpi7aUIdiwArGAZxRwCeEGACccpAIwAOCihHEkPOsRSkIi8RSGj2AB111SUFWqQAdJAEcYCEQJwBxBCgCSqpLeJ2AMo2Y5gCxxxd087AApSMHQcMxBSUPk7AHoAQQAhAGEJACYAZjiASgCg4PEwC1LgsAQAM2IYOhRfY2ZSgF8LdpB2oA)
