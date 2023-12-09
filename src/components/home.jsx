import FeatureGrid from "./feature-grid";
import ProjectScreenShot from "./project-screenshot";
import Team from "./team";
import WelcomeSection from "./welcome-section";

export default function Home() {
  const title = "Feature Flag Software Made For Engineers";
  const subtitle =
    "Open-source, Self-Hosted feature flag software that enables developers to release new features independently of deployment";
  const button = "Read Case Study";
  const buttonPath = "#/case-study";

  return (
    <>
      <div>
        <WelcomeSection
          title={title}
          subtitle={subtitle}
          button={button}
          buttonPath={buttonPath}
        />
        <ProjectScreenShot />
        <FeatureGrid />
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/case-study"
            className="rounded-md bg-ss-blgr px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-ss-coral focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Read Case Study
          </a>
        </div>
        <Team />
      </div>
    </>
  );
}
