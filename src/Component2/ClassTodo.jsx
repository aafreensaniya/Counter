import { Button, Card, TextField, CardContent, Grid } from "@mui/material";
import React, { Component } from "react";

export default class ClassTodo extends Component {
  state = {
    text: "",
    list: [],
  };
  handleAdd = () => {
    this.setState({ list: [...this.state.list, this.state.text] });
    console.log(this.state.list);
  };
  handleDelete = (index) => {
    const result = this.state.list.filter((item, i) => i !== index);
    this.setState({ list: result });
  };
  render() {
    return (
      <React.Fragment>
        ClassTodo
        <Grid container spacing={2} align="center">
          <Grid item xs={8}>
            <TextField
              onChange={(e) => this.setState({ text: e.target.value })}
              variant="outlined"
              fullWidth
              label="Add Item"
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              fullWidth
              onClick={this.handleAdd}
              sx={{ height: 55, bgcolor: "hotpink" }}
            >
              Add Item
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Card sx={{ bgcolor: "pink" }}>
              <CardContent>
                {this.state.list.map((item, index) => {
                  return (
                    <div>
                      <Grid container spacing={2}>
                        <Grid item xs={8}>
                          <h3>
                            {index + 1}:-{item}
                          </h3>
                        </Grid>
                        {console.log(item)}
                        <Grid item xs={2}>
                          <Button
                            variant="contained"
                            fullWidth
                            onClick={() => this.handleDelete(index)}
                            sx={{ height: 55, bgcolor: "navy" }}
                          >
                            Delete
                          </Button>
                        </Grid>
                      </Grid>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
