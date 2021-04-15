import { render } from "@testing-library/react";

import Options from "./Options";

describe("<Options />", () => {
  test("Display image from each scoop option from server", async () => {
    const { findAllByRole } = render(<Options optionType="scoops" />);

    // Find images
    const scoopImages = await findAllByRole("img", { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    // confirm alt text of images
    // @ts-ignore
    const alText = scoopImages.map((element) => element.alt);
    expect(alText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
  });
});
