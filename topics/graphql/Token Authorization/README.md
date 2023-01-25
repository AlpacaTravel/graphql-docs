# Token Authorization

## Authentication

You will need to obtain your API Key in order to authenticate your application
when making calls to GraphQL. We accept the API Key as an `?accessToken=` query
parameter.

### Authorisation

Your API Key will have different read and write scopes, depending on when it is
created. By default, Alpaca Travel offers both private and public API Keys. A
private API Key will enable the application to perform mutations on profiles it
has been assigned, where the public API Key is read only access to content.

- **Public Scope** Able to read from assigned profiles and author anonymous
  itineraries. For use in front-end applications without priviledges to the
  profile.

- **Private Scope** Able to read/write from assigned profiles (full access). Do
  not share this API Key with the public.

### Obtaining your API Key

Your API Key is available by request during our BETA testing phase. Please
contact us via <sayhello@alpaca.travel> or following the URL
<https://alpaca.travel>. You must agree to the terms and conditions to use this
service.
