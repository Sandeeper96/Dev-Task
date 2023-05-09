import React from 'react'
import './Styles.css'
import { FormControl, FormControlLabel, Radio, TextField, FormLabel, RadioGroup, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const AccountPage = () => {
  return (
    <div className='account-card'>
      <div className="account-card-body">
      <h2 className="account-card-title">Create your PopX account</h2>
      <TextField
                    required
                    id="outlined-basic"
                    label="Full Name"
                    variant='outlined'
                    defaultValue='Marry Doe'
                    style={{ width: "300px", marginTop: "40px" }}
                />
                <TextField
                    required
                    id="outlined-basic"
                    label="Phone Number"
                    variant='outlined'
                    defaultValue='Marry Doe'
                    style={{ width: "300px", marginTop: "40px"}}
                />
                <TextField
                    required
                    id="outlined-basic"
                    label="Email Address"
                    variant='outlined'
                    defaultValue='Marry Doe'
                    style={{ width: "300px", marginTop: "40px"}}
                />
                <TextField
                    required
                    id="outlined-basic"
                    label="Password"
                    variant='outlined'
                    defaultValue='Marry Doe'
                    style={{ width: "300px", marginTop: "40px" }}
                />
                <TextField
                    id="outlined-basic"
                    label="Company Name"
                    variant='outlined'
                    defaultValue='Marry Doe'
                    style={{ width: "300px", marginTop: "40px" }}
                />
                <FormControl style={{ position: "relative", left: "10px", top: "20px" }}>
                    <FormLabel required id="demo-row-radio-buttons-group-label" style={{ textAlign: "left", fontSize: "14px", fontWeight: "bold" }}>Are you an Agency?</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Yes" />
                        <FormControlLabel value="male" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                <Link to='/profilepage'>
                <Button variant="contained" style={{ backgroundColor: "#642AF5", color: "white", width: "250px", position: "relative", top: "30px"}}>Create Account</Button>
                </Link> 
      </div>
    </div>
  )
}

export default AccountPage
