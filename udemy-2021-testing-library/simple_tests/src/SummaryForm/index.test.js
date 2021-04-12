import { render, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import SummaryForm from "./index";

describe("<SummaryForm /> | Accept terms and conditions", () => {
  test("Terms and conditions Checkbox enables submit", () => {
    const handleSubmit = jest.fn();

    const { getByRole } = render(<SummaryForm onSubmit={handleSubmit} />);
    const checkbox = getByRole("checkbox", { name: "Terms and conditions" });
    const submit = getByRole("button", { name: "Save" });

    // Submit button starts disabled
    expect(submit).toBeDisabled();
    // Checkbox starts uncheck
    expect(checkbox).not.toBeChecked()
    // Form doesn't call handleSubmit method when is disabled
    fireEvent.click(submit);

    // Enable form
    fireEvent.click(checkbox);

    // Submit button is enable
    expect(submit).toBeEnabled();

    // handleSubmit only calls one
    fireEvent.click(submit);
    expect(handleSubmit).toBeCalledTimes(1);
  });

  test("Terms and conditions PopOver", () => {
    const { getByRole, queryByRole } = render(<SummaryForm />)
    const popOver = getByRole('button', { name: "pop-over" });
    const popOverContent = queryByRole('region', { name: "popOverContent" });

    expect(popOverContent).not.toBeInTheDocument()
    userEvent.hover(popOver)
    expect(popOverContent).toBeInTheDocument()
  

    expect(true).toBeTruthy()
  })
});
