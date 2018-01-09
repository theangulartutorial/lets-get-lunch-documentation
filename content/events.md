## Events

### Create Event

Creates a new event.

```endpoint
POST /api/events
```

#### Example header

```javascript
"Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5ld1VzZXIiLCJfaWQiOiI1YTU1MGVhNzM5ZmJjNGNhM2VlMGNlNTgiLCJpYXQiOjE1MTU1MjQzOTksImV4cCI6MTUxNTUzMTU5OX0.aLrBPqUHEpaSXYnuM5Mq8OdhCB_H6h8ieumSy8SIfro"
```

#### Example request body

```json
{
  "_creator": "5a550ea739fbc4ca3ee0ce58",
  "title": "My first event",
  "description": "My first description",
  "city": "Atlanta",
  "state": "GA",
  "startTime": "2018-01-09T19:00:00.000Z",
  "endTime": "2018-01-09T20:00:00.000Z",
  "suggestLocations": true,
}
```

Property | Description
---|---
`_creator` | id of the event creator
`title` | title for the event
`description` | (optional) description for the event
`city` | city for the event
`state`| state for the event
`startTime` | start time for the event
`endTime` | end time for the event
`suggestLocations` | (optional - default: false) option to provide restaurant recommendations for an event

#### Example response

```json
{
  "__v": 0,
  "_creator": "5a550ea739fbc4ca3ee0ce58",
  "title": "My first event",
  "description": "My first description",
  "city": "Atlanta",
  "state": "GA",
  "startTime": "2018-01-09T19:00:00.000Z",
  "endTime": "2018-01-09T20:00:00.000Z",
  "_id": "5a55135639fbc4ca3ee0ce5a",
  "suggestLocations": true,
  "members": [
    "5a550ea739fbc4ca3ee0ce58"
  ]
}
```

### Get Event

Retrieves an existing event.

```endpoint
GET /api/events/{id}
```

#### Example response

```json
{
  "_id": "5a55135639fbc4ca3ee0ce5a",
  "_creator": "5a550ea739fbc4ca3ee0ce58",
  "title": "My first event",
  "description": "My first description",
  "city": "Atlanta",
  "state": "GA",
  "startTime": "2018-01-09T19:00:00.000Z",
  "endTime": "2018-01-09T20:00:00.000Z",
  "__v": 0,
  "suggestLocations": true,
  "members": [
    {
      "_id": "5a550ea739fbc4ca3ee0ce58",
      "username": "newUser",
      "__v": 0,
      "dietPreferences": []
    }
  ]
}
```

### Get Events for a User

Retrieves a collection of events a user has either created or subscribed to.

```endpoint
GET /api/events/user/{id}
```

#### Example response

```json
[
  {
    "_id": "5a55135639fbc4ca3ee0ce5a",
    "_creator": "5a550ea739fbc4ca3ee0ce58",
    "title": "My first event",
    "description": "My first description",
    "city": "Atlanta",
    "state": "GA",
    "startTime": "2018-01-09T19:00:00.000Z",
    "endTime": "2018-01-09T20:00:00.000Z",
    "__v": 0,
    "suggestLocations": true,
    "members": [
      "5a550ea739fbc4ca3ee0ce58"
    ]
  }
]
```

### Get all Events

Retrieves a collection of all events created by users.

```endpoint
GET /api/events
```

#### Example response

```json
[
  {
    "_id": "5a539459b689d341cccc4be8",
    "_creator": "5a539449b689d341cccc4be7",
    "title": "Another event",
    "description": "Another event description",
    "city": "Atlanta",
    "state": "GA",
    "startTime": "2018-01-08T05:00:00.000Z",
    "endTime": "2018-01-09T05:00:00.000Z",
    "__v": 0,
    "suggestLocations": false,
    "members": [
      "5a539449b689d341cccc4be7"
    ]
  },
  {
    "_id": "5a55135639fbc4ca3ee0ce5a",
    "_creator": "5a550ea739fbc4ca3ee0ce58",
    "title": "My first event",
    "description": "My first description",
    "city": "Atlanta",
    "state": "GA",
    "startTime": "2018-01-09T19:00:00.000Z",
    "endTime": "2018-01-09T20:00:00.000Z",
    "__v": 0,
    "suggestLocations": true,
    "members": [
      "5a550ea739fbc4ca3ee0ce58"
    ]
  }
]
```

### Update Event

Updates an existing event.

```endpoint
PATCH /api/events/{id}
```

#### Example header

```javascript
"Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5ld1VzZXIiLCJfaWQiOiI1YTU1MGVhNzM5ZmJjNGNhM2VlMGNlNTgiLCJpYXQiOjE1MTU1MjQzOTksImV4cCI6MTUxNTUzMTU5OX0.aLrBPqUHEpaSXYnuM5Mq8OdhCB_H6h8ieumSy8SIfro"
```

#### Example request body

```json
{
  "_creator": "5a550ea739fbc4ca3ee0ce58",
  "title": "My first updated event",
  "description": "My first updated description",
  "city": "Miami",
  "state": "FL",
  "startTime": "2018-01-09T19:00:00.000Z",
  "endTime": "2018-01-09T20:00:00.000Z",
  "suggestLocations": true,
}
```

Property | Description
---|---
`_creator` | id of the event creator
`title` | title for the event
`description` | (optional) description for the event
`city` | city for the event
`state`| state for the event
`startTime` | start time for the event
`endTime` | end time for the event
`suggestLocations` | (optional - default: false) option to provide restaurant recommendations for an event

#### Example response

```json
{
  "_id": "5a55135639fbc4ca3ee0ce5a",
  "_creator": "5a550ea739fbc4ca3ee0ce58",
  "title": "My first updated event",
  "description": "My first updated description",
  "city": "Miami",
  "state": "FL",
  "startTime": "2018-01-09T19:00:00.000Z",
  "endTime": "2018-01-09T20:00:00.000Z",
  "__v": 0,
  "suggestLocations": true,
  "members": [
    "5a550ea739fbc4ca3ee0ce58"
  ]
}
```

### Event Subscribe

Subscribes a user to an event.

```endpoint
PATCH /api/events/{id}/subscribe
```

#### Example header

```javascript
"Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5ld1VzZXIiLCJfaWQiOiI1YTU1MGVhNzM5ZmJjNGNhM2VlMGNlNTgiLCJpYXQiOjE1MTU1MjQzOTksImV4cCI6MTUxNTUzMTU5OX0.aLrBPqUHEpaSXYnuM5Mq8OdhCB_H6h8ieumSy8SIfro"
```

#### Example request body

```json
{
  "user": "5a539449b689d341cccc4be7"
}
```

#### Example response

```json
{
  "_id": "5a55135639fbc4ca3ee0ce5a",
  "_creator": "5a550ea739fbc4ca3ee0ce58",
  "title": "My first updated event",
  "description": "My first updated description",
  "city": "Miami",
  "state": "FL",
  "startTime": "2018-01-09T19:00:00.000Z",
  "endTime": "2018-01-09T20:00:00.000Z",
  "__v": 1,
  "suggestLocations": true,
  "members": [
    {
      "_id": "5a550ea739fbc4ca3ee0ce58",
      "username": "newUser",
      "__v": 0,
      "dietPreferences": []
    },
    {
      "_id": "5a539449b689d341cccc4be7",
      "username": "adam",
      "__v": 0,
      "dietPreferences": []
    }
  ]
}
```