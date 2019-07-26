import { data } from "../mock/productsData";
const API_URL = "https://protected-basin-78090.herokuapp.com/api/products/all";

export const fetchDataAction = async dispatch => {
  // const data = await fetch(API_URL);
  // const dataJSON = await data.json();
  // console.log(`dataJSON:${dataJSON}`);

  return dispatch({
    type: "FETCH_DATA",
    // payload: dataJSON._embedded.episodes
    payload: data
  });
};

// https://protected-basin-78090.herokuapp.com/api/products/all
// ttps://protected-basin-78090.herokuapp.com/api/products?offset=3&limit=5
