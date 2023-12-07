import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Fine-grained control",
    description:
      "Releases can target specific audiences like beta-testers rather than the entire user base",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Fast Rollback",
    description:
      "Buggy or unsuccessful releases can be rolled back with one click (or toggle!)",
    icon: LockClosedIcon,
  },
  {
    name: "Simplicity of Feature Release",
    description:
      "Engineering team can handle feature release without the additional complexity of involving other stakeholders",
    icon: ArrowPathIcon,
  },
  {
    name: "Gentle Learning Curve",
    description:
      "Conditionals at their core, feature flags are relatively easy for teams to understand how to adopt within their code",
    icon: FingerPrintIcon,
  },
];

export default function FeatureGrid() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-ss-blgr">
            Testing in Production with SmoothSail
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-ss-bl sm:text-4xl">
            Leverage the advantages of Feature Flags
          </p>
          <p className="mt-6 text-lg leading-8 text-ss-bl">
            Feature flags give engineers many advantages and helps explain their
            rise in popularity. There are some key benefits that make feature
            flags great for feature release and testing in production.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-ss-bl">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-ss-coral">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-ss-bl">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
