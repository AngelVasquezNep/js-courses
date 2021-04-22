import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { logRoles } from "@testing-library/dom";

import { OrderDetailsProvider } from "../../context/OrderDetails";
import Options from "./Options";

describe("TotalUpdates", () => {
  test("Update scoop total when scoops change", async () => {
    const { getByText, findByRole } = render(<Options optionType="scoops" />, {
      wrapper: OrderDetailsProvider,
    });

    // make sure total starts out $0.00
    const scoopsSubTotal = getByText("Scoops total: $", {
      exact: false,
    });
    expect(scoopsSubTotal).toHaveTextContent("$0.00");

    // update vanilla scoop to 1 and check the subtotal
    const vanillaInput = await findByRole("spinbutton", {
      name: "Vanilla",
    });

    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, "1");
    expect(scoopsSubTotal).toHaveTextContent("2.00");

    // Update chocolate scoops to 2 and check subtotal
    const chocolateInput = await findByRole("spinbutton", {
      name: "Chocolate",
    });
    userEvent.clear(chocolateInput);
    userEvent.type(chocolateInput, "2");
    expect(scoopsSubTotal).toHaveTextContent("6.00");
  });
});
