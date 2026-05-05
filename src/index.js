import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // App만 불러옵니다.

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
