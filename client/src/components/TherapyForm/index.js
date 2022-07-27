/* react page for therapy form 

add new therapy note

*/
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_THERAPY_NOTE } from '../../utils/mutations';


import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { ButtonGroup, Card, CardContent, Divider, Rating, Stack, ToggleButtonGroup, ToggleButton } from '@mui/material';

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


function TherapyForm(props) {

    const [formState, setFormState] = useState({
        doingQuestion: 'Since the last appointment, I have done the following:',
        feelingQuestion: 'I am feeling:',
        nextQuestion: 'Next, I want to do the following:',
        feelingRating: '',
        helpfulRating: '',
        notes: ''
    });

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

    const handleChangeFeelingRating = (event, newRating) => {

        const name = 'feelingRating';
        // console.log(event.target.innerText)
        let value = 0;

        switch (event.target.innerText) {
            case 'WORSE':
                value = '1'
                break;
            case 'SLIGHTLY WORSE':
                value = '2'
                break;
            case 'NEUTRAL':
                value = '3'
                break;
            case 'SLIGHTLY BETTER':
                value = '4'
                break;
            case 'BETTER':
                value = '5'
                break;
            default:
                value = ''
                break;
        }

        setFormState({
            ...formState,
            [name]: value,
        });
    }

    const handleChangeHelpfulRating = (event) => {
        const name = 'helpfulRating';
        // console.log(event.target.innerText)
        let value = 0;

        switch (event.target.innerText) {
            case 'NOT HELPFUL':
                value = '1'
                break;
            case 'SLIGHTLY HELPFUL':
                value = '2'
                break;
            case 'HELPFUL':
                value = '3'
                break;
            case 'VERY HELPFUL':
                value = '4'
                break;
            case 'EXTREMELY HELPFUL':
                value = '5'
                break;
            default:
                value = ''
                break;
        }
        setFormState({
            ...formState,
            [name]: value,
        });
    }


    const handleFormSubmit = async (event) => {

        // console.log(formState);


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
            // console.log(data);
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
                    Therapy Notes
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
                    <Divider sx={{ margin: 3 }}></Divider>


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
                    <Divider sx={{ margin: 3 }}></Divider>


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
                    {/* <Divider sx={{ margin: 3 }}></Divider>

                    <CardContent>
                        <Typography variant='h6' sx={{ display: 'flex', justifyContent: 'center' }}>
                            Am I feeling better or worse after my appointment?
                        </Typography>
                        <ToggleButtonGroup name="feelingRating" sx={{ display: 'flex', justifyContent: 'center' }}>
                            <ToggleButton onClick={handleChangeFeelingRating} value={formState.feelingRating}>Worse</ToggleButton>
                            <ToggleButton onClick={handleChangeFeelingRating} value={formState.feelingRating}>Slightly Worse</ToggleButton>
                            <ToggleButton onClick={handleChangeFeelingRating} value={formState.feelingRating}>Neutral</ToggleButton>
                            <ToggleButton onClick={handleChangeFeelingRating} value={formState.feelingRating}>Slightly Better</ToggleButton>
                            <ToggleButton onClick={handleChangeFeelingRating} value={formState.feelingRating}>Better</ToggleButton>
                        </ToggleButtonGroup>
                        <Divider sx={{ margin: 3 }}></Divider>
                        <Typography variant='h6' sx={{ display: 'flex', justifyContent: 'center' }}>
                            How helpful was my therapist in helping me process my feelings?
                        </Typography>
                        <ToggleButtonGroup name="helpfulRating" sx={{ display: 'flex', justifyContent: 'center' }}>
                            <ToggleButton onClick={handleChangeHelpfulRating} value={formState.helpfulRating}>Not Helpful</ToggleButton>
                            <ToggleButton onClick={handleChangeHelpfulRating} value={formState.helpfulRating}>Slightly Helpful</ToggleButton>
                            <ToggleButton onClick={handleChangeHelpfulRating} value={formState.helpfulRating}>Helpful</ToggleButton>
                            <ToggleButton onClick={handleChangeHelpfulRating} value={formState.helpfulRating}>Very Helpful</ToggleButton>
                            <ToggleButton onClick={handleChangeHelpfulRating} value={formState.helpfulRating}>Extremely Helpful</ToggleButton>
                        </ToggleButtonGroup>

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

    );
}

export default TherapyForm;