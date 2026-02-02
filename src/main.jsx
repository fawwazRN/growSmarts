import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import KajianPage from "./kajianPage/KajianPage";
import Hero from "./kajianPage/Hero";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Hero />
    <KajianPage />
  </StrictMode>,
);
