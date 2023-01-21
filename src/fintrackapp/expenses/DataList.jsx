import React, { useState, useEffect } from "react";
import DataListItem from "./DataListItem";
import { Grid } from "@mui/material";
import axios from "axios";

const DataList = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const result = await axios.get("http://localhost:3030/expenses");
    setData(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        {data.map((item) => (
          <DataListItem item={item} />
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default DataList;
