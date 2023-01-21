import React from 'react'
import { Button,Grid } from '@mui/material'

const DataListItem = ({item}) => {

  return (
    <React.Fragment>
      <Grid item xs={3}>
        {" "}
        {item.item}
      </Grid>
      <Grid item xs={2}>
        {item.amnt}
      </Grid>
      <Grid item xs={3}>
        {item.cat}
      </Grid>
      <Grid item xs={2}>
        <Button variant="contained" color="success" fullWidth>
          edit
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Button variant="contained" color="error" fullWidth>
          delete
        </Button>
      </Grid>
    </React.Fragment>
  );
}

export default DataListItem