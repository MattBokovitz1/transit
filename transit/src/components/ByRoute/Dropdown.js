import React from "react";
import styled from "styled-components";

const Select = styled.select`
  width: 20%;
  height: 8vh;
  margin: 1% 0;
`;

export default function Dropdown({ data, onChangeCallback, dropType }) {
  return (
    <div>
      <Select
        onChange={(e) => {
          const [lName, lID] = e.target.value.split(",");
          onChangeCallback(lName, lID);
        }}
      >
        <option>{dropType}</option>
        {data.map((l) => (
          <option key={l.keyID} value={[l.lName, l.lID]}>
            {l.lName}
          </option>
        ))}
      </Select>
    </div>
  );
}
