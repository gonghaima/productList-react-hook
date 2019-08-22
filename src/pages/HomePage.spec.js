import React from "react";
import { shallow } from "enzyme";
import HomePage from "./HomePage";

it("HomePage component renders without crashing", () => {
  const homePageComponent = shallow(<HomePage />);
  expect(homePageComponent).toMatchSnapshot();
});
