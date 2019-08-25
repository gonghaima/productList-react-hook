import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import App from "./App";
import { StoreProvider } from "./store";

let container;
let Main;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  Main = () => (
    <StoreProvider>
      <App />
    </StoreProvider>
  );
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("can render and update a counter", () => {
  // Test first render and effect
  act(() => {
    ReactDOM.render(<Main />, container);
  });
  debugger;

  const ul = container.querySelectorAll("ul");
  expect(ul[0].getAttribute("class")).toBe("pagination");
  expect(ul.length).toBe(1);
  expect(process.env.NODE_ENV).toBe("test");
  expect(ul[1]).toBe(undefined);
});
