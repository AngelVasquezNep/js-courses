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
    fireEvent.click(colorButton);

    expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
    expect(colorButton.textContent).toBe("Change to red");
  });

  test("Disabled check box works", () => {
    const { getByRole } = render(<ButtonColor />);
    const colorButton = getByRole("button", { name: "Change to blue" });

    // Button starts enabled
    expect(colorButton).toBeEnabled();

    // Check that the checkboxs start out unchecked
    const checkbox = getByRole("checkbox", { name: "Disabled" });
    expect(checkbox).not.toBeChecked();

    // Click checkbox turns button disabled
    fireEvent.click(checkbox);
    expect(colorButton).toBeDisabled();
  });

  test("Disabled button has gray color", () => {
    const { getByRole } = render(<ButtonColor />);
    const colorButton = getByRole("button", { name: "Change to blue" });
    const checkbox = getByRole("checkbox", { name: "Disabled" });

    // Button starts red
    expect(colorButton).toHaveStyle({ backgroundColor: "red" });

    // Checkbox disables button and makes it gray
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

    // Doesn't matter if button is clicked, it is disabled and stays gray
    fireEvent.click(colorButton);
    expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

    // Button is enabled and doesn't have gray background 
    fireEvent.click(checkbox);
    expect(colorButton).not.toHaveStyle({ backgroundColor: "gray" });
  });
});
