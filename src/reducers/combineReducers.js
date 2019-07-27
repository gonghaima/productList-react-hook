const combineReducers = reducers => {
  return (state = {}, action) => {
    const combinedState = reducers.reduce((i, currentReducer) => {
      //   if (!i) return {};
      return { ...i, ...currentReducer(state, action) };
    }, {});
    return combinedState;
  };
};

export default combineReducers;
