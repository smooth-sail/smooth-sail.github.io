import { EnvelopeIcon } from "@heroicons/react/20/solid";

const people = [
  {
    name: "Emily Olszewski",
    location: "Tucson, AZ",
    imageUrl: "images/emily-olszewski.png",
  },
  {
    name: "Bradley Taylor",
    location: "Las Vegas, NV",
    imageUrl: "images/bradley-taylor.png",
  },
  {
    name: "Dariia Vyshenska",
    location: "Seattle, WA",
    imageUrl: "images/dariia-vyshenska.png",
  },
  {
    name: "Isaac Lee",
    location: "Los Angeles, CA",
    imageUrl: "images/isaac-lee.png",
  },
];

export default function Team() {
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
                  <p className="text-xl font-semibold leading-6 pb-2.5 pl-2.5 text-ss-coral">
                    {person.location}
                  </p>
                  <div className="flex items-center gap-x-6">
                    <p>email</p>
                    <p>site</p>
                    <p>LinkedIn</p>
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
