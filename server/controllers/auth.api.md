# Authentication API Documentation

## Register User
Registers a new user in the system.

**URL**: `/api/auth/register`
**Method**: `POST`
**Auth required**: No

### Request Body
```json
{
    "name": "string",
    "email": "string",
    "password": "string",
    "role": "string"
}
```

### Success Response
**Code**: `201 CREATED`
```json
{
    "token": "string"
}
```

### Error Responses
**Code**: `400 BAD REQUEST`
```json
{
    "message": "User already exists"
}
```

**Code**: `500 INTERNAL SERVER ERROR`
```json
{
    "message": "Server error",
    "error": "error details"
}
```

## Login User
Authenticates an existing user.

**URL**: `/api/auth/login`
**Method**: `POST`
**Auth required**: No

### Request Body
```json
{
    "email": "string",
    "password": "string"
}
```

### Success Response
**Code**: `200 OK`
```json
{
    "token": "string"
}
```

### Error Responses
**Code**: `404 NOT FOUND`
```json
{
    "message": "User not found"
}
```

**Code**: `400 BAD REQUEST`
```json
{
    "message": "Invalid credentials"
}
```

**Code**: `500 INTERNAL SERVER ERROR`
```json
{
    "message": "Server error",
    "error": "error details"
}
```