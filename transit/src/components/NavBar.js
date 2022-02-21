import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Links = styled(Link)`
  text-decoration: none;
  color: #101010;
  margin: 1% 3%;
  border: 1px solid black;
  padding: 1%;
`;

const NavDiv = styled.div`
  margin: auto;
  width: auto;
  text-align: center;
  display: flex;
`;
const NavTitle = styled.h1`
  margin: 1% 3%;
  width: 50%;
  align-items: flex-start;
`;

const LinksDiv = styled.div`
  width: 100%;
  margin: 2% 0;
  align-items: flex-end;
`;

export default function NavBar() {
  return (
    <NavDiv>
      <NavTitle>Real-time Departures</NavTitle>
      <LinksDiv>
        <Links to="/">By Route</Links>
        <Links to="/number">By Stop #</Links>
      </LinksDiv>
    </NavDiv>
  );
}
