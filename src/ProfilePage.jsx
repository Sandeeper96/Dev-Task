import React from 'react'
import './Styles.css'
import { Typography } from '@material-ui/core'
import image from './images/Ellipse 114@2x.png'
import camera from './images/Group 1585.svg'

const ProfilePage = () => {
    return (
        <div className='profile-card'>
            <div className="profile-card-body">
                <Typography variant='h5' style={{ backgroundColor: "white", textAlign: "left", position: "relative", left: "20px" }}>Account Setings</Typography>
                <div className="image">
                    <img src={image} alt="img" />
                    <img src={camera} alt="camera" style={{ position: "relative", bottom: "50px", left: "125px" }} />
                    <Typography variant='h6' style={{ position: "relative", left: "171px", bottom: "150px", width: "95px", fontWeight: "bold", fontSize: "15px", color: "#1D2226" }}>Marry Doe</Typography>
                    <Typography variant='h6' style={{ position: "relative", left: "180px", bottom: "150px", width: "95px", fontWeight: "medium", fontSize: "12px", color: "#1D2226" }}>Marry@Gmail.Com</Typography>
                    <Typography variant='h6' style={{ width: "300px", fontSize: "15px", textAlign: "left", color: "#1D2226" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus ut aut asperiores.</Typography>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage