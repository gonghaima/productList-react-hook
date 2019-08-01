import combineReducers from "./combineReducers";
import product from "./products";
import pagination from "./pagination";
import selection from "./selection";

const reducer = combineReducers([product, pagination, selection]);

export default reducer;
