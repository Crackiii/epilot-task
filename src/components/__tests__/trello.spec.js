import React from "react";
import ReactDOM from "react-dom";
import Trello from "../trello";
import { render, cleanup } from "@testing-library/react";

describe("Trello Component", () => {
  afterEach(cleanup);
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Trello />, div);
  });
  it("should render the header with correct text", () => {
    const { getByTestId } = render(<Trello />);
    expect(getByTestId("trello-header")).toHaveTextContent("Trello Todo App");
  });
});
