const apiUrl = process.env.REACT_APP_API_URL;

const pagination = {
  itemsPerPage: [4, 8, 10, 20, 40],
  currentLimit: 4,
  currentOffset: 0,
  marginPagesDisplayed: 2,
  pageCount: 0,
  total: 0,
  hasNext: false,
  hasPrevious: false,
  products: [],
  pageRangeDisplayed: 5
};

export { apiUrl, pagination };
