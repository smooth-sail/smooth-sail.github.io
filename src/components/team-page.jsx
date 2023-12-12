import { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  IdentificationIcon,
} from "@heroicons/react/24/solid";

const navigation = [
  { name: "Home", href: "#/home" },
  { name: "Case Study", href: "#/case-study" },
  { name: "Our Team", href: "#/team" },
  { name: "GitHub", href: "https://github.com/smooth-sail" },
];
const people = [
  {
    name: "Emily Olszewski",
    location: "Tucson, AZ",
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
    imageUrl: "images/dariia-vyshenska.png",
    email: "dariia.vyshenska@gmail.com",
    site: "https://dariiavyshenska.github.io/",
    linkedin: "https://www.linkedin.com/in/dariia-vyshenska/",
  },
  {
    name: "Isaac Lee",
    location: "Los Angeles, CA",
    imageUrl: "images/isaac-lee.png",
    email: "lee.isaacy@gmail.com",
    site: "https://isaacylee.github.io",
    linkedin: "https://www.linkedin.com/in/isaac-lee-2132709a/",
  },
];

const title = "Our Engineers";

export default function TeamPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div>
        <div className="bg-ss-bl">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto fixed top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-ss-bl from-30% via-[#365A8F] via-60% to-[#406AA8] to-90% px-6 pb-4">
            <header className="fixed inset-x-0 top-0 z-50">
              <nav
                className="flex items-center justify-between lg:px-8 bg-ss-bl"
                aria-label="Global"
              >
                <div className="flex lg:flex-1">
                  <a href="#/home" className="-m-1.5 p-1.5">
                    <span className="sr-only">SmoothSail</span>
                    <img
                      className="h-20 w-auto"
                      src="images/logo.png"
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="flex lg:hidden">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                    onClick={() => setMobileMenuOpen(true)}
                  >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12 ">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-md font-semibold leading-6 text-white hover:text-ss-coral"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </nav>
              <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
              >
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-ss-bl px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                  <div className="flex items-center justify-between">
                    <a href="#" className="-m-1.5 p-1.5">
                      <span className="sr-only">SmoothSail</span>
                      <img
                        className="h-20 w-auto"
                        src="images/logo.png"
                        alt="logo"
                      />
                    </a>
                    <button
                      type="button"
                      className="-m-2.5 rounded-md p-2.5 text-white hover:text-ss-coral"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                      <div className="space-y-2 py-6">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-ss-coral"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Dialog>
            </header>

            <div className="mx-auto py-32 sm:py-48 lg:py-56">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl pb-20">
                  {title}
                </h1>

                <ul role="list" className="flex flex-wrap">
                  {people.map((person) => (
                    <li key={person.name} className="px-20 py-10">
                      <div className="flex flex-col items-center gap-x-6">
                        <img
                          className="h-60 w-auto rounded-full"
                          src={person.imageUrl}
                          alt=""
                        />
                        <div>
                          <h3 className="text-2xl pt-5 font-semibold leading-7 text-white">
                            {person.name}
                          </h3>
                          <p className="text-xl p-2.5 font-semibold leading-6 text-ss-blgr">
                            {person.location}
                          </p>
                          <div className="flex justify-center gap-x-6">
                            <a href={"mailto:" + person.email}>
                              <EnvelopeIcon className="h-6 w-6 text-white hover:text-ss-coral" />
                            </a>
                            <a
                              href={person.site}
                              rel="noreferrer"
                              target="_blank"
                            >
                              <GlobeAltIcon className="h-6 w-6 text-white hover:text-ss-coral" />
                            </a>
                            <a
                              href={person.linkedin}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <IdentificationIcon className="h-6 w-6 text-white hover:text-ss-coral" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
