# MovieVault Mobile App

A React Native mobile application built with Expo that allows users to manage a movie collection using a deployed CRUD API. Users can create, view, update, and delete movies through a clean mobile interface connected to a live backend hosted on Heroku.

---

## Features

- View all movies from deployed API
- Add new movies
- Update existing movies
- Delete movies
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
│   ├── DashboardScreen.js
│   ├── HomeScreen.js
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

## API Endpoint

The application connects to the following deployed API:

```bash
https://movies-api-dwa-assignment-1b9df33548df.herokuapp.com/api/v1/
```

---

## CRUD Functionality

### Create

Users can add a new movie from the dashboard form.

### Read

Movies are fetched from the deployed API and displayed in a scrollable list.

### Update

Users can open a movie detail page and update movie information.

### Delete

Users can remove movies directly from the movie detail screen.

---

## Navigation

The app uses React Navigation Native Stack Navigator with three screens:

- Home
- Dashboard
- Movie Details

---

## UI Design

The interface uses a custom dark purple theme with reusable global styles located in:

```bash
screens/Appstyles.js
```

---

## Author

Stephanie Olivares  
SOLINYC LLC
