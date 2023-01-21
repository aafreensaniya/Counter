import React, { useState } from "react";
import { Card, Grid, TextField, Button } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import "./Common.css";

export const TodoList = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [isEdit, setIsedit] = useState(false);
  const handleAdd = () => {
    setList([...list, text]);
    setText("");
    setIsedit(false);
  };
  const handleDelete = (ind, item) => {
    const filtered = list.filter((elem, i) => i !== ind); // for delete
    setList(filtered);
    // const newList1 = list.filter((elem) =>elem == item); // for search
    console.log(filtered);
  };
  const handleDel2 = (item) => {
    const filter = list.filter((elem) => elem !== item);
    setList(filter);
  };
  const handleUp = (item) => {
    setText(item);
    setIsedit(true);
  };
  return (
    <React.Fragment>
      <Card
        style={{ backgroundColor: "rosybrown" ,width:500, color:"purple",position:'relative',left:500,top:100}}>
        <h1 className="he">TodoList</h1>
        <Grid container spacing={1} align="center">
          <Grid item xs={8}>
            <TextField
              value={text}
              variant="standard"
              label="Add Item"
              fullWidth
              onChange={(e) => setText(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              onClick={handleAdd}
              variant="contained"
              color="secondary"
              sx={{ height: 57, borderRadius: "15px" }}
              fullWidth
            >
              {isEdit ? "Update" : "Add Item"}
            </Button>
          </Grid>
        </Grid>
        {/* {console.log(list)} */}
        {list.map((item, ind) => {
          return (
            <div>
              <h2>
                {ind + 1}:
                <span style={{ color: "purple", marginRight: "200px" }}>
                  {item}
                </span>
                <button className="bt" onClick={() => handleDelete(ind)}>
                  <DeleteOutlineIcon />
                </button>
                {/* <button className="bt" onClick={() => handleDel2(item)}>
                  delete all same
                </button> */}
                <button onClick={() => handleUp(item)} className="bt">
                  <BorderColorOutlinedIcon />
                </button>
              </h2>
            </div>
          );
        })}
      </Card>
    </React.Fragment>
  );
};
