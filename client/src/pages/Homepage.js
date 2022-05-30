import React from 'react';
//mui
import { Container, makeStyles, Typography, Card, CardActions, CardContent, Button, CardMedia } from '@material-ui/core';
import jumbo from '../assets/images/jumbo.jpg';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: '#18344A',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        margin: 0,
        padding: 0,
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
        color: '#f5f5f5',
        [theme.breakpoints.down('md')]: {
            fontSize: '1rem',
        },
    },
    button: {
        color: '#4798D6',
        fontSize: '1rem',
        width: '100%',
    },
    h1: {
        fontSize: '9rem',
    },
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
            <Card className={classes.hero}>
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
                <CardActions className={classes.card}>
                    <Button className={classes.button} size="large">Take the Quiz</Button>
                    <Button className={classes.button} size="large">Learn More</Button>
                </CardActions>
            </Card>

        </Container>
    )
}

export default Homepage;
