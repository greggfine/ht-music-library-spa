import React from "react";
import Track from "./Track";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("<Track>", () => {
  it("renders", () => {
    const { asFragment } = render(<Track />);
    expect(asFragment()).toMatchSnapshot();
  });
});
