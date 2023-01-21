import React, { useState, useEffect } from "react";
import { Button, Grid } from "@mui/material";
import axios from "axios";
import DataListItem from "./DataListItem";

const DataList = () => {
  const [data, setData] = useState([]);
  const [ref, setRef] = useState(false);
  const getData = async () => {
    const result = await axios.get("http://localhost:3030/earnings");
    setData(result.data);
  };
  const handleRef = () => {
    setRef(!ref);
  };

  useEffect(() => {
    if (ref) {
      getData();
      setRef(false);
    }
  }, [ref]);
  useEffect(() => {
    getData();
  }, []);
  return (
    <React.Fragment>
      <Grid container spacing={3} align="center">
        {data.map((item) => (
          <DataListItem item={item} handleRef={handleRef} />
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default DataList;
