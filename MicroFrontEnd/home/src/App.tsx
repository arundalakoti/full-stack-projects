import React from "react";
import ReactDOM from "react-dom";

import "./GlobalCss/global.css";

import Header from "./Header/Header";
import Footer from "./Footer";
import { HamburgerIcon } from "./Icons/HamburgerIcon";
import { Products } from "./Products";

const App = () => (
  <div>
    <Header />
    <Products />
    {/* <Footer /> */}
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
