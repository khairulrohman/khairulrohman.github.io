import React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import App from "./App.jsx";
import ProjectDetail from "./ProjectDetail.jsx";
import PortfolioDetail from "./PortfolioDetail.jsx";

function HomeSectionRedirect({ section }) {
  return <Navigate to={`/#${section}`} replace />;
}

function NotFound() {
  return (
    <main style={{ padding: "3rem 1.5rem", fontFamily: "sans-serif" }}>
      <h1>Halaman tidak ditemukan</h1>
      <p>Alamat yang dibuka tidak tersedia.</p>
      <a href="/#portfolio">Kembali ke portfolio</a>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        {/* Halaman detail */}
        <Route path="/project/:projectId" element={<ProjectDetail />} />
        <Route
          path="/portfolio/:portfolioId"
          element={<PortfolioDetail />}
        />

        {/* Kompatibilitas untuk URL menu lama */}
        <Route
          path="/about"
          element={<HomeSectionRedirect section="about" />}
        />
        <Route
          path="/experience"
          element={<HomeSectionRedirect section="experience" />}
        />
        <Route
          path="/portfolio"
          element={<HomeSectionRedirect section="portfolio" />}
        />
        <Route
          path="/projects"
          element={<HomeSectionRedirect section="projects" />}
        />
        <Route
          path="/skills"
          element={<HomeSectionRedirect section="skills" />}
        />
        <Route
          path="/education"
          element={<HomeSectionRedirect section="education" />}
        />
        <Route
          path="/contact"
          element={<HomeSectionRedirect section="contact" />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
