# MovieVault

MovieVault is a full-stack MERN application that allows users to create, view, update, and delete movies from a personal movie collection. The application utilizes a RESTful API built with Express and MongoDB and a React front-end with custom styling and routing.

---

## Live Site

https://movies-api-dwa-assignment-1b9df33548df.herokuapp.com/

---

## GitHub Repository

https://github.com/OlivaresStephanie-FS/Movie-API

---

## Features

- Full CRUD functionality
- React front-end with multiple pages
- Express REST API
- MongoDB Atlas database integration
- Mongoose model implementation
- React Router page navigation
- Custom CSS styling and layout
- Responsive dashboard layout
- Deployment through Heroku
- GitHub-based deployment workflow

---

## Technologies Used

### Front-End
- React
- React Router DOM
- CSS3

### Back-End
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

### Deployment
- GitHub
- Heroku

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/v1/movies | Get all movies |
| GET | /api/v1/movies/:id | Get a single movie |
| POST | /api/v1/movies | Create a movie |
| PATCH | /api/v1/movies/:id | Update a movie |
| DELETE | /api/v1/movies/:id | Delete a movie |

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
│   ├── models/
│   │   └── movie.js
│   ├── routes/
│   │   └── movies.js
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── reactjs/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Dashboard.js
│   │   │   ├── Home.js
│   │   │   └── Movie.js
│   │   ├── App.css
│   │   └── App.js
│   └── package.json
│
├── .gitignore
├── package.json
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

### Install Frontend Dependencies

```bash
cd ../reactjs
npm install
```

---

## Running Locally

### Start Backend

```bash
cd api
npm run dev
```

### Start Frontend

```bash
cd reactjs
npm start
```

---

## Environment Variables

Create a `.env` file inside the `api` folder:

```env
DATABASE_URL=your_mongodb_connection_string
```

---

## Author

Stephanie Olivares
SOLINYC LLC