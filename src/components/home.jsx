import FeatureGrid from "./feature-grid";
import ProjectScreenShot from "./project-screenshot";
import Team from "./team";
import WelcomeSection from "./welcome-section";

export default function Home() {
  return (
    <>
      <div>
        <WelcomeSection />
        <ProjectScreenShot />
        <FeatureGrid />
        <Team />
      </div>
    </>
  );
}
