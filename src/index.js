import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import App from "./components/App";



const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
