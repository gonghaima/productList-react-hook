import { data } from "../mock/productsData";

const products = (state = data, action) => {
  if (action.type === "DISPLAY_ALL_PRODUCT") {
    return { ...state, data: action.payload };
  }
  return state;
};

export default products;
