import React from "react";
import { Link } from "react-router-dom";
import { Grid, Card, CardContent, Button } from "@mui/material";

const Navbar = () => {
  return (
    <React.Fragment>
      <Card sx={{ bgcolor: "cadetblue" }}>
        <CardContent>
          <Grid container spacing={3} align="center">
            <Grid item xs={2}>
              <Card>
                <CardContent>
                  <Link to="/"> Home</Link>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card>
                <CardContent>
                  <Link to="/todo"> Todolist</Link>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card sx={{ bgcolor: "pink" }}>
                <CardContent>
                  <Link to="/counter"> counter</Link>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card>
                <CardContent>
                  <Link to="/api"> ApiData</Link>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card sx={{ bgcolor: "deeppink" }}>
                <CardContent>
                  <Link to="/turnary"> TurnaryOperator</Link>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card sx={{ bgcolor: "pink" }}>
                <CardContent>
                  <Link to="/calssComponent"> Class Component</Link>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card sx={{ bgcolor: "pink" }}>
                <CardContent>
                  <Link to="/calssTodo"> Class Todo</Link>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default Navbar;
