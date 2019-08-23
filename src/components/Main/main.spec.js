import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import { Main } from "./index";

let realUseContext;
let useContextMock;

const mock = {
  itemsPerPage: [4, 8, 10, 20, 40],
  currentLimit: 4,
  currentOffset: 0,
  marginPagesDisplayed: 2,
  pageCount: 0,
  total: 0,
  hasNext: false,
  hasPrevious: false,
  products: [],
  pageRangeDisplayed: 5,
  status: "running"
};
// Setup mock
beforeEach(() => {
  realUseContext = React.useContext;
  useContextMock = React.useContext = jest.fn();
});
// Cleanup mock
afterEach(() => {
  React.useContext = realUseContext;
});

test("mock hook", () => {
  useContextMock.mockReturnValue({ state: mock });
  const element = new ShallowRenderer().render(<Main />);
  expect(element.props.children[0].props.className).toBe("split");
  expect(element).toMatchSnapshot();
});
