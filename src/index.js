import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { StoreProvider } from "./store";

const Main = () => (
  <StoreProvider>
    <App />
  </StoreProvider>
);

render(<Main />, document.getElementById("root"));
