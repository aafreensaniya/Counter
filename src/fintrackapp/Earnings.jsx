import React from "react";
import Earnings1 from "./earnings/Earnings1";

import { CardContent, Card, Grid } from "@mui/material";
import DataList from "./earnings/DataList";

export const Earnings = () => {
  return (
    <React.Fragment>
      <Grid container spacing={3} align="center">
        <Card>
          <CardContent>
            {" "}
            <Earnings1 />
          </CardContent>
          <Card>
            <CardContent>
              <DataList />
            </CardContent>
          </Card>
        </Card>
      </Grid>
    </React.Fragment>
  );
};
