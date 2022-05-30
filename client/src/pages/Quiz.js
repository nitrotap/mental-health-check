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
import QuizSelectForm from '../components/QuizSelectForm'


// takes an array of quizzes from quiz selector
const Quiz = (args) => {

    const [showQuizSelect, setShowQuizSelect] = useState(true)
    const [quizSelection, setQuizSelection] = useState()

    // todo replace with object from quiz selector
    let quizzes = ['depression', 'anxiety', 'ptsd']

    const { depressionQuestions, anxietyQuestions, ptsdQuestions, schQuestions, impairmentQuestions, addictionQuestions } = questionBank;

    const [currentQuiz, setCurrentQuiz] = useState(quizzes[0])

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
            {/* todo render modal here, quizselectform component within*/}
            <QuizSelectForm showQuizSelect={showQuizSelect} setQuizSelect={setShowQuizSelect} quizSelection={quizSelection} setQuizSelection={setQuizSelection} />


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