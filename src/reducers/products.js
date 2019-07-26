import { data } from "../mock/productsData";

const product = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      const ns = { ...state, ...{ products: action.payload } };
      debugger;
      return ns;
    default:
      debugger;
      return state;
  }
};

export default product;
