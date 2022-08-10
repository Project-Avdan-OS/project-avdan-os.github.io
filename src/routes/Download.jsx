export const Download = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-violet-700 to-rose-600">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 w-full h-screen place-items-center gap-5">
          <div className="col-span-2">
            <span className="text-7xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-400 to-sky-400">
                AvdanOS
              </span>{" "}
              is under development
            </span>
            <p className="text-sm text-slate-400 mt-5 mb-10">
              If you are a developer or a designer then please join us to make
              it real. Even if you're not, join us to show your support.
            </p>
          </div>

          <div className="col-span-1">
            <a
              href="https://discord.io/avdanos"
              className="bg-gradient-to-r bg-size-200 bg-pos-0 text-2xl from-indigo-600 to-indigo-800 py-5 font-medium rounded-md hover:bg-pos-100 transition-all duration-150 px-10 cursor-pointer"
            >
              <i className="fa-brands fa-discord mr-2"></i> Join Discord For
              Updates!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
