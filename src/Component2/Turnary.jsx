import { Grid, TextField, Button, Card, CardContent } from "@mui/material";
import React from "react";
import { useState } from "react";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";

const Turnary = () => {
  const [text, setText] = useState("");
  const [display, setDisplay] = useState("");
  const [color, setColor] = useState("purple");
  const [isLogin, setIsLogin] = useState(false);
  const handleShow = () => {
    setDisplay(text);
    if (text == "male") {
      //    <Card sx={{ bgcolor: "green" }}>
      setColor("red");
      //      <CardContent></CardContent>
      //    </Card>;
    } else if (text == "female") {
      //    <Card sx={{ bgcolor: "purple" }}>
      //      <CardContent></CardContent>
      //    </Card>;
      setColor("green");
    } else {
      //    <Card sx={{ bgcolor: "chocolate" }}>
      //      <CardContent></CardContent>
      //    </Card>;
      setColor("chocolate");
    }
  };
  return (
    <React.Fragment>
      <h1> Turnary Operator</h1>
      <Grid container spacing={2} align="center">
        <Grid item xs={3}>
          <TextField
            variant="outlined"
            fullWidth
            onChange={(e) => setText(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          {/* <Button variant="contained" onClick={()=>setDisplay(text)}  fullWidth sx={{ height: 55 }}> */}
          <Button
            variant="contained"
            onClick={handleShow}
            fullWidth
            sx={{ height: 55 }}
          >
            Show
          </Button>
        </Grid>
        <Grid item xs={3}>
          {/* <Card>
            <CardContent>{display}</CardContent>
            {display == "male" ? (
              <ManIcon style={{ height: 50 }} />
            ) : (
              <WomanIcon />
            )}
          </Card> */}
          <Card sx={{ bgcolor: color }}>
            <CardContent></CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <img src="" />
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Button
            variant="contained"
            fullWidth
            color="warning"
            onClick={() => setIsLogin(!isLogin)}
          >
            LogOut
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent sx={{ display: isLogin ? "block" : "none" }}>
              <h1>User</h1>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Turnary;
