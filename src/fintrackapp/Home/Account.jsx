import React, { useState, useEffect } from "react";
import { Button, TextField, Grid, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const [curr, setCurr] = useState({});
  const [elig, setElig] = useState(0);
  const [app, setApp] = useState(0);
  const [outs, setOuts] = useState(0);
  const [tobepaid, setToBePaid] = useState(0);
  const Navigate=useNavigate()
  console.log(curr);

  const handleApp = async() => {
    const payload = {
      ...curr,
      EligAmnt: elig,
      AppAmount: app,
      Outstanding: outs,
      ToBePaid: tobepaid,
    };
   await localStorage.setItem("expclaim", JSON.stringify(payload));
    Navigate("/dash")
  };
  const handleReject = () => {
    localStorage.removeItem("expclaim");
  };

  useEffect(() => {
    const currData = localStorage.getItem("expclaim");
    currData && setCurr(JSON.parse(currData));
  }, []);
  useEffect(() => {
    setToBePaid(app - outs);
  }, [app, outs]);
  return (
    <React.Fragment>
      {curr.amnt && (
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Card sx={{ bgcolor: "lightgrey" }}>
              <CardContent>{curr.amnt}</CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ bgcolor: "lightgrey" }}>
              <CardContent>{curr.empID}</CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <TextField
              variant="outlined"
              label="Eligible Amount"
              onChange={(e) => setElig(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              variant="outlined"
              onChange={(e) => setApp(e.target.value)}
              fullWidth
              label="Approved Amount"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              variant="outlined"
              fullWidth
              onChange={(e) => setOuts(e.target.value)}
              label="Outstanding"
            />
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ bgcolor: "lightgrey" }}>
              <CardContent>To be paid:{tobepaid}</CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              fullWidth
              color="success"
              sx={{ height: 57 }}
              onClick={handleApp}
            >
              Approve
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              fullWidth
              color="error"
              onClick={handleReject}
              sx={{ height: 57 }}
            >
              Reject
            </Button>
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
};

export default Account;
