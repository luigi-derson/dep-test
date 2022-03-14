import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import App from "../App";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get(
    "https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/cities",
    (req, res, ctx) => {
      return res(
        ctx.json({
          results: [
            { city: "Aberdeen" },
            { city: "London" },
            { city: "Manchester" }
          ]
        })
      );
    }
  ),

  rest.get(
    "https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/locations",
    (req, res, ctx) => {
      return res(
        ctx.json({
          results: [
            {
              id: 1,
              city: "Manchester",
              name: "Manchester Picadilly",
              lastUpdated: "2022-03-14T15:00:00+00:00",
              parameters: [{ id: 1, parameter: "PM10", lastValue: 10 }]
            }
          ]
        })
      );
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("App Component", () => {
  it("should add new result to the list on click autocomplete suggestion", async () => {
    render(<App />);
    userEvent.type(screen.getByRole("searchbox"), "manchester");
    await waitFor(() => userEvent.click(screen.getByRole("option")));
    await waitFor(() => screen.getByRole("option"));

    expect(screen.getAllByRole("listitem")).toHaveLength(1);
  });

  it("should remove element from the list on click CTA card button", async () => {
    render(<App />);
    userEvent.type(screen.getByRole("searchbox"), "manchester");
    await waitFor(() => userEvent.click(screen.getByRole("option")));

    await waitFor(() => screen.getByRole("button"));

    userEvent.click(screen.getByRole("button"));

    expect(screen.getByRole("list")).toBeEmptyDOMElement();
  });
});
