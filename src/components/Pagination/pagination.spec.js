import React from "react";
import { shallow } from "enzyme";
import Pagination from "./index";

it("Pagination component renders without crashing", () => {
  const PaginationComponent = shallow(<Pagination />);
  expect(PaginationComponent.debug()).toMatchSnapshot();
});
