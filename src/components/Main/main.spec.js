import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import { Main } from "./index";

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

test("Main component should be contains loader if STATUS is running", () => {
  useContextMock.mockReturnValue({ state: running });
  const element = new ShallowRenderer().render(<Main />);
  expect(element.props.children[0].props.className).toBe("split");
  expect(element).toMatchSnapshot();
});
