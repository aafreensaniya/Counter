import { CardContent,Card } from "@mui/material";
import React from "react";
import DataList from "./expenses/DataList";
import { Expenses1 } from "./expenses/Expenses1";

export const Expenses = () => {
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Expenses1 />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <DataList />
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
