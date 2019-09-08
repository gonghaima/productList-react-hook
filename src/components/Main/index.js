import React, { Suspense } from "react";
import mainStyles from "./main.module.css";
import { STATUS } from "../../config";
import { Store } from "../../store";
import { Loader } from "../Loader/index";

const ProductList = React.lazy(() => import("../ProductList"));

export const Main = () => {
  const { state } = React.useContext(Store);
  const props = {
    products: state.products,
    status: state.status,
    isLoading: state.status === STATUS.RUNNING,
    isReady: state.status === STATUS.READY,
    notFound: state.products.length === 0
  };

  return (
    <Suspense fallback={<Loader />}>
      <hr className={mainStyles.split} />
      {(props.isLoading && <Loader />) ||
        (props.isReady && props.notFound && <h1>Not found</h1>) || (
          <ProductList />
        )}
    </Suspense>
  );
};
