import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api/moods";

const EMOJIS = [
  "🙂","😊","😄","🥀","🥰","🤩","🥳","😇",
  "🥺","😭","😂","😡","🤯","😴","😕","😞",
  "🐡","💔","🌸","🌈","🍀","☀️","🐦","❄️"
];

export default function App() {
  const [moods, setMoods] = useState([]);
  const [text, setText] = useState("");
  const [emoji, setEmoji] = useState("🙂");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetchMoods();
  }, []);

  async function fetchMoods() {
    try {
      const res = await axios.get(API);
      setMoods(res.data);
      console.log("Fetched moods", res.data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  }

  async function addMood(e) {
    e.preventDefault();                    
    console.log("Add clicked; text:", text, "emoji:", emoji);

    if (!text.trim()) {
      console.log("No text — aborting");
      return;
    }

    const payload = { text: text.trim(), emoji };

    try {
      const res = await axios.post(API, payload);
      console.log("POST success:", res.data);
      
      setMoods((prev) => [res.data, ...prev]);
      setText("");
    } catch (err) {
      
      console.error("POST error:", err);
      if (err.response) {
        console.error("Server response:", err.response.status, err.response.data);
      } else if (err.request) {
        console.error("No response received (network/CORS?)", err.request);
      } else {
        console.error("Error building request:", err.message);
      }
      alert("Failed to add mood — see console for details.");
    }
  }

  async function deleteMood(id) {
    try {
      await axios.delete(`${API}/${id}`);
      setMoods((p) => p.filter((m) => (m._id ?? m.id) !== id));
    } catch (err) {
      console.error("Delete error:", err);
      alert("Delete failed — see console.");
    }
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <header className="header">
        <h1 className="title">MoodMelt</h1>
        <button onClick={() => setDarkMode(!darkMode)} className="mode-btn">
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      <form className="form" onSubmit={addMood}>
        <div className="emoji-selected">{emoji}</div>

        <input
          className="input"
          placeholder="Describe your mood..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button type="submit" className="add-btn">Add</button>
      </form>

      <div className="picker">
        {EMOJIS.map((e) => (
          <button key={e} className={`picker-emoji ${e === emoji ? "active" : ""}`} onClick={() => setEmoji(e)}>
            {e}
          </button>
        ))}
      </div>

      <div className="mood-list">
        {moods.map((m) => (
          <div key={m._id ?? m.id} className="card">
            <button className="delete-btn" onClick={() => deleteMood(m._id ?? m.id)}>✖</button>
            <div className="card-emoji">{m.emoji}</div>
            <div className="card-text">{m.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
