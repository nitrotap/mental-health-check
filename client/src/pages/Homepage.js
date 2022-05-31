import React from 'react';
//mui
import { Container, makeStyles, Typography, CardActions, Box, CardContent, CardMedia } from '@material-ui/core';
import Button from '@mui/material/Button';
import jumbo from '../assets/images/jumbo.jpg';

//routes
import { Link } from 'react-router-dom'
import Quiz from './Quiz';
import Signup from './Signup';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: '#18344A',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        padding: '0, 10px',
    },
    title: {
        fontSize: '4rem',
        textAlign: 'center',
        color: 'white',
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            fontSize: '2rem',
        },
    },
    text: {
        fontSize: '1.3rem',
        textAlign: 'center',
        color: '#f5f5f5',
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            fontSize: '1rem',
        },
    },
    hero: {
        width: '50%',
        marginTop: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            width: '75%',
        },
    },
    img: {
        aspectRatio: 4 / 5,
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    card: {
        backgroundColor: '#255070',
        display: 'flex',
        flexDirection: 'column',
    },
    cardButtons: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#255070',
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },
    cardTitle: {
        color: '#f5f5f5',
        fontSize: '2.5rem',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.5rem',
        },
    },
    cardText: {
        fontSize: '1.3rem',
        textAlign: 'center',
        color: 'white',
        [theme.breakpoints.down('md')]: {
            fontSize: '1rem',
        },
    },
    button: {
        backgroundColor: '#18344A',
        padding: '15px',
        fontSize: '1rem',
    },
    buttonTitle: {
        color: 'white'
    }
}));

function Homepage() {
    const classes = useStyles();
    return (
        
        <Container className={classes.container}>
            <Typography className={classes.title}>
                Take the First Step to Better Mental Health
            </Typography>
            <Typography className={classes.text} variant='body1' >
                Mental Health Check takes a simple quiz app format, using questions from mental illness screenings, to create a new quiz that focuses on co-morbidity by combining screening questions. Instead of screening for a diagnosis, Mental Health Check helps patients by using those screening questions to point the user to the applicable resources.
            </Typography>
            <Box className={classes.hero}>
                <CardMedia className={classes.img}
                    component="img"
                    height="300"
                    image={jumbo}
                    alt="therapy session"
                />
                <CardContent className={classes.card}>
                    <Typography className={classes.cardTitle} gutterBottom variant="h5" component="div">
                        Take the Mental Health Check
                    </Typography>
                    <Typography className={classes.cardText}>
                        Select from our question categories and begin taking your customized mental health check quiz!
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardButtons}>
                    {/* change buttons to reactroutes */}
                    <Link to = '/quiz'>
                        <Button className={classes.button} >
                            <h5 className={classes.buttonTitle}>Take the quiz</h5>
                        </Button>
                    </Link>
                    <Link to = '/signup'>
                        <Button className={classes.button} >
                            <h5 className={classes.buttonTitle}>Create An Account</h5>
                        </Button>
                    </Link>
                </CardActions>
            </Box>
        </Container>
    )
}

export default Homepage;
