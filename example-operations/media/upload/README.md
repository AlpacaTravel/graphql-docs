# Media Upload

- **[Process Photo Upload Progress](/example-operations/media/upload/ProcessPhotoUploadProgress.graphql)**
  Finalise an upload process commenced with startMediaUpload, supplying content and associations to profile
- **[Start Photo Upload](/example-operations/media/upload/StartPhotoUpload.graphql)**
  Request information to commence a photo upload via HTTPsmutation startPhotoUpload($filename: String!, $contentType: String!) {   Use the startMediaUpload() operation  startMediaUpload(     Supply the filename label    filename: $filename     Supply the content type    contentType: $contentType  ) {     Request an upload token

[View other media operation examples](/example-operations/media)