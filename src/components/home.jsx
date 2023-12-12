import FeatureGrid from "./feature-grid";
import ProjectScreenShot from "./project-screenshot";
import TeamGrid from "./team";
import WelcomeSection from "./welcome-section";

export default function Home() {
  const title = "Feature Flag Software Made For Engineers";
  const subtitle =
    "An open-source, self-hosted feature flagging solution that empowers developers to independently release new features without being tied to deployment.";
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
            href="#/case-study"
            className="rounded-md bg-ss-blgr px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-ss-coral focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Read Case Study
          </a>
        </div>
        <TeamGrid />
      </div>
    </>
  );
}
