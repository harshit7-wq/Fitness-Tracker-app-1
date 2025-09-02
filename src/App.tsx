import { BrowserRouter, Route, Routes } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import Home from "./pages/Home";
import Tab1 from "./pages/Tab1"; // Register (your existing file)
import Tab2 from "./pages/Tab2"; // Login
import Tab3 from "./pages/Tab3"; // Dashboard

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: "100vh", background:"#0e0f13", color:"#fff", paddingBottom: 90 }}>
        <main style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Tab1 />} />
            <Route path="/login" element={<Tab2 />} />
            <Route path="/dashboard" element={<Tab3 />} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}
