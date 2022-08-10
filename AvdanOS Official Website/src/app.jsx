import Router from "preact-router";
import { Home } from "./routes/home";
import { Header } from "./components/Header";

export function App() {
  return (
    <>
      <Header />
      <Router>
        <Home path="/" />
      </Router>
    </>
  );
}
