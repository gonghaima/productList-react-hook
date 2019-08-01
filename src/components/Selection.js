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
      <option value="4">4 per page</option>
      <option value="8">8 per page</option>
      <option value="10">10 per page</option>
      <option value="20">20 per page</option>
      <option value="40">40 per page</option>
    </select>
  );
};
