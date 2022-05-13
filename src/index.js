import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "styles/global.css";
import { RecoilRoot } from "recoil";
import { HashRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </Router>,
  document.getElementById("root")
);
