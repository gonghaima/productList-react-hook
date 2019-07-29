import combineReducers from "./combineReducers";
import product from "./products";
import pagination from "./pagination";

const reducer = combineReducers([product, pagination]);

export default reducer;
