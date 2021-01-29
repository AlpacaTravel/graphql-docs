# Attributes

The API enables the storage and retrieval of extended data through key/value
pattern offered by Attributes. These extend the standard queryable fields to
open up further possibilities, such as custom data or localisation of field
values.

There are two types of attribute classes.

- **Core Attributes** - A maintained list of attributes managed by Alpaca
- **Custom Attributes** - An open namespace for custom data to be stored for
  application specific use case.

For each attribute, it is also possible to provide a locale, in order to
localise the value. Your queries can be used in order to determine translations
to other localisations based on the needs of your users.

## Lifecycle of attributes

### Creating Attributes

For supported resources, attributes can be created and supplied leveraging
the operation argument of `attrs` on the resource. These will create the
supplied resource containing the supplied attributes as offered by your input.

### Querying Attributes

In order to access the attributes, there are a number of queries in order to
select the desired data:

- `attrs` Selects attributes via a series of attribute inputs
- `attr` Selects an attribute with the supplied ID and locale value
- `attrsById` Returning all matching attributes regardless of locale
- `attrValue` Returning the value without the wrapper
- `allAttrs` Returning all the attributes for the resource

### Updating Attributes

When performing a mutation on an existing resource with attributes, you can
supply values via the operation argument of `upsertAttrs` for the resource.
Attributes will be 'upsert' (combining either an insert or update depending on
whether the resource already has the attribute).

### Removing Attributes

Via performing a mutation to update an existing resource with attributes, you
can supply the attributes to be removed via the operation argument of
`deleteAttrs` for the resource. Matching attributes will be removed during the
mutation.
