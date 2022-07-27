/* js file for quiz selector */

import { useState } from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const QuizSelectForm = (props) => {

    // if (!Auth.loggedIn()) {
    //     window.location.replace('/login');
    // }

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
        window.location.replace(`/quiz/depression=${state.depression}&anxiety=${state.anxiety}&ptsd=${state.ptsd}&sch=${state.sch}&addiction=${state.addiction}`)

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
