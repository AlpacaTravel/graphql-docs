# Accessing Opening Hours, Timezones and Public Holidays

The opening hours is a crucial part of place information.

When considering presenting opening hours to a user, you must observe several
user interface considerations:

- Places can have multiple opening hours for a day
- Places can be open always/24H or open till late
- Places may indicate if they are open on public holidays, but can often not be
  kept updated
- Places can provide comments against a status
- A user may wish to know the opening hours for a place in local time, such as
  if they need reach out during open time

## Opening Hours

Various place providers engage operators to contribute their opening hours.
These are made accessible through the API in order for you to present to the
user.

- Use `intervals()` to access the next series of opening hours for a place. Use
  this to present the immediate open/closed times
- Use `forDays()` to query a range of dates for opening hours for a place. Use
  this to present a weeks worth of opening hours, or possibly more (such as
  a calendar).

```graphql
# Query the place opening hours (where available), as well as the timezone
# and any public holidays for the selected period.

query QueryHoursPublicHolidaysTimezone {
  # Use the place() operation
  place(id: "place/facebook:page:mavisthegrocer") {
    # Access the time-zone for this location
    attr(id: "place/time-zone") {
      value
    }
    # Access the opening hours (where specified)
    hours {
      # Select a period, can use forDays for this
      forDays(from: "2021-04-01", to: "2021-04-08") {
        # Date
        date
        # Whether there is a public holiday for this date detected for this
        # region on this date
        publicHoliday
        # Obtain the intervals for this date, requesting the opening status
        # status is optional, otherwise use Open/Closed to specify your pref
        intervals(status: Open) {
          # Hours
          from
          to
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

## Time zone

For places accessed on the Alpaca platform, we make available an attribute
to access the time zone. The time zone can enable you to locally adjust the
hours against the hours the place is open, or present the opening hours in
local time.

| Attribute ID      | Value                            | Example     |
| ----------------- | -------------------------------- | ----------- |
| `place/time-zone` | Time zone for the place position | "UTC+10:00" |
