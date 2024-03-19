import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import PapersPage from "./pages/PapersPage";
import ResumePage from "./pages/ResumePage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/projects" element={<ProjectsPage />}></Route>
        <Route path="/papers" element={<PapersPage />}></Route>
        <Route path="/resume" element={<ResumePage />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
