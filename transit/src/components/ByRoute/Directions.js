import React from "react";
import Dropdown from "./Dropdown";

export default function Directions({
  directionValue,
  direction,
  setDirectionValue,
}) {
  const routesList = direction.map(({ direction_name, direction_id }) => ({
    lName: direction_name,
    lID: direction_id,
    keyID: `${direction_name}-${direction_id}`,
  }));

  const getStops = (lName, lID) => {
    setDirectionValue({ lName, lID });
  };
  return (
    <Dropdown
      data={routesList}
      displayName={directionValue.lName}
      dropType="Select Direction"
      onChangeCallback={getStops}
    />
  );
}
