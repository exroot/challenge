import { render } from "@testing-library/react";
import { TableItem } from "./TableItem";

describe("<TableItem />", () => {
  test("should render successfully", () => {
    const { baseElement } = render(
      <TableItem
        data={{
          filename: "test2.csv",
          text: "hzGAHwHWxpQvdHjHMWwHaRjwtZuyp",
          number: 104705,
          hex: "e57ea5e52342dc3d756ceb182931ade3",
        }}
      />
    );

    expect(baseElement).toBeInTheDocument();
  });
});
