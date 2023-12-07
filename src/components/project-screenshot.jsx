import {
  ServerStackIcon,
  AdjustmentsVerticalIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Decouple Deployment from Release",
    description:
      "Release new features to users when the engineering team is ready",
    icon: ServerStackIcon,
  },
  {
    name: "User Targeting Capabilities",
    description:
      "Comes with user-targeting capabilities through the use of user context and reusable segments",
    icon: AdjustmentsVerticalIcon,
  },
  {
    name: "Testing in Production",
    description:
      "Test your new features with actual users in a production environment instead of simulations",
    icon: UserGroupIcon,
  },
];

export default function ProjectScreenShot() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-ss-blgr">
                Feature Release with SmoothSail
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-ss-bl sm:text-4xl">
                A better workflow
              </p>
              <p className="mt-6 text-lg leading-8 text-ss-bl">
                Made with engineers in mind, allow engineers to decouple
                deployment from release, test in production, and target specific
                users for your new features. Self-hosted and open-source so
                SmoothSail can be customized to fit your needs.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-ss-bl lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-ss-bl">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-ss-coral"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="images/smoothsail-dashboard.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
