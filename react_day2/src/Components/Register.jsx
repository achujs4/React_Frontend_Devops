import { Box, TextField } from '@mui/material'
import React from 'react'
import axios from 'axios'
 
const Register =({user}) =>{
  const [form,setForm]=useState({
  myname:user.myname,
  email:user.email,
  phone:'',
  password:'',
  repass:'',
  address:''
  })

  const formValue=()=>{
    // console.log(from)
    axios.post('https//dummyjson.com/users/add',form).then((res)=>{
      // console.log(res)
      alert(res.data.id)
    })
  }

  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
        <h1>Registration Form</h1>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Full Name"
        
        />
        <TextField
          disabled
          id="outlined-required"
          label="Student Id"
        
        />
        </div>
        <div>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-required"
          label="Address"

        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
       
        />
      </div>
      <div>
        <div style={{textAlign:'center'}}>
          <Button varient="outlined" onClick={capValue}>Register</Button>
        </div>
      </div>
      
    </Box>
  );
}

export default Register