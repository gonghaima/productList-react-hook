import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import ProductList from "./index";

let realUseContext;
let useContextMock;

const running = {
  status: "running"
};

const ready = {
  status: "ready"
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

test("ProductList component should be contains item list if STATUS is running", () => {
  useContextMock.mockReturnValue({ state: running });
  const element = new ShallowRenderer().render(<ProductList />);
  expect(element).toBe("split");
  expect(element).toMatchSnapshot();
});
