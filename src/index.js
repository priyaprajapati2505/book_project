import React from "react";
import ReactDOM from "react-dom";
import ButtonAppBar from "./Component/Header";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import DemoUser from "./component/About";

ReactDOM.render(
  <React.StrictMode>
    <DemoUser />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
