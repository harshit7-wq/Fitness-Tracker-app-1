import axios from "axios";
import { useEffect, useState } from "react";
import "./Tab3.css";

interface Workout {
  id: string;
  type: string;
  duration: string;
  calories: string;
}

export default function Tab3() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");

  const fetchWorkouts = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    const res = await axios.get("http://localhost:4000/workouts", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setWorkouts(res.data);
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const addWorkout = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    await axios.post(
      "http://localhost:4000/workouts",
      { type, duration, calories },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchWorkouts();
  };

  return (
    <div className="tab-container">
      <h2>Dashboard</h2>
      <input placeholder="Workout Type" onChange={(e) => setType(e.target.value)} />
      <br />
      <input placeholder="Duration (min)" onChange={(e) => setDuration(e.target.value)} />
      <br />
      <input placeholder="Calories" onChange={(e) => setCalories(e.target.value)} />
      <br />
      <button onClick={addWorkout}>Add Workout</button>

      <h3>My Workouts</h3>
      <ul>
        {workouts.map((w) => (
          <li key={w.id}>
            {w.type} - {w.duration}min - {w.calories}cal
          </li>
        ))}
      </ul>
    </div>
  );
}
