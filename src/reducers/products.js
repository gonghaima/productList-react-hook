import { data } from "../mock/productsData";

const products = (state = data, action) => {
  switch (action.type) {
    case "DISPLAY_ALL_PRODUCT":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default products;
