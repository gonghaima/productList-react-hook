const product = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      const pageCount = Math.ceil(action.payload.total / action.payload.currentLimit);
      debugger;
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
