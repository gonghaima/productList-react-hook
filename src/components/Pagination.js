import React from "react";
import { withRouter } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { Store } from "../store";
import { fetchDataAction } from "../actions";
import footerStyles from "../footer.module.css";
import pagination from "../reducers/pagination";

const Pagination = ({ history }) => {
  const { state, dispatch } = React.useContext(Store);
  const { apiUrl, currentLimit, currentOffset } = state;

  return (
    <div className={footerStyles.general}>
      <ReactPaginate
        previousLabel={"< Previous page"}
        nextLabel={"Next page >"}
        breakLabel="..."
        breakClassName="break-me"
        marginPagesDisplayed={state.marginPagesDisplayed}
        pageCount={state.pageCount}
        pageRangeDisplayed={state.pageRangeDisplayed}
        forcePage={state.currentOffset}
        onPageChange={e =>
          fetchDataAction(dispatch, apiUrl, e.selected, currentLimit, history)
        }
        containerClassName="pagination"
        subContainerClassName="pages pagination"
        activeClassName="active"
      />
    </div>
  );
};

export default withRouter(Pagination);
