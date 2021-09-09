# Media

- **[Get Media Image](/example-operations/media/GetMediaImage.graphql)**
  Loads a media resource of type MediaImagequery getMediaImage($id: ID!) {   Use the mediaResource() to load MediaImage types  mediaResource(     Supply your Media Resource ID    id: $id  ) {     In this query, we are accessing the image
- **[Update Photo Content](/example-operations/media/UpdatePhotoContent.graphql)**
  Modifies a media asset to change various attributes or contentmutation updatePhotoContent(  $id: ID!  $caption: String  $attribution: String  $copyright: String) {   Use the updateMediaResource operation  updateMediaResource(     Supply the ID for the media, as accessed from finalizeMediaUpload    id: $id    resource: {       Update various content, such as the attribution, caption, copyright      attribution: $attribution      caption: $caption      copyright: $copyright    }  ) {     Query back what information you need once successfully modified the     content (such as updated in-memory cache values)    resource {       Identifiers      id      __typename       Updated fields      attribution      caption      copyright    }  }}

## Media Upload

- **[Process Photo Upload Progress](/example-operations/media/upload/ProcessPhotoUploadProgress.graphql)**
  Finalise an upload process commenced with startMediaUpload, supplying content and associations to profile
- **[Start Photo Upload](/example-operations/media/upload/StartPhotoUpload.graphql)**
  Request information to commence a photo upload via HTTPsmutation startPhotoUpload($filename: String!, $contentType: String!) {   Use the startMediaUpload() operation  startMediaUpload(     Supply the filename label    filename: $filename     Supply the content type    contentType: $contentType  ) {     Request an upload token

[View other operation examples](/example-operations)