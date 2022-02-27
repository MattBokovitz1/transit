import React from "react";
import Dropdown from "./Dropdown";

export default function Routes({ routes, routeValue, setRouteValue }) {
  const routesList = routes.map(({ route_label, route_id }) => ({
    lName: route_label,
    lID: route_id,
    keyID: `${route_label}-${route_id}`,
  }));

  const getRoute = (lName, lID) => {
    setRouteValue({ lName, lID });
  };
  return (
    <Dropdown
      data={routesList}
      displayName={routeValue.lName}
      onChangeCallback={getRoute}
      dropType="Select Route"
    />
  );
}
