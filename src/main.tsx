import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import Timer from "./pages/Timer/Timer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Timer />
  </StrictMode>,
);
