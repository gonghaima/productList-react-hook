import product from "./products";
import { pagination } from "../config";

const state = {};
const actionFetching = { type: "FETCHING_DATA" };
const actionFectched = {
  type: "DATA_FETCHED",
  ...pagination,
  ...{ payload: { total: 90, currentLimit: 10 } }
};
it("should return running status when FETCHING_DATA action received", () => {
  const fetchingState = product(state, actionFetching);
  expect(fetchingState.status).toBe("running");
});

it("should return ready status when DATA_FETCHED action received", () => {
  const fetchingState = product(state, actionFectched);
  expect(fetchingState.pageCount).toBe(9);
  expect(fetchingState.status).toBe("ready");
});
