import { title, firstLine, secondLine } from "./_mocks";
import { ResultsProvider } from "./context/ResultsContext";
import Autocomplete from "./components/Autocomplete";
import SearchResults from "./components/Results";
import { GlobalStyle, Container, Title, Text } from "./components/Layout";
import useCities from "./hooks/useCities";

export default function App() {
  const cities = useCities();

  return (
    <Container>
      <GlobalStyle />

      <Title>{title}</Title>
      <Text>{firstLine}</Text>
      <Text>{secondLine}</Text>

      <ResultsProvider>
        <Autocomplete options={cities} />

        <SearchResults />
      </ResultsProvider>
    </Container>
  );
}
