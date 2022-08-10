import Router from "preact-router";
import { Header } from "./components/Header";
import { Home } from "./routes/Home";

export const App = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Header />
      <Router>
        <Home path="/" />
      </Router>
    </div>
  );
};
