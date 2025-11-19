# MoodMelt

MoodMelt is a simple full-stack mood tracking and journaling app.  
It gives users a clean space to record how they feel and write short reflections throughout the day.

---

## Features

### **Frontend**
- React + Vite  
- Clean, responsive interface  
- Mood selection and journal input  
- Connects to backend API

### **Backend**
- Node.js + Express  
- MongoDB + Mongoose  
- CRUD routes for mood entries  
- `.env` support for secure configuration

---

## Project Structure

moodmelt/
│
├── frontend/
│ ├── src/
│ ├── public/
│ ├── package.json
│ └── vite.config.js
│
└── backend/
├── controllers/
├── models/
├── routes/
├── server.js
└── .env (ignored)
---

## Running the Project Locally

### **1. Clone the repository**
```sh
git clone https://github.com/nimbus-31/MoodMelt.git
cd MoodMelt
2. Start the frontend
sh
Copy code
cd frontend
npm install
npm run dev
3. Start the backend
sh
Copy code
cd ../backend
npm install
npm start

Author
Built by nimbus-31.
