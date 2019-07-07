import React from "react";
import logo from "./logo.svg";
import { data } from "./mock/productsData";
import "./App.css";

function App() {
  const headerStyle = { background: "lightgreen" };
  const footerStyle = { background: "lightgreen" };
  const mainStyle = {
    minHeight: "75vh",
    padding: "5px"
  };
  return (
    <div className="App">
      <div style={headerStyle}>header</div>
      <div style={mainStyle}>main - {JSON.stringify(data.slice(0, 20))}</div>
      <div style={footerStyle}>footer</div>
    </div>
  );
}

export default App;
