import React from "react";
import { Store } from "../store";

export default () => {
  const { state, dispatch } = React.useContext(Store);
  return (
    <select
      onChange={e =>
        dispatch({
          type: "SET_SELECTION",
          payload: e.target
        })
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
