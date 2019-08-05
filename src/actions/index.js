// import { data } from "../mock/productsData";
// const API_URL = "https://protected-basin-78090.herokuapp.com/api/products/all";
// const API_URL = process.env.REACT_APP_API_URL;

const urlBuilder = (url, offset, limit) =>
  `${url}?offset=${offset}&limit=${limit}`;

export const fetchDataAction = async (dispatch, url, offset, limit) => {
  const data = await fetch(urlBuilder(url, offset, limit));
  const dataJSON = await data.json();
  return dispatch({
    type: "FETCH_DATA",
    payload: dataJSON
  });
};

// https://protected-basin-78090.herokuapp.com/api/products/all
// ttps://protected-basin-78090.herokuapp.com/api/products?offset=3&limit=5
