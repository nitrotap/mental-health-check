import React from 'react';
//mui component
import {Container, makeStyles, Typography} from '@material-ui/core';
import {Home} from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LoginIcon from '@mui/icons-material/Login';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: '#255070',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '1.5rem',
        width: '100%',
        padding: '10px 0',
        '&:hover': {
            backgroundColor: '#f5f5f5',
            cursor: 'pointer',
            color: '#18344A',
        },
    },
    icon: {
        marginRight: '10px',
        fontSize: '2rem',
    }
}));

function Leftbar() {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <div className={classes.item}>
                <Home className={classes.icon}/>
                <Typography className={classes.item}>
                    Home
                </Typography>
            </div>
            <div className={classes.item}>
                <AccountCircleIcon className={classes.icon}/>
                <Typography className={classes.item}>
                    Dashboard
                </Typography>
            </div>
            <div className={classes.item}>
                <PsychologyIcon className={classes.icon}/>
                <Typography className={classes.item}>
                    Quiz
                </Typography>
            </div>
            <div className={classes.item}>
                <LoginIcon className={classes.icon}/>
                <Typography className={classes.item}>
                    Login
                </Typography>
            </div>
            <div className={classes.item}>
                <BorderColorIcon className={classes.icon}/>
                <Typography className={classes.item}>
                    Signup
                </Typography>
            </div>
        </Container>
    )
}

export default Leftbar;

