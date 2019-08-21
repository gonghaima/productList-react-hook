import React from "react";
import { withRouter } from "react-router-dom";
import { Store } from "../../store";
import { fetchDataAction } from "../../actions";

const Selection = routeProps => {
  const { state, dispatch } = React.useContext(Store);
  const { apiUrl, currentOffset, currentLimit } = state;
  return (
    <select
      onChange={e =>
        fetchDataAction(
          dispatch,
          apiUrl,
          currentOffset,
          e.target.value,
          routeProps.history
        )
      }
      value={currentLimit}
    >
      {state.itemsPerPage.map(num => (
        <option value={num} key={`displayOption${num}`}>
          {num} per page
        </option>
      ))}
    </select>
  );
};

export default withRouter(Selection);
