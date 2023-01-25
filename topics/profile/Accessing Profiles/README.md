# Accessing Profiles

The Alpaca Travel GraphQL API allows developers to access and manipulate user
profiles and itineraries on the Alpaca Travel platform. In order to access the
API, a valid access token must be included with requests. This access token
defines the level of access a user has to a profile, with a secret token
providing write access and a public token providing read-only access.

In this reference guide, we will cover the basics of accessing profiles using
the Alpaca Travel GraphQL API. We will discuss the use of secret and public
tokens, the process of creating and reading profiles and itineraries, and
provide code examples for various operations.

## Table of Contents

- [Understanding Secret and Public Tokens](#understanding-secret-and-public-tokens)
- [Reading Profiles](#reading-profiles)
- [Creating Profile Associated to an Itinerary](#creating-profile-associated-to-an-itinerary)

## Understanding Secret and Public Tokens

Accessing profiles using the Alpaca Travel GraphQL API requires the use of an
access token. This access token defines the level of access a user has to a
profile, with a secret token providing write access and a public token providing
read-only access.

It's very important to keep in mind that the secret key is something that should
be hidden from being revealed in your application or website to users (e.g. used
in requests from the client). In the case you wish to have javascript call the
GraphQL API directly, you should always use the public key.

Based on the version 1 of the Alpaca Travel GraphQL API access token, visually
the tokens starting with "sk." are secret keys, and "pk." is a public key.

When creating content, we can associate content to a profile if we have access
using the secret token, or with the public token we can create psuedo-anonymous
content, which does not have an association to a profile. However, it's
important to note that it's not possible to create new profiles with access
tokens.

In summary, the secret token provides write access to the profile, allowing you
to create and update content associated with the profile. The public token, on
the other hand, provides read-only access to the profile, allowing you to view
and retrieve information about the profile but not make any changes to it.

## Reading Profiles

In order to read a profile using the Alpaca Travel GraphQL API, you may need to
locate the authorized profiles that correspond to your access token. The
following query can be used to do this:

```graphql
query GetAuthorizedProfiles {
  authorizedProfiles(first: 1) {
    nodes {
      id
      __typename
      handle
      name
    }
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/)
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAOIIoCCMKAFhHgJYBeCYACnhAGYMA2CAZyLAAOkiJEAhtTqMW7Tj34CAFDzwCU6IgEYAlMLESJSCGEGHxxiQzBHrRAPqOUBAA7JJie9ZqSkYPw+xkheCMEAvvZRSBEgEUA)

This query will return a the first authorized profile, including the profile's
ID, type, handle, and name.

```json
{
  "data": {
    "authorizedProfiles": {
      "nodes": [
        {
          "id": "profile/ABC123",
          "__typename": "Profile",
          "handle": "johndoe",
          "name": "John Doe"
        }
      ]
    }
  }
}
```

Once you have located the authorized profile, you can use the profile ID to read
in a specific profile. The following query can be used to read a profile:

```graphql
query GetProfile {
  profile(id: "profile/ABC123") {
    id
    __typename
    handle
    name
    bio
    websiteUrl
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/)
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAOIIoAKeEAZgJYA2CRwAOkkUQA7X1MAUdMOiKsQPWowQB6AIIAhAMIBGAEwBmMQEoW7TpyF79AfWMoCXZAENERzgAsrSMEztEkNhG4BGdCG4B3BG8AZzoUBABVPAYjAF92OJA4oA)

This query will return the profile's ID, type, handle, name, bio, and website
URL. If the profile ID is invalid or the user does not have access to the
profile, the query will return an error.

Expected response from the server:

```json
{
  "profile": {
    "id": "profile/ABC123",
    "__typename": "Profile",
    "handle": "johndoe",
    "name": "John Doe",
    "bio": "I am a travel enthusiast and love to explore new places.",
    "websiteUrl": "https://johndoe.com"
  }
}
```

## Creating Profile Associated to an Itinerary

Once you have located an authorized profile using the profile ID, you can create
an itinerary associated to that profile using the createItinerary mutation. The
following example shows how to create an itinerary associated to the profile
with ID "profile/ABC123":

```graphql
mutation CreateItinerary {
  createItinerary(
    profileId: "profile/ABC123"
    itinerary: {
      title: "My European Adventure"
      synopsis: "A curated list of must-see places in Europe"
    }
  ) {
    itinerary {
      id
      __typename
      title
      synopsis
    }
  }
}
```

Sandbox: [Setup](/topics/graphql/Apollo%20Sandbox/)
[View Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAIBhAJwXwQElCkELcKBPE4AHVJKipvoFGzNgApuJSSQAOFCADMCAGzph0JTiFkLlCAPQBBAEJkAjACYAzJolSCDJi1bquPKSUIoV6zQFl2AKIwctLUpAZgAG7IKMEINm5SAM6sSBDSSQRJPiAGvME0YCRKWSgkCiTYSSgAtEkICDJKuFAISSRCJEEh8SC2kgC+tgCUHP0dDiLsru6SBGDjkgD6SyisoUi4iIse9io7KWkZWeNDPGcDIANAA)

This mutation creates an itinerary with the title "My European Adventure", the
synopsis "A curated list of must-see places in Europe" and associates it to the
profile with ID "profile/ABC123". It returns the itinerary's ID, type, title and
synopsis.

Expected response from the server:

```json
{
  "data": {
    "createItinerary": {
      "itinerary": {
        "id": "itinerary_ABC123",
        "__typename": "Itinerary",
        "title": "My European Adventure",
        "description": "A curated list of must-see places in Europe",
        "startDate": "2022-07-01"
      }
    }
  }
}
```

It is important to note that it is only possible to create itineraries
associated to an authorized profile if you are using a secret key. If you are
using a public key, you will not be able to create itineraries associated to a
profile.
