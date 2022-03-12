import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// import { setupServer } from "msw/node";
// import { rest } from "msw";
import "@testing-library/jest-dom";

import { cities } from "../_mocks";

import Autocomplete from "../components/Autocomplete";

// const server = setupServer(
//   rest.get("/v2/cities/", (req, res, ctx) => {
//     return res(ctx.json({ greeting: "hello there" }));
//   })
// );

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

describe("Autocomplete Component", () => {
  it("should display a search input", () => {
    render(<Autocomplete options={[]} />);

    expect(screen.getByRole("searchbox")).toBeInTheDocument();
  });

  it("updates value on user input", () => {
    render(<Autocomplete options={[]} />);

    userEvent.type(screen.getByRole("searchbox"), "Manchester");

    expect(screen.getByRole("searchbox")).toHaveValue("Manchester");
  });

  it('should display cities matching letter "A"', () => {
    render(<Autocomplete options={cities} />);

    userEvent.type(screen.getByRole("searchbox"), "A");

    const renderedResults = screen.getAllByRole("option");

    expect(renderedResults.map((item) => item.textContent)).toEqual([
      "Aberdeen",
      "Armagh",
      "Aston Hill"
    ]);
  });
});
