import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#/home" },
  { name: "Case Study", href: "#/case-study" },
  { name: "Our Team", href: "#/team" },
  { name: "GitHub", href: "https://github.com/smooth-sail" },
];

export default function WelcomeSection({
  title,
  subtitle,
  button,
  buttonPath,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-ss-bl">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gradient-to-b from-ss-bl from-30% via-[#365A8F] via-60% to-[#406AA8] to-90% px-6 pb-4">
        <header className="fixed inset-x-0 top-0 z-50">
          <nav
            className="flex items-center justify-between lg:px-8 bg-ss-bl"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#/home" className="-m-1.5 p-1.5">
                <span className="sr-only">SmoothSail</span>
                <img className="h-20 w-auto" src="images/logo.png" alt="logo" />
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
                  className="text-sm font-semibold leading-6 text-white hover:text-ss-coral"
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

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-xl leading-8 text-white">{subtitle}</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href={buttonPath}
                className="rounded-md bg-ss-coral px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-ss-blgr-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {button}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
