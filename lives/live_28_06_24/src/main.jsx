import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { NumbersProvider } from "./Components/NumbersContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NumbersProvider>
    <App />
  </NumbersProvider>
);
