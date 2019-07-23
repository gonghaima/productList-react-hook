import { data } from "../mock/productsData";

const products = (state = data, action) => {
  if (action.type === 'ADD_POST') {
    return { ...state, data: action.payload };
  }
  return state;
};

export default products;