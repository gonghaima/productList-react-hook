import React from "react";
import TestRenderer from "react-test-renderer";
import ProductList from "./index";

import reducers from "../../reducers";
import { pagination, apiUrl, STATUS } from "../../config";
export const Store = React.createContext();

function MyCOM() {
  const initialState = {
    ...pagination,
    apiUrl,
    ...{ status: STATUS.PRISTINE }
  };
  const [state, dispatch] = React.useReducer(reducers, initialState);
  const value = { state, dispatch };
  return (
    <Store.Provider value={value}>
      <ProductList />
    </Store.Provider>
  );
}

test("non-shallow render", () => {
  const element = new TestRenderer.create(<MyCOM />);
  expect(element.root.findByType("div").children).toEqual(["Provided Value"]);
});
