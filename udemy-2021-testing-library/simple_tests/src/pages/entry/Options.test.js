import { render } from "@testing-library/react";
import { OrderDetailsProvider } from "../../context/OrderDetails";

import Options from "./Options";

describe("<Options />", () => {
  test("Display image from each scoop option from server", async () => {
    const { findAllByRole } = render(<Options optionType="scoops" />, {
      wrapper: OrderDetailsProvider,
    });

    // Find images
    const scoopImages = await findAllByRole("img", { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    // confirm alt text of images
    // @ts-ignore
    const alText = scoopImages.map((element) => element.alt);
    expect(alText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
  });

  test("Display image from each topping option from server", async () => {
    const { findAllByRole } = render(<Options optionType="toppings" />, {
      wrapper: OrderDetailsProvider,
    });

    // Find images
    const toppingImages = await findAllByRole("img", { name: /topping$/i });
    expect(toppingImages).toHaveLength(2);

    // confirm alt text of images
    // @ts-ignore
    const alText = toppingImages.map((element) => element.alt);
    expect(alText).toEqual(["M&Ms topping", "Hot fudge topping"]);
  });
});
