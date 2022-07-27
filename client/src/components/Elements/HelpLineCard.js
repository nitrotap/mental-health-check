import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Card from '@mui/material/Card';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        marginBottom: '10px',
    },
    title: {
        fontSize: '2rem',
        textAlign: 'center',
        color: '#18344A'
    },
    text: {
        fontSize: '1.5rem',
        color: '#18344A',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        marginRight: '10px',
    }
}));


export default function HelpCard() {
    const classes = useStyles();
    return (
        <>
            <Card className={classes.card}>
                <Typography className={classes.title}>
                    Suicide Prevention Hotline
                </Typography>
                <Typography className={classes.text}>
                    <LocalPhoneIcon className={classes.icon} />800-273-8255
                </Typography>
            </Card>
            <Card className={classes.card}>
                <Typography className={classes.title}>
                    National Alliance For Mental Health Hotline
                </Typography>
                <Typography className={classes.text}>
                    <LocalPhoneIcon className={classes.icon} />800-950-NAMI (6264)
                </Typography>
            </Card>
            <Card className={classes.card}>
                <Typography className={classes.title}>
                    Substance Abuse and Mental Health Services Agency (SAMHSA)
                </Typography>
                <Typography className={classes.text}>
                    <LocalPhoneIcon className={classes.icon} />800-662-HELP (4357)
                </Typography>
            </Card>
        </>
    );
};