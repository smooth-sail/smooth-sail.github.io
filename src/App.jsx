import { Route, Routes } from "react-router-dom";

import Home from "./components/home";
import TeamPage from "./components/team-page";
import CaseStudy from "./components/case-study";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
