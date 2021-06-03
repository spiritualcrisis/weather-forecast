import { render, screen } from "@testing-library/react";
import Header from "../Header";
test("test if ID exists", () => {
  const { queryAllByTestId } = render(<Header />);
  const headerElement = queryAllByTestId("weather-header2");
  expect(headerElement).toBeTruthy();
});
