import { TextField, Button, Grid, Collapse } from "@mui/material";
import React, { useState } from "react";

export const Details = () => {
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [paddress, setPaddress] = useState("");
  const [details, setDetails] = useState({});
  const handleSave = () => {
    setDetails(
      { fname, mname, lname, dob, email, mobile, address, paddress },
    );
    console.log(details);

  };
  const handleCancel = () => {
    setDetails({});
  };
  return (
    <React.Fragment>
      <h1> Enter Details</h1>
      <Grid container spacing={2} align="center">
        <Grid item xs={4}>
          <TextField
            onChange={(e) => setFname(e.target.value)}
            label="enter name"
            variant="outlined"
            fullWidth
          ></TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField
            onChange={(e) => setMname(e.target.value)}
            label="enter midName"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            onChange={(e) => setLname(e.target.value)}
            label="enter LastName"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            label="enter email"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            onChange={(e) => setMobile(e.target.value)}
            label="enter mob"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            onChange={(e) => setDob(e.target.value)}
            label="DOB"
            variant="outlined"
            fullWidth
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            onChange={(e) => setAddress(e.target.value)}
            label="Address"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            onChange={(e) => setPaddress(e.target.value)}
            label="Permenant Official"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}></Grid>

        <Grid item xs={3}>
          <Button
            onClick={handleSave}
            variant="contained"
            fullWidth
            sx={{ height: 55 }}
            color="success"
          >
            submit
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            onClick={handleCancel}
            variant="contained"
            fullWidth
            sx={{ height: 55 }}
            color="error"
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
      <br />
      <center>
        <h1>Your Details</h1>
        <table
          border={"2px"}
          style={{ borderCollapse: "collapse", backgroundColor: "skyblue" }}
        >
          <tr>
            <th>First name</th>
            <th>Middle name</th>
            <th>Last name</th>
            <th>D.O.B</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Address</th>
            <th>Official Address</th>
          </tr>
        
           <tr>
            <td>{details.fname}</td>
            <td>{details.mname}</td>
            <td>{details.lname}</td>
            <td>{details.dob}</td>
            <td>{details.mobile}</td>
            <td>{details.email}</td>
            <td>{details.address}</td>
            <td>{details.paddress}</td>
          </tr> 
        </table>
      </center>
    </React.Fragment>
  );
};
