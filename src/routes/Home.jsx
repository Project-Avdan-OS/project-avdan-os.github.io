export const Home = () => {
  return (
    <div className="container mx-auto py-5">
      <div className="grid grid-cols-3 w-full h-screen place-items-center gap-5">
        <div>
          <span className="text-5xl font-bold">
            Your PC, even {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              better
            </span>
          </span>
          <p className="text-xs text-slate-400 mt-3 mb-10">
            AvdanOS is being made while keeping speed and customization in mind.
            It is a lightweight, easy to use, and fully customizable operating
            system.
          </p>
          <a href="https://dynamicos.netlify.app/" className="bg-gradient-to-r from-blue-500 to-indigo-700 p-3 font-medium rounded-md hover:from-blue-600 hover:to-indigo-800"><i className="fa-solid fa-window-maximize mr-2"></i> Try it in your browser</a>
        </div>

        <div className="col-span-2">
          <img
            src="https://raw.githubusercontent.com/Project-Avdan-OS/project-avdan-os.github.io/main/assets/images/desktop-1456x819.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
