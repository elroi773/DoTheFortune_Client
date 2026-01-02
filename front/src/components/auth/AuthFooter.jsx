import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";

export default function AuthFooter({ text, linkText, to }) {
  return (
    <div className="authFooter">
      {text} <Link to={to}>{linkText}</Link>
    </div>
  );
}