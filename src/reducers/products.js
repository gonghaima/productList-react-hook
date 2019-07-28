const product = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      const ns = { ...state, ...action.payload };
      return ns;
    default:
      return state;
  }
};

export default product;
