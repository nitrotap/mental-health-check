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

    let quizzes = ['depression', 'anxiety', 'ptsd']

    const { depressionQuestions, anxietyQuestions, ptsdQuestions, schQuestions, impairmentQuestions, addictionQuestions } = questionBank;


    // unpacking questions objects
    // console.log(addictionQuestions) // array of questions
    // console.log(addictionQuestions.length)  // len 6
    // console.log(addictionQuestions[0].question) // question at 0th index
    // console.log(addictionQuestions[0].response) // array of two responses
    // console.log(addictionQuestions[0].response[0].text) // YES response
    // console.log(addictionQuestions[0].response[0].score) // NO response



    const [currentQuiz, setCurrentQuiz] = useState(quizzes[0])

    // boolean, show or not show modal 
    // 
    const [showQuizSelect, setShowQuizSelect] = useState(true)

    const [chosenQuizzes, setChosenQuizzes] = useState([])

    const [index, setIndex] = useState(0)


    function handleSubmitQuiz() {
        setIndex(index + 1)
        console.log('test')

    }

    return (
        <div>
            {/* render modal here, quizselectform component within*/}
            {/* <QuizSelectForm showForm={showQuizSelect} /> */}
            <QuizSet currentQuizName={quizzes[index]} setCurrentQuizName={setCurrentQuiz} chosenQuizzes={chosenQuizzes} setChosenQuizzes={setChosenQuizzes}
                handleSubmitQuiz={handleSubmitQuiz}
            ></QuizSet>

        </div >
    )


}

export default Quiz