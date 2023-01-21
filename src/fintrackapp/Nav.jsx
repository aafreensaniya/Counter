import React from "react";
import { Link } from "react-router-dom";
import { Grid, Card, CardContent, Button } from "@mui/material";

const Nav = () => {
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Grid container spacing={2} align="center">
            <Grid item xs={2}>
              <Link to="/home">
                <Button variant="contained" fullWidth color="warning">
                  Home
                </Button>
              </Link>
            </Grid>
            <Grid item xs={2}>
              <Link to="/dash">
                <Button variant="contained" fullWidth color="warning">
                  DashBoard
                </Button>
              </Link>
            </Grid>
            <Grid item xs={2}>
              <Link to="/earn">
                <Button variant="contained" fullWidth color="warning">
                  Earnings
                </Button>
              </Link>
            </Grid>
            <Grid item xs={2}>
              <Link to="/expenses">
                <Button variant="contained" fullWidth color="warning">
                  Expenses
                </Button>
              </Link>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default Nav;
