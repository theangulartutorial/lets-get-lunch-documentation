## Sessions

### Create a new session

Creates a new session (logging in a user).

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

Property | Description
---|---
`username` | username for the user
`password` | password for the user

#### Example response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5ld1VzZXIiLCJfaWQiOiI1YTU1MGVhNzM5ZmJjNGNhM2VlMGNlNTgiLCJpYXQiOjE1MTU1MjQzOTksImV4cCI6MTUxNTUzMTU5OX0.aLrBPqUHEpaSXYnuM5Mq8OdhCB_H6h8ieumSy8SIfro"
}
```