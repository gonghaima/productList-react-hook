const product = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      const pageCount = Math.ceil(
        action.payload.products.length / state.itemsPerPage
      );
      const ns = {
        ...state,
        ...action.payload,
        ...{ pageCount },
        ...{ allProducts: action.payload.products }
      };
      debugger;
      return ns;
    default:
      return state;
  }
};

export default product;
