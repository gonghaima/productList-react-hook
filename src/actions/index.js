import { STATUS } from "../config";
// import { data } from "../mock/productsData";
// const API_URL = "https://protected-basin-78090.herokuapp.com/api/products/all";
// const API_URL = process.env.REACT_APP_API_URL;

const sleep = duration => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
};

const urlBuilder = (url, offset, limit) =>
  `${url}?offset=${offset}&limit=${limit}`;

export const fetchDataAction = async (dispatch, url, offset, limit) => {
  dispatch({
    type: "LOADING_DATA",
    payload: {}
  });
  await sleep(3000);
  const data = await fetch(urlBuilder(url, offset, limit));
  const dataJSON = await data.json();
  dispatch({
    type: "FETCH_DATA",
    payload: { ...dataJSON, ...{ currentLimit: limit, currentOffset: offset } }
  });
};
