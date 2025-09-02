import { NavLink } from "react-router-dom";

const linkBase: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 4,
  textDecoration: "none",
  color: "#c8d1ea",
  padding: "8px 10px",
  minWidth: 90,
  borderRadius: 12,
  fontWeight: 600
};

export default function BottomNav() {
  return (
    <nav style={{
      position: "fixed", bottom: 0, left: 0, right: 0,
      background: "#101218", borderTop: "1px solid #232b3d",
      display: "flex", justifyContent: "space-around",
      padding: "12px 8px", zIndex: 50
    }}>
      <NavLink to="/register"
        style={({isActive}) => ({
          ...linkBase,
          background: isActive ? "#1a2333" : undefined,
          color: isActive ? "#76a8ff" : linkBase.color,
          boxShadow: isActive ? "0 0 0 1px #243151 inset" : undefined
        })}>
        <span style={{fontSize:22}} aria-hidden>📝</span>
        <span style={{fontSize:13}}>Register</span>
      </NavLink>

      <NavLink to="/login"
        style={({isActive}) => ({
          ...linkBase,
          background: isActive ? "#1a2333" : undefined,
          color: isActive ? "#76a8ff" : linkBase.color,
          boxShadow: isActive ? "0 0 0 1px #243151 inset" : undefined
        })}>
        <span style={{fontSize:22}} aria-hidden>🔐</span>
        <span style={{fontSize:13}}>Login</span>
      </NavLink>

      <NavLink to="/dashboard"
        style={({isActive}) => ({
          ...linkBase,
          background: isActive ? "#1a2333" : undefined,
          color: isActive ? "#76a8ff" : linkBase.color,
          boxShadow: isActive ? "0 0 0 1px #243151 inset" : undefined
        })}>
        <span style={{fontSize:22}} aria-hidden>📊</span>
        <span style={{fontSize:13}}>Dashboard</span>
      </NavLink>
    </nav>
  );
}
