import { useEffect, useState } from "react";
import questionBank from "../../utils/questionBank"


const { depressionQuestions, anxietyQuestions, ptsdQuestions, schQuestions, impairmentQuestions, addictionQuestions } = questionBank;

const Question = (props) => {
    const { currentQuestion, setCurrentQuestion } = props;

    // set initial state to first question in quiz
    // const [currentQuestion, setCurrentQuestion] = useState(quizQuestions[0])
    // what is the current quiz?
    // loop through each question of the quiz

    function handleSubmit(args) {
        console.log(`You clicked ${args}.`);
        switch (args) {
            case 'Yes':
                // todo

                break;
            case 'No':
                //todo

                break;
            default:
                break;
        }
    }

    return (
        <div>
            <div>
                {currentQuestion.question}
            </div>
            <div>
                <button type="submit" onClick={() => {
                    handleSubmit(currentQuestion.response[0].text)
                }}>
                    {currentQuestion.response[0].text}
                </button>
                <button type="submit" onClick={() => {
                    handleSubmit(currentQuestion.response[1].text)
                }}>
                    {currentQuestion.response[1].text}
                </button>
            </div>
            <div>

            </div>
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
        </div>
    )



}

export default Question

