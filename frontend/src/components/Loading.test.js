import { render } from "@testing-library/react";
import { Loading } from "./Loading";

describe("<Loading />", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Loading />);

    expect(baseElement).toBeInTheDocument();
  });
});
