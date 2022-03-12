import { ResultType, useResultsContext } from "../../context/ResultsContext";

interface CardItemProps extends ResultType {}

export default function CardItem({
  id,
  locationName,
  updatedAt,
  city,
  country,
  parameters
}: CardItemProps) {
  const { removeResult } = useResultsContext();

  const handleOnClickRemove = () => {
    removeResult(id);
  };
  return (
    <div>
      <button type="button" onClick={handleOnClickRemove}>
        Remove
      </button>
      <time>{updatedAt}</time>
      <div>{locationName}</div>
      <div>
        in {city}, {country}
      </div>
      <div>
        <div>Values:</div>
        {parameters.map(({ name, value, id }) => (
          <span key={id}>
            {name.toUpperCase()}: {value},{" "}
          </span>
        ))}
      </div>
    </div>
  );
}
