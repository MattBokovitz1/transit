import React from "react";
import styled from "styled-components";

const Table = styled.table`
  margin: 3% auto;
`;

const TableHeader = styled.th`
  font-size: 1.5rem;
  margin: 0 0 2% 0;
`;

const TableText = styled.td`
  font-size: 1.2rem;
`;

export default function Stops({ stops }) {
  return (
    <Table>
      <TableHeader>Stops Along Your Route</TableHeader>
      <tbody>
        {stops.map((stop) => (
          <tr key={stop.place_code}>
            <TableText>{stop.description}</TableText>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
