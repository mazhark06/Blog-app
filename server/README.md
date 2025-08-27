# Blog App - Server

This is the **backend server** for the Blog App, built with **Node.js**, **Express**, and **MongoDB**.  
It provides authentication, user management, and serves as the API layer for the frontend.

---

## 🚀 Features
- User registration & login with JWT (access + refresh tokens via cookies)
- Secure authentication middleware
- MongoDB integration with Mongoose
- REST API architecture
- CORS & cookie handling enabled

---

## 📂 Project Structure
```
server/
│── Controller/
│   └── user.controller.js    # Handles user logic (signup, login, auth check)
│── Middleware/
│   └── auth.middleware.js    # Token refresh & authentication
│── Routes/
│   └── user.route.js         # User-related routes
│── models/
│   └── user.model.js         # User schema & methods
│── utils/
│   └── generateToken.js      # Token generation & verification
│   └── ApiResponse.js        # Standard API response format
│── db/
│   └── db.js                 # MongoDB connection
│── app.js                    # Express app setup
│── API_ROUTES.md             # API documentation
```

---

## 🔧 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/mazhark06/Blog-app.git
cd Blog-app/server
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the `server/` directory with:
```
PORT=5000
MONGO_URI=your_mongo_connection_string
ACCESS_TOKEN_SECRET=your_access_secret
REFRESH_TOKEN_SECRET=your_refresh_secret
```

### 4. Run the server
```bash
npm start
```
The server will start on [http://localhost:5000](http://localhost:5000).

---

## 📌 API Endpoints

### Base URL
```
http://localhost:5000
```

### User Routes
| Method | Endpoint         | Description              |
|--------|-----------------|--------------------------|
| POST   | `/user/signup`  | Register a new user      |
| POST   | `/user/login`   | Login and get tokens     |
| GET    | `/user/auth`    | Validate user session    |

📖 See [API_ROUTES.md](./API_ROUTES.md) for full details.

---

## 🔐 Authentication Flow
- **Signup/Login**: Issues both `accessToken` and `refreshToken` as **HTTP-only cookies**.
- **Access Token**: Short-lived, used for API requests.
- **Refresh Token**: Longer-lived, automatically generates new access tokens via `auth.middleware.js`.

---

## 🤝 Contributing
Pull requests are welcome!  
For major changes, please open an issue first to discuss what you’d like to change.

---

## 📜 License
This project is licensed under the MIT License.
