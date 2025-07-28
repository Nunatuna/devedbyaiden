import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// Mantine CSS Imports
import "./style.css";
import App from "./App";

// Render the app
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
