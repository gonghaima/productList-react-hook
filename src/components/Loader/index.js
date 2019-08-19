import React from "react";
import "./loader.css";
import logo from "../../logo.svg";

export const Loader = () => (
  <div className="Loader">
    <img src={logo} alt="spinner" />
    <p>Loading ...</p>
  </div>
);
