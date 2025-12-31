import React from "react";
import "./auth.css";

export default function AuthButton({ children, type = "submit", onClick, disabled }) {
  return (
    <button className="authButton" type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}