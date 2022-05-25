import { useEffect, useState } from "react";
import questionBank from "../../utils/questionBank"
import Question from "../Question";

const { depressionQuestions, anxietyQuestions, ptsdQuestions, schQuestions, impairmentQuestions, addictionQuestions } = questionBank;

const QuizSet = (props) => {
    const { currentQuiz, setCurrentQuiz } = props;

    const initialState = (currentQuiz) => {
        switch (currentQuiz) {
            case 'depression':
                return depressionQuestions
            case 'anxiety':
                return anxietyQuestions[0]
            case 'ptsd':
                return ptsdQuestions[0]
            case 'sch':
                return schQuestions[0]
            case 'addiction':
                return addictionQuestions[0]
            case 'impairment':
                return impairmentQuestions[0]
            default:
                throw new Error('initalState Error!')
                break;
        }
    };
    // console.log(initialState(currentQuiz)[0])

    const startingQuestion = initialState(currentQuiz)[0]
    const questionSet = initialState(currentQuiz)
    const [currentQuestion, setCurrentQuestion] = useState(startingQuestion)

    useEffect(() => {
        document.title = (currentQuiz);
    }, [currentQuiz]);


    // set initial state to first question in quiz
    // what is the current quiz?
    // loop through each question of the quiz

    return (
        <div>
            <div>
                {/* TODO: set up questions to loop through each screen */}
                {questionSet.map((i) => {
                    console.log(i)
                    return (
                        <Question currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}></Question>
                    )
                })}
                <Question currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}></Question>
            </div>
            {/* <div >
                {addictionQuestions[0].question}
            </div> */}
            {/* {
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

export default QuizSet

