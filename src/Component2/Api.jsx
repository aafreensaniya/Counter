import React, { useState, useEffect } from "react";
import { Card, Grid, CardContent, TextField } from "@mui/material";
import axios from "axios";
const Api = () => {
  const [data, setData] = useState([]);
  const[origData,setOriData]=useState([])
  const [text, setText] = useState();
  const getData = async () => {
    const result = await axios.get("https://gorest.co.in/public/v2/users");
    setData(result.data);
    setOriData(result.data)
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    const result = data.filter((item, index) => item.name.toUpperCase().includes === text.toUpperCase());
    setData(result)
  }, [text]);
  return (
    <React.Fragment>
    <TextField onChange={(e)=>setText(e.target.value)}/>
      <Grid container spacing={2} align="center">
        {data.map((item) => {
          return (
            <Grid item xs={3}>
              <Card sx={{ bgcolor: "pink" }}>
                <CardContent>
                  <h2>id :- {item.id} </h2>
                  <strong> name :- {item.name}</strong> <br />
                  <br />
                  <strong> email :- {item.email}</strong> <br />
                  <h5> Gender :- {item.gender}</h5>{" "}
                  <h3>status :- {item.status}</h3>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export default Api;
