# Uploading Photos

The Alpaca API offers a method for you to upload your photo assets and attach to
itineraries or collections. We can take care of storage of the file assets, as
well as the resizing and distribution via CDN.

There are a number of features that are included to assist your application,
including:

- Resizing and optimising assets for use at the desired width/height aspect

- Accessing EXIF data for information about the camera used to take the photo

- Information about the original image upload stats

- AI or manual crop-hint placement for cropping assets

- AI label detection on the photo

- Content association, including attribution, copyright, captions and extended
  data attributes

The Alpaca API supports the upload of unassigned photos, which don't associate
the media to your profile, or can be assigned to your profile. This affects the
authorization model, invoking restrictions on whether changes can be made
requiring an authorized profile actor.

Alpaca also supports a number of 3rd party hosted image services, including
unsplashd (for stock imagery), Flickr (for public photos) and services such as
MediaWiki (for open licensed imagery). It is also possible to self-host your
assets on your own infrastructure and CDN.

### Upload process summarised

To upload your process, you'll need to follow three steps:

1.  Request information to perform a upload using `startMediaUpload`

2.  Perform the upload via HTTPS with supplied details

3.  Perform `finalizeMediaUpload` to identify when the media is ready to use

### Prerequisits

- A supported image type and filesize (up to 5mb JPEG/PNG)

- Your API Key

## Requesting Upload Target

The API will determine the location that you should upload to and issue you with
a `token`. You will need to take the `url` and `fields` list supplied, in order
to compose a HTTP multi-part request along with your upload file.

- The `token` is required to finalize your upload once you have completed your
  photo upload.

- The `url` is the HTTPs end-point to send your request

- The `fields` contain data to include along with your file in your request in
  order to identify/authorize your request

```graphql
# Request information to commence a photo upload via HTTPs

mutation StartPhotoUpload {
  # Use the startMediaUpload() operation
  startMediaUpload(
    # Supply the filename label
    filename: "cool-mavis-photo.jpeg"
    # Supply the content type
    contentType: "image/jpeg"
  ) {
    # Request an upload token. This will be used after the upload to call
    # finalizeMediaUpload in order to inform the API which file upload we are
    # refering to.
    token
    # URL Target to send the file
    url
    # Fields to include in HTTPs request (Signing fields)
    fields
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEAlBARxgQGcUcBLJAMwgCc4BDFSiJHFCHKCORJFAQ4mOAA4ALCFxwwxAGwhMwOAG6VRACQAq2gAqkAOkmNwYKFmw4BlC-RR6pXAKoKlK4MZw5cz0sJQJYXImewBZBDANV0VlAAoAShwIMQR6S3YvHBDwyOi3eKzvXGs5BQBPTiCcGkp5ZCZEHHkmACMEeSKauobEdBxDEF4IeQBaZnVSUclpCAA6ACtUgHNBrpKy+UrA4V5UZAoUctSuvZQD7WOEfsHKZmWEAHolhFWQLKTPDm8ffCIScgiDhyWIqLgAa2Qcxw2gklFIOAA7nV5Dh2rJ-ComDRzvQqsIQe5ONwoEx5J1vsVukgyZQAF4ICJRJgxInUZL0MBpYlUWgMOD4nAAQT0AEkkXCoBJuvVZAUVIjhKEEOscPQEDQ0tRlsS5l0IchVc48AAZGGhB6Hbj+JBg6q1epdGD0Ck-X4AMUoHTACJk1Cg8hgXN5OB0+gR6uIZAocWslGWSG13W9pASXVqKayAF9jFmQFmgA)

## Finalise Upload

After you have used the information supplied from `startMediaUpload` to perform
your photo upload, you will need to finalise the request.

This operation indicates a status of the upload and processing stage and can be
called to monitor for once the media is ready to be used. This process can take
a short while in order for us to verify the upload and perform any required
processing on media assets, ahead of it being used.

```graphql
# Finalise an upload process commenced with startMediaUpload, supplying content
# and associations to profile. This operation will register the uploaded file
# and supply you with ID's necessary to associate with other API types

