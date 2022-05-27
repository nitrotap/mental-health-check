import { useEffect, useState } from "react";
import questionBank from "../../utils/questionBank"


// const { depressionQuestions, anxietyQuestions, ptsdQuestions, schQuestions, impairmentQuestions, addictionQuestions } = questionBank;

const Question = (props) => {
    const { currentQuestion, setCurrentQuestion, handleSubmit } = props;

    // set initial state to first question in quiz
    // const [currentQuestion, setCurrentQuestion] = useState(quizQuestions[0])
    // what is the current quiz?
    // loop through each question of the quiz


    // useEffect(() => {
    //     // setCurrentQuestion(quizzes[i + 1])
    //     handleSubmit()

    // })

    return (
        <div>
            <div>
                {currentQuestion.question}
            </div>
            <div>
                <button type="submit" onClick={() => {
                    handleSubmit(currentQuestion.response[0])
                }}>
                    {currentQuestion.response[0].text}
                </button>
                <button type="submit" onClick={() => {
                    handleSubmit(currentQuestion.response[1])
                }}>
                    {currentQuestion.response[1].text}
                </button>
            </div>
            <div>

            </div>
        </div>
    )



}

export default Question

