import React, { Fragment, useMemo, useState } from "react";
import AutocompleteOptions from "./AutocompleteOptions";
import { filterListByQuery } from "../../utils/filter";
import styled from "styled-components";

import { MdSearch } from "react-icons/md";

const StyledSearchInput = styled.input`
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 6px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-right: 0.5rem;
  padding-left: 2.5rem;
  font-size: 1rem;
  font-family: inherit;

  &:focus {
    box-shadow: none;
    outline: none;
  }
`;

const StyledIcon = styled.div`
  position: absolute;
  color: lightgray;
  font-size: 1.5rem;
  display: flex;
  width: 2.5rem;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const StyledAutocomplete = styled.div`
  position: relative;
  margin-top: 2.5rem;
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
    <Fragment>
      <StyledAutocomplete>
        <StyledIcon>
          <MdSearch />
        </StyledIcon>

        <StyledSearchInput
          role="searchbox"
          type="text"
          name="city"
          placeholder="Enter city name..."
          value={query}
          onChange={handleOnChangeQuery}
          autoComplete="off"
        />
      </StyledAutocomplete>
      {query && matchedOptions.length > 0 && (
        <AutocompleteOptions options={matchedOptions} />
      )}
    </Fragment>
  );
}
