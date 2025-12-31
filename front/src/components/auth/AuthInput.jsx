import React from "react";
import "./auth.css";

export default function AuthInput({ type = "text", placeholder, value, onChange, autoComplete }) {
  return (
    <input
      className="authInput"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete}
    />
  );
}