import { useResultsContext } from "../../context/ResultsContext";
import CardItem from "./CardItem";

export default function SearchResults() {
  const { results } = useResultsContext();
  return (
    <div>
      {results.map((result) => {
        return <CardItem key={result.id} {...result} />;
      })}
    </div>
  );
}
