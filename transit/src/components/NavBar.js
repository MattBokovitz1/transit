import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Links = styled(Link)`
  text-decoration: none;
  color: #101010;
  margin: 0 3%;
`;

const NavDiv = styled.div`
  margin: auto;
  width: auto;
  text-align: center;
`;

export default function NavBar() {
  return (
    <NavDiv>
      <h1>Real-time Departures</h1>
      <Links to="/">By Route</Links>
      <Links to="/number">By Stop Number</Links>
    </NavDiv>
  );
}
