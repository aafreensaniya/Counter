import { Button } from '@mui/material'
import React from 'react'

export const Inc = ({Incr}) => {
  return (
    <React.Fragment>
   <Button onClick={Incr}>Increase</Button>
    </React.Fragment>
  )
}
