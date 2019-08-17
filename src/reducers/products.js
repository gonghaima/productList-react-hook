import { STATUS } from "../config";
const product = (state, action) => {
  let pageCount;
  switch (action.type) {
    case "FETCHING_DATA":
      return {
        ...state,
        ...{ status: STATUS.RUNNING }
      };
    case "DATA_FETCHED":
      pageCount = Math.ceil(action.payload.total / action.payload.currentLimit);
      const ns = {
        ...state,
        ...action.payload,
        ...{ pageCount },
        ...{ allProducts: action.payload.products },
        ...{ status: STATUS.READY }
      };
      return ns;
    default:
      return state;
  }
};

export default product;
