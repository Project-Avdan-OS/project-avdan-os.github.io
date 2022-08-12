import React from '../react-wrapper.js';
import {useState, useEffect} from "preact/hooks";
import faq from "../faq.js";
import tabContents from "../tabContents.js";
import log from "../log.js";

export const Home = () => {
    const [currentTab, setCurrentTab] = useState(0);

    const changeCurrentTab = (tab) => {
        setCurrentTab(tab);
        console.log(tab);
    };

    const [activeFaq, setActiveFaq] = useState(null);
    const handleFaq = (index) => {
        if (activeFaq === index) {
            setActiveFaq(null);
        } else {
            setActiveFaq(index);
        }
    };

    const [tryBrowser, setTryBrowser] = useState(false);

    return (
        <div className="mb-5">
            <div
                className="grid md:grid-cols-3 w-full h-screen place-items-center gap-5 container mx-auto py-5 overflow-hidden md:px-3 lg:px-5">
                <div
                    className="md:hidden col-span-2 w-full h-full opacity-40"
                    style={{
                        backgroundImage:
                            "url(https://raw.githubusercontent.com/Project-Avdan-OS/project-avdan-os.github.io/main/assets/images/desktop-1456x819.png)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }}
                />

                {!tryBrowser && (
                    <div className="absolute md:relative mx-5">
            <span className="text-4xl md:text-5xl xl:text-7xl font-bold bg-gray-800 md:bg-transparent">
              Your PC, even{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                better
              </span>
            </span>
                        <p className="text-sm text-slate-400 mt-3 mb-10">
                            AvdanOS is being made while keeping speed and customization in
                            mind. It is a lightweight, easy to use, and fully customizable
                            operating system.
                        </p>
                        {/* <button
              href="https://dynamicos.netlify.app/"
              onClick={() => setTryBrowser(!tryBrowser)}
              className="hidden lg:inline-block bg-gradient-to-r bg-size-200 bg-pos-0 from-blue-500 to-indigo-800 p-3 font-medium rounded-md hover:bg-pos-100 transition-all duration-150 px-5 cursor-pointer focus:outline-none focus:ring-rose-600 focus:border-4 focus:border-rose-600 text-center text-sm lg:text-lg"
            >
              <i className="fa-solid fa-window-maximize mr-2"></i> Try it in
              your browser
            </button> */}
                        <a
                            href="https://dynamicos.netlify.app/"
                            className="bg-gradient-to-r bg-size-200 bg-pos-0 from-blue-500 to-indigo-800 p-3 font-medium rounded-md hover:bg-pos-100 transition-all duration-150 px-5 cursor-pointer focus:outline-none focus:ring-rose-600 focus:border-4 focus:border-rose-600 text-center text-sm lg:text-lg"
                        >
                            <i className="fa-solid fa-window-maximize mr-2"></i> Try it in
                            your browser
                        </a>
                        {/* <a
              href="https://dynamicos.netlify.app/"
              className="inline-block lg:hidden bg-gradient-to-r bg-size-200 bg-pos-0 from-blue-500 to-indigo-800 p-3 font-medium rounded-md hover:bg-pos-100 transition-all duration-150 px-5 cursor-pointer focus:outline-none focus:ring-rose-600 focus:border-4 focus:border-rose-600 text-center text-sm lg:text-lg"
            >
              <i className="fa-solid fa-window-maximize mr-2"></i> Try it in
              your browser
            </a> */}
                    </div>
                )}

                <div
                    className={`${
                        tryBrowser ? "col-span-3" : "col-span-2"
                    } hidden md:block${tryBrowser ? " w-full h-full" : ""}`}
                >
                    {tryBrowser && (
                        <>
                            <div className="flex">
                                <button onClick={() => setTryBrowser(!tryBrowser)}>
                                    <i className="fa-solid fa-close font-bold text-xl absolute ml-2 mt-2"/>
                                </button>

                                <a href="https://dynamicos.netlify.app/">
                                    <i className="fa-solid fa-up-right-from-square font-bold absolute text-base ml-8 mt-2"/>
                                </a>
                            </div>

                            <iframe
                                src="https://dynamicos.netlify.app/"
                                className="h-full w-full"
                                frameborder="0"
                            ></iframe>
                        </>
                    )}
                    {!tryBrowser && (
                        <img
                            src="https://raw.githubusercontent.com/Project-Avdan-OS/project-avdan-os.github.io/main/assets/images/desktop-1456x819.png"
                            alt=""
                        />
                    )}
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 310">
                <path
                    fill="#e11d48"
                    fill-opacity="1"
                    d="M0,288L1440,96L1440,320L0,320Z"
                ></path>
            </svg>
            <div className="bg-rose-600 my-0 py-0">
                <div className="container grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-5 w-full md:mx-auto px-12">
                    {tabContents.map((el, index) => (
                        <div key={index} className="bg-zinc-50 rounded-md px-10 py-3">
                            <div
                                className="flex items-center text-lg font-bold sm:text-2xl py-6 bg-black md:font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-violet-400">
                                <i
                                    className={`fa-solid fa-${el.icon} text-3xl md:text-4xl mr-3`}
                                ></i>
                                {el.title}
                            </div>
                            <p className="text-black mb-6">{el.content}</p>
                        </div>
                    ))}
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1420 320">
                <path
                    fill="#e11d48"
                    fill-opacity="1"
                    d="M0,192L1440,0L1440,0L0,0Z"
                ></path>
            </svg>

            <div className="container px-5 lg:mx-auto mb-10">
                <h1 className="text-4xl font-bold mb-5">FAQ's</h1>
                <div className="grid gap-10">
                    {faq.map((el, index) => (
                        <div key={index} className="row-span-1">
                            <button
                                onClick={() => handleFaq(index)}
                                className={`bg-gray-700 p-5${
                                    index === activeFaq ? " rounded-b-none" : ""
                                } rounded-md flex justify-between w-full focus:outline-none focus:ring-rose-600 focus:border-4 focus:border-rose-600`}
                            >
                                <h1 className="text-2xl">{el.question}</h1>
                                {activeFaq !== null && activeFaq === index ? (
                                    <i className="fa-solid fa-chevron-up text-2xl text-slate-200"></i>
                                ) : (
                                    <i className="fa-solid fa-chevron-down text-2xl text-slate-200"></i>
                                )}
                            </button>
                            {activeFaq !== null && activeFaq === index && (
                                <div
                                    className={`bg-slate-50 p-5 text-gray-900 rounded-b-md${
                                        activeFaq !== null && activeFaq === index ? " fade-in" : ""
                                    }`}
                                >
                                    <p>{el.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* If AvdanOS is not out yet */}
            <div className="bg-gradient-to-r from-blue-600 via-violet-700 to-rose-600">
                <div className="container mx-auto px-5">
                    <div className="grid lg:grid-cols-3 w-full h-screen place-items-center gap-5">
                        <div className="col-span-2">
              <span className="text-4xl md:text-7xl font-bold">
                <span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-400 to-sky-400">
                  AvdanOS
                </span>{" "}
                  is under development
              </span>
                            <p className="text-sm text-slate-400 mt-5 lg:mb-10">
                                If you are a developer or a designer then please join us to make
                                it real. Even if you're not, join us to show your support.
                            </p>
                        </div>

                        <div className="col-span-2 lg:col-span-1 w-full">
                            <a
                                target="_blank"
                                href="https://discord.io/avdanos"
                                className="inline-block lg:hidden bg-gradient-to-r bg-size-200 bg-pos-0 from-indigo-600 to-indigo-800 p-3 font-medium rounded-md hover:bg-pos-100 transition-all duration-150 cursor-pointer focus:outline-none focus:ring-rose-600 focus:border-4 focus:border-rose-600 text-center w-full text-lg"
                            >
                                <i className="fa-brands fa-discord mr-2"></i> Join Discord For
                                Updates!
                            </a>
                            <a
                                target="_blank"
                                href="https://discord.io/avdanos"
                                className="hidden lg:inline-block bg-gradient-to-r bg-size-200 bg-pos-0 text-xl from-indigo-600 to-indigo-800 py-5 font-medium rounded-md hover:bg-pos-100 transition-all duration-150 px-10 cursor-pointer focus:outline-none focus:ring-rose-600 focus:border-4 focus:border-rose-600 text-center"
                            >
                                <i className="fa-brands fa-discord mr-2"></i> Join Discord For
                                Updates!
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* AvdanOS already out! */}
            {/* <div className="bg-gradient-to-r from-emerald-600 via-blue-700 to-rose-600">
        <div className="container mx-auto px-5">
          <div className="grid lg:grid-cols-3 w-full h-screen place-items-center gap-5">
            <div className="col-span-2">
              <span className="text-4xl md:text-7xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-400 to-sky-400">
                  AvdanOS
                </span>{" "}
                is now available
              </span>
              <p className="text-sm text-slate-200 mt-5 lg:mb-10">
                Download the latest version of AvdanOS, for desktop PCs and
                laptops.
              </p>
            </div>

            <div className="col-span-2 lg:col-span-1 w-full">
              <a
                href="#lead_to_download_file"
                className="inline-block lg:hidden bg-gradient-to-r bg-size-200 bg-pos-0 from-emerald-500 to-emerald-700 p-3 font-medium rounded-md hover:bg-pos-100 transition-all duration-150 cursor-pointer focus:outline-none focus:ring-rose-600 focus:border-4 focus:border-rose-600 text-center w-full text-lg"
              >
                <i className="fa-solid fa-download mr-2"></i> Download Now
              </a>
              <a
                href="#lead_to_download_file"
                className="hidden lg:inline-block bg-gradient-to-r bg-size-200 bg-pos-0 text-xl from-emerald-500 to-emerald-700 py-5 font-medium rounded-md hover:bg-pos-100 transition-all duration-150 px-10 cursor-pointer focus:outline-none focus:ring-rose-600 focus:border-4 focus:border-rose-600 text-center"
              >
                <i className="fa-solid fa-download mr-2"></i> Download Now
              </a>
            </div>
          </div>
        </div>
      </div> */}

            {/* <div className="bg-gray-800 flex justify-between items-center py-5 rounded-md shadow">
        <div className="mx-8 font-bold text-2xl">
          Interested? Give it a try!
        </div>
        <div className="grid grid-cols-2 gap-5 mx-8">
          <a
            href="https://dynamicos.netlify.app/"
            className="bg-gradient-to-r bg-size-200 bg-pos-0 from-blue-500 to-indigo-800 p-3 font-medium rounded-md hover:bg-pos-100 transition-all duration-150 px-5 cursor-pointer focus:outline-none focus:ring-rose-600 focus:border-4 focus:border-rose-600 text-center"
          >
            <i className="fa-solid fa-window-maximize mr-2"></i> Try it in your
            browser
          </a>
          <a
            href="/download"
            className="bg-gradient-to-r bg-size-200 bg-pos-0 from-emerald-500 to-emerald-700 p-3 font-medium rounded-md hover:bg-pos-100 transition-all duration-150 px-5 cursor-pointer focus:outline-none focus:ring-rose-600 focus:border-4 focus:border-rose-600 text-center"
          >
            <i className="fa-solid fa-download mr-2"></i> Download Now!
          </a>
        </div>
      </div> */}
        </div>
    );
};
