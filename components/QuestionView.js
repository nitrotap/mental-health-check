import React from "react";

import { Button, CardActions, CardHeader, Box, Card, Container, CardContent, Typography } from '@mui/material'


const QuestionView = (props) => {
    const { currentQuestion } = props;

    console.log(currentQuestion.question)

    return (
        <Container>
            <Box>
                <Card sx={{ minWidth: 275, marginTop: 36 }}>
                    <CardContent sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant='h5' sx={{ justifyContent: 'center', alignItems: 'center' }}>
                            {currentQuestion.question}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        {currentQuestion.response.map((i, index) => {
                            return (
                                <Button variant="contained" key={currentQuestion.response[index].text} >
                                    <h2>{currentQuestion.response[index].text}</h2>
                                </Button>
                            )
                        })}
                    </CardActions>


                </Card>

            </Box>
        </Container>
    )
}

export default QuestionView