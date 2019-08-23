import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

it("Header component renders without crashing", () => {
  const HeaderComponent = shallow(<Header />);
  expect(HeaderComponent.debug()).toMatchSnapshot();
});
