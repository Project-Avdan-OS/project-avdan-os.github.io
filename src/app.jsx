import Router from "preact-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./routes/Home";
import { Download } from "./routes/Download";

export const App = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Header />
      <Router>
        <Home path="/project-avdan-os.github.io/" />
        <Download path="/project-avdan-os.github.io/download" />
      </Router>
      <Footer />
    </div>
  );
};
