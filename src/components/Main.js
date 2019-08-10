import React, { Suspense } from "react";
import mainStyles from "../main.module.css";
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
      <ul className={mainStyles.ul}>
        <ProductList {...props} />
      </ul>
    </Suspense>
  );
};
