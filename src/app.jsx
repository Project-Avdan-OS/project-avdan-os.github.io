import React from "./react-wrapper.js";
import { useEffect, useState } from "preact/hooks";
import Router from "preact-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./routes/Home";
import { Download } from "./routes/Download";
import { Features } from "./routes/Features";
import Cookies from "js-cookie";

function changeTheme(theme) {
  if (theme === "dark") {
    document.getElementsByTagName("html")[0].classList.add("dark");
  } else if (theme === "light") {
    document.getElementsByTagName("html")[0].classList.remove("dark");
  }
}

export const App = () => {
  const [theme, setTheme] = useState();

  useEffect(() => {
    if (Cookies.get("theme")) {
      setTheme(Cookies.get("theme"));
      changeTheme(Cookies.get("theme"));
    } else {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setTheme("dark");
        Cookies.set("theme", "dark");
        changeTheme("dark");
      } else {
        setTheme("light");
        Cookies.set("theme", "light");
        changeTheme("light");
      }
    }
  }, []);

  function toggleTheme(select) {
    setTheme(select);
    Cookies.set("theme", select);
    changeTheme(select);
  }

  return (
    <div className="dark:bg-gray-900 dark:text-white text-slate-800 bg-slate-50 transition-all">
      <Header />
      <Router>
        {/* <Home path="/project-avdan-os.github.io" /> */}
        <Home path="/" />
        {/* <Download path="/project-avdan-os.github.io/download" /> */}
        <Download path="/download" />
        <Features path="/features" />
      </Router>
      <Footer />
      {theme === "dark" ? (
        <button
          onClick={() => toggleTheme("light")}
          className="bg-white border border-black fixed bottom-1 right-1 z-50 w-14 h-14 m-1 rounded-full text-center text-3xl grid place-items-center"
        >
          ☀️
        </button>
      ) : (
        <button
          onClick={() => toggleTheme("dark")}
          className="bg-black border border-black fixed bottom-1 right-1 z-50 w-14 h-14 m-1 rounded-full text-center text-3xl grid place-items-center"
        >
          🌙
        </button>
      )}
    </div>
  );
};
