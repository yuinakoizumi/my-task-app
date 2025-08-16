import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home";
import { Schedule } from "./pages/Schedule";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Home />
    <Schedule />
  </React.StrictMode>
);
