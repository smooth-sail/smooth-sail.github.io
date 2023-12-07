import FeatureGrid from "./feature-grid";
import ProjectScreenShot from "./project-screenshot";
import Team from "./team";
import WelcomeSection from "./welcome-section";

export default function Home() {
  const homeText = {
    title: "Feature Flag Software Made For Engineers",
    subtitle:
      "Open-source, Self-Hosted feature flag software that enables developers to release new features independently of deployment",
    button: "Read Case Study",
    buttonPath: "/case-study",
  };

  return (
    <>
      <div>
        <WelcomeSection
          title={homeText.title}
          subtitle={homeText.subtitle}
          button={homeText.button}
          buttonPath={homeText.buttonPath}
        />
        <ProjectScreenShot />
        <FeatureGrid />
        <Team />
      </div>
    </>
  );
}
