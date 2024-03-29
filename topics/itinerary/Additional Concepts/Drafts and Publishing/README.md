[//]: # "Weight: 1"
[//]: # "TOC: false"
[//]: # "Layout: 1-col"

# Drafts and Publishing Itineraries

The Alpaca Platform offers the ability to work with drafts before publishing
them. This is particularly important for content authors, who may want to make
several changes prior to those updates being published all at once.

Alpaca offers the ability to determine the target of mutations when you perform
them on itineraries.

```graphql
mutation ChangeItineraryDraftTitle {
  # Perform an update on the itinerary, but don't publish the changes
  updateItinerary(
    id: "itinerary/ABC123"
    # Use the publish: false to disable automatically publishing the mutation
    publish: false
    # Updates will be applied to a draft version
    itinerary: { title: "New title for the itinerary" }
  ) {
    itinerary {
      id

      # The date when the itinerary was last published
      published

      # The modified date will be the latest draft date
      modified

      # This title value is taken from the draft
      title
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAIBhAC1yQHMEBJQpBAJ1xYE8ARNgMxQAqBFABsEJYAB1SJAMQkACq14QWcEtRIwADmHzjiJFBXHCCzNpwA0JAEY4SkJAHIUJbTFsiCAZwpGTEigqWgQfaRItXX1Gc1Z2DgAKCMiSAjB0EkkQMwsEgHoAQQAhMgBGACYAZmyUyPkAVR9xY3EPL18KTN5cEWajCEdfXC9xXBwIOHwCKF6RDndPbz9zGgDxbDxCYjrFjr9u3ubdxuiUMJIAdwIRETsx7W1vBDABjUc+NwA3Vh8iJF2uXinEywCMwjEmWyADkEJdwaJxCoWOs0kxgRxsiQAL4pACUEkB6MsCykMlSaTA0l29RIAkCenOVxMpFaaLiJKuuB8JBE3Lc7WWJip5NSgs6L2potp9I2EDABF4BBejn0Vxud1sLUCfPOPjcYE+qvONJIcHliuVItN8npvgRYhIX16MFMPLwAGtkCReCxJqjDbh+KbCIjdriZBHsSBsUA)
