/* react page for therapy form 

add new therapy note

see all therapy notes

*/
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_THERAPY_NOTE } from '../utils/mutations';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Rating, Stack } from '@mui/material';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core'

import Copyright from '../components/Elements/Copyright';

import { Link } from 'react-router-dom';
import { Input } from '@mui/material';
import TherapyNoteList from '../components/TherapyNoteList';
import TherapyForm from '../components/TherapyForm';


function Therapy(props) {
    if (!Auth.loggedIn()) {
        window.location.replace('/login');
    }




    return (
        <Container>
            <TherapyForm />
            <TherapyNoteList />
        </Container >
    );
}

export default Therapy;