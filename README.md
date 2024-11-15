
# Calendar App

A fully functional calendar application built with **React** for the frontend and **Node.js** (Express) for the backend. This app allows users to perform CRUD (Create, Read, Update, Delete) operations on events, with a responsive design that works well on both desktop and mobile devices. The app is powered by **MongoDB** for data storage, and **dotenv** is used for environment variable management.

## Features

- **Create, Read, Update, Delete Events**: Users can add, edit, view, and delete events on the calendar.
- **Responsive Design**: Optimized for both mobile and desktop views.
- **Backend and Frontend Separation**: The backend and frontend are deployed separately with their respective live URLs.
- **MongoDB Integration**: All event data is stored in MongoDB for persistent storage.
- **Environment Variables**: Sensitive information like database credentials and API keys are securely stored using `.env` files.

## Live Demo

- **Frontend (React)**: [Calendar Frontend](https://calendar-8nsa.onrender.com/)
- **Backend (Node.js)**: [Calendar Backend](https://calendar-backend-00zx.onrender.com)
- **Portfolio (Designed by Md Shamim Akhter)**: [Shamim Portfolio](https://shamim-portfolio-u1yp.onrender.com/)

## Tech Stack

- **Frontend**: React, React Calendar, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB
- **Database**: MongoDB
- **Authentication**: No authentication implemented
- **Environment Variables**: dotenv for managing environment settings

## Installation

### Frontend

1. Clone the frontend repository:
   ```bash
   git clone https://github.com/techjmi/calendar.git
   ```

2. Install the required dependencies:
   ```bash
   cd calendar-frontend
   npm install
   ```

3. Start the React development server:
   ```bash
   npm run dev
   ```

### Backend

1. Clone the backend repository:
   ```bash
   git clone https://github.com/techjmi/calendar_backend
   ```

2. Install the required dependencies:
   ```bash
   cd calendar-backend
   npm install
   ```

3. Create a `.env` file in the root of the backend project and add your MongoDB URI and other necessary environment variables:
   ```env
   MONGO_URI=your_mongo_database_url
   PORT=5000
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

## API Endpoints

### Events

- **GET /events**: Fetch all events
- **POST /create**: Create a new event
- **PUT /edit/:id**: Update an existing event
- **DELETE /delete/:id**: Delete an event

### Example

#### Fetch All Events
```bash
GET /events
```

#### Create a New Event
```bash
POST /events
{
  "title": "Meeting",
  "description": "Team meeting",
  "eventDate": "2024-12-01T10:00:00Z"
}
```

#### Update an Event
```bash
PUT /edit/:id
{
  "title": "Updated Meeting",
  "description": "Updated team meeting",
  "eventDate": "2024-12-02T10:00:00Z"
}
```

#### Delete an Event
```bash
DELETE /delete/:id
```

## Environment Variables

Create a `.env` file in the root directory for the backend to store sensitive information securely:

```
MONGO_URI=your_mongo_database_url
PORT=5000
```

## How to Contribute

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to your branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## Acknowledgements

- Designed and developed by [Md Shamim Akhter](https://shamim-portfolio-u1yp.onrender.com/).
- Special thanks to the creators of the **React Calendar** and **Tailwind CSS** for the awesome libraries!

---

This README provides all the necessary information for users to install, use, and contribute to your calendar project. Let me know if you need any changes or additions!

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
