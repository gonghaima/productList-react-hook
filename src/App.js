import React from "react";
import "./App.css";
import "./header.module.css";
import { Store } from "./store";
import { fetchDataAction } from "./actions";
import Pagination from "./components/Pagination";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const { state, dispatch } = React.useContext(Store);
  const { apiUrl, currentOffset, currentLimit } = state;

  React.useEffect(() => {
    state.products.length === 0 &&
      fetchDataAction(dispatch, apiUrl, currentOffset, currentLimit);
    if (state && state.products && state.products.length > 0) {
      console.log(`state.products.length:${state.products.length}`);
    }
  }, [apiUrl, dispatch, currentOffset, currentLimit, state]);

  return (
    <div className="App">
      <Header />
      <Main />
      <Pagination />
    </div>
  );
}

export default App;
