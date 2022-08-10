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
    {
      title: "Performance",
      content:
        "Ultra-fast speed and performance are the first objectives of AvdanOS.",
      icon: "lightbulb",
    },
    {
      title: "Engagements",
      content:
        "It will be the most interactive and engaging operating system you will ever use.",
      icon: "thumbs-up",
    },
    {
      title: "Flexibility",
      content: "The OS can be changed to fit all your needs!",
      icon: "face-grin-hearts",
    },
  ]);

  const [faq, setFaq] = useState([
    {
      question: "Is AvdanOS open-source?",
      answer:
        "Yes! It is completely open-source. You can use it on your own, or you can use it as a base for your own project.",
    },
    {
      question: "Is Avdan OS totally free?",
      answer: "Yes! It is completely free as it is open-source.",
    },
    {
      question: "How to download AvdanOS?",
      answer:
        "AvdanOS is not yet available. But the team is making efforts to serve it to you A.S.A.P.!",
    },
  ]);

  const [activeFaq, setActiveFaq] = useState(null);
  const handleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

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
            className="bg-gradient-to-r bg-size-200 bg-pos-0 from-blue-500 to-indigo-800 p-3 font-medium rounded-md hover:bg-pos-100 transition-all duration-150 px-5 cursor-pointer focus:outline-none focus:ring-rose-600 focus:border-4 focus:border-rose-600 text-center"
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

      <div className="container mx-auto mb-10">
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

      <div className="bg-gray-800 flex justify-between items-center py-5 rounded-md shadow">
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
      </div>
    </div>
  );
};
