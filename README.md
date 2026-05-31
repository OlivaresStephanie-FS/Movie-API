# MovieVault Mobile App

A React Native mobile application built with Expo that allows users to manage a movie collection through a secure, authenticated experience. Users can register an account, log in, and perform full CRUD operations on a movie collection using a JWT-protected REST API connected to a live backend hosted on Heroku.

---

## Features

- User registration
- User login authentication
- JWT-protected API access
- View all movies from deployed API
- Add new movies
- Update existing movies
- Delete movies
- Protected movie dashboard
- Logout functionality
- Native stack navigation
- Responsive mobile UI
- Reusable global styling
- Empty state handling
- Live deployed backend connection

---

## Technologies Used

- React Native
- Expo
- React Navigation
- JavaScript
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Tokens (JWT)
- bcryptjs
- Heroku
- REST API
- Fetch API

---

## Project Structure

```bash
movievault-mobile/
│
├── assets/
│
├── screens/
│   ├── Appstyles.js
│   ├── LoginScreen.js
│   ├── RegisterScreen.js
│   ├── HomeScreen.js
│   ├── DashboardScreen.js
│   └── MovieScreen.js
│
├── App.js
├── index.js
├── app.json
├── package.json
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate into the project folder:

```bash
cd movievault-mobile
```

Install dependencies:

```bash
npm install
```

Install React Navigation dependencies:

```bash
npm install @react-navigation/native @react-navigation/native-stack
```

Install Expo-compatible native dependencies:

```bash
npx expo install react-native-screens react-native-safe-area-context
```

Start the Expo development server:

```bash
npx expo start
```

---

## Authentication Features

### User Registration

New users can create an account through the Register screen. Passwords are securely hashed before being stored in the database.

### User Login

Registered users can authenticate using their email address and password.

### JWT Authentication

Upon successful login, the API generates a JSON Web Token (JWT) that is required to access protected movie routes.

### Protected Routes

All movie-related endpoints require a valid JWT token:

- Get Movies
- Get Movie Details
- Create Movie
- Update Movie
- Delete Movie

Unauthenticated requests are denied by the API middleware.

---

## API Endpoint

The application connects to the following deployed API:

```bash
https://movies-api-dwa-assignment-1b9df33548df.herokuapp.com/api/v1/
```

---

## CRUD Functionality

### Create

Authenticated users can add a new movie from the dashboard form.

### Read

Authenticated users can view all movies and individual movie details.

### Update

Authenticated users can update existing movie information.

### Delete

Authenticated users can remove movies from the collection.

---

## Navigation

The application uses React Navigation Native Stack Navigator with the following screens:

- Login
- Register
- Home
- Dashboard
- Movie Details

---

## UI Design

The interface uses a custom dark purple theme with reusable global styles located in:

```bash
screens/Appstyles.js
```

The application was designed to provide a clean and intuitive mobile experience while demonstrating secure authentication and full CRUD functionality.

---

## Assignment Requirements Met

- Create a User Model
- Create Protected Route Middleware
- Utilize an Authenticated API
- Demonstrate React Native Authentication
- Add Register Screen
- Add Login Screen
- Add Protected Content View
- Implement Full CRUD Functionality
- Utilize a Live Database and API
- Manage Development Through GitHub

---

## Author

Stephanie Olivares
SOLINYC LLC
