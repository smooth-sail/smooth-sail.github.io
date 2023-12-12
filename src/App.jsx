import { Route, Routes } from "react-router-dom";

import Home from "./components/home";
import TeamPage from "./components/team-page";
import CaseStudy from "./components/case-study";
import ScrollToTop from "./components/scroll-to-top";

function App() {
  return (
    <>
      <div>
        <ScrollToTop />
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
