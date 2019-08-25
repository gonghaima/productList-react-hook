import React from "react";
import { shallow } from "enzyme";
import Selection from "./index";

it("Selection component renders without crashing", () => {
  const SelectionComponent = shallow(<Selection />);
  expect(SelectionComponent.debug()).toMatchSnapshot();
});
