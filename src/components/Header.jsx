import React from "../react-wrapper.js";
import { useState } from "preact/hooks";

export const Header = () => {
  // const [navigation, setNavigation] = useState([
  //   { name: "Features", href: "/features" },
  //   { name: "Requirements", href: "/download#requirement" },
  //   { name: "News", href: "/news" },
  //   { name: "Team", href: "/team" },
  //   { name: "Docs", href: "/docs" },
  // ]);
  const [navigation, setNavigation] = useState([
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Demo", href: "https://dynamicos.netlify.app/", target: "_blank" },
    { name: "Docs", href: "/docs" },
    {
      name: "Github",
      href: "https://github.com/Project-Avdan-OS",
      target: "_blank",
    },
  ]);
  const [active, setActive] = useState(window.location.pathname);
  const activeClass =
    "bg-gray-900 block text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:text-rose-600 focus:bg-gray-700";
  const inactiveClass =
    "dark:text-gray-300 text-gray-700 block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:text-rose-600 focus:bg-gray-700";

  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-slate-100 dark:bg-gray-800 dark:text-white transition-all duration-500">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <i className="fa-solid fa-bars block h-6 w-6 text-xl"></i>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-start ml-12 sm:items-stretch sm:justify-start">
            <a href="/">
              <div className="flex-shrink-0 flex items-center">
                <div className="block lg:flex lg:items-center lg:justify-center">
                  <div className="lg:inline-block h-9 w-9 bg-black dark:bg-white rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="brightness-0 invert dark:invert-0 transition-all"
                    >
                      <image
                        id="Main"
                        x="89"
                        y="122"
                        width="334"
                        height="268"
                        href="data:img/png;base64,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"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-bold ml-3 lg:inline-block hidden">
                    AvdanOS
                  </span>
                </div>
              </div>
            </a>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {navigation.map((el, index) => (
                  <a
                    key={index}
                    target={el.target || "_self"}
                    href={el.href}
                    title={el.name}
                    onClick={() => setActive(el.href)}
                    className={active === el.href ? activeClass : inactiveClass}
                    aria-current={
                      el.href === window.location.pathname ? "page" : undefined
                    }
                  >
                    {el.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative">
              {/* <a
                href="/download"
                className="bg-gradient-to-r bg-size-200 bg-pos-0 from-emerald-500 to-emerald-700 p-3 font-medium rounded-md hover:bg-pos-100 transition-all duration-150 px-5 cursor-pointer"
              >
                <i className="fa-solid fa-download mr-2"></i> Download Now!
              </a> */}
              <a
                href="https://discord.io/avdanos"
                className="hidden lg:block bg-gradient-to-r bg-size-200 bg-pos-0 from-indigo-600 to-indigo-800 py-3 font-medium rounded-md hover:bg-pos-100 transition-all duration-150 px-5 cursor-pointer focus:outline-none focus:ring-rose-600 focus:border-4 focus:border-rose-600 text-center text-sm text-white"
              >
                <i className="fa-brands fa-discord mr-2"></i> Join Discord For
                Updates!
              </a>
              <a
                href="https://discord.io/avdanos"
                className="hidden sm:block lg:hidden bg-gradient-to-r bg-size-200 bg-pos-0 from-indigo-600 to-indigo-800 py-2 font-medium rounded-md hover:bg-pos-100 transition-all duration-150 px-3 cursor-pointer focus:outline-none focus:ring-rose-600 focus:border-4 focus:border-rose-600 text-center text-sm text-white"
              >
                <i className="fa-brands fa-discord mr-2"></i> Discord
              </a>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((el, index) => (
              <a
                key={index}
                href={el.href}
                className={
                  active === el.href
                    ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:text-rose-600 focus:bg-gray-700"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:text-rose-600 focus:bg-gray-700"
                }
                aria-current={
                  el.href === window.location.pathname ? "page" : undefined
                }
              >
                {el.name}
              </a>
            ))}
            {/* <a
              href="/download"
              className="block bg-gradient-to-r bg-size-200 bg-pos-0 from-emerald-500 to-emerald-700 p-3 font-medium rounded-md hover:bg-pos-100 transition-all duration-150 px-5 cursor-pointer  focus:outline-none focus:ring-rose-600 focus:border-4 focus:border-rose-600 text-center"
            >
              <i className="fa-solid fa-download mr-2"></i> Download Now
            </a> */}
            <a
              href="https://discord.io/avdanos"
              className="block sm:hidden bg-gradient-to-r bg-size-200 bg-pos-0 from-indigo-600 to-indigo-800 py-3 font-medium rounded-md hover:bg-pos-100 transition-all duration-150 px-5 cursor-pointer focus:outline-none focus:ring-rose-600 focus:border-4 focus:border-rose-600 text-center text-white"
            >
              <i className="fa-brands fa-discord mr-2"></i> Join Discord For
              Updates!
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
