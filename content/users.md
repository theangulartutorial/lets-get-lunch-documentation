## Users

### Create User

Creates a new user.

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

Property | Description
---|---
`username` | username for the user
`password` | password for the user
`dietPreferences` | (optional) diet preferences for the user

#### Example response

```json
{
  "__v": 0,  
  "username": "myUser",
  "password": "$2a$10$oF7YW1FyOSW3Gw7G4ThbO.ibduCgF3U0gVI/GE9fKQcGtVEBs0B.2",
  "_id": "5a550ea739fbc4ca3ee0ce58",
  "dietPreferences": []
}
```