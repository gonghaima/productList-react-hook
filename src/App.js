import React from "react";
import logo from "./logo.svg";
import { data } from "./mock/productsData";
import "./App.css";
import "./header.module.css";
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
      <hr />
      <ul className={mainStyles.general}>
        {data.slice(0, 20).map(item => (
          <li>
            <div>
              <img src={item.product_image} />
            </div>
          </li>
        ))}
      </ul>
      <div className={footerStyles.general}>footer</div>
    </div>
  );
}

export default App;