mutation ProcessPhotoUploadProgress {
  # use the finalizeMediaUpload operation
  finalizeMediaUpload(
    # Supply the token created by startMediaUpload
    token: "token123"
    # Supply the profile ID you are authorized to modify. Use authorizedProfiles
    # operation if you need to identify the profile ID for your API key
    profileId: "profile/ABC123"
    # Supply content for the media
    resource: {
      # Supply content for the resulting media resource
      caption: "A photo of us standing out the front of Mavis the Grocer"
    }
  ) {
    # Status will be "AwaitingUpload", "Processing", "Complete" or
    # "ProcessingFailed" to represent the various states of finalizing the media
    status
    resource {
      # Obtain the media identifier. This will be similar to "media/ABC123"
      id
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEAxASyQEMAbAgZwR2KRxgAdSJiwcGAnaBCinKCHERIoCNgHcCKABY4KKYhxQBZMQWIBVJizAAaOYyYBPIgHN+EVMhQAdJLlptivaOpQFLfFBHZcAZgSkCAB0OAAq0pQ4EAwIHMTuljiSpKQ4HAimlChxODLUjMysYjgBQXYOSGwUhqRGOEYQMMlSsgCSACIA5HxICKK8ivXeNC5QbtSSMtH5HDgAggAKbXlGsRR2dnAwCol0i1wDFIvSEN5aRWAHEKYZvDjAdjg4uDBUedLUASTkAF4IqjA6guOmisXieyepSIZAI-0BwO0rAAFFDnrgAMq1YafPIQADWyH4GQSJQARvV5IoVGpNEiwGi8YSkOgcDYQN5mQBGABMAGZ2YzMdiPtROBAytROg0mjQMjQdqcOHCSiM4BAgX4jKENO9iIqIMr-ld-IEeEKwXEEh46AQ-DLmn1VT4CGBrHacWLTUEcNK-IaHXMlitCUZGeLJW0wKz2RGzQB6eYAIQAwryBSALViGMYLFZUKUA-kcIggcRGXcmhxRKzHnRng3hTm6nmcgX-XNi3cYKR3EhzKX1OkeFXRIznlBiAw9jGQPN2KcRhL6HwqVUzNEdqLSlwC8vlMQAG5RYsAcUOcUF9eeAF8oQBKB5Z3ZvFqpHBk6js+biYhSMwgqw7L6Oy1xHGYwFsiAKaCEwCA5Oy0QcBaoEXrwZh4H+QQMiAeLDpwPDWNuh6KB4r5UjkfDLt8sK-BuxaDuW15yC+GzMZWMDVtQdYNo2OAAPJkgoRDboxOCuu6ARxKEERRCkaSfnIBBwIEih4eyjGJqm6ZXrxzyuoyd71kZN4gDeQA)

## Modifying the upload

Once you have completed an upload, your asset will become a MediaResource. You
can perform other mutations from this point on the image.

```graphql
# Modifies a media asset to change various attributes or content

mutation UpdatePhotoContent {
  # Use the updateMediaResource operation
  updateMediaResource(
    # Supply the ID for the media, as accessed from finalizeMediaUpload
    id: "media/ABC123"
    resource: {
      # Update various content, such as the attribution, caption, copyright
      attribution: "My Photographer"
      caption: "Updated caption for media"
    }
  ) {
    # Query back what information you need once successfully modified the
    # content (such as updated in-memory cache values)
    resource {
      # Identifiers
      id
      __typename

      # Updated fields
      attribution
      caption
    }
  }
}
```

Sandbox: [Configure](/topics/graphql/Apollo%20Sandbox/) |
[Try Operation](https://studio.apollographql.com/sandbox/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEBZCMASwDMiEBnHAQx0WNuoooRRxQhygAtqkBzBDgBu1AE5EIMKtRQoJAIxgpKOCGK4RUyFAB0k+uMtmSkOAKoAHMLIQAFbhA4BhLStQ5g+nDlzmW7NxCMNa2eAgMAEqUUmJQQhCWCGImWt44ITYq4VExMHEIABTpPrgAyiGWADYAnoFCAJIAIjgk6vV0EUTUADQ0MlDxzBGtYhBwrURI1FVEAF4IOd1WVRDUYCU4RGDoOLog9N0A9ACCAELOAIwATADM+5tieQW7XmY+H36hKiLiktKabSoPoUGA8fodWTyIhKFCmPpQaiWOFaBGJGoSfjcPTvD40OSKZSmXb7PB1BxOCD8FKWIJiB64j6I5HEvYgKxZEbMlFmNoaQ7UBl4gC+6QAlJ5NrgAIowZJ1BTUKAAaxwAHdeGwpny4KkzDUpDgkAgRlp4jhQYNKBQSDAqrU6IRSOQwPUpYD3GxCpbuBDMrZXVMALSIODqOqInhCURVOUUMWPZ7mt540o4BpgHTO5IUTY+bZ5nAAfSLKBqSWmiH0ha+nNdZAQVTAucZPihhJ5he5pk2ovefeFIGFQA)
