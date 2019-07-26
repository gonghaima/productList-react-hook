import React from "react";
import reducers from "../reducers";
export const Store = React.createContext();

const initialState = {
  products: []
};

function productReducer(state, action) {
  switch (action.type) {
    case "FETCH_DATA":
      const ns = { ...state, ...{ products: action.payload } };
      debugger;
      return ns;
    default:
      debugger;
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(productReducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
