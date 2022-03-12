import React, { useMemo, useState } from "react";
import AutocompleteOptions from "./AutocompleteOptions";
import { filterListByQuery } from "../../utils/filter";

interface SearchFormProps {
  options: string[];
}

export default function SearchForm({ options = [] }: SearchFormProps) {
  const [query, setQuery] = useState("");

  const handleOnChangeQuery = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setQuery(event.target.value);
  };

  const matchedOptions = useMemo(() => filterListByQuery(options, query), [
    query,
    options
  ]);

  return (
    <div>
      <input
        role="searchbox"
        type="search"
        name="city"
        placeholder="Enter city name..."
        value={query}
        onChange={handleOnChangeQuery}
      />

      {query && <AutocompleteOptions options={matchedOptions} />}
    </div>
  );
}
