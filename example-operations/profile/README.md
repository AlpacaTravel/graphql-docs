# Profile

- **[Claim Handle](/example-operations/profile/ClaimHandle.graphql)**
  Claim a handle for a profile, associating something more friendlymutation ClaimProfileHandle($id: ID!, $handle: String) {   Use the claimProfileHandle operation to claim a handle for a profile  claimProfileHandle(     The profile ID to load, such as profile "profile/123"    id: $id     The handle to claim for the profile, such as "my-handle"    handle: $handle  ) {    profile {       Read back the details once successful      id      __typename      handle    }  }}
- **[Query Authorized Profiles](/example-operations/profile/QueryAuthorizedProfiles.graphql)**
  Uses a query with the supplied AccessToken/API Key in order to determine the associated authorized profiles
- **[Query Profile](/example-operations/profile/QueryProfile.graphql)**
  Load a query by a supplied profile identifier
- **[Query Profiles By Handle](/example-operations/profile/QueryProfilesByHandle.graphql)**
  Queries for profiles based on a registered handle claimed for profiles
- **[Update Profile](/example-operations/profile/UpdateProfile.graphql)**
  Update profile details (such as name, bio, website) for a supplied profilemutation UpdateProfile($id: ID!, $profile: UpdateProfileInput!) {   Use the updateProfile to update profile settings  updateProfile(id: $id, profile: $profile) {    profile {       Query back the updated values to see the accepted values      id      __typename      name      bio      websiteUrl    }  }}

[View other operation examples](/example-operations)