import { render, screen } from "@testing-library/react";
import MockDate from "mockdate";
import "@testing-library/jest-dom";
import SearchResults from "../components/Results";
import { _card } from "../_mocks";
import { ResultsContext } from "../context/ResultsContext";

describe("Search Results Component", () => {
  beforeEach(() => {
    MockDate.set(new Date("2022-03-14T00:00:00.000Z"));
  });

  afterEach(() => {
    MockDate.reset();
  });

  const defaultCtxProps = {
    results: [],
    addNewResult: async () => {},
    removeResult: () => {}
  };

  it("should display an empty list by default", () => {
    render(
      <ResultsContext.Provider value={defaultCtxProps}>
        <SearchResults />
      </ResultsContext.Provider>
    );

    expect(screen.getByRole("list")).toBeEmptyDOMElement();
  });

  it("should display one card element in the list", () => {
    render(
      <ResultsContext.Provider value={{ ...defaultCtxProps, results: [_card] }}>
        <SearchResults />
      </ResultsContext.Provider>
    );

    const cards = screen.getAllByRole("listitem");
    expect(cards).toHaveLength(1);
  });

  it("should display a card with mock air quality information", () => {
    render(
      <ResultsContext.Provider
        value={{
          ...defaultCtxProps,
          results: [_card]
        }}
      >
        <SearchResults />
      </ResultsContext.Provider>
    );

    const updatedFromNow = screen.getByTestId("time-from-now");
    const locationName = screen.getByRole("heading", { level: 2 });
    const countryAndCity = screen.getByText(/city, country/i);
    const airQualityValues = screen.getByTestId("location-values");

    expect(updatedFromNow).toHaveTextContent(/updated a day ago/i);
    expect(locationName).toHaveTextContent("location");
    expect(countryAndCity).toBeInTheDocument();
    expect(airQualityValues).toHaveTextContent(/values: name: 5/i);
  });
});
