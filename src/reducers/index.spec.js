import reducer from "./index";

const state = {};
const actionFetching = { type: "FETCHING_DATA" };
const actionFectched = {
  type: "DATA_FETCHED",
  ...{ payload: { total: 90, currentLimit: 10 } }
};

const actionSelectionChanged = {
  type: "SET_SELECTION",
  ...{ payload: { value: 10 } }
};

it("should be able to map behaviour of all combined reducers", () => {
  const fetchingState = reducer(state, actionFetching);
  expect(fetchingState.status).toBe("running");

  const fetchedState = reducer(state, actionFectched);
  expect(fetchedState.pageCount).toBe(9);
  expect(fetchedState.status).toBe("ready");

  const selectionChangedState = reducer(state, actionSelectionChanged);
  expect(selectionChangedState.currentLimit).toBe(10);
});
