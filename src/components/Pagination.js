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
      <div>
        cf {state.currentOffset} pc {state.pageCount}
      </div>
      <ReactPaginate
        previousLabel={"< Previous page"}
        nextLabel={"Next page >"}
        breakLabel="..."
        breakClassName="break-me"
        marginPagesDisplayed={state.marginPagesDisplayed}
        pageRangeDisplayed={state.pageRangeDisplayed}
        forcePage={state.currentOffset}
        onPageChange={e => () =>
          fetchDataAction(dispatch, apiUrl, e.selected, currentLimit)}
        containerClassName="pagination"
        subContainerClassName="pages pagination"
        activeClassName="active"
      />
    </div>
  );
};
