import Team from "./team";
import WelcomeSection from "./welcome-section";

const title = "Meet the Team that Built SmoothSail";
const subtitle =
  "We are all software engineers currently looking for professional opportunities after completing Launch School's Capstone Program";
const button = "More about Launch School";
const buttonPath = "https://launchschool.com/";

export default function TeamPage() {
  return (
    <>
      <div>
        <WelcomeSection
          title={title}
          subtitle={subtitle}
          button={button}
          buttonPath={buttonPath}
        />
        <Team />
      </div>
    </>
  );
}
