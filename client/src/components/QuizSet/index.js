import { useEffect, useState } from "react";
import { useQuery, useMutation } from '@apollo/client'
import questionBank from "../../utils/questionBank"
import Question from "../Question";
import { QUERY_USER } from "../../utils/queries";
import { ADD_QUIZRESULT, ADD_QUIZSET } from "../../utils/mutations";

const { depressionQuestions, anxietyQuestions, ptsdQuestions, schQuestions, impairmentQuestions, addictionQuestions } = questionBank;

const grader = function () {

}

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
        document.title = (currentQuizName + ' quiz');
    }, [currentQuizName]);

    const [addQuizSet] = useMutation(ADD_QUIZSET)

    const [currentQuizSetId, setCurrentQuizSetId] = useState('')

    useEffect(() => {
        async function startQuiz() {
            const { data } = await addQuizSet()
            console.log(data.addQuizSet._id)
            setCurrentQuizSetId(data.addQuizSet._id)
        }
        startQuiz()
    }, [addQuizSet])

    const [quizSetScore, setQuizSetScore] = useState(0)
    const [addQuizResult] = useMutation(ADD_QUIZRESULT)

    function handleSubmit(response) {
        console.log(response);
        // end of quiz
        if (index >= currentQuiz.length - 1) {
            handleSubmitQuiz()
            setIndex(0)
            console.log('END OF QUIZ ' + currentQuizName)
            //todo calculate score bug: score is -1 somehow
            if (quizSetScore >= (currentQuiz.length / 2)) {
                console.log('positive for ' + currentQuizName)
                const currentQuizResult = 'positive for ' + currentQuizName

                const { data } = addQuizResult({
                    variables: {
                        quizSetId: currentQuizSetId,
                        quizTaken: currentQuizName, quizAnswer: currentQuizResult
                    }
                })
                setQuizSetScore(0)

            } else {
                // todo add logic for scores
                console.log('negative for ' + currentQuizName)
                const currentQuizResult = 'negative for ' + currentQuizName

                const { data } = addQuizResult({
                    variables: {
                        quizSetId: currentQuizSetId,
                        quizTaken: currentQuizName, quizAnswer: currentQuizResult
                    }
                })
                setQuizSetScore(0)

            }
        } else {
            setIndex(index + 1)
            // todo score calculation
            // console.log('question answered')
            console.log(response.score + quizSetScore)
            let newScore = response.score + quizSetScore
            setQuizSetScore(newScore)
            console.log(quizSetScore)


        }
        //todo  error case runs out of indexes

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

