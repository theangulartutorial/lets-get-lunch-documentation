## Comments

### Create Comment

Creates a new comment for an event.

```endpoint
POST /api/comments
```

#### Example header

```javascript
"Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5ld1VzZXIiLCJfaWQiOiI1YTU1MGVhNzM5ZmJjNGNhM2VlMGNlNTgiLCJpYXQiOjE1MTU1MjQzOTksImV4cCI6MTUxNTUzMTU5OX0.aLrBPqUHEpaSXYnuM5Mq8OdhCB_H6h8ieumSy8SIfro"
```

#### Example request body

```json
{
  "_creator": "5a550ea739fbc4ca3ee0ce58",
  "_event": "5a55135639fbc4ca3ee0ce5a",
  "content": "My first comment"
}
```

Property | Description
---|---
`_creator` | id of the comment creator
`_event` | id of the event
`content` | comment text

#### Example response

```json
{
  "__v": 0,
  "content": "My first comment",
  "createdAt": "2018-01-09T19:42:08.048Z",
  "_event": "5a55135639fbc4ca3ee0ce5a",
  "_creator": "5a550ea739fbc4ca3ee0ce58",
  "_id": "5a551b1039fbc4ca3ee0ce5b"
}
```

### Get Event Comments

Retrieves comments for an event.

```endpoint
GET /api/comments/event/{id}
```

#### Example response

```json
[
  {
    "_id": "5a551b1039fbc4ca3ee0ce5b",
    "content": "My first comment",
    "createdAt": "2018-01-09T19:42:08.048Z",
    "_event": "5a55135639fbc4ca3ee0ce5a",
    "_creator": {
      "_id": "5a550ea739fbc4ca3ee0ce58",
      "username": "newUser",
      "__v": 0,
      "dietPreferences": []
    },
    "__v": 0
  }
]
```