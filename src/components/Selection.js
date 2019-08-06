import React from "react";
import { Store } from "../store";
import { fetchDataAction } from "../actions";

export default () => {
  const { state, dispatch } = React.useContext(Store);
  const { apiUrl, currentOffset } = state;
  return (
    <select
      onChange={e =>
        fetchDataAction(dispatch, apiUrl, currentOffset, e.target.value)
      }
    >
      {state.itemsPerPage.map(num => (
        <option value={num} key={`displayOption${num}`}>
          {num} per page
        </option>
      ))}
    </select>
  );
};
