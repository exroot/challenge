import { fireEvent, render, screen } from "@testing-library/react";
import { Context } from "../context";
import { FilteredByFilename } from "./FilteredByFilename";

const mockFn = jest.fn();

describe("<FilteredByFilename />", () => {
  const SetUpComponent = () => (
    <Context.Provider
      value={{
        getData: mockFn,
      }}
    >
      <FilteredByFilename />
    </Context.Provider>
  );

  test("should render successfully", () => {
    const { baseElement } = render(<SetUpComponent />);

    expect(baseElement).toBeInTheDocument();
  });

  test("should write in input and send data", async () => {
    render(<SetUpComponent />);

    const input = screen.getByRole("textbox");
    const submit = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "test1.csv" } });
    fireEvent.click(submit);

    expect(mockFn).toHaveBeenCalled();
  });
});
