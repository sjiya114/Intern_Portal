# Intern Portal

A full-stack web application for managing internships, built with React, Node.js, Express, and MongoDB.

## 📁 Project Structure

```
Intern_Portal/
│
├── backend/      # Node.js + Express + MongoDB API
│   ├── server.js
│   ├── package.json
│   ├── .env
│   ├── config/
│   │   └── db.js
│   ├── controller/
│   ├── middleware/
│   ├── models/
│   └── routes/
│
├── frontend/     # React + Vite + Tailwind CSS client
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   └── pages/
│   ├── package.json
│   ├── vite.config.js
│   ├── .env
│   ├── index.html
│   └── README.md
│
└── README.md     # Project overview
```

## 🚀 Getting Started

### Backend

1. Install dependencies:
    ```sh
    cd backend
    npm install
    ```
2. Set up `.env` with your MongoDB connection string.
3. Start the server:
    ```sh
    node server.js
    ```
   The backend runs on [http://localhost:3000](http://localhost:3000).

### Frontend

1. Install dependencies:
    ```sh
    cd frontend
    npm install
    ```
2. Start the development server:
    ```sh
    npm run dev
    ```
   The frontend runs on [http://localhost:5173](http://localhost:5173) by default.

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Framer Motion, React Router
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, Multer, Cloudinary

## ✨ Features

- User authentication (signup/login)
- Dashboard for interns
- Gallery of rewards and features
- Review section
- Responsive UI

## 👤 Author

- **Jiya Sharma**

---

Feel free to contribute