import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App";

const rootElement = document.getElementById("root");

// react-snap pre-renders pages to static HTML at build time.
// In production, react-snap adds a data-reactroot attribute to the first child.
// We detect that to decide whether to hydrate or create fresh.
// In dev mode, the root may have hidden SEO fallback content — always use createRoot.
const isPrerendered =
  rootElement.firstChild &&
  rootElement.firstChild.nodeType === 1 &&
  rootElement.firstChild.hasAttribute("data-reactroot");

if (isPrerendered) {
  ReactDOM.hydrateRoot(
    rootElement,
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  // Clear any static SEO fallback content before mounting
  rootElement.innerHTML = "";
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

