export const Download = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-600 via-violet-700 to-rose-600">
        <div className="container mx-auto px-5">
          <div className="grid lg:grid-cols-3 w-full h-screen place-items-center gap-5">
            <div className="col-span-2">
              <span className="text-4xl md:text-7xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-400 to-sky-400">
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
                href="https://discord.io/avdanos"
                className="inline-block lg:hidden bg-gradient-to-r bg-size-200 bg-pos-0 from-indigo-600 to-indigo-800 p-3 font-medium rounded-md hover:bg-pos-100 transition-all duration-150 cursor-pointer focus:outline-none focus:ring-rose-600 focus:border-4 focus:border-rose-600 text-center w-full text-lg"
              >
                <i className="fa-brands fa-discord mr-2"></i> Join Discord For
                Updates!
              </a>
              <a
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
      {/* Download part for os if it is done */}
      {/* <div>
        <div className="bg-gradient-to-r from-emerald-200 via-sky-300 to-rose-400">
          <div className="container mx-auto px-5">
            <div className="grid lg:grid-cols-3 w-full h-screen place-items-center gap-5">
              <div className="col-span-2">
                <span className="text-4xl md:text-7xl font-bold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-400 to-sky-400">
                    AvdanOS
                  </span>{" "}
                  1.0
                </span>
                <p className="text-sm text-slate-600 mt-5 lg:mb-10">
                  Download the latest version of AvdanOS, for desktop PCs and
                  laptops.
                </p>
              </div>

              <div className="col-span-2 lg:col-span-1 w-full">
                <a
                  href="#lead_to_download_file"
                  className="inline-block lg:hidden bg-gradient-to-r bg-size-200 bg-pos-0 from-emerald-500 to-emerald-700 p-3 font-medium rounded-md hover:bg-pos-100 transition-all duration-150 cursor-pointer focus:outline-none focus:ring-rose-600 focus:border-4 focus:border-rose-600 text-center w-full text-lg"
                >
                  <i className="fa-solid fa-download mr-2"></i> Download
                </a>
                <a
                  href="#lead_to_download_file"
                  className="hidden lg:inline-block bg-gradient-to-r bg-size-200 bg-pos-0 text-xl from-emerald-500 to-emerald-700 py-5 font-medium rounded-md hover:bg-pos-100 transition-all duration-150 px-10 cursor-pointer focus:outline-none focus:ring-rose-600 focus:border-4 focus:border-rose-600 text-center"
                >
                  <i className="fa-solid fa-download mr-2"></i> Download
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 my-10 px-5 mx-auto container py-5">
          <h1 className="col-span-3 md:col-span-2 text-4xl font-medium">
            How to install AvdanOS
          </h1>
          <a
            href="/docs"
            className="inline-block mt-5 md:mt-0 col-span-3 md:col-span-1 bg-gradient-to-r bg-size-200 bg-pos-0 text-lg from-blue-600 to-blue-800 py-3 font-medium rounded-md hover:bg-pos-100 transition-all duration-150 px-5 cursor-pointer focus:outline-none focus:ring-rose-600 focus:border-4 focus:border-rose-600 text-center"
          >
            <i className="fa-solid fa-file-lines mr-2"></i> Docs
          </a>
        </div>
        <div className="bg-gray-700 p-5">
          <div className="grid grid-cols-3 my-10 px-5 mx-auto container">
            <h1 className="col-span-3 md:col-span-2 text-4xl font-medium">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-rose-500">
                Help
              </span>{" "}
              is always at hand
            </h1>
            <a
              href="https://discord.io/avdanos"
              className="inline-block mt-5 md:mt-0 col-span-3 md:col-span-1 bg-gradient-to-r bg-size-200 bg-pos-0 text-lg from-indigo-600 to-indigo-800 py-3 font-medium rounded-md hover:bg-pos-100 transition-all duration-150 px-5 cursor-pointer focus:outline-none focus:ring-rose-600 focus:border-4 focus:border-rose-600 text-center"
            >
              <i className="fa-brands fa-discord mr-2"></i> Join AvdanOS's
              Discord Server
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
};
