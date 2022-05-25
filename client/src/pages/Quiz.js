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
import QuizSet from '../components/QuizSet'

const Quiz = (args) => {
    // console.log(questionBank)

    // takes an array of quizzes from quiz selector

    let quizzes = ['depression', 'anxiety']

    const { depressionQuestions, anxietyQuestions, ptsdQuestions, schQuestions, impairmentQuestions, addictionQuestions } = questionBank;


    // unpacking questions objects
    // console.log(addictionQuestions) // array of questions
    // console.log(addictionQuestions.length)  // len 6
    // console.log(addictionQuestions[0].question) // question at 0th index
    // console.log(addictionQuestions[0].response) // array of two responses
    // console.log(addictionQuestions[0].response[0].text) // YES response
    // console.log(addictionQuestions[0].response[0].score) // NO response



    const [currentQuiz, setCurrentQuiz] = useState(quizzes[0])

    function handleSubmit(e, response) {
        console.log('You clicked submit.');
        console.log(response.text)

    }

    console.log(currentQuiz)
    return (
        <div>
            <QuizSet currentQuiz={currentQuiz} setCurrentQuiz={setCurrentQuiz}
            ></QuizSet>

            {/* <div >
                {addictionQuestions[0].question}
            </div>
            {
                addictionQuestions[0].response.map((response) => {
                    return (
                        <div>
                            <button onClick={(e) => {
                                handleSubmit(e, response)
                            }} key={response.text}>
                                {response.text}
                            </button>
                        </div>
                    )
                })
            } */}
        </div >
    )


}

export default Quiz