import React from 'react'
import './Styles.css'
import { TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'

const SigninPage = () => {
    return (
        <div className='signin-card'>
            <div className="signin-card-body">
                <h2 className="signin-card-title">Signin to your PopX account</h2>
                <p className="signin-card-text">Lorem, ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <TextField
                    id="outlined-basic"
                    label="Email Address"
                    variant="outlined"
                    placeholder="Enter email address"
                    style={{ width: "300px", marginTop: "30px" }}
                />
                <TextField
                    id="outlined-basic"
                    label="Password"
                    variant='outlined'
                    placeholder='Password'
                    style={{ width: "300px", marginTop: "30px" }}
                />
                <Link to='/profilepage'>
                <button className='btn-3'>Login</button>
                </Link>
            </div>
        </div>
    )
}

export default SigninPage
