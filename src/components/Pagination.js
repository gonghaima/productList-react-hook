import React from "react";
import ReactPaginate from "react-paginate";
import { Store } from "../store";
import { fetchDataAction } from "../actions";
import footerStyles from "../footer.module.css";

export default () => {
  const { state, dispatch } = React.useContext(Store);
  const { apiUrl, currentLimit, currentOffset } = state;

  return (
    <div className={footerStyles.general}>
      <ReactPaginate
        previousLabel={"< Previous page"}
        nextLabel={"Next page >"}
        breakLabel="..."
        breakClassName="break-me"
        pageCount={state.pageCount}
        marginPagesDisplayed={state.marginPagesDisplayed}
        pageRangeDisplayed={state.pageRangeDisplayed}
        initialPage={state.currentOffset}
        onPageChange={e => () =>
          fetchDataAction(dispatch, apiUrl, e.selected, currentLimit)}
        containerClassName="pagination"
        subContainerClassName="pages pagination"
        activeClassName="active"
      />
    </div>
  );
};
