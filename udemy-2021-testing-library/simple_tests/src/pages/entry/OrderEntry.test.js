import { render, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { OrderDetailsProvider } from "../../context/OrderDetails";

import { server } from "../../mocks/server";
import OrderEntry from "./OrderEntry";

describe("<OrderEntry />", () => {
  test("Handle errors", async () => {
    server.resetHandlers(
      rest.get("*/scoops", (req, res, ctx) => {
        res(ctx.status(500));
      }),
      rest.get("*/toppings", (req, res, ctx) => {
        res(ctx.status(500));
      })
    );

    const { findAllByRole } = render(<OrderEntry />, {
      wrapper: OrderDetailsProvider,
    });

    await waitFor(async () => {
      const alert = await findAllByRole("alert", { name: "Alert" });
      expect(alert).toHaveLength(2);
    });
  });
});
