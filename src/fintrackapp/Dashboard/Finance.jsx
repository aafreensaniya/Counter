import React, { useState, useEffect } from "react";
import { Grid, Button, TextField } from "@mui/material";
import {  useNavigate } from "react-router-dom";

const Finance = () => {
  const [curr, setCurr] = useState({});
  const [paidAmnt, setPaidAmnt] = useState(0);
  const [balance, setBalance] = useState(0);
  const navigate = useNavigate();

  const handleSub = () => {
    const payload = {
      ...curr,
      paidAmnt,
      balance,
    };
    localStorage.setItem("expclaim", JSON.stringify(payload));
    navigate("/");
  };

  const handleReject = () => {
    localStorage.removeItem("expclaim");
    navigate("/")
  };

  useEffect(() => {
    const currData = localStorage.getItem("expclaim");
    currData && setCurr(JSON.parse(currData));
  }, []);
  useEffect(() => {
    setBalance(curr.ToBePaid - paidAmnt);
  }, [paidAmnt]);
  return (
    <React.Fragment>
      <Grid container spacing={3} align="center">
        <Grid item xs={2}>
          {curr.empID}
        </Grid>
        <Grid item xs={2}>
          {curr.amnt}
        </Grid>
        <Grid item xs={2}>
          {curr.EligAmnt}
        </Grid>
        <Grid item xs={2}>
          {curr.AppAmount}
        </Grid>
        <Grid item xs={2}>
          {curr.Outstanding}
        </Grid>
        <Grid item xs={2}>
          {curr.ToBePaid}
        </Grid>
        <Grid item xs={2}>
          <TextField
            variant="outlined"
            onChange={(e) => setPaidAmnt(e.target.value)}
            fullWidth
            label="paid amount"
          />
        </Grid>
        <Grid item xs={2}>
          {balance}
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="success" onClick={handleSub}>
            Submit
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="error" onClick={handleReject}>
            Reject
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Finance;
