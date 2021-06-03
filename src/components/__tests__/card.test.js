import { queryAllByTestId, render, screen } from "@testing-library/react";
import Card from "../Card";
test("test if ID exists", () => {
  const { queryAllByTestId } = render(<Card />);
  const headerElement = queryAllByTestId("weather-header");
  expect(headerElement).toBeTruthy();
});
