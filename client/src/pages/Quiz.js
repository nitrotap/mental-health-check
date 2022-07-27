
import { useState } from "react";
import { useParams } from "react-router-dom";

import QuizSet from '../components/QuizSet'
import { Container, Typography } from "@mui/material";


// takes an array of quizzes from quiz selector
const Quiz = (args) => {
    const { id: quizParams } = useParams();
    const quizSet = quizParams.split('&')

    const a = quizSet.map(param => {
        const log = param.split('=')
        return log
    })

    let b = []
    if (a[0][1] === 'true') {
        b.push('depression')
    }
    if (a[1][1] === 'true') {
        b.push('anxiety')
    }
    if (a[2][1] === 'true') {
        b.push('ptsd')
    }
    if (a[3][1] === 'true') {
        b.push('schizophrenia')
    }
    if (a[4][1] === 'true') {
        b.push('addiction')
    }

    let quizzes = b

    const [currentQuiz, setCurrentQuiz] = useState()

    const [index, setIndex] = useState(0)


    function handleSubmitQuiz(currentQuizSetId) {
        if (index >= quizzes.length - 1) {
            window.location.replace(`/singlequiz/${currentQuizSetId}`)
        } else {
            setIndex(index + 1)
        }

        return (
            <Typography variant="h4">Quiz Complete!</Typography>
        )
    }

    return (
        <Container>
            <QuizSet
                // pass through user quizzes from quiz select
                currentQuizName={quizzes[index]}
                // set current quiz to use the first quiz in the index
                setCurrentQuizName={setCurrentQuiz}
                // pass through quizzes chosen by user
                handleSubmitQuiz={handleSubmitQuiz}
            ></QuizSet>
        </Container >
    )
}

export default Quiz