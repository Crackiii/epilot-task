import React from "react";
import ReactDOM from "react-dom";
import Form from "../form";
import { render, cleanup } from "@testing-library/react";

describe("Form Component", () => {
  beforeEach(() => {});
  afterEach(cleanup);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Form />, div);
  });
  it("should render the header with correct text", () => {
    const { getByTestId } = render(<Form />);
    expect(getByTestId("text-input")).toHaveAttribute(
      "placeholder",
      "I want to do..."
    );
  });
});
