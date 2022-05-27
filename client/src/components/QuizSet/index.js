import { useEffect, useState } from "react";
import questionBank from "../../utils/questionBank"
import Question from "../Question";

const { depressionQuestions, anxietyQuestions, ptsdQuestions, schQuestions, impairmentQuestions, addictionQuestions } = questionBank;

const QuizSet = (props) => {
    const { currentQuizName, handleSubmitQuiz } = props;

    const initialState = (name) => {
        switch (name) {
            case 'depression':
                return depressionQuestions
            case 'anxiety':
                return anxietyQuestions
            case 'ptsd':
                return ptsdQuestions
            case 'sch':
                return schQuestions
            case 'addiction':
                return addictionQuestions
            case 'impairment':
                return impairmentQuestions
            default:
                throw new Error('initalState Error!')
        }
    };

    const currentQuiz = initialState(currentQuizName)

    const [index, setIndex] = useState(0)


    useEffect(() => {
        document.title = (currentQuizName);
        //todo add name of quiz to document
    }, [currentQuizName]);

    function handleSubmit(response) {
        console.log(response);
        // add logic to determine if end of quiz
        if (index >= currentQuiz.length - 1) {
            handleSubmitQuiz()
            setIndex(0)
            console.log('END OF QUIZ ' + currentQuizName)
        } else {
            setIndex(index + 1)
        }
        //todo  error case runs out of indexes
        // todo add logic for scores

    }
    return (
        <div>
            <div>
                <h6>{currentQuizName} quiz</h6>
                <h6>question {index + 1} of {currentQuiz.length}</h6>
            </div>
            <div>
                <Question currentQuestion={currentQuiz[index]} setCurrentQuestion={setIndex} handleSubmit={handleSubmit}></Question>
            </div>
        </div>
    )
}

export default QuizSet

