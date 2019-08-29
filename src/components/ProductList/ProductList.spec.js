import React from "react";
import { shallow } from "enzyme";
import ProductList from "./index";

it("ProductList component renders without crashing", () => {
  const ProductListComponent = shallow(<ProductList />);
  expect(ProductListComponent.debug()).toMatchSnapshot();
});
