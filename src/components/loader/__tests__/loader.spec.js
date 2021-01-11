import React from "react";
import ReactDOM from "react-dom";
import Loader from "../loader";
import { render, cleanup } from "@testing-library/react";

describe("Loader Component", () => {
  afterEach(cleanup);
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Loader />, div);
  });
  it("should render the header with correct text", () => {
    const { getByTestId } = render(<Loader />);
    expect(getByTestId("img")).toHaveAttribute("src", "loader.gif");
  });
});
