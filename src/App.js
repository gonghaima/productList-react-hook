import React from "react";
import logo from "./logo.svg";
import { data } from "./mock/productsData";
import "./App.css";

function App() {
  return <div className="App">clean up - {JSON.stringify(data)}</div>;
}

export default App;
