import React, { useMemo, useState } from "react";
import AutocompleteOptions from "./AutocompleteOptions";
import { filterListByQuery } from "../../utils/filter";
import styled from "styled-components";

const StyledSearchInput = styled.input`
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 6px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-right: 0.5rem;
  padding-left: 2rem;
  font-size: 1rem;
  font-family: inherit;

  &:focus {
    box-shadow: none;
    outline: none;
  }
`;

const StyledAutocomplete = styled.div`
  position: relative;
`;

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
    <StyledAutocomplete>
      <StyledSearchInput
        role="searchbox"
        type="text"
        name="city"
        placeholder="Enter city name..."
        value={query}
        onChange={handleOnChangeQuery}
        autoComplete="off"
      />

      {query && matchedOptions.length > 0 && (
        <AutocompleteOptions options={matchedOptions} />
      )}
    </StyledAutocomplete>
  );
}
