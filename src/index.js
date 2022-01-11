import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Counters from "./components/counters";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="container">
      <NavBar />
      <main className="container">
        <Counters />
      </main>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
