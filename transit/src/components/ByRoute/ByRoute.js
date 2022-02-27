import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Directions from "./Directions";
import Routes from "./Routes";
import Stops from "./Stops";
import axios from "axios";

const RouteSelect = styled.div`
  margin: 5% auto;
  width: auto;
  text-align: center;
`;

export default function ByRoute() {
  const [routes, setRoutes] = useState([]);
  const [direction, setDirection] = useState([]);
  const [routeValue, setRouteValue] = useState({
    lName: "Select Route",
    lID: null,
  });
  const [directionValue, setDirectionValue] = useState({
    lName: "Select Direction",
    lID: null,
  });
  const [stops, setStops] = useState([]);

  useEffect(() => {
    fetch(`https://svc.metrotransit.org/nextripv2/routes?format=json`)
      .then((response) => response.json())
      .then((data) => setRoutes(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (!routeValue.lID) return;
    axios
      .get(
        `https://svc.metrotransit.org/nextripv2/directions/${routeValue.lID}`
      )
      .then((res) => {
        setDirection(res.data);
      })
      .catch((err) => console.log(err));
  }, [routeValue]);

  useEffect(() => {
    if (!directionValue.lID) return;
    axios
      .get(
        `https://svc.metrotransit.org/nextripv2/stops/${routeValue.lID}/${directionValue.lID}`
      )
      .then((res) => {
        setStops(res.data);
      })
      .catch((err) => console.log(err));
  }, [directionValue]);

  return (
    <RouteSelect>
      <Routes
        routes={routes}
        setRouteValue={setRouteValue}
        routeValue={routeValue}
        setDirection={setDirection}
      />
      {Directions.length > 0 && (
        <Directions
          direction={direction}
          setDirectionValue={setDirectionValue}
          directionValue={directionValue}
        />
      )}
      {stops.length > 0 && <Stops stops={stops} />}
    </RouteSelect>
  );
}
