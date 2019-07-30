const combineReducers = reducers => {
  return (state, action) => {
    const combinedState = reducers.reduce((i, currentReducer) => {
      //   if (!i) return {};
      return { ...i, ...currentReducer(i, action) };
    }, state);
    return combinedState;
  };
};

export default combineReducers;
