import React from "react";
import reducers from "../reducers";
import { pagination, apiUrl, STATUS } from "../config";
export const Store = React.createContext();

const initialState = { ...pagination, apiUrl, ...{ status: STATUS.PRISTINE } };

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducers, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
