import React from "react";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import Main from "../components/Main";

export default () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Pagination />
    </div>
  );
};
