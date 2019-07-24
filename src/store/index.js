import React, { useState, useReducer, useEffect } from "react";

export const StoreContext = createContext();

const Provider = ({ children, reducer }) => {
  const [store, dispatch] = useReducer(reducer);
  const [state, setState] = useState({ isLoaded: false });

  useEffect(() => {
    dispatch({ type: "@init" });
    setState({ isLoaded: true });
  }, []);

  return (
    <StoreContext.Provider value={{ dispatch, store }}>
      {state.isLoaded ? children : false}
    </StoreContext.Provider>
  );
};

export default Provider;
