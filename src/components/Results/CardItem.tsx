import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import styled from "styled-components";
import { ResultType, useResultsContext } from "../../context/ResultsContext";

dayjs.extend(relativeTime);

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1rem;
  border: 1px solid lightgray;
  border-radius: 6px;
  font-size: 0.875rem;
  background: white;
  margin-top: 1rem;
`;

const StyledButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: transparent;
  appearance: none;
  border: none;
  padding: 1rem;
`;

const StyledTime = styled.time`
  text-transform: uppercase;
  color: #333;
  font-size: 0.7rem;
`;

const StyledLocation = styled.div`
  color: purple;
  font-size: 1rem;
  padding: 0.5rem 0;
`;

const StyledCountry = styled.p`
  color: gray;
  margin: 0;
  margin-bottom: 0.5rem;
`;

const StyledParameters = styled.div``;

const StyledValue = styled.span``;

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
    <StyledCard>
      <StyledButton type="button" onClick={handleOnClickRemove}>
        X
      </StyledButton>
      <StyledTime>updated {dayjs(updatedAt).from(dayjs())}</StyledTime>
      <StyledLocation>{locationName}</StyledLocation>
      <StyledCountry>
        in {city}, {country}
      </StyledCountry>
      <StyledParameters>
        <span>Values: </span>
        {parameters.map(({ name, value, id }, idx) => (
          <StyledValue key={id}>
            {name.toUpperCase()}: {value}
            {idx === parameters.length - 1 ? "" : ", "}
          </StyledValue>
        ))}
      </StyledParameters>
    </StyledCard>
  );
}
