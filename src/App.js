import React from "react";
import logo from "./logo.svg";
import { data } from "./mock/productsData";
import "./App.css";
import "./header.module.css";
import ReactPaginate from "react-paginate";
import headerStyles from "./header.module.css";
import footerStyles from "./footer.module.css";
import mainStyles from "./main.module.css";

function App() {
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
      <ul className={mainStyles.general}>
        {data.slice(0, 20).map(item => (
          <li>
            <div className={mainStyles.content}>
              <figure>
                <img src={item.product_image} />
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
        <ReactPaginate
          previousLabel={"< previous page"}
          nextLabel={"next page >"}
          breakLabel="..."
          breakClassName="break-me"
          pageCount={20}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={() => {}}
          containerClassName="pagination"
          subContainerClassName="pages pagination"
          activeClassName="active"
        />
      </div>
    </div>
  );
}

export default App;
