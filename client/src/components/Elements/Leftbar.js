import React from 'react';
//mui component
import {Container, makeStyles, Typography} from '@material-ui/core'
import {Home} from '@mui/icons-material'

const useStyles = makeStyles((theme) => ({}));

function Leftbar() {
    const classes = useStyles();
    return (
        <Container>
            <div className={classes.item}>
                <Home className={classes.icon}/>
                <Typography className={classes.item}>
                    Home
                </Typography>
            </div>
        </Container>
    )
}

export default Leftbar;

