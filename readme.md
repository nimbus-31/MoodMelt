MoodMelt
______________________________________________________________________________

MoodMelt is a simple full-stack mood tracking and journaling app.
The goal is to give users a clean space to record how they feel and store short reflections throughout the day.

🚀 Features
Frontend:
Built with React + Vite
Simple, responsive UI
Mood selection and journal input
Connects to the backend API

Backend:
Node.js + Express
MongoDB with Mongoose
Routes for creating, reading, and deleting mood entries

.env support for secure configuration

📂 Project Structure
moodmelt/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── backend/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── server.js
    └── .env (ignored)

Running the Project Locally
1. Clone the repository
git clone https://github.com/nimbus-31/MoodMelt.git
cd MoodMelt

2. Start the frontend
cd frontend
npm install
npm run dev

3. Start the backend
cd ../backend
npm install
npm start

Built by (nimbus-31).