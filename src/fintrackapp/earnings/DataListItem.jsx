import React, { useState } from "react";
import { Button, CardContent, Grid, Card } from "@mui/material";
import axios from "axios";

const DataListItem = ({ item, handleRef }) => {
  const handleDelete = async (_id) => {
    const payload = { _id };
    await axios.post("http://localhost:3030/delearnings", payload);
    handleRef();
  };

  return (
    <React.Fragment>
      <Grid item xs={3} sx={{ marginTop: "2px solid grey" }}>
        {item.item}
      </Grid>
      <Grid item xs={2} sx={{ marginTop: "2px solid grey" }}>
        {item.cat}
      </Grid>
      <Grid item xs={3} sx={{ marginTop: "2px solid grey" }}>
        {item.amnt}
      </Grid>
      <Grid item xs={2}>
        <Button variant="contained">edit</Button>
      </Grid>
      <Grid item xs={2}>
        <Button
          variant="contained"
          fullWidth
          color="error"
          onClick={() => handleDelete(item._id)}
        >
          delete
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default DataListItem;
