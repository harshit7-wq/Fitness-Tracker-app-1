import "./Home.css";



export default function Home() {
  return (
    <div style={{
      minHeight: "calc(100vh - 80px)",
      display: "grid",
      placeItems: "center",
      textAlign: "center",
      background: "#0e0f13",
      color: "#fff",
      padding: "40px 16px"
    }}>
      <div>
        <h1 style={{
          fontSize: "clamp(28px,6vw,56px)",
          margin: 0,
          background: "linear-gradient(135deg,#8ab4ff,#c1d5ff 60%,#9ff0ff)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          textShadow: "0 2px 20px rgba(118,168,255,.15)"
        }}>
          Fitness Tracker App
        </h1>
        <p style={{color:"#bfc7e9", marginTop: 12}}>
          Track workouts, time & calories — start below 👇
        </p>
      </div>
    </div>
  );
}



