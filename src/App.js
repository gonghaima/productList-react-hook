import React from "react";
import { data } from "./mock/productsData";
import "./App.css";
import "./header.module.css";
import ReactPaginate from "react-paginate";
import headerStyles from "./header.module.css";
import footerStyles from "./footer.module.css";
import mainStyles from "./main.module.css";
import { Store } from "./store";
import { fetchDataAction } from "./actions";
import Pagination from "./components/Pagination";

function App() {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.products.length === 0 && fetchDataAction(dispatch);
    if (state && state.products && state.products.length > 0) {
      console.log(`state.products.length:${state.products.length}`);
    }
  }, [dispatch, state]);

  const props = {
    products: state.products,
    hasNext: state.hasNext,
    hasPrevious: state.hasPrevious,
    total: state.products.length
  };

  return (
    <div className="App">
      <header>
        <h2>All Products</h2>
        <div className={headerStyles.displaySelection}>
          <summary>1000 products</summary>
          <select>
            <option value="4">4 per page</option>
            <option value="8">8 per page</option>
            <option value="10">10 per page</option>
            <option value="20">20 per page</option>
            <option value="40">40 per page</option>
          </select>
        </div>
      </header>
      <hr className={headerStyles.split} />
      <ul className={mainStyles.ul}>
        {data.slice(0, 20).map(item => (
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
      <div className={footerStyles.general}>
        <Pagination />
      </div>
    </div>
  );
}

export default App;
