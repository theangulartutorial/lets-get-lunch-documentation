## Users

### Create User

Creates a new user.

Property | Description
---|---
`username` | username for the user
`password` | password for the user
`dietPreferences` | (optional) diet preferences for the user

```endpoint
POST /api/users
```

#### Example request body

```json
{
  "username": "myUser",
  "password": "password",
  "dietPreferences": []
}
```

#### Example response (200)

```json
{
  "__v": 0,
  "username": "myUser",
  "password": "$2a$10$oF7YW1FyOSW3Gw7G4ThbO.ibduCgF3U0gVI/GE9fKQcGtVEBs0B.2",
  "_id": "5a550ea739fbc4ca3ee0ce58",
  "dietPreferences": []
}
```

### User Errors

On error, the server responds with different HTTP status codes. For status codes lower than `500`, the JSON response body includes a `message` property with a human-readable explanation of the error. If a server error occurs, the HTTP status code will be `500` or higher.

HTTP Status Code | Error Message | Description
---|---|---
`400` | `Your password must be at least 5 characters long.` | A minimum password length of 5 characters is required
`400` | `This user already exists.` | A user with the requested username already exists
`400` | `Diet preferences are invalid.` | One or more of the diet preferences for the requested user are invalid
