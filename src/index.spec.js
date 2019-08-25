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
  expect(ul[0]).toBe(undefined);
  //   const button = container.querySelector("button");
  //   const label = container.querySelector("p");
  //   expect(label.textContent).toBe("You clicked 0 times");
  //   expect(document.title).toBe("You clicked 0 times");

  //   // Test second render and effect
  //   act(() => {
  //     button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  //   });
  //   expect(label.textContent).toBe("You clicked 1 times");
  //   expect(document.title).toBe("You clicked 1 times");
});
