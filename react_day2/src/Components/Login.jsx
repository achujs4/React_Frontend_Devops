import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <h1 style={{color:'red'}}>LOGIN PAGE</h1>
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <br></br><br></br>
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <br></br><br></br>
        <Button variant="contained">Submit</Button>
    </div>
  )
}

export default Login