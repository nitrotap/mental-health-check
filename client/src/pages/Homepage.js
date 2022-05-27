/* Describes app, asks user to signup to use, option to log into account

assigned to:
*/

import React from 'react';
//mui
import {Container, makeStyles, Typography, Card, CardActions, CardContent, Button, CardMedia} from '@material-ui/core';
import jumbo from '../assets/images/jumbo.jpg';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    card: {
        backgroundColor: '#255070',
    },
    hero: {
        marginTop: theme.spacing(4),
    },
    title: {
        paddingBottom: theme.spacing(4),
    },
    cardTitle: {
        color: '#f5f5f5',
        fontSize: '2.5rem',
    },
    text: {
        fontSize: '1.3rem',
        textAlign: 'center',
        color: '#f5f5f5',
    },
    button: {
        color: '#4798D6',
    },
    h1: {
        fontSize: '9rem',
    },
}));

function Homepage() {
    const classes = useStyles();
    return(
        <Container className={classes.container}>
            <Typography className={classes.title} variant='h2' component='h1' >
                Take the First Step to Better Mental Health
            </Typography>
            <Typography className={classes.text} variant='body1' >
            Mental Health Check takes a simple quiz app format, using questions from mental illness screenings, to create a new quiz that focuses on co-morbidity by combining screening questions. Instead of screening for a diagnosis, Mental Health Check helps patients by using those screening questions to point the user to the applicable resources.
            </Typography>
            <Card sx={{ maxWidth: 345 }} className={classes.hero}>
                <CardMedia
                    component="img"
                    height="400"
                    image={jumbo}
                    alt="therapy session"
                />
                <CardContent className={classes.card}>
                    <Typography className={classes.cardTitle} gutterBottom variant="h5" component="div">
                    Take the Mental Health Check
                    </Typography>
                    <Typography className={classes.text}>
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