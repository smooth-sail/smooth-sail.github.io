import { Route, Routes } from "react-router-dom";
import WelcomeSection from "./components/welcome-section";
import ProjectScreenShot from "./components/project-screenshot";
import FeatureGrid from "./components/feature-grid";
import Team from "./components/team";
import Home from "./components/home";

function App() {
  return (
    <>
      <div>
        <Routes></Routes>
        <WelcomeSection />
        <ProjectScreenShot />
        <FeatureGrid />
        <Team />
      </div>
    </>
  );
}

export default App;
