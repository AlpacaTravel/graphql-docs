# Profile

- **[Authorized Profiles](/example-operations/profile/AuthorizedProfiles.graphql)**
  Uses a query with the supplied AccessToken/API Key in order to determine the associated authorized profiles
- **[Profile](/example-operations/profile/Profile.graphql)**
  Load a query by a supplied profile identifier.
- **[Update Profile](/example-operations/profile/UpdateProfile.graphql)**
  Update profile details (such as name, bio, website) for a supplied profile

## Profile Social

- **[Approve Profile Request](/example-operations/profile/social/ApproveProfileRequest.graphql)**
  Approves a profile follow request to follow another profile
- **[Claim Profile Handle](/example-operations/profile/social/ClaimProfileHandle.graphql)**
  Claim a handle for a profile, associating something more friendly
- **[Deny Profile Follow](/example-operations/profile/social/DenyProfileFollow.graphql)**
  Denies a profiles request to follow another profile.
- **[Follow Profile Request](/example-operations/profile/social/FollowProfileRequest.graphql)**
  Requests to follow from one profile to another profile.
- **[Profile Follows](/example-operations/profile/social/ProfileFollows.graphql)**
  Query to list which profiles who follows a supplied profile.
- **[Profiles By Handle](/example-operations/profile/social/ProfilesByHandle.graphql)**
  Queries for profiles based on a registered handle claimed for profiles.
- **[Unfollow Profile](/example-operations/profile/social/UnfollowProfile.graphql)**
  Unfollows a profile.

[View other operation examples](/example-operations)