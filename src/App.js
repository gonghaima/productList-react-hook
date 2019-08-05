import React from "react";
import { data } from "./mock/productsData";
import "./App.css";
import "./header.module.css";
import headerStyles from "./header.module.css";
import mainStyles from "./main.module.css";
import { Store } from "./store";
import { fetchDataAction } from "./actions";
import Pagination from "./components/Pagination";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const { state, dispatch } = React.useContext(Store);
  const { apiUrl, initialPage, selectCurrent } = state;

  React.useEffect(() => {
    state.products.length === 0 &&
      fetchDataAction(dispatch, apiUrl, initialPage, selectCurrent);
    if (state && state.products && state.products.length > 0) {
      console.log(`state.products.length:${state.products.length}`);
    }
  }, [apiUrl, dispatch, initialPage, selectCurrent, state]);

  const props = {
    products: state.products,
    hasNext: state.hasNext,
    hasPrevious: state.hasPrevious,
    total: state.products.length
  };

  return (
    <div className="App">
      <Header />
      <Main />
      <Pagination />
    </div>
  );
}

export default App;
