/* js file for quiz selector */

import { useState } from 'react';
import { Checkbox, Box, Button, FormControl, FormControlLabel, FormLabel, FormGroup } from '@mui/material'

const QuizSelectForm = (props) => {

    const { selectedQuizzes, setSelectedQuizzes, quiz, setQuiz, view, setView } = props;

    const [state, setState] = useState({
        depression: false,
        anxiety: false,
        ptsd: false,
        sch: false,
        addiction: false,
    })

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSelectedQuizzes(state);
        setView(view + 1)

    }
    return (
        <div>
            <Box sx={{
                width: 400,
                height: 400,
                backgroundColor: 'white',
                marginTop: '150px',
                marginBottom: '250px',
            }}>
                <FormControl
                    required
                    component="fieldset"
                    sx={{ m: 3 }}
                    variant="standard"
                >
                    <FormLabel component="legend">Pick one or more</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox checked={state.depression} onChange={handleChange} name="depression"
                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
                            }
                            label="depression"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={state.anxiety} onChange={handleChange} name="anxiety"
                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
                            }
                            label="anxiety"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={state.ptsd} onChange={handleChange} name="ptsd"
                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
                            }
                            label={"ptsd"}
                            sx={{ fontSize: 34 }}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={state.sch} onChange={handleChange} name="sch"
                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
                            }
                            label="schizophrenia"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={state.addiction} onChange={handleChange} name="addiction"
                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
                            }
                            label="addiction"
                        />

                    </FormGroup>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleSubmit}
                        disabled={!state.depression && !state.anxiety && !state.ptsd && !state.sch && !state.addiction}
                    >
                        Start Quiz
                    </Button>
                </FormControl>
            </Box>
        </div>
    )
}

export default QuizSelectForm;
