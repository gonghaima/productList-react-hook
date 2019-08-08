import React from "react";
import mainStyles from "../main.module.css";
import { Store } from "../store";

export default () => {
  const { state, dispatch } = React.useContext(Store);
  return (
    <>
      <hr className={mainStyles.split} />
      <ul className={mainStyles.ul}>
        {state.products.map(item => (
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
    </>
  );
};
