import React, { useState, useReducer, useEffect } from "react";

export const Context = createContext();

const Provider = ({ children, reducer }) => {
  const [store, dispatch] = useReducer(reducer);
  const [state, setState] = useState({ isLoaded: false });

  useEffect(() => {
    dispatch({ type: "@init" });
    setState({ isLoaded: true });
  }, []);

  return (
    <Context.Provider value={{ dispatch, store }}>
      {state.isLoaded ? children : false}
    </Context.Provider>
  );
};

export default Provider;
