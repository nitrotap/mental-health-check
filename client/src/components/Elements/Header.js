/* includes header component with navigation 
todo: Links to Dashboard, Quiz, Login/Logout
Used: site-wide
depends on: Auth/ if user is in context, else send to /login page

assigned to:
*/

import React from 'react';
//mui component
import {Typography} from '@material-ui/core'
//css
import '../CSS/header.css'

const Header = () => {
    return (
    <>
        <header>
            <Typography variant="h1">
                Mental Health Check
            </Typography>
        </header>
        
        {/* <header>
            <ul className = "nav-tabs">
                <li className = "nav-home" id="nav-home">
                    <a className = "nav-link" href = "/">Home</a>
                </li>
                <li className = "nav-item">
                    <a className = "nav-link" href = "/dashboard">Dashboard</a>
                </li>
                <li className = "nav-item">
                    <a className = "nav-link" href = "/login">Login</a>
                </li>
                <li className = "nav-item">
                    <a className = "nav-link" href = "/signup">Signup</a>
                </li>
            </ul>
        </header> */}
    </>
    )
}

export default Header;