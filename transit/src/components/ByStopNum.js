import React, { useState } from "react";
import styled from "styled-components";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import StopTable from "./StopTable";

const StopNum = styled.div`
  margin: 10% auto;
  width: auto;
  text-align: center;
`;

const SearchInstructions = styled.h3`
  margin: auto;
  padding: 5%;
`;

export default function ByStopNum() {
  const [stopNum, setStopNum] = useState("");
  const [data, setData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const onSearch = () => {
    fetch(`https://svc.metrotransit.org/nextripv2/${stopNum}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status !== 400) {
          setNotFound(false);
          setData(data);
        } else {
          setNotFound(true);
          console.log("Error");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <StopNum>
      <Input
        placeholder="Enter Stop"
        onChange={(event) => setStopNum(event.target.value)}
        value={stopNum}
        onKeyDown={onKeyDown}
        style={{ width: 200 }}
      />
      <Button type="primary" icon={<SearchOutlined />} onClick={onSearch}>
        Search Bus Stop
      </Button>
      {notFound ? (
        <SearchInstructions>Please search a valid Bus Stop</SearchInstructions>
      ) : (
        <StopTable data={data} />
      )}
    </StopNum>
  );
}
