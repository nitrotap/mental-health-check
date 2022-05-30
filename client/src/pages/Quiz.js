/* 
Quiz Selector - choose the quizzes you want to take out of the options for quizzes 
    - quiz selector creates a quizSet in the database
Quiz experience 
    - take each quiz from quiz selector
    - once finished with a single "quiz", then send QuizResult mutation to database with quizTaken, quizAnswer, createdAt
    on completion, go to Single Quiz page
Depends on: addQuizSet mutation, addQuizResult mutation 
assigned to:
*/
import questionBank from "../utils/questionBank"
import { useState } from "react";
import { useParams } from "react-router-dom";

import QuizSet from '../components/QuizSet'
import QuizSelectForm from '../components/QuizSelectForm'


// takes an array of quizzes from quiz selector
const Quiz = (args) => {
    const { id: quizParams } = useParams();
    const quizSet = quizParams.split('&')

    const a = quizSet.map(param => {
        // console.log(param) // parse depression=true
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
            console.log('TEST FINISHED')
            //TODO  SEND USER TO QUIZ FINISHED PAGE

            // window.location.replace(`/dashboard`);
            window.location.replace(`/singlequiz/${currentQuizSetId}`)

        } else {
            setIndex(index + 1)
        }
    }

    return (
        <div>
            {/* todo render modal here, quizselectform component within
            <QuizSelectForm showQuizSelect={showQuizSelect} setQuizSelect={setShowQuizSelect} quizSelection={quizSelection} setQuizSelection={setQuizSelection} /> */}

            <QuizSet
                // pass through user quizzes from quiz select
                currentQuizName={quizzes[index]}
                // set current quiz to use the first quiz in the index
                setCurrentQuizName={setCurrentQuiz}
                // pass through quizzes chosen by user
                handleSubmitQuiz={handleSubmitQuiz}
            ></QuizSet>

        </div >
    )


}

export default Quiz