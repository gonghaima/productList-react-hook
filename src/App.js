import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/products/:pageItems/:pageNumber" component={HomePage} />
    </BrowserRouter>
  );
}

export default App;
