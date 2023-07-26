import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from "react-dom/client"
import App from './App.jsx';
import ReactDOM from 'react-dom';
const appElement = document.getElementById('app');
let appRoot = createRoot(appElement); // Create a root instance for the appElement

if (!appRoot) {
  appRoot = createRoot(appElement); // Only create root instance if it doesn't exist
}

// Render the App component into the root instance
appRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);