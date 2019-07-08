import React from "react";
import logo from "./logo.svg";
import { data } from "./mock/productsData";
import "./App.css";
import styles from "./header.module.css";
import footerStyles from "./footer.module.css";
import mainStyles from "./main.module.css";

function App() {
  return (
    <div className="App">
      <div className={styles.general}>header</div>
      <div className={mainStyles.general}>
        main - {JSON.stringify(data.slice(0, 20))}
      </div>
      <div className={footerStyles.general}>footer</div>
    </div>
  );
}

export default App;
