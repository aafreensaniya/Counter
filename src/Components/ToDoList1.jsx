import { Grid,Card,Button,TextField } from '@mui/material'
import React from 'react'

const ToDoList1 = () => {
    const[text,setText]=("")
    const[list,setList]=([])
    // const[edit,setEdit]=(false)
    const handleAdd=()=>{
        setList([...list,text])
        setText("")
        console.log(list)
    }

  return (
    <div>
      <Grid container spacing={3} align="center" sx={{ marginTop: 10 }}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Card>
            <h1> ToDo List</h1>
            <Grid container spacing={3} align="center" sx={{ marginTop: 3 }}>
              <Grid item xs={1}></Grid>
              <Grid item xs={8}>
                <TextField onChange={(e)=>e.target.value}
                  variant="standard"
                  label="Add Items"
                  color="secondary"
                  fullWidth
                />
              </Grid>
              <Grid item xs={2}>
                <Button onClick={handleAdd}
                  fullWidth
                  variant="contained"
                  sx={{ height: 57, bgcolor: "deeppink", borderRadius: "25px" }}
                >
                 Add Item
                </Button>
              </Grid>
            </Grid>
        
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default ToDoList1