import React from "react";
import { Store } from "../store";
import { withRouter } from "react-router-dom";
import { fetchDataAction, initialiseDataAction } from "../actions";
import { STATUS } from "../config";
import mainStyles from "../main.module.css";

const ProductList = routerProps => {
  const { state, dispatch } = React.useContext(Store);
  const { apiUrl, currentOffset, currentLimit, products, status } = state;
  const {
    history,
    match: {
      params: { pageItems, pageNumber }
    }
  } = routerProps;

  React.useEffect(() => {
    if (products.length === 0 && status === STATUS.PRISTINE) {
      debugger;
      if (pageItems)
        initialiseDataAction(
          dispatch,
          apiUrl,
          pageNumber - 1,
          pageItems,
          history
        );
      else
        initialiseDataAction(
          dispatch,
          apiUrl,
          currentOffset,
          currentLimit,
          history
        );
    }
  }, [apiUrl, dispatch, currentOffset, currentLimit, state, products.length, status, pageNumber, pageItems, history]);

  return (
    <ul className={mainStyles.ul}>
      {products.map(item => (
        <li key={`${item.product_name}_${item.id}`} className={mainStyles.li}>
          <div className={mainStyles.content}>
            <figure>
              <img src={item.product_image} alt={item.product_name} />
            </figure>
            <div className={mainStyles.hgroup}>
              <h4 className={mainStyles.product_name}>{item.product_name}</h4>
              <h4 className={mainStyles.product_description}>
                {item.description}
              </h4>
              <h6 className={mainStyles.product_price}>{item.price}</h6>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(ProductList);
