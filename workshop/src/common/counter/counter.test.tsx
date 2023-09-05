import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Counter } from "./counter";




describe("Counter test", () => {
  test("a title element should be pressent", () => {
    const { container } = render(<Counter />)
    const titleElements = container.querySelectorAll("h2")
    expect(titleElements).toBeTruthy()
  })
  test("", () => {
    render(<Counter />)
    act(() =>
      fireEvent.click(screen.getByRole("button"))
    )
    expect(screen.getByText("Counter: 2")).toBeTruthy()
  })
})