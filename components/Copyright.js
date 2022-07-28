import React from 'react';

import { Typography, Grid } from '@mui/material';
import Link from '@mui/material/Link';
import styles from '../styles/Home.module.css'

import Image from 'next/image';




function Copyright(props) {
    return (
        <>
            <Grid container sx={{ alignItems: 'center', justifyContent: 'center' }}>
                <Grid item>
                    <span className={styles.logo}>
                        <Image src="/mhc-logo.svg" alt="MHC Logo" width={172} height={116} />
                    </span>
                </Grid>
                <Grid item>
                    <Typography variant="body2" color="text.secondary" align="center" {...props}>
                        {'Copyright © '}
                        <a
                            href="https://github.com/nitrotap/mental-health-check"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Mental Health Check
                        </a>{' '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Typography>
                </Grid>
            </Grid>
        </>


    );
}

export default Copyright;