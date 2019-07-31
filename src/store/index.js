import React from "react";
import reducers from "../reducers";
export const Store = React.createContext();

const initialState = {
  products: [],
  hasNext: false,
  hasPrevious: false,
  total: 0,
  pageCount: 15,
  marginPagesDisplayed: 2,
  pageRangeDisplayed: 5,
  itemPerPage:50
};

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducers, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
