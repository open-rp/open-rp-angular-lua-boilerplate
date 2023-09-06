# open-rp-angular-lua-boilerplate
A boilerplate to make NUI interfaces for fivem projects using Angular and Lua

The Angular project lives in the `base`` directory off of the root of this repository.
To build your product do not use `ng build`, instead use `npm run build`.  The reason for this is
that when you are developing using the angular dev server you need basehref to equal '/' but the built
veresion needs it to be set to `/ui/` in order for it to display correctly GTAV.


# NUI Communication
The boilerplate is already setup to allow for messages between Lua and NUI via the NUIService.

Incoming messages are emitted through an RSJX service so that they can be subscribed to where needed.
And Out going callback messages can be sent with a common function.

This boiler plate makes use of the JSONAPI structure.  Messages should resemble this JSON format below.
type and attributes are required, while id can be optional where needed.

```
{
  data: {
    type: [Message type],
    id: [entity id],
    attributes: [object containing message attributes]
  }
}
```

The `type` can be used to find out what kind of message it is.
The `id` is typically the `id` of a database record for a give object.
The `attributes` is an object containing the data you want to pass. A database record, or some state data etc.


