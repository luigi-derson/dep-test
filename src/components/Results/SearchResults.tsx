import { useResultsContext } from "../../context/ResultsContext";
import { CardsGrid } from "../Layout";
import CardItem from "./CardItem";

export default function SearchResults() {
  const { results } = useResultsContext();
  return (
    <CardsGrid>
      {results.map((result) => {
        return <CardItem key={result.id} {...result} />;
      })}
    </CardsGrid>
  );
}
