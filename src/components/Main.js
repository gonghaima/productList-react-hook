import React, { Suspense } from "react";
import mainStyles from "../main.module.css";
import { STATUS } from "../config";
import { Store } from "../store";

const ProductList = React.lazy(() => import("./ProductList"));
const Loader = React.lazy(() => import("./Loader"));

export default () => {
  const { state } = React.useContext(Store);
  const props = {
    products: state.products,
    status: state.status,
    isLoading: state.status === STATUS.RUNNING
  };
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <hr className={mainStyles.split} />
      {(props.isLoading && <Loader />) || <ProductList {...props} />}
    </Suspense>
  );
};
