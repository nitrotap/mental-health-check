/* includes header component with navigation 
todo: Links to Dashboard, Quiz, Login/Logout
Used: site-wide
depends on: Auth/ if user is in context, else send to /login page

assigned to:
*/

import React from 'react';
//mui component
import {Typography, makeStyles, AppBar, Toolbar} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    logoLg: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    logoSm: {
        display: 'block',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
}));

const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h6" className={classes.logoLg}>
                    Mental Health Check
                </Typography>
                <Typography variant="h6" className={classes.logoSm}>
                    MHC
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;