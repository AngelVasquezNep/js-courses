import { render, screen, fireEvent } from "@testing-library/react";

import ButtonColor from "./ButtonColor";

describe("<ButtonColor />", () => {
  test("Button has correct initial color", () => {
    const { getByRole } = render(<ButtonColor />);
    const colorButton = getByRole("button", { name: "Change to blue" });

    expect(colorButton).toHaveStyle({ backgroundColor: "red" });
  });

  test("Btton turns blue when clicked", () => {
    const { getByRole } = render(<ButtonColor />);
    const colorButton = getByRole("button", { name: "Change to blue" });
    fireEvent.click(colorButton)

    expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })
    expect(colorButton.textContent).toBe('Change to red')
  });

  test('Disabled check box works', () => {
    const { getByRole } = render(<ButtonColor />);
    const colorButton = getByRole("button", { name: "Change to blue" });

    // Button starts enabled
    expect(colorButton).toBeEnabled()

    // Check that the checkboxs start out unchecked
    const checkbox = getByRole("checkbox", { name: 'Disabled' });
    expect(checkbox).not.toBeChecked()

    // Click checkbox turn button disabled
    fireEvent.click(checkbox)
    expect(colorButton).toBeDisabled()
  })
});
