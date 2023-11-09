import ReactDom from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./components/App";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
