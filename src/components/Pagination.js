import React from "react";
import ReactPaginate from "react-paginate";
import { Store } from "../store";

export default () => {
  const { state } = React.useContext(Store);
  return (
    <ReactPaginate
      previousLabel={"< Previous page"}
      nextLabel={"Next page >"}
      breakLabel="..."
      breakClassName="break-me"
      pageCount={state.pageCount}
      marginPagesDisplayed={state.marginPagesDisplayed}
      pageRangeDisplayed={state.pageRangeDisplayed}
      onPageChange={() => {}}
      containerClassName="pagination"
      subContainerClassName="pages pagination"
      activeClassName="active"
    />
  );
};
