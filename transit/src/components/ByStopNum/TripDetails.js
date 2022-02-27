import React from "react";
import styled from "styled-components";

const TripDiv = styled.div`
  width: auto;
  margin: auto 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const StopInfo = styled.p`
  color: #626462;
  font-size: 1.2rem;
`;

const TripDetails = ({ trip }) => {
  return (
    <TripDiv>
      <StopInfo>{trip.departure_text}</StopInfo>
      <StopInfo>{trip.description}</StopInfo>
      <StopInfo>{trip.route_short_name}</StopInfo>
    </TripDiv>
  );
};

export default TripDetails;
