import React from "react";
import styled from "styled-components";
import { useResultsContext } from "../../context/ResultsContext";

const StyledWrapper = styled.div`
  border: 1px solid lightgray;
  border-radius: 6px;
  margin-top: -6px;
  padding: 0.8rem 0;
  max-height: 10rem;
  overflow: auto;
  background: white;
  margin-bottom: 2rem;
`;

const StyledListBox = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: #333;
`;

const StyledListItem = styled.li`
  cursor: pointer;
  padding: 0.2rem 1rem;

  &:hover {
    background-color: #eaeaea;
  }
`;

interface AutocompleteOptionsProps {
  options: string[];
}

export default function AutocompleteOptions({
  options = []
}: AutocompleteOptionsProps) {
  const { addNewResult } = useResultsContext();

  const handleOnClickItem = (option: string) => () => {
    addNewResult(option);
  };

  return (
    <StyledWrapper>
      <StyledListBox role="listbox">
        {options.map((option) => {
          return (
            <StyledListItem
              key={option}
              role="option"
              aria-selected="false"
              onClick={handleOnClickItem(option)}
            >
              {option}
            </StyledListItem>
          );
        })}
      </StyledListBox>
    </StyledWrapper>
  );
}
