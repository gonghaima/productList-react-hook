// import { data } from "../mock/productsData";
// const API_URL = "https://protected-basin-78090.herokuapp.com/api/products/all";
const API_URL = process.env.REACT_APP_API_URL;
export const fetchDataAction = async dispatch => {
  const data = await fetch(API_URL);
  const dataJSON = await data.json();
  return dispatch({
    type: "FETCH_DATA",
    payload: dataJSON
  });
};

// https://protected-basin-78090.herokuapp.com/api/products/all
// ttps://protected-basin-78090.herokuapp.com/api/products?offset=3&limit=5
