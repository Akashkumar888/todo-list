# To Do List (Full-Stack)
Live Link - https://todo-list-2rgz.vercel.app

A simple full-stack To-Do List application with a React + Vite frontend and an Express + MongoDB backend. This repo contains two separate apps in the `frontend/` and `backend/` folders.

---

## Table of contents

- **Project** overview
- **Tech stack**
- **Features**
- **Folder structure**
- **Local setup** (frontend & backend)
- **Environment variables**
- **API Endpoints**
- **Deployment**
- **Troubleshooting**

---

## Project overview

- Frontend: React (Vite) application that shows a list of tasks, allows creating, toggling completion and deleting tasks.
- Backend: Express API connected to MongoDB. Provides CRUD endpoints for tasks.

---

## Tech stack 🔧

- Frontend: React, Vite, React Toastify
- Backend: Node.js, Express, Mongoose
- Database: MongoDB (Atlas or local)
- HTTP client: Axios

---

## Features ✅

- Create a task
- Read all tasks
- Toggle task completion
- Delete a task
- Toast notifications for feedback

---

## Folder structure 📁

- `frontend/` – React app
  - `src/` – components, context, pages (App, Home, TaskInput, TaskList, TaskItem)
  - `axios/api.js` – pre-configured Axios instance
- `backend/` – Express API
  - `routes/` – task routes
  - `controllers/` – task controller (CRUD)
  - `models/` – Mongoose task model
  - `configs/db.js` – MongoDB connection
  - `server.js` – bootstraps server

---

## Local setup

Requirements: Node.js (v16+ recommended), npm, MongoDB connection string (Atlas or local).

1. Clone the repo and open it:

   ```bash
   git clone <repo-url>
   cd todo-list
   ```

2. Backend

   - Go to the backend folder, install dependencies and start server:

     ```bash
     cd backend
     npm install
     # start directly
     node server.js

     # OR with automatic reload (recommended for development)
     npx nodemon server.js
     ```

   - Default server port in `.env` is `5000`.

3. Frontend

   - In a new terminal, install dependencies and start frontend dev server:

     ```bash
     cd frontend
     npm install
     npm run dev
     ```

   - Vite dev server runs at `http://localhost:5173` by default.

---

## Environment variables

- Backend (`backend/.env`)
  - `MONGODB_URI` - MongoDB connection string (required)
  - `MONGODB_DB` - (optional) database name
  - `PORT` - (optional) port (defaults to 5000)

- Frontend (`frontend/.env`)
  - `VITE_BACKEND_URL` - base URL of backend (e.g. `http://localhost:5000`)

> Note: The frontend Axios client uses `VITE_BACKEND_URL`. Make sure this matches the backend server URL and the backend `cors` origin setting (frontend default is `http://localhost:5173`).

---

## API Endpoints (Backend)

Base path: `http://localhost:5000/api/tasks`

- GET `/all-tasks` - Get all tasks
- POST `/create-tasks` - Create a task (body: `{ title: string }`)
- PUT `/update/:id` - Update task completion (body: `{ completed: boolean }`)
- DELETE `/delete/:id` - Delete a task

Example (create):

```bash
curl -X POST "http://localhost:5000/api/tasks/create-tasks" \
  -H "Content-Type: application/json" \
  -d '{"title":"Buy groceries"}'
```

---

## Deployment

- The project includes `vercel.json` files; it can be deployed to Vercel (frontend) and to a Node hosting platform for the backend (or deploy both as separate Vercel projects with proper serverless configuration).
- Make sure to set the environment variables on the hosting platform (MongoDB URI, `VITE_BACKEND_URL`, etc.).

---

## Troubleshooting & tips ⚠️

- If the frontend shows "Failed to load tasks":
  - Verify backend is running and `VITE_BACKEND_URL` is correct.
  - Check CORS origin in `backend/app.js` matches frontend URL.
- If MongoDB connection fails: check `MONGODB_URI` and network access for your Atlas cluster.

---

## Contributing

Contributions welcome—open an issue or create a PR with a clear description of the change.

---

## License

MIT

---

If you want, I can also: add a more detailed setup script, fix backend scripts in `backend/package.json`, or add CI/workflow for deployment. 💡


