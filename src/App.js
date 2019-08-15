import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import "./header.module.css";
import { Store } from "./store";
import { fetchDataAction } from "./actions";
import { STATUS } from "./config";
import Pagination from "./components/Pagination";
import Header from "./components/Header";
import Main from "./components/Main";
import HomePage from "./pages/HomePage";

function App() {
  const { state, dispatch } = React.useContext(Store);
  const { apiUrl, currentOffset, currentLimit } = state;

  React.useEffect(() => {
    state.products.length === 0 &&
      state.status !== STATUS.RUNNING &&
      fetchDataAction(dispatch, apiUrl, currentOffset, currentLimit);
  }, [apiUrl, dispatch, currentOffset, currentLimit, state]);

  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/products/:pageItems/:pageNumber" component={HomePage} />
    </BrowserRouter>
  );
}

export default App;
