import React from "react";
import "./auth.css";

export default function AuthButton({ children, type = "submit", onClick, disabled, style }) {
  return (
    <button className="authButton" type={type} onClick={onClick} disabled={disabled} style={style}>
      {children}
    </button>
  );
}