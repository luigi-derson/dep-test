import React from "react";
import { useResultsContext } from "../../context/ResultsContext";

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
    <div>
      <ul role="listbox">
        {options.map((option) => {
          return (
            <li
              key={option}
              role="option"
              aria-selected="false"
              onClick={handleOnClickItem(option)}
            >
              {option}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
