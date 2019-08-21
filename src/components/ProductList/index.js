import React from "react";
import { Store } from "../../store";
import { withRouter } from "react-router-dom";
import { fetchDataAction } from "../../actions";
import { STATUS } from "../../config";
import s from "./productList.module.css";

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
      if (pageItems)
        fetchDataAction(dispatch, apiUrl, pageNumber - 1, pageItems, history);
      else
        fetchDataAction(dispatch, apiUrl, currentOffset, currentLimit, history);
    }
  }, [
    apiUrl,
    dispatch,
    currentOffset,
    currentLimit,
    state,
    products.length,
    status,
    pageNumber,
    pageItems,
    history
  ]);

  return (
    <ul className={s.ul}>
      {products.map(item => (
        <li key={`${item.product_name}_${item.id}`} className={s.li}>
          <div className={s.content}>
            <figure>
              <img src={item.product_image} alt={item.product_name} />
            </figure>
            <div className={s.hgroup}>
              <h4 className={s.product_name}>{item.product_name}</h4>
              <h4 className={s.product_description}>{item.description}</h4>
              <h6 className={s.product_price}>{item.price}</h6>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(ProductList);
