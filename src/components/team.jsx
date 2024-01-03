import {
  EnvelopeIcon,
  GlobeAltIcon,
  IdentificationIcon,
} from "@heroicons/react/24/solid";

const people = [
  {
    name: "Emily Olszewski",
    location: "Chicago, IL",
    imageUrl: "images/emily-olszewski.png",
    email: "eolszewski14@gmail.com",
    site: "https://emilyolszewski.dev/",
    linkedin: "https://www.linkedin.com/in/emily-olszewski/",
  },
  {
    name: "Bradley Taylor",
    location: "Las Vegas, NV",
    imageUrl: "images/bradley-taylor.png",
    email: "taylorbradleyr@gmail.com",
    site: "https://brad-taylor.com",
    linkedin: "https://www.linkedin.com/in/bradleyroberttaylor/",
  },
  {
    name: "Dariia Vyshenska",
    location: "Seattle, WA",
    imageUrl:
      "https://live.staticflickr.com/65535/53399886036_469462b2cf_w.jpg",
    email: "dariia.vyshenska@gmail.com",
    site: "https://dariiavyshenska.github.io/",
    linkedin: "https://www.linkedin.com/in/dariia-vyshenska/",
  },
  {
    name: "Isaac Lee",
    location: "Los Angeles, CA",
    imageUrl: "images/isaaclee.png",
    email: "lee.isaacy@gmail.com",
    site: "https://isaacylee.github.io",
    linkedin: "https://www.linkedin.com/in/isaac-lee-2132709a/",
  },
];

export default function TeamGrid() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-ss-bl sm:text-4xl">
            Our Engineers
          </h2>
          <p className="mt-6 text-lg leading-8 text-ss-bl"></p>
        </div>
        <ul
          role="list"
          className="grid gap-x-12 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-60 w-auto rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-2xl font-semibold leading-7 p-2.5 text-ss-bl">
                    {person.name}
                  </h3>
                  <p className="text-xl font-semibold leading-6 pb-2.5 pl-2.5 text-ss-blgr">
                    {person.location}
                  </p>
                  <div className="flex items-center gap-x-6">
                    <a href={"mailto:" + person.email}>
                      <EnvelopeIcon className="h-6 w-6 text-ss-coral hover:text-ss-blgr" />
                    </a>
                    <a href={person.site} rel="noreferrer" target="_blank">
                      <GlobeAltIcon className="h-6 w-6 text-ss-coral hover:text-ss-blgr" />
                    </a>
                    <a href={person.linkedin} target="_blank" rel="noreferrer">
                      <IdentificationIcon className="h-6 w-6 text-ss-coral hover:text-ss-blgr" />
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
