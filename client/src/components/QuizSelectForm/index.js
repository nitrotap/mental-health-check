/* js file for quiz selector */

import { useState } from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const QuizSelectForm = (props) => {
    const { showQuizSelect, setShowQuizSelect, quizSelection, setQuizSelection } = props;
    const [open, setOpen] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [state, setState] = useState({
        depression: false,
        anxiety: false,
        ptsd: false,
        sch: false,
        addiction: false,
    })

    const handleChange = (event) => {
        const { name, value } = event.target;

        setState({
            ...state,
            [event.target.name]: event.target.checked
        })
        console.log(event.target.name + " isChecked: " + event.target.checked)

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // setShowQuizSelect(false)
        // console.log(state)

        window.location.replace(`/quiz/depression=${state.depression}&anxiety=${state.anxiety}&ptsd=${state.ptsd}&sch=${state.sch}&addiction=${state.addiction}`)

    }
    return (
        <div>
            {/* <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            > */}

            <Box sx={style}>
                <FormControl
                    required
                    // error={error}
                    component="fieldset"
                    sx={{ m: 3 }}
                    variant="standard"
                >
                    <FormLabel component="legend">Pick one</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox checked={state.depression} onChange={handleChange} name="depression" />
                            }
                            label="depression"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={state.anxiety} onChange={handleChange} name="anxiety" />
                            }
                            label="anxiety"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={state.ptsd} onChange={handleChange} name="ptsd" />
                            }
                            label="ptsd"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={state.sch} onChange={handleChange} name="sch" />
                            }
                            label="schizophrenia"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={state.addiction} onChange={handleChange} name="addiction" />
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
                    >
                        Start Quiz
                    </Button>
                    {/* <FormHelperText>You can display an error</FormHelperText> */}
                </FormControl>
            </Box>


            {/* </Modal> */}
        </div>
    )
}

export default QuizSelectForm;
