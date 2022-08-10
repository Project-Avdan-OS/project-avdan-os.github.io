export const Home = () => {
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
      <div className="mb-5">
        <div className="flex w-full justify-center items-center">
          <button className="bg-gradient-to-r bg-pos-0 bg-size-200 hover:bg-pos-100 from-blue-600 to-indigo-700 px-5 py-4 rounded-full mx-3 w-44 font-medium text-xl transition-all duration-200">
            Performance
          </button>
          <button className="bg-white hover:bg-slate-100 text-black px-5 py-4 rounded-full mx-3 w-44 font-medium text-xl transition-all duration-200">
            Security
          </button>
          <button className="bg-white hover:bg-slate-100 text-black px-5 py-4 rounded-full mx-3 w-44 font-medium text-xl transition-all duration-200">
            UI
          </button>
        </div>
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
