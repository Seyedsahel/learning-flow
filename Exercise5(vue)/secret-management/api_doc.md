## API Documentation

for authentication routes, you need to pass the token in the `Authorization` header with the `Bearer` prefix.

example:

```bash
curl -X GET https://secret-management-backend.nshub.net/record/list \
-H "Authorization: Bearer <token>"
```

if you don't have a token, you need to login first.

if you request to authentication routes without a token, you will get a 401 Unauthorized response.

```json
{
    "message": "unauthorized"
}
```

if you request to authentication routes with an invalid token, you will get a 401 Unauthorized response.

## RESPONSE STRUCTURES

STATUS CODES:
- 200 OK
- 400 BAD REQUEST
- 401 UNAUTHORIZED
- 403 FORBIDDEN
- 404 NOT FOUND
- 500 INTERNAL SERVER ERROR


SUCCESS RESPONSE:
```json
{
    "data": {
        ...
    }
}
```

BAD REQUEST RESPONSE:
```json
{
    "message": "string"
}
```

ERROR RESPONSE:
```json
{
    "message": "string"
}
```

## Route Register

URL: `/auth/register`
METHOD: `POST`
BODY:
```json
{
    "username": "string",
    "password": "string"
}
```
SUCCESS RESPONSE:
```json
{
    "data": {
        "id": "integer",
        "username": "string",
        "password": "string"
    }
}
```

## Login

URL: `/auth/login`
METHOD: `POST`
BODY:
```json
{
    "username": "string",
    "password": "string"
}
```
SUCCESS RESPONSE:
```json
{
    "data": {
        "token": "string"
    }
}
```

## Record List (Need Authentication)

URL: `/record/list`
METHOD: `GET`
SUCCESS RESPONSE:
```json
{
    "data": {
        "records": [
            {
                "id": "integer",
                "title": "string",  
                "content": "string"
            }
        ]
    }
}
```

## Record Create (Need Authentication)

URL: `/record/create`
METHOD: `POST`
BODY:
```json
{
    "name": "string",
    "content": "string"
}
```
SUCCESS RESPONSE:
```json
{
    "data": {
        "id": "integer",
        "name": "string",
        "content": "string"
    }
}
```

## Record Update (Need Authentication)

URL: `/record/update`
METHOD: `POST`
BODY:
```json
{
    "record_id": "integer",
    "name": "string",
    "content": "string"
}
```
SUCCESS RESPONSE:
```json
{
    "data": {
        "id": "integer",
        "name": "string",
        "content": "string"
    }
}
```

## Record Delete (Need Authentication)

URL: `/record/delete`
METHOD: `POST`
BODY:
```json
{
    "record_id": "integer"
}
```
SUCCESS RESPONSE:
```json
{
    "data": {
        "id": "integer",
        "name": "string",
        "content": "string"
    }
}
```