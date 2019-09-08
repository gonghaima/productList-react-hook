import React from "react";
import "./loader.css";
import logo from "../../logo.svg";

export const Loader = ({ txt }) => (
  <div className="Loader">
    <img src={logo} alt="spinner" />
    <p>{txt || "Loading..."}</p>
  </div>
);
