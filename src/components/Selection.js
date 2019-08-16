import React from "react";
import { withRouter } from "react-router-dom";
import { Store } from "../store";
import { fetchDataAction } from "../actions";

const Selection = routeProps => {
  const { state, dispatch } = React.useContext(Store);
  const { apiUrl, currentOffset, currentLimit } = state;
  const doSth = (limit, offset, history) =>
    history && history.push(`/products/${limit}/${offset + 1}`);
  return (
    <select
      onChange={e => doSth(e.target.value, currentOffset, routeProps.history)}
      value={state.currentLimit}
    >
      {state.itemsPerPage.map(num => (
        <option value={num} key={`displayOption${num}`}>
          {num} {state.status}
        </option>
      ))}
    </select>
  );
};

export default withRouter(Selection);
