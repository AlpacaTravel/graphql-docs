[//]: # "Title: Opening Hours"
[//]: # "Weight: 1"

# Accessing Hours

The opening hours is a crucial part of place information. This information can
be used to plan a visit to the venue in advance, such as determining the next
time the venue is open, or a future series of dates such as when the user wishes
to visit.

When considering presenting opening hours to a user, you should observe several
key user interface considerations:

- Multiple open/closed intervals can occur per day
- Venues can be open always/24H, open late or closed all day
- Public holidays can affect regular trading hours
- Some open/closed times can be restricted (provide space for a comment)
- Time zones can be critical for local visitors or distant travellers trying to
  contact the operator

Note: The source/provider of opening hours can affect the quality of the opening
hours, and how up to date the information may be. It is generally recommended
that you suggest to users to check the official opening hours with the operator.

## Opening Hours

Various place providers engage operators to contribute their opening hours.
These are made accessible through the API in order for you to present to the
user.

- Use `forDays()` to query a range of dates for opening hours for a place. Use
  this to present a weeks worth of opening hours, or possibly more (such as a
  calendar).
- Use `intervals()` to access the next series of opening hours for a place. Use
  this to present the immediate open/closed times
- Use `osmTag` field to return a single string representation of the opening
  hours encoded in a way that can be parsed, according to using Open Street Map
  opening hours specification.

### Open/Closed hours for a specific date range using `forDays()` operation

The `forDays()` operation allows you to define a date range, such as for the
next day, week or future calendar range. For each of the dates that are
selected, you will be provided the `intervals()` operations to access the
open/closed window intervals.

```graphql
# Obtain the open/closed hours for the place given a period, such as the
# upcoming week or future date range. Includes information on local public
# holidays that could affect opening hours.

query QueryDateRangeOpenClosedTimes {
  # Use the place() operation
  place(id: "place/facebook:page:mavisthegrocer") {
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
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEB5AIxQEMBLJHFACwRwgAdkB6KAGwgGcEwcqIYAThxwAzCAMo0c9VsSi0A5qQBuyHMWkIBpCGAA0ODjChV1w6ggA6SXDHpQIccgpwB3BAgDWdCSJgpBWjBiFFoBYiQFBAA6HABJJDYYMARhcjEBOBCdCggKdihiVmkYAlZSKGtcPnLggE9zKhCcBxhWHmIREQQoFDpGJGdefiFo62sARxgtOpwARWmBOoAREIQAJQiovAGAYXYuMAAVUkRhYGscHFwAVS5JWhk5BAAKAEp+rWy8y+lZeRepDA6BwlhAT3kTBEzwIEAgnnQ9GIUXQWWUpA4FgUAmgWjBHwuFCu1xwAEEoPIOI1aAxkEM+IJhC9XDQBLQOIwoKQRKRuG9flcGUIcITicTbvcLKJxKsGp9wigcpQIHQiGQKPVhHIcVT1DhwpEaSIcMFQhxYgAhOoC8UmhDQtooAyuUjUfh9CKzYgCBTwZAoak4JAIAAefQA7CbiHKXaxigR2QhWD1QmBYgBNfg2q64QoUExbWhSg1RHAEWYcnrcupDCLqVihARIbKqOhdLh9ZlUCqmIrsVwcbMkur8ZWGTnVnDKIrTYTlTy0YBRhoggCMABYcABfD7iaQ49EpPWVrk8qCGEgCD1IMBD3DIHim1I4F7EYRxADKeAAtAAOABsAAMq5RqEF7aJEHD8kSYoZLK5xDjmOCrKETD1AYb7xF+f5AauBh7phGRZCgqbShI9BslwqDfBQMAcEMFiISSNyDA4R5HD0VCsUUOAfiQN7ejwWAAMwAKzIWsOAAGK8u0vF1HAsKsIOMFiqBrxESEIJggAonpBgALJGSa+JMbgADqNAWBI1m0Bier0KU5TnjUQLRmRkj2U+dqhL03AedQGJmfqCBKHkdAUIFwhPkxjllBUAASEC1NGKlqbahAkOQDw4OQjbTspAXdtFawGGyUypIqkQ5bSgzVZiIR0cFDUBGkwgMIqeRFPh1kuvcdG0DszD7Jw-koCqJ6TiOgj7vaTF5VoBUcC8LV0SCQ1IASTFIUljIGCIOJwEw41mFhP4AcB4HOPhvjiMRpF0QxUgsRUuhWKp6W4BxJjccUfERMEAhCWJElgTJSY8B+ClKWl6XEgdjgvJpKDaSAVConA6imR9anjUjd1aaCaMY1jIDQXDtr-a1L4bUwI2HOTFMXo1sMU7gpJILMDgCJR9B5GAQwOHAiCoEVNIDPSIys3DQsiygTFbkOiuqcrVzK1uIBbkAA)

On a success, your response will look similar to the following:

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

### Upcoming Open/Closed hours using `intervals()` connection

The `intervals()` operation provides you the information about the immediate
next open/closed hours for a place. You are provided back a series of
`from`/`to` window intervals along with the associated `status` and `comment`.

This operation was designed to assist user interfaces that wish to present the
next time a venue is open, or perform more nuanced interface messages, such as
"opening soon" or "closing soon".

```graphql
# Query the next series of open/closed hours for a place, in order to present
# information whether the venue is open, closed, opening soon, closing soon,
# etc.

query QueryUpcomingOpenClosedTimes {
  # Use the place() operation
  place(id: "place/facebook:page:mavisthegrocer") {
    # Access the opening hours (where specified)
    hours {
      # Access the next window that the place is open. Supports selecting a
      # series of Open/Closed hours and can be used to let users know when
      # a venue will be open/closed next.
      intervals(first: 2) {
        # First node is the current state, second node is the upcoming change
        # of status.
        nodes {
          # Times from/to as ISO-8601 string, or formatted using the Unicode
          # Technical Standard #35 Date Field Symbols
          from(format: "EEE, MMM d, h:mm a")
          to(format: "EEE, MMM d, h:mm a")
          # Create a relative expression (in X minutes/hours etc) based on a
          # a supplied relative to ISO 8601, or null (for now)
          relative: from(relativeTo: null)
          # Status Open/Closed
          status
          # Any comments attached to the opening hours
          comment
          # Access any local public holidays that may affect these hours
          publicHolidays {
            name
          }
        }
      }
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBFGBAJwE8cUALBHJBADxRwGdiBLBJnCAMy4AdkAeigAbCCzA4KEGEU7cIRHAEMcfEcqgIANDlZIuRMMXIQ1RDshQAdJLn0KicZSlYQDAdyqUTPnADdkQj1OCAEkXVFxBDBdMOR9AHNmCHdIsSYklLTbXAQUKAA6W1sAR0JSfAqSAFU+KAg4JIB5cIBhDJiAFVZETmBbHBxcGpZyKjUNLQAKAEp+Yhc3JEHJzQRp1jB0HGsQdXXBbnWAI1SAa3Q+ZUSEdGd-ViYfRKJoYj35gYMh4ZwAQSgWiYnD88SQWWksk40y8xGoTAEUFY3HYYFmqyGULkOG+v1+uEBwNBE1oDBwHn0kA84xc42oBy0IQWSEKOAAyjA+HxFChOCwRAgoK4kMllJiCcw2BwuLxWkIOtFJNjOMokJIoGqcCdqDAJKYcILGHriJxzkgIDS4SsfvjcKpAkhgpSRCJtdRwcJOpIyShirbfvoUMR-MoRExpqi5CgdgAmL4Su04ABirGjNAgxmZflgRAsqGYKBcOilDXVGazT3pOC5DSaopwUAoatuiclPELLj1-vx+Itxn6baTPT6OG4bzgghQZmUnAAkuzmgBaAAcADYAAwARkLRCScSUjmcKGDkj1WT8NQhDWMQ8lXSFFGvYY5RfVyiMwwAzABWHAAEWLFN2BESR2RIOAznDO8hnHRpI0UY8dj2ABRNDdAAWSwnBYike44BUT4YNMBCnBcZCQDQlDMOw3CKHwwiQAxANez+NoLCA1QLA0VxAhweg+AsEFlhwTYDAADRwesYGDJhBBVfiCnmE5ZxiLgDHFFje3tZguXUNEcG4pY+OnHAF2aHB123A8aBgV1RMcDMPGY1j8SM3i7jHCdpnc1hAi6CAdidV0XNcoZcHZIsUD1HB5SQQRFQkYjni7JhiMJJAyDrRBUFVE9NCoSRTLBcJIRkORiOyqx0oBIEOFVTLDWgF8+BgE4RFYKApAgDqwGUEgSTpZwyGUbhuCFRgfDGFViNa9rOoACR6rZ+sHLTWKQZREGIgBfO89q0g78SOnADp2kAdqAA)

#### Checking a status at a future specific datetime

Note: You can also use the `interval()` method to check the opening hours at a
specific date/time in the future. This can give you spot checks when assisting a
user with checking a future travel date. You can also access whether there are
any public holidays that could affect that time. Use a query providing the
`from` field argument (with optional `to` value) in order to check the status at
a point of time: `interval(from:"<ISO8601_DATE>", first: 1) { status }`.

### OpenStreetMap Opening Hours Specification `osmTag`

Opening Hours can also be accessed as a string according to the
[OpenStreetMap (OSM) opening hours tag specification](https://wiki.openstreetmap.org/wiki/Key:opening_hours/specification).

    Mo,Tu,Th,Fr 12:00-18:00; Sa,PH 12:00-17:00

## Working with Date/Times

The fields of `date`/`from`/`to` return ISO-8601 strings with time zones. You
can supply arguments to these fields to format the return string so that you can
control the presentation.

Supply `format` to provide an output based on the
[Unicode Technical Standard TR35 - Date Field Symboles](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table)
to return dates such as `Wed, Mar 31` etc. These can make dates easier to
include on the front-end.

You can optionally provide your own `timeZone` (such as `Australia/Melbourne`),
to format the output of the date/times, relative to another time zone, such as a
visitors local time zone.

You can also make use of a `relativeTo` field argument, supplying either `null`
to take the current date/time, or a ISO-8601 string, and will provide a relative
time expression (such as `in 8 hours`).

Finally, for internationalisation, you can also provide a `locale` in order to
output strings in a preferred user language.

## Time zone

Dates, including the `from`/`to` fields, are formatted in ISO-8601 standard and
are based on UTC. This enables you to present the hours considerate of time zone
differences of the user to the place. You can also access the time zone of
places using the `place/time-zone` attribute.

| Attribute ID      | Value                            | Example     |
| ----------------- | -------------------------------- | ----------- |
| `place/time-zone` | Time zone for the place position | "UTC+10:00" |

## Regions for identifying Public Holidays

Alpaca source a list of public holidays from publicly accessible and maintained
sources. If you would like to access the public holiday information from an
alternative source, it may be beneficial to use some of the other attributes to
locate the place against other sources. For this purpose, Alpaca provides the
ISO-3166-2 for the place, allowing you to access the country and region.

| Attribute ID       | Value      | Example |
| ------------------ | ---------- | ------- |
| `place/iso-3166-2` | ISO-3166-2 | "AU-VIC |

## More Resources

- [Example React Opening Hours](https://github.com/AlpacaTravel/react-graphql-acessing-place-hours-example)
