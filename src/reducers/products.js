import { STATUS } from "../config";
const product = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      const pageCount = Math.ceil(
        action.payload.total / action.payload.currentLimit
      );
      const ns = {
        ...state,
        ...action.payload,
        ...{ pageCount },
        ...{ allProducts: action.payload.products },
        ...{ status: STATUS.READY }
      };
      return ns;
    case "LOADING_DATA":
      return {
        ...state,
        ...{ status: STATUS.RUNNING }
      };
    default:
      return state;
  }
};

export default product;
