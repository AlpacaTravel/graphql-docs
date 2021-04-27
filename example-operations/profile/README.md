# Profile

- **[Query Authorized Profiles](/example-operations/profile/QueryAuthorizedProfiles.graphql)**
  Uses a query with the supplied AccessToken/API Key in order to determine the associated authorized profiles
- **[Query Profile](/example-operations/profile/QueryProfile.graphql)**
  Load a query by a supplied profile identifierquery QueryProfile($id: ID!) {   Use the profile() operation to load the profile  profile(id: $id) {     Record Identifiers    id    __typename    handle     Profile information    name    bio    websiteUrl  }}
- **[Query Profiles By Handle](/example-operations/profile/QueryProfilesByHandle.graphql)**
  Queries for profiles based on a registered handle claimed for profilesquery QueryProfileByHandle($handle: String) {   Use the profiles query to search profiles based on a supplied handle  profiles(first: 5, handle: $handle) {    edges {      node {        id        __typename        handle        name      }    }    totalCount  }}
- **[Update Profile](/example-operations/profile/UpdateProfile.graphql)**
  Update profile details (such as name, bio, website) for a supplied profilemutation UpdateProfile($id: ID!, $profile: UpdateProfileInput!) {   Use the updateProfile to update profile settings  updateProfile(id: $id, profile: $profile) {    profile {       Query back the updated values to see the accepted values      id      __typename      name      bio      websiteUrl    }  }}

[View other operation examples](/example-operations)