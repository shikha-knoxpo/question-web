import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TopBar from "./components/TopBar";
import ContainerQA from "./components/ContainerQA";
import { useRoutes } from "react-router";
import routes from "./route/routes";

function App() {
  const routing = useRoutes(routes);

  return (
    <div className="App">
       {routing}
    </div>
  );
}

export default App;
