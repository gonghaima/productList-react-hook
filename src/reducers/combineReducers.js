const combineReducers = reducers => {
  return (state, action) => {
    const combinedState = reducers.reduce((i, currentReducer) => {
      return { ...i, ...currentReducer(i, action) };
    }, state);
    return combinedState;
  };
};

export default combineReducers;
