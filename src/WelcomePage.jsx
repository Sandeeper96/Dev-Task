import React from 'react'
import './Styles.css'
import { Link } from 'react-router-dom'

const WelcomePage = () => {
    return (
        <div>
            <div className="welcome-card">
                <div className="welcome-card-body">
                    <h2 className="welcome-card-title">Welcome to PopX</h2>
                    <p className="welcome-card-text">Lorem, ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <Link to='/accountpage'>
                    <button className='btn-1'>Create Account</button>
                    </Link>
                    <Link to="/signinpage">
                    <button className='btn-2'>Already Registered? Login</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default WelcomePage
