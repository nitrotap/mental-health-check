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
        paddingTop:theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            alignItems: 'center'
        }
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(6),
        [theme.breakpoints.down('sm')]: {
            marginBottom:theme.spacing(4),
        },
        '&:hover': {
            backgroundColor: '#f5f5f5',
            cursor: 'pointer',
            color: '#18344A',
        },
    },
    icon: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            fontSize: '40px !important',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '35px !important',
            marginRight: 0,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '30px !important',
            marginRight: 0,
        },
    },

    text: {
        fontSize: '1.5rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '1rem',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }, 
    },
}));

function Leftbar() {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <div className={classes.item}>
                <Home className={classes.icon}/>
                <Typography className={classes.text}>
                    Home
                </Typography>
            </div>
            <div className={classes.item}>
                <AccountCircleIcon className={classes.icon}/>
                <Typography className={classes.text}>
                    Dashboard
                </Typography>
            </div>
            <div className={classes.item}>
                <PsychologyIcon className={classes.icon}/>
                <Typography className={classes.text}>
                    Quiz
                </Typography>
            </div>
            <div className={classes.item}>
                <LoginIcon className={classes.icon}/>
                <Typography className={classes.text}>
                    Login
                </Typography>
            </div>
            <div className={classes.item}>
                <BorderColorIcon className={classes.icon}/>
                <Typography className={classes.text}>
                    Signup
                </Typography>
            </div>
        </Container>
    )
}

export default Leftbar;

