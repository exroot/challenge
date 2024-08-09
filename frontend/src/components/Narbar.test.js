import { render } from "@testing-library/react";
import { Navbar } from "./Navbar";

describe("<Navbar />", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Navbar />);

    expect(baseElement).toBeInTheDocument();
  });
});
