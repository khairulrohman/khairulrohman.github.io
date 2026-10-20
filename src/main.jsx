import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import ProjectDetail from "./ProjectDetail.jsx";
import PortfolioDetail from "./PortfolioDetail.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route
          path="/project/:projectId"
          element={<ProjectDetail />}
        />

        <Route
          path="/portfolio/:portfolioId"
          element={<PortfolioDetail />}
        />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);