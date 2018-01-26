## Sessions

### Create Session

Creates a new session (logging in a user).

Property | Description
---|---
`username` | username for the user
`password` | password for the user

```endpoint
POST /api/sessions
```

#### Example request body

```json
{
  "username": "myUser",
  "password": "password"
}
```

#### Example response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5ld1VzZXIiLCJfaWQiOiI1YTU1MGVhNzM5ZmJjNGNhM2VlMGNlNTgiLCJpYXQiOjE1MTU1MjQzOTksImV4cCI6MTUxNTUzMTU5OX0.aLrBPqUHEpaSXYnuM5Mq8OdhCB_H6h8ieumSy8SIfro"
}
```

### Session Errors

On error, the server responds with different HTTP status codes. For status codes lower than `500`, the JSON response body includes a `message` property with a human-readable explanation of the error. If a server error occurs, the HTTP status code will be `500` or higher.

HTTP Status Code | Error Message | Description
---|---|---
`404` | `User could not be found.` | The requested user does not exist
`401` | `Incorrect password.` | The requested password is not valid
