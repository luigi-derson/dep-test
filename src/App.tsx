import "./styles.css";
import { title, description } from "./_mocks";
import { ResultsProvider } from "./context/ResultsContext";
import Autocomplete from "./components/Autocomplete";
import SearchResults from "./components/Results";
import useCities from "./hooks/useCities";

export default function App() {
  const cities = useCities();

  return (
    <div className="App">
      <h1>{title}</h1>
      <p>{description}</p>

      <ResultsProvider>
        <div>
          <Autocomplete options={cities} />
        </div>

        <div>
          <SearchResults />
        </div>
      </ResultsProvider>
    </div>
  );
}
