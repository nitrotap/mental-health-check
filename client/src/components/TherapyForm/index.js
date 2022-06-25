/* react page for therapy form 

add new therapy note


see all therapy notes

*/
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_THERAPY_NOTE } from '../../utils/mutations';


import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { ButtonGroup, CardContent, Rating, Stack } from '@mui/material';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core'


import { Link } from 'react-router-dom';
import { Input } from '@mui/material';


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


function TherapyForm(props) {

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
        const { name, value } = event;
        console.log(event)
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

    const handleButtonClick = (event) => {
        const { name, value } = event.target;
        console.log(value)

        setFormState({
            ...formState,
            [name]: value,
        });
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
                        <Typography component="main" sx={{ fontSize: '30pt' }}>
                            Therapy Evaluator
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'left',
                        }}
                    >




                        <Box component="form" noValidate sx={{ width: '1000px' }}>

                            <CardContent>
                                <Typography component="main" sx={{ fontSize: '20pt' }}>
                                    What have you been doing since your last appointment?
                                </Typography>
                                <TextField
                                    required
                                    multiline
                                    fullWidth
                                    id="doingQuestion"
                                    label=""
                                    name="doingQuestion"
                                    margin="normal"
                                    onChange={handleChangeDoingQuestion}
                                    minRows={3}
                                    defaultValue={'Since my last appointment, I have done the following: \n 1. \n 2. \n 3. '}

                                />
                            </CardContent>

                            <CardContent>

                                <Typography component="main" sx={{ fontSize: '20pt' }}>
                                    How does that make you feel?
                                </Typography>
                                <TextField
                                    required
                                    multiline
                                    fullWidth
                                    id="feelingQuestion"
                                    name="feelingQuestion"
                                    margin="normal"
                                    onChange={handleChangeFeelingQuestion}
                                    minRows={3}
                                    defaultValue={'I have been feeling: \n 1. \n 2. \n 3. '}


                                />
                            </CardContent>

                            <CardContent>

                                <Typography component="main" sx={{ fontSize: '20pt' }}>
                                    What do you want to do next?
                                </Typography>
                                <TextField
                                    required
                                    multiline
                                    fullWidth
                                    id="nextQuestion"
                                    label=""
                                    name="nextQuestion"
                                    margin="normal"
                                    onChange={handleChangeNextQuestion}
                                    defaultValue={'In the future, I want to try: '}
                                    minRows={3}


                                />
                            </CardContent>

                            {/* <CardContent>


                                <Typography >
                                    Am I feeling better or worse after my appointment?
                                </Typography>
                                <Rating
                                    value={formState.feelingRating}
                                    onChange={handleChangeFeelingRating}
                                />
                                {/* <ButtonGroup name="feelingRating">
                                    <Button onClick={handleButtonClick} >Worse</Button>
                                    <Button>Slightly Worse</Button>
                                    <Button>Neutral</Button>
                                    <Button>Slightly Better</Button>
                                    <Button>Better</Button>
                                </ButtonGroup> */}
                            {/* <Typography >
                                    Was my therapist helpful today in processing my feelings?
                                </Typography>
                                <Rating
                                    name="helpfulRating"
                                    value={formState.helpfulRating}
                                    onChange={handleChangeHelpfulRating}
                                />

                            </CardContent> */}

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

export default TherapyForm;