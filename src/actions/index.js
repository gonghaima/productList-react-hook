import { STATUS } from "../config";
// import { data } from "../mock/productsData";
// const API_URL = "https://protected-basin-78090.herokuapp.com/api/products/all";
// const API_URL = process.env.REACT_APP_API_URL;

const urlBuilder = (url, offset, limit) =>
  `${url}?offset=${offset}&limit=${limit}`;

export const fetchDataAction = async (
  dispatch,
  url,
  offset,
  limit,
  history
) => {
  dispatch({
    type: "LOADING_DATA",
    payload: {}
  });
  debugger;
  const data = await fetch(urlBuilder(url, offset, limit));
  const dataJSON = await data.json();
  dispatch({
    type: "DATA_FETCHED",
    payload: { ...dataJSON, ...{ currentLimit: limit, currentOffset: offset } }
  });
  history && history.push(`/products/${limit}/${offset + 1}`);
};

export const initialiseDataAction = async (
  dispatch,
  url,
  offset,
  limit,
  history
) => {
  dispatch({
    type: "INITIATING_DATA",
    payload: { currentOffset: offset }
  });
  debugger;
  const data = await fetch(urlBuilder(url, offset, limit));
  const dataJSON = await data.json();
  dispatch({
    type: "DATA_FETCHED",
    payload: { ...dataJSON, ...{ currentLimit: limit, currentOffset: offset } }
  });
};
