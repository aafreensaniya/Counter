import { Grid, Card, CardContent } from "@mui/material";
import React from "react";
import HomeContent from "./Home/HomeContent";
import LeftNav from "./Home/LeftNav";

const Home = () => {
  return (
    <React.Fragment>
      <Grid container spacing={3} align="center">
        <Grid item xs={3}>
          <Card sx={{marginTop:3}}>
            <CardContent>
              <LeftNav />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={9}>
          <HomeContent />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Home;
