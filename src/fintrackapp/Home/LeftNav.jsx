import { Button, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";

const LeftNav = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const result = await axios.get("http://localhost:3030/categories");
    setData(result.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      <Grid container spacing={3} align="center">
        {data.map((item) => (
          <Grid item xs={12}>
            <Button variant="contained" fullWidth  sx={{bgcolor:"pink", color:"navy"}}>
              {item.name}
            </Button>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default LeftNav;
