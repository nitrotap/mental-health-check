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
                break;
        }
    };

    const currentQuiz = initialState(currentQuizName)

    const [index, setIndex] = useState(0)


    useEffect(() => {
        document.title = (currentQuizName);
        console.log(index)
    }, [currentQuizName]);

    function handleSubmit(response) {
        console.log(`You clicked ${response}.`, response);
        // add logic to determine if end of quiz
        if (index >= currentQuiz.length - 1) {
            handleSubmitQuiz()
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
        //todo  error case runs out of indexes
        // todo add logic for scores

    }



    return (
        <div>
            <div>
                {/* TODO: set up questions to loop through each screen */}
                {/* {questionSet.map((i) => {
                    console.log(i)
                    return (
                        <Question currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}></Question>
                    )
                })} */}
                <Question currentQuestion={currentQuiz[index]} setCurrentQuestion={setIndex} handleSubmit={handleSubmit}></Question>
            </div>
        </div>
    )



}

export default QuizSet

