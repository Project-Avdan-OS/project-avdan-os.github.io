import { useState } from "preact/hooks";

export const Home = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const changeCurrentTab = (tab) => {
    setCurrentTab(tab);
    console.log(tab);
  };

  const [tabContents, setTabContents] = useState([
    {
      title: "Performance",
      content:
        "AvdanOS is built to be the best possible operating system for your computer. It is optimized for performance and is optimized for your needs.",
      icon: "rocket",
    },
    {
      title: "Effective Security",
      content:
        "The only software you need. No need to install another antivirus for your operating system!",
      icon: "shield-halved",
    },
    {
      title: "Excellent UI",
      content:
        "It is being made to be both intuitive and easy to use. It will feature an excellent user interface that will make your life easier.",
      icon: "tv",
    },
  ]);

  return (
    <div className="mb-5">
      <div className="grid grid-cols-3 w-full h-screen place-items-center gap-5 container mx-auto py-5 overflow-hidden">
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e11d48"
          fill-opacity="1"
          d="M0,192L1440,0L1440,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-rose-600">
        <div className="container grid-cols-3 grid gap-5 w-full mx-auto">
          {tabContents.map((el, index) => (
            <div key={index} className="bg-zinc-50 rounded-md px-10 py-3">
              <div className="flex items-center text-2xl py-6 bg-black font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-violet-400">
                <i className={`fa-solid fa-${el.icon} text-4xl mr-3`}></i>
                {el.title}
              </div>
              <p className="text-black mb-6">{el.content}</p>
            </div>
          ))}
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e11d48"
          fill-opacity="1"
          d="M0,192L1440,0L1440,0L0,0Z"
        ></path>
      </svg>

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
