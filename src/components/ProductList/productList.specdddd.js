import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import { ProductList } from "./index";
import { act } from "react-dom/test-utils";

let realUseContext;
let useContextMock;
let MyCom;
let container;

const ready = {
  status: "ready",
  apiUrl: "http://test",
  currentOffset: 9,
  currentLimit: 8,
  products: [
    {
      id: 1,
      price: "$87.68",
      product_name: "Amitriptyline Hydrochloride",
      description: "synergize efficient metrics",
      product_image: "http://dummyimage.com/307x328.bmp/ff4444/ffffff"
    },
    {
      id: 2,
      price: "$58.53",
      product_name: "Zicam",
      description: "repurpose world-class metrics",
      product_image: "http://dummyimage.com/345x342.jpg/dddddd/000000"
    }
  ]
};

// Setup mock
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  realUseContext = React.useContext;
  useContextMock = React.useContext = jest.fn();
  MyCom = withRouter(ProductList);
});
// Cleanup mock
afterEach(() => {
  React.useContext = realUseContext;
});

test("ProductList component should be contains item list if STATUS is ready", () => {
  act(() => {
    ReactDOM.render(<MyCom />, container);
  });
  expect(element).toBe("split");
  expect(element).toMatchSnapshot();
});
