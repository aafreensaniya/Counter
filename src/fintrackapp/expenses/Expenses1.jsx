import { Button, TextField, Grid, Alert } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Select from "react-select";

export const Expenses1 = () => {
  const [item, setItem] = useState("");
  const [cat, setCat] = useState(0);
  const [amnt, setAmnt] = useState(0);
  const [msg, setMsg] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [option, setOption] = useState([
    { value: 1, label: "green" },
    { value: 2, label: "blue" },
    { value: 3, label: "purple" },
  ]);
  console.log(option);

  const handleSubmit = async () => {
    const payload = {
      item,
      cat,
      amnt,
    };
    const result = await axios.post("http://localhost:3030/expenses", payload);
    setMsg(result.data);
  };
  const getData = async () => {
    const result = await axios.get("http://localhost:3030/catdd");
    setOption(result.data);
    console.log(result.data);
  };
  const resetData = () => {
    setAmnt("");
    setItem("");
    setCat(0);
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (msg !== "") {
      setIsShow(true);
      setTimeout(() => {
        setMsg("");
      }, 5000);
    } else {
      setIsShow(false);
    }
  }, [msg]);
  return (
    <React.Fragment>
      <Grid container spacing={3} align="center" sx={{ marginTop: 3 }}>
        <Grid item xs={3}>
          <Select options={option} onChange={(opt) => setCat(opt.value)} />
        </Grid>
        <Grid item xs={3}>
          <TextField
            value={amnt}
            variant="outlined"
            fullWidth
            type="number"
            label="amount"
            onChange={(e) => setAmnt(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            value={item}
            variant="outlined"
            fullWidth
            label="item"
            onChange={(e) => setItem(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            disabled={item.length < 3 || Number(amnt < 10)}
            variant="contained"
            fullWidth
            onClick={handleSubmit}
            sx={{ bgcolor: "navy", color: "whitesmoke", height: 55 }}
          >
            submit
          </Button>
        </Grid>
        <Grid item xs={12}>
          {isShow && <Alert severity="success">{msg}</Alert>}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
