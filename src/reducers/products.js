const product = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      const pageCount = Math.ceil(action.payload.total / state.selectCurrent);
      const ns = {
        ...state,
        ...action.payload,
        ...{ pageCount },
        ...{ allProducts: action.payload.products }
      };
      return ns;
    default:
      return state;
  }
};

export default product;
