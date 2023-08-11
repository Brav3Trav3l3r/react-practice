import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CounterProvider } from "./hooks/use-counter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </React.StrictMode>
);
