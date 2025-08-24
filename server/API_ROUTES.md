# API Routes

This document describes the available API routes for the Blog App server.

---

## User Routes

All user-related routes are defined in `server/Routes/user.route.js`.

### POST `/user/signup`

- **Description:** Register a new user.
- **Request Body:**  
  ```
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response:**  
  - `201 Created` on success
  - `400 Bad Request` if validation fails
  - `409 Conflict` if username already exists

---

*Add more routes as your