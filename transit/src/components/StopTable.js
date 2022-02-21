import React from "react";
import styled from "styled-components";
import TripDetails from "./TripDetails";

const StopCard = styled.div`
  margin: 3% auto;
  padding: 1% 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #f5f5f4;
  width: 75%;
`;
const SearchInstructions = styled.h3`
  margin: auto;
  padding: 5%;
`;

const StopName = styled.h2`
  font-size: 1.5rem;
  color: #626462;
`;
const TripDiv = styled.div`
  width: auto;
  margin: auto 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const Header = styled.div`
  margin: auto 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background: #f5c71a;
`;

const StopTable = (props) => {
  const { data } = props;
  return (
    <div>
      {data ? (
        <StopCard>
          <TripDiv>
            <StopName>{data.stops[0].description}</StopName>
            <StopName>Stop #: {data.stops[0].stop_id}</StopName>
          </TripDiv>
          <Header>
            <StopName>Departs</StopName>
            <StopName>Destination</StopName>
            <StopName>Route</StopName>
          </Header>
          {data.departures.slice(0, 3).map((trip) => {
            return <TripDetails key={trip.id} trip={trip} />;
          })}
        </StopCard>
      ) : (
        <SearchInstructions>Search your stop for route info</SearchInstructions>
      )}
    </div>
  );
};

export default StopTable;
