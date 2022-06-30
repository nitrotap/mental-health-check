/* react component for therapy form */

import { Box, Container, ThemeProvider, CardContent, Button, Card, Divider, Typography, CardActions } from "@mui/material"
import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER_THERAPY_NOTES } from '../../utils/queries';
import { REMOVE_THERAPY_NOTE } from "../../utils/mutations";


// const useStyles = makeStyles((theme) => ({
//     container: {
//         backgroundColor: '#18344A',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh',
//         width: '100vw',
//         padding: '0, 10px',
//     },
//     title: {
//         fontSize: '4rem',
//         textAlign: 'center',
//         color: 'white',
//         paddingBottom: theme.spacing(3),
//         [theme.breakpoints.down('md')]: {
//             fontSize: '2rem',
//         },
//     },
//     text2: {
//         fontSize: '1.3rem',
//         textAlign: 'center',
//         color: '#f5f5f5',
//     },
//     fontSize: '1.3rem',
//     textAlign: 'center',
//     color: '#f5f5f5',
//     paddingBottom: theme.spacing(3),
//     [theme.breakpoints.down('md')]: {
//         fontSize: '1rem',
//     },
//     hero: {
//         width: '50%',
//         marginTop: theme.spacing(4),
//         [theme.breakpoints.down('sm')]: {
//             width: '75%',
//         },
//     },
//     img: {
//         aspectRatio: 4 / 5,
//         [theme.breakpoints.down('sm')]: {
//             display: 'none',
//         },
//     },
//     card: {
//         backgroundColor: 'white',
//         display: 'flex',
//         flexDirection: 'column',
//     },
//     card1: {
//         backgroundColor: '#255070',
//         display: 'flex',
//         flexDirection: 'column',
//         width: '200px'
//     },
//     cardButtons: {
//         display: 'flex',
//         flexDirection: 'row',
//         backgroundColor: '#255070',
//         justifyContent: 'space-evenly',
//         alignItems: 'center',

//     },
//     cardTitle: {
//         color: '#f5f5f5',
//         fontSize: '2.5rem',
//         textAlign: 'center',
//         [theme.breakpoints.down('md')]: {
//             fontSize: '1.5rem',
//         },
//     },
//     cardText: {
//         fontSize: '1.3rem',
//         textAlign: 'center',
//         color: 'white',
//         [theme.breakpoints.down('md')]: {
//             fontSize: '1rem',
//         },
//     },
//     button: {
//         backgroundColor: '#18344A',
//         padding: '15px',
//         fontSize: '1rem',
//     },
//     buttonTitle: {
//         color: 'white'
//     }
// }));

const dateStamp = (unixTimestamp) => {
    const a = new Date(unixTimestamp * 1);
    return a.toLocaleDateString('en-US') + " " + a.toLocaleTimeString('en-US');
}

const TherapyNoteList = () => {
    const [removeTherapyNote] = useMutation(REMOVE_THERAPY_NOTE);

    const { loading, data } = useQuery(QUERY_USER_THERAPY_NOTES);

    const user = data?.user || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    // console.log(user)




    const handleDeleteNote = async (event) => {
        try {
            const deletedNote = await removeTherapyNote({
                variables: {
                    therapyNoteId: event.target.id
                }
            })
            console.log(deletedNote)
            window.location.reload()
            return deletedNote;
        } catch (error) {
            console.log(error)
        }
    }







    return (
        <Container sx={{ backgroundColor: 'white' }}>
            <Box >
                <Typography variant='h2'>Previous Therapy Notes</Typography>
                {user.therapyNotes.map((note) => {
                    return (
                        <Card key={note.dateTaken.toString()} sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography variant="h5">{dateStamp(note.dateTaken)}</Typography>
                                <Typography variant="h6">What have I been doing?</Typography>
                                <p>{note.doingQuestion}</p>
                                <Typography variant="h6">How does that make me feel?</Typography>
                                <p>{note.feelingQuestion}</p>
                                <Typography variant="h6">What would I like to do next?</Typography>
                                <p>{note.nextQuestion}</p>
                                <Typography variant="h6">How did I feel after my appointment?</Typography>
                                <p>{note.feelingRating}</p>
                                <Typography variant="h6">How helpful was the therapist?</Typography>
                                <p>{note.helpfulRating}</p>
                                <p>{note.notes}</p>
                            </CardContent>
                            <CardActions>
                                <Button onClick={handleDeleteNote} id={note._id}>Delete</Button>
                                {/* <Button>Edit</Button> */}
                            </CardActions>
                            <Divider></Divider>
                        </Card>
                    )
                })
                }
            </Box>
        </Container>
    )
}

export default TherapyNoteList;