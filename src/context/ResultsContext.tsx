import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from "react";
import { getLocationByCity } from "../api";

type ParameterType = {
  id: number;
  value: number;
  name: string;
};

export type ResultType = {
  id: number;
  updatedAt: string;
  locationName: string;
  city: string;
  country: string;
  parameters: ParameterType[];
};

interface IResultsContext {
  results: ResultType[];
  addNewResult: (city: string) => Promise<void>;
  removeResult: (id: number) => void;
}

export const ResultsContext = createContext({} as IResultsContext);

interface IResultsProvider {
  children: React.ReactNode;
}

export const ResultsProvider = ({ children }: IResultsProvider) => {
  const [results, setResults] = useState<ResultType[]>([]);

  const addNewResult = useCallback(
    async (city: string) => {
      const result = await getLocationByCity(city);

      const resultExists = results.find((result) => result.city === city);

      if (resultExists) return;

      setResults((currState) => [...currState, result] as ResultType[]);
    },
    [results]
  );

  const removeResult = useCallback((id: number) => {
    setResults((currState) => currState.filter((result) => result.id !== id));
  }, []);

  const value = useMemo(() => ({ results, addNewResult, removeResult }), [
    results,
    addNewResult,
    removeResult
  ]);

  return (
    <ResultsContext.Provider value={value}>{children}</ResultsContext.Provider>
  );
};

export const useResultsContext = () => {
  const context = useContext(ResultsContext);
  if (context === undefined) {
    throw new Error(`useResultsContext must be used within a ResultsProvider`);
  }
  return context;
};
