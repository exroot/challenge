import { render, screen, waitFor } from "@testing-library/react";
import { server, errorGetFilesData } from "../mocks";
import { StateProvider } from "./context";
import App from "./App";

describe("<App />", () => {
  const SetUpComponent = () => (
    <StateProvider>
      <App />
    </StateProvider>
  );

  test("should render successfully", () => {
    const { baseElement } = render(<SetUpComponent />);

    expect(baseElement).toBeInTheDocument();
  });

  test("should render alert error", async () => {
    server.use(errorGetFilesData);
    render(<SetUpComponent />);

    await waitFor(() => {
      expect(screen.getByText(/An error has occurred/i)).toBeInTheDocument();
    });
  });
});
