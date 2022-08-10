import { useState } from "preact/hooks";

export const Home = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const changeCurrentTab = (tab) => {
    setCurrentTab(tab);
    console.log(tab)
  }

  return (
    <div className="container mx-auto py-5 overflow-hidden">
      <div className="grid grid-cols-3 w-full h-screen place-items-center gap-5">
        <div>
          <span className="text-7xl font-bold">
            Your PC, even{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              better
            </span>
          </span>
          <p className="text-sm text-slate-400 mt-3 mb-10">
            AvdanOS is being made while keeping speed and customization in mind.
            It is a lightweight, easy to use, and fully customizable operating
            system.
          </p>
          <a
            href="https://dynamicos.netlify.app/"
            className="bg-gradient-to-r bg-size-200 bg-pos-0 from-blue-500 to-indigo-800 p-3 font-medium rounded-md hover:bg-pos-100 transition-all duration-150 px-5 cursor-pointer"
          >
            <i className="fa-solid fa-window-maximize mr-2"></i> Try it in your
            browser
          </a>
        </div>

        <div className="col-span-2">
          <img
            src="https://raw.githubusercontent.com/Project-Avdan-OS/project-avdan-os.github.io/main/assets/images/desktop-1456x819.png"
            alt=""
          />
        </div>
      </div>
      <div className="mb-5 px-16 grid-rows-2 grid">
        <div className="grid grid-cols-3 w-full justify-center items-center">
          <button onClick={() => changeCurrentTab(0)} className="border-4 bg-clip-border bg-gradient-to-r from-fuchsia-500 via-purple-400 to-sky-400">
            <div className="flex flex-col justify-center items-center py-6 bg-black font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-400 to-sky-400">
              <i className="fa-solid fa-rocket text-4xl"></i>
              Performance
            </div>
          </button>

          <button onClick={() => changeCurrentTab(1)} className="bg-white hover:bg-slate-100 text-black px-5 py-4 rounded-full w-full font-medium text-xl transition-all duration-200">
            Security
          </button>
          <button onClick={() => changeCurrentTab(2)} className="bg-white hover:bg-slate-100 text-black px-5 py-4 rounded-full w-full font-medium text-xl transition-all duration-200">
            UI
          </button>
        </div>
        {currentTab === 0 ? (
          <div className="w-full mx-auto rounded-lg p-5 bg-gray-700 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-3">Performance</h1>
            <p className="max-w-lg text-center text-lg">
              AvdanOS is built to be the best possible operating system for your
              computer. It is optimized for performance and is optimized for
              your needs.
            </p>
          </div>
        ) : currentTab === 1 ? (
          <div className="max-w-2xl mx-auto rounded-lg p-5 bg-gray-700 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-3">Effective Security</h1>
            <p className="max-w-lg text-center text-lg">
              The only software you need. No need to install another antivirus
              for your operating system!
            </p>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto rounded-lg p-5 bg-gray-700 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-3">Excellent UI</h1>
            <p className="max-w-lg text-center text-lg">
              It is being made to be both intuitive and easy to use. It will
              feature an excellent user interface that will make your life
              easier.
            </p>
          </div>
        )}
      </div>
      <div className="bg-gray-800 flex justify-between items-center py-5 rounded-md shadow">
        <div className="mx-8 font-bold text-2xl">
          Interested? Give it a try!
        </div>
        <div className="grid grid-cols-2 gap-5 mx-8">
          <a
            href="https://dynamicos.netlify.app/"
            className="bg-gradient-to-r bg-size-200 bg-pos-0 from-blue-500 to-indigo-800 p-3 font-medium rounded-md hover:bg-pos-100 transition-all duration-150 px-5 cursor-pointer"
          >
            <i className="fa-solid fa-window-maximize mr-2"></i> Try it in your
            browser
          </a>
          <a
            href="/download"
            className="bg-gradient-to-r bg-size-200 bg-pos-0 from-emerald-500 to-emerald-700 p-3 font-medium rounded-md hover:bg-pos-100 transition-all duration-150 px-5 cursor-pointer"
          >
            <i className="fa-solid fa-download mr-2"></i> Download Now!
          </a>
        </div>
      </div>
    </div>
  );
};
