import React from "react";
import { shallow } from "enzyme";
import { Loader } from "./index";

it("Loader component renders without crashing", () => {
  const ld = shallow(<Loader />);
  expect(ld.debug()).toMatchSnapshot();
});
