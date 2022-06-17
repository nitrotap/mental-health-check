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
import { DangerousChangeType } from 'graphql';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: '#18344A',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '0, 10px',
    },
}));
const theme = createTheme();


function Therapy(props) {
    if (!Auth.loggedIn()) {
        window.location.replace('/login');
    }


    const classes = useStyles();
    const [formState, setFormState] = useState({
        doingQuestion: 'Since the last appointment, I have done the following:',
        feelingQuestion: 'I am feeling:',
        nextQuestion: 'Next, I want to do the following:',
        feelingRating: '',
        helpfulRating: '',
        notes: ''
    });


    // const [doingQuestionState, setDoingQuestionState] = useState('');
    // const [feelingQuestionState, setFeelingQuestionState] = useState('');
    // const [nextQuestionState, setNextQuestionState] = useState('');
    // const [feelingRatingState, setFeelingRatingState] = useState(3);
    // const [helpfulRatingState, setHelpfulRatingState] = useState(3);
    // const [notesState, setNotesState] = useState(false);

    const [addTherapyNote] = useMutation(ADD_THERAPY_NOTE);


    const handleChangeDoingQuestion = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    const handleChangeFeelingQuestion = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    const handleChangeNextQuestion = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    const handleChangeFeelingRating = (event) => {
        const { name, value } = event.target;
        console.log(value)
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    const handleChangeHelpfulRating = (event) => {
        const { name, value } = event.target;
        console.log(value)
        setFormState({
            ...formState,
            [name]: value,
        });
    }


    const handleFormSubmit = async (event) => {
        event.preventDefault();

        console.log(formState);

        await addTherapyNote({});

        try {
            const { data } = await addTherapyNote({
                variables: {
                    doingQuestion: formState.doingQuestion,
                    feelingQuestion: formState.feelingQuestion,
                    nextQuestion: formState.nextQuestion,
                    feelingRating: formState.feelingRating,
                    helpfulRating: formState.helpfulRating,
                    notes: formState.notes,
                }
            });
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <Container>
            <ThemeProvider theme={theme}>

                <Container component="main" sx={{
                    backgroundColor: 'white', marginTop: '100px', marginBottom: '250px',
                }}>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Therapy Evaluator
                        </Typography>

                        <Box component="form" noValidate sx={{ width: '1000px' }}>
                            <TextField
                                required
                                multiline
                                fullWidth
                                id="doingQuestion"
                                label="What have you done since the last appointment?"
                                name="doingQuestion"
                                margin="normal"
                                onChange={handleChangeDoingQuestion}
                            />
                            <TextField
                                required
                                multiline
                                fullWidth
                                id="feelingQuestion"
                                label="How does that make you feel?"
                                name="feelingQuestion"
                                margin="normal"
                                onChange={handleChangeFeelingQuestion}
                            />
                            <TextField
                                required
                                multiline
                                fullWidth
                                id="nextQuestion"
                                label="What do you want to do next?"
                                name="nextQuestion"
                                margin="normal"
                                onChange={handleChangeNextQuestion}
                            />

                            <Typography >
                                Am I feeling better or worse after my appointment?
                            </Typography>
                            <Rating
                                name="feelingRating"
                                value={formState.feelingRating}
                                onChange={handleChangeFeelingRating}
                            />
                            <Typography >
                                Was my therapist helpful today in processing my feelings?
                            </Typography>
                            <Rating
                                name="helpfulRating"
                                value={formState.helpfulRating}
                                onChange={handleChangeHelpfulRating}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleFormSubmit}
                            >
                                Save Note
                            </Button>







                        </Box>

                    </Box>


                </Container>

            </ThemeProvider>

        </Container >
    );
}

export default Therapy;