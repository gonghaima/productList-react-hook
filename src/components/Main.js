import React, { Suspense } from "react";
import mainStyles from "../main.module.css";
import logo from "../logo.svg";
import { STATUS } from "../config";
import { Store } from "../store";

const ProductList = React.lazy(() => import("./ProductList"));

export default () => {
  const { state } = React.useContext(Store);
  const props = {
    products: state.products,
    status: state.status
  };
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <hr className={mainStyles.split} />
      {(state.status === STATUS.RUNNING && (
        <div className="Loader">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Loading ...</p>
        </div>
      )) || <ProductList {...props} />}
    </Suspense>
  );
};
