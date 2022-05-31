import React from 'react';

import {Container, makeStyles, Typography} from '@material-ui/core';

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
        color: 'white',
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            fontSize: '1rem',
        },
    },
}));

export default function Legal() {
    const classes = useStyles();
    return(
        <Container className={classes.container}>
        <Typography className={classes.title}>Legal</Typography>

        <Typography className={classes.text}>The information on this website is provided for general informational purposes only. This website does not
          provide any medical advice, and it is in no way a substitute for professional medical diagnosis, advice, or
          treatment. Never ignore professional medical advice because of something you have read or seen in any way on
          this website. The author(s) are not any sort of medical professional, so no individuals should use any
          information on this site to self-diagnose or self-treat any health-related condition. Mental Health Check
          gives no assurance or warranty regarding the accuracy of any content on the website and is not curing,
          preventing, or mitigating any type of illness or medical condition. By using this site, you agree to use any
          tool at your own risk. If you are experiencing any sort of medical emergency, call 911 immediately. Nothing on
          this site has been certified in any way by any governmental agency or any sort of authority. Any use or
          application of content from this website is up to the user and the user's own responsibility.
          </Typography>

        <Typography className={classes.text}>
          MIT License<br/><br/>

          Copyright (c) 2022 nitrotap<br/><br/>

          Permission is hereby granted, free of charge, to any person obtaining a copy
          of this software and associated documentation files (the "Software"), to deal
          in the Software without restriction, including without limitation the rights
          to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
          copies of the Software, and to permit persons to whom the Software is
          furnished to do so, subject to the following conditions:

          The above copyright notice and this permission notice shall be included in all
          copies or substantial portions of the Software.

          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
          IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
          FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
          AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
          LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
          OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
          SOFTWARE.
        </Typography>
  </Container>
    )
}