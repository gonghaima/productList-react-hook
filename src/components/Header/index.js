import React from "react";
import headerStyles from "./header.module.css";
import Selection from "../Selection";

export default props => {
  return (
    <header>
      <h2>All Products</h2>
      <div className={headerStyles.displaySelection}>
        <summary>1000 products</summary>
        <Selection />
      </div>
    </header>
  );
};
