import React from 'react'
import { Button } from '@mui/material';
export const Dec = ({Decr}) => {
  return (
    <React.Fragment>
      <Button onClick={Decr}>Decrese</Button>
    </React.Fragment>
  );
}
