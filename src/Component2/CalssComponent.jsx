import { Button } from "@mui/material";
import React, { Component } from "react";

export default class CalssComponent extends Component {
  state = {
    count: 0,
    count2: 5,
    text: "hello",
  };
  handleAdd = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleAdd2 = () => {
    this.setState({ count2: this.state.count2 + 5 });
  };
  handleDec = () => {
    this.setState({
      count: this.state.count - 1,
      count2: this.state.count2 - 5,
      text: (this.state.text = "bye"),
    });
  };
  render() {
    return (
      <div>
        <h1> {this.state.text} </h1>
        <h1>count:- {this.state.count}</h1>
        <h1>count:- {this.state.count2}</h1>
        <Button variant="contained" onClick={this.handleAdd}>
          inc
        </Button>
        <Button variant="contained" onClick={this.handleAdd2}>
          inc1
        </Button>
        <Button variant="contained" onClick={this.handleDec}>
          dec
        </Button>
      </div>
    );
  }
}
