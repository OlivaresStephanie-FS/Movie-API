# MovieVault

MovieVault is a full-stack MERN application that allows users to register accounts, authenticate using JSON Web Tokens (JWT), and manage a personal movie collection through a secure REST API. The application includes both a React web client and a React Native mobile client connected to a shared Express and MongoDB backend.

---

## Live API

https://movies-api-dwa-assignment-1b9df33548df.herokuapp.com/api/v1/

---

## GitHub Repository

https://github.com/OlivaresStephanie-FS/Movie-API

---

## Features

### Authentication

- User registration
- User login
- Password hashing with bcryptjs
- JWT authentication
- Protected API routes
- Persistent login sessions
- Logout functionality

### Movie Management

- Create movies
- View movie collection
- View movie details
- Update movies
- Delete movies
- Protected CRUD operations

### Front-End Features

- React web application
- React Native mobile application
- React Router navigation
- React Navigation Native Stack
- Responsive layouts
- Custom dark-themed UI
- Reusable styling architecture

### Back-End Features

- Express REST API
- MongoDB Atlas integration
- Mongoose models
- JWT authentication middleware
- User account management
- Secure route protection

---

## Technologies Used

### Front-End

- React
- React Router DOM
- React Native
- Expo
- JavaScript
- CSS3

### Back-End

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- bcryptjs
- jsonwebtoken

### Deployment

- GitHub
- Heroku

---

## API Endpoints

### Authentication

| Method | Endpoint              | Description       |
| ------ | --------------------- | ----------------- |
| POST   | /api/v1/auth/register | Register new user |
| POST   | /api/v1/auth/login    | Login user        |

### Movies

| Method | Endpoint           | Description      |
| ------ | ------------------ | ---------------- |
| GET    | /api/v1/movies     | Get all movies   |
| GET    | /api/v1/movies/:id | Get single movie |
| POST   | /api/v1/movies     | Create movie     |
| PATCH  | /api/v1/movies/:id | Update movie     |
| DELETE | /api/v1/movies/:id | Delete movie     |

All movie routes require a valid JWT token.

---

## User Model

```js
{
	email: String,
	password: String
}
```

---

## Movie Model

```js
{
	title: String,
	genre: String,
	rating: String,
	created_at: Date
}
```

---

## Project Structure

```txt
crudApi-movies/
├── api/
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── movie.js
│   │   └── user.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── movies.js
│   ├── server.js
│   └── package.json
│
├── reactjs/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── Dashboard.js
│   │   │   └── Movie.js
│   │   ├── App.js
│   │   └── App.css
│   └── package.json
│
├── movievault-mobile/
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   ├── LoginScreen.js
│   │   ├── RegisterScreen.js
│   │   ├── DashboardScreen.js
│   │   └── MovieScreen.js
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/OlivaresStephanie-FS/Movie-API.git
```

### Install Backend Dependencies

```bash
cd api
npm install
```

### Install React Web Dependencies

```bash
cd ../reactjs
npm install
```

### Install React Native Dependencies

```bash
cd ../movievault-mobile
npm install
```

---

## Running Locally

### Start Backend

```bash
cd api
npm run dev
```

### Start React Web Client

```bash
cd reactjs
npm start
```

### Start React Native Client

```bash
cd movievault-mobile
npx expo start
```

---

## Environment Variables

Create a `.env` file inside the `api` directory:

```env
DATABASE_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## Author

Stephanie Olivares  
SOLINYC LLC
