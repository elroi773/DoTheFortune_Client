import React from "react";
import BlobBackground from "./BlobBackground";
import "./auth.css";

export default function AuthFrame({ children }) {
  return (
    <div className="authFrame">
      <BlobBackground className="authBlob" />
      <div className="authContent">{children}</div>
    </div>
  );
}