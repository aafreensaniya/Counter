import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

const Claim = () => {
  const [empID, setEmpId] = useState(0);
  const [amnt, setAmnt] = useState(0);
  const handleSubmit = () => {
    const payload = {
      empID,
      amnt,
    };
    localStorage.setItem("expclaim", JSON.stringify(payload));
  };

  return (
    <React.Fragment>
      <Grid container spacing={2} align="center">
        <Grid item xs={1}></Grid>
        <Grid item xs={4}>
          <TextField
            variant="outlined"
            fullWidth
            label="Employee ID"
            onChange={(e) => setEmpId(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant="outlined"
            fullWidth
            label="Amount"
            onChange={(e) => setAmnt(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            onClick={handleSubmit}
            color="success"
            sx={{ height: 55 }}
            fullWidth
          >
            {" "}
            Submit
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Claim;
