import React from "react";
import reducers from "../reducers";
export const Store = React.createContext();

const initialState = {
  products: []
};

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducers, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
