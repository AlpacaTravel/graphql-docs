[//]: # "Title: Facebook Pages"
[//]: # "Weight: 5"

# Working with Facebook Pages

Facebook Pages is a feature on Facebook that allows businesses, organizations,
and other entities to create a presence on the social media platform. These
pages can include information such as opening hours, address, contact
information, and more.

Alpaca is a travel content platform that allows developers to build websites and
applications with travel-related content, such as curated lists, top-10 lists,
trips, and trails. The Alpaca Travel GraphQL API allows developers to access a
wide range of travel-related information and use it to build these itineraries.

By integrating Facebook Pages with the Alpaca Travel GraphQL API, developers can
access additional information about places and businesses, such as opening
hours, address, and other details, that are associated with the Facebook page.
This information can be used to enhance the user experience and provide more
detailed and accurate itineraries for users. Developers can also use the API to
search for places and businesses, and plot them onto the itineraries they are
building, which can help users better plan and navigate their trips.

## Place Identifiers

When working with Facebook Pages on the Alpaca platform, it's important to
understand how IDs are used and how to reference the Facebook Page.

On Facebook, each page is assigned a unique numeric ID. This ID can be used to
access information about the page, such as opening hours, address, and contact
information, through the Facebook Pages API. In addition to the numeric ID,
Facebook also allows pages to be accessed using the last part of the page's URL,
such as "mavisthegrocer" in the URL "<https://www.facebook.com/mavisthegrocer">.

`place/facebook:page:<facebook_page_id>`

On the Alpaca platform, we use a unique ID to reference each provider, including
Facebook Pages. The ID for a Facebook Page on Alpaca will take the form
"place/facebook:page:12345" where "12345" is the ID of the Facebook Page. This
ID format allows us to reference multiple providers within the platform, and
make sure that we can distinguish between them.

It is also possible to use the last part of the page's URL (if available) to
reference the Facebook Page on Alpaca. But it's important to note that this
might not be the case always and you should always use the numeric ID (if you
have it) as the primary reference.

To reference a Facebook Page on the Alpaca platform, developers can use the
unique ID assigned to the page by Facebook. The ID can be found by visiting the
page on Facebook and looking at the URL. It is the last string after the last
slash. For example, in the URL "<https://www.facebook.com/mavisthegrocer>" the
ID is "mavisthegrocer".

Alternatively, you can use the last part of the page's URL (if available) as an
alternative way to reference the Facebook Page on Alpaca.

Once the ID is obtained, developers can use it to make requests to the Alpaca
Travel GraphQL API and retrieve information about the page. This information can
then be used to enhance the user experience and provide more detailed and
accurate itineraries for users.

```graphql
query GetPlace {
  place(id: "place/facebook:page:370266689818691") {
    name
    synopsis

    position {
      lon
      lat
    }

    # Images
    images: mediaContainers(first: 3) {
      nodes {
        resource {
          ... on MediaImage {
            url(bestFit: [200, 200])
            copyright
            attribution
            caption
          }
        }
      }
    }

    # Source and Attribution
    contributor

    address {
      addressLineOne
      locality
      region
      country
    }

    contact {
      facebookUrl
    }

    # Some specific facebook information
    likes: attrValue(id: "place/facebook:likes")
    ratings: attrValue(id: "place/facebook:ratings-count")
    starRating: attrValue(id: "place/facebook:star-rating")
    checkins: attrValue(id: "place/facebook:checkins")
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAOIIoAKANgIZQJHAA6SRRADrfQBQCWY6IkxCc6CAPQAzMQCMIEANbp2NAOYJ0AZgDsABgBMANmMAOAJwmAjCcNnLwgJSMWbNkhqIXrgM4EkEdm9ebxYvNnYIIJReCFZmVlc2Kliw11oUVIBfUIS2AGIiAEk4NQQQ3KJeEvVvQUQwXhoAYViUGl4kfG9uSV48bxRBTSd4xLcIMDLnCsS8MogYPHppsbGAOg2iWKIAWQQGmmLSldWxxapuGTKUADFeQaIAbX1dXQAaIhfdAF0HVNOiFAAgQ8LxVAALDIzU40FAoUEyGDRFLQ1ZQGjsZFIf5jbKooh41aE1x41IFADKCyWDBoSDARAAgnCEUiYtiKkDUCyUBA8DlEjQwGA5t5vCcBUKRd4ADIdBAAeU6OOS6Ko9wIOLmqjZOKBMC5GoqpI5rToKHFrmk9DkigAqngqFl+a4KRBEERvOwEFBeL0oEQrQgbQpKkhJLySljUmqFGVBLD4QA1GhUXB8ARCERcCSB4PoGNlRypPCwjqqWpEBN4ZOphDpwTCUT0KSyeRKEvRJDlgC0etQRYqAxoeAASqWu-HmTW0-wG1mxC3rW30EO8N2O2WB4koODvQoOhWq9O67PM02c63FOgd3uD1uCSxMiBMkA)

If successul, a response may look like the following:

```json
{
  "data": {
    "place": {
      "name": "Mavis The Grocer",
      "synopsis": "We choose our suppliers & growers very carefully to offer only the finest of seasonal, local, sustainable, ethically sourced & organic produce.",
      "position": {
        "lon": 144.99702,
        "lat": -37.8031099
      },
      "images": {
        "nodes": ...
      },
      "contributor": "Facebook",
      "address": {
        "addressLineOne": "197 Vere Street",
        "locality": "Abbotsford",
        "region": "VIC",
        "country": "Australia"
      },
      "contact": {
        "facebookUrl": "https://www.facebook.com/370266689818691"
      },
      "likes": 2301,
      "ratings": 39,
      "starRating": 4.2,
      "checkins": 829
    }
  }
}
```

You can also find all the attributes that are available for a location with the
following query:

```graphql
query {
  place(id: "place/facebook:page:370266689818691") {
    id

    # Load the first 30 attributes for the product
    attrs(first: 30) {
      edges {
        node {
          id
          value
        }
      }
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABMADpJFEAOANgIZQIAUAlmOkaSLQwgPQAzXgCMIEANboqdAOYJ0AZgDsABgBMANi0AOAJzaAjNo26DXAJQlylSm3LWbAYiIAZCHTBEUACwREBLHgAzihECipEdCgoeCzCMCgIQf4QeF6+1HgQYDBQKA6UUTFBTAHBKBzhlmQUNpQIYHLJNXV1SNl+La11drXdlABudDS4Ba0AvmOUk31EM9Pk4yDjQA)

### Opening Hours

Where opening hours are available, you can use the Alpaca platform to interpret
and display opening hours of locations.

- Search for a upcoming or future range

- Localise the hours to a different timezone

- Identify public holidays that could affect opening hours

- Change the format and display for dates and times

Alpaca also offers the inclusion of Public Holidays in order to flag to users of
your website or application that they may have affected operating hours due to
local observed public holidays.

```graphql
# Obtain the open/closed hours for the place given a period, such as the
# upcoming week or future date range. Includes information on local public
# holidays that could affect opening hours.

query QueryDateRangeOpenClosedTimes($placeId: ID!) {
  # Use the place() operation
  place(id: $placeId) {
    # Access the opening hours (where specified)
    hours {
      # Use the forDays operation to obtain days across a range of dates. By
      # default, without any arguments the next 7 days will be selected. You
      # can change the range by specifying an alternative offset (which allows
      # you to specify values like { days: 14 }) or provide a specific start and
      # end dates (as ISO-8601 date strings)
      forDays {
        # Date/day, as ISO-8601, or as formatted for presentation using the
        # Unicode Technical Standard #35 Date Field Symbols
        date(format: "EEE, MMM d")
        # Whether there is a public holiday for this date detected for this
        # region on this date
        publicHolidays
        # Obtain the intervals for this date, requesting the opening status
        # status is optional, otherwise use Open/Closed to specify your pref
        intervals(status: Open) {
          # Hours, from/to as ISO-8601 string, or formatted using the Unicode
          # Technical Standard #35 Date Field Symbols
          from(format: "h:mm a")
          to(format: "h:mm a")
          # Status (Open/Closed)
          status
          # Any corresponding comment for the opening hours
          comment
        }
      }
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEB5AIxQEMBLJHFACwRwgAdkB6KAGwgGcEwcqIYAThxwAzCAMo0c9VsSi0A5qQBuyHMWkIBpCGAA0ODjChV1w6ggA6SXDHpQIccgpwB3BAgDWdCSJgpBWjBiFFoBYiQFBAA6HABJJDYYMARhcjEBOBCdCggKdihiVmkYAlZSKGtcPnLggE9zKhCcBxhWHmIREQQoFDpGJGdefiFo62sARxgtOpwARWmBOoAREIQAJQiovAGAYXYuMAAVUkQOAAoAEhk5BDiwdHjlgEIAShxgaxwcXABVLkktBu8nO7wYWmyeS+0lkINIDxw11hdzA70+FG+PxwAEEoPIOI1aODBpFhoJhOdXDQBLQOIwoKQRKRuK9od8+OSPmzMX8ARZROJVg1+hCUDlKBA6EQyBR6sI5AJOPKcOFIkSRDhgqEOLEAEJ1bnfXApETENooAyuUjUfh9CKzYgCBTwZAoQk4JAIAAefQA7JriMKraxigRaQhWD1QmBYgBNfiGrGFCgmLa0fmqqI4AizOk9Rl1IYRdSsUICJDZVR0LpcPqUqgVUxFdiuDiJ3B1fgSwz0gs4ZRFabCcqeWjAAMNR4ARgALDgAL5giT0RXKeG0DR5hlMqCGEgCO1IMDtnDIHha1I4c7EYRxADKeAAtAAOABsAAYpwHQnvtJEOKyGKYgKAhCsI6LAcBuCrKETD1AYN7xA+L4flOBjiGYIFZCg0YgdINJcKgkIUDAHBDBYiZGjgvyDA4KQ4EcPRULRRQ4HeJBHo6PBYAAzAArDgMG0AAYsy7RsXUcAEBArBtkBkEXucGTYY8lggAAoppBgALK6ZqamAZBPI4AA6jQFgSBZtCkMq9ClOUu41PCgZ4dQNnfkECChL03CuQ2clGVRNJKHkdAUG5wgXpRJRlBUAASMnOQ00W4IQJDkICODkGWA6yX57kXgYNJTKkYqkvyxJDBwJABAFgW4NVISkVlwgMGKeRFOhFlWgCpG0DszD7JwvkoJKW59p2gj4QgIjRdlWi5RcjW1Y8A1IGi0VUQl5IGCIipwEwo2YfeT5vp+v7OOhvjiNhuGkeRUg0RUuhWPJRm4IxJgscU7ERMEAjcfxglrDgokRjwd6SdJsmbaI+1KTdISqSAVDoHAcDqAZsOjQjmRIzgamo+jmMgIZgVUb9tVXmtTBDYcZPk8tpGw7g2JILMDgCAR9B5GAQwOOjrp+USAxDByQiwwLiCoNF86JnL8kK98CvziA85AA)

```json
{
  "data": {
    "place": {
      "hours": {
        "forDays": [
          {
            "date": "Mon, Jan 23",
            "publicHolidays": [],
            "intervals": [
              {
                "from": "7:00 AM",
                "to": "3:30 PM",
                "status": "Open",
                "comment": null
              }
            ]
          },
          {
            "date": "Tue, Jan 24",
            "publicHolidays": [],
            "intervals": [
              {
                "from": "7:00 AM",
                "to": "3:30 PM",
                "status": "Open",
                "comment": null
              }
            ]
          },
          {
            "date": "Wed, Jan 25",
            "publicHolidays": [],
            "intervals": [
              {
                "from": "7:00 AM",
                "to": "3:30 PM",
                "status": "Open",
                "comment": null
              }
            ]
          },
          {
            "date": "Thu, Jan 26",
            "publicHolidays": ["Australia Day"],
            "intervals": [
              {
                "from": "7:00 AM",
                "to": "3:30 PM",
                "status": "Open",
                "comment": null
              }
            ]
          },
          {
            "date": "Fri, Jan 27",
            "publicHolidays": [],
            "intervals": [
              {
                "from": "7:00 AM",
                "to": "3:30 PM",
                "status": "Open",
                "comment": null
              }
            ]
          },
          {
            "date": "Sat, Jan 28",
            "publicHolidays": [],
            "intervals": [
              {
                "from": "8:00 AM",
                "to": "3:30 PM",
                "status": "Open",
                "comment": null
              }
            ]
          },
          {
            "date": "Sun, Jan 29",
            "publicHolidays": [],
            "intervals": [
              {
                "from": "9:00 AM",
                "to": "3:30 PM",
                "status": "Open",
                "comment": null
              }
            ]
          }
        ]
      }
    }
  }
}
```

See More:

- [Accessing Hours](/topics/places/Accessing%20Hours/)

## Searching for Pages

You can also leverage the place search capabilities of the API by specifying the
`sources` as `Facebook`.

```graphql
query SearchPlaceAutocompleteFromFacebook {
  # use the placeAutocompleteSearch operation to query Facebook Pages
  placeAutocompleteSearch(
    first: 3
    text: "Mavis the Grocer"
    sources: Facebook
  ) {
    edges {
      # Can build single or multiple line responses
      single {
        label
        matches {
          length
          offset
        }
      }

      # The place information
      node {
        # Basic identifiers
        id
        name

        # Location to show on a map
        position {
          lon
          lat
        }

        # Context from adddress
        address {
          region
          country
        }
      }
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAMoICGeUAFgAoA25UCAgjCtBHAA70IoIAYni6CmCAEYQIAayLAAOkiJEAxERgBnBERTUdvcWw5QuvfgjKUaRCN3zkUASwjKORHPmJjmU2UVpyAHMETSUVQ2ZjTh4+ASsqagAKcJUiADMnPE0UdCIAZlSVAQAPXKIFEABZcgA3J01dfSIAcRFmPEqiok0IGCpQvJ9JaRlUgEp5boQwEMbFZTSVdQBhcmUJGCd6MB6nJCC+WzwiOBh6Z3Mien2dPFDuV20wxaXNfcOdBaWlxgkEejdJZwRw0UJTV4-FR8A56IE-CDpdLaFDwlQAX3hmKQ8PUABVmpEdPt0hA8CDnK54UgIGAvmi1EQAELkd5QIhOOmoJyZfAvKEqTkMpDkRBKBnqAAy0EcLjcEB61AgAHdbMpyKdyNwGY93pTlN8BdCqZCoYxUaa0tiJUQVq5SigMiI4ERyGB3fdNPyBW6wJ75gyVPcgnLA0RTDBUIQGdiobGralseiQOigA)

If successful, a response may look like the following:

```json
{
  "data": {
    "placeAutocompleteSearch": {
      "edges": [
        {
          "single": {
            "label": "Mavis The Grocer, 197 Vere Street, Melbourne",
            "matches": [
              {
                "length": 5,
                "offset": 0
              },
              {
                "length": 3,
                "offset": 6
              },
              {
                "length": 6,
                "offset": 10
              }
            ]
          },
          "node": {
            "id": "place/facebook:page:370266689818691",
            "name": "Mavis The Grocer",
            "position": {
              "lon": 144.99702,
              "lat": -37.8031099
            },
            "address": {
              "region": "VIC",
              "country": "Australia"
            }
          }
        },
        {
          "single": {
            "label": "The Grocer, Shop 2, 12-20 Ocean St, Sunshine Coast",
            "matches": [
              {
                "length": 3,
                "offset": 0
              },
              {
                "length": 6,
                "offset": 4
              }
            ]
          },
          "node": {
            "id": "place/facebook:page:107192972168755",
            "name": "The Grocer",
            "position": {
              "lon": 153.09140014648,
              "lat": -26.652830262873
            },
            "address": {
              "region": "QLD",
              "country": "Australia"
            }
          }
        },
        {
          "single": {
            "label": "The Grocer, Bridgewater, SA",
            "matches": [
              {
                "length": 3,
                "offset": 0
              },
              {
                "length": 6,
                "offset": 4
              }
            ]
          },
          "node": {
            "id": "place/facebook:page:336261170085742",
            "name": "The Grocer",
            "position": {
              "lon": 138.75989069709,
              "lat": -35.009106062166
            },
            "address": {
              "region": "SA",
              "country": "Australia"
            }
          }
        }
      ]
    }
  }
}
```

## Using Facebook API Directly

To use the Facebook API directly, a developer will first need to create a
Facebook App. This can be done by visiting the Facebook Developers website
(<https://developers.facebook.com/>) and following these steps:

Log in to your Facebook account and click on the "My Apps" drop-down menu in the
top right corner.

Select "Create App" from the menu.

Select the platform that you will be using the API with, such as "Website" or
"iOS", and click on "Create App ID".

Fill out the form with your app's information and click on "Create App ID".

Once the app is created, the developer will be able to access their Application
ID, which is a unique identifier for their app. The Application ID will be used
in API calls to identify the app making the request.

To obtain the necessary permissions to access the Facebook API, the developer
will need to submit a request to Facebook, specifying which permissions they
need. The developer can then use this access token to make API calls and access
the information they need.

It's important to note that in order to use the Facebook API, developers must
comply with Facebook's policies and guidelines, which can be found here:
<https://developers.facebook.com/docs/marketing-apis/policies/>

Additionally, the developer should also check out the Facebook API
documentation, which provides detailed information about the different types of
API calls that can be made and the data that can be retrieved. The link for the
documentation is <https://developers.facebook.com/docs/pages/access-tokens>

Furthermore, for more information on how to get started with the Facebook API,
developers can also check out the Facebook Developer's guide, which can be found
here: <https://developers.facebook.com/docs/pages/getting-started>
