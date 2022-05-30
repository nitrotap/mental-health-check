import { useEffect, useState } from "react";
import { useQuery, useMutation } from '@apollo/client'
import questionBank from "../../utils/questionBank"
import Question from "../Question";
import { QUERY_USER } from "../../utils/queries";
import { ADD_QUIZRESULT, ADD_QUIZSET } from "../../utils/mutations";

const { depressionQuestions, anxietyQuestions, ptsdQuestions, schQuestions, impairmentQuestions, addictionQuestions } = questionBank;

const grader = function () {
    //todo quiz end logic here

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
            case 'schizophrenia':
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
            try {
                const { data } = await addQuizSet()
                console.log(data.addQuizSet._id)
                setCurrentQuizSetId(data.addQuizSet._id)
            } catch (e) {
                window.location.replace('/login')
            }
        }
        startQuiz()
    }, [addQuizSet])

    const [quizSetScore, setQuizSetScore] = useState(0)
    const [addQuizResult] = useMutation(ADD_QUIZRESULT)

    async function handleSubmit(response) {
        // console.log(response);
        // end of quiz
        if (index >= currentQuiz.length - 1) {
            setIndex(0)
            console.log('END OF QUIZ ' + currentQuizName)
            //todo calculate score bug: score is -1 somehow
            if (quizSetScore >= (currentQuiz.length / 2)) {
                console.log('positive for ' + currentQuizName)
                const currentQuizResult = 'positive for ' + currentQuizName

                try {
                    const { data } = await addQuizResult({
                        variables: {
                            quizSetId: currentQuizSetId,
                            quizTaken: currentQuizName, quizAnswer: currentQuizResult
                        }
                    })
                    setQuizSetScore(0)
                } catch (e) {
                    console.log(e)
                    throw new Error(e)
                }

            } else {
                console.log('negative for ' + currentQuizName)
                const currentQuizResult = 'negative for ' + currentQuizName

                try {
                    const { data } = await addQuizResult({
                        variables: {
                            quizSetId: currentQuizSetId,
                            quizTaken: currentQuizName, quizAnswer: currentQuizResult
                        }
                    })
                    setQuizSetScore(0)
                } catch (e) {
                    console.log(e)
                    throw new Error(e)
                }
            }

            handleSubmitQuiz(currentQuizSetId)

        } else {
            setIndex(index + 1)
            // console.log(response.score + quizSetScore)
            let newScore = response.score + quizSetScore
            setQuizSetScore(newScore)
        }
        //todo  error case runs out of indexes

    }
    const quizStyle = {
        width: '100%',
        backgroundColor: 'white',
        textAlign: 'center',
    }
    const quizTextStyle = {
        fontSize: '24pt',

    }
    return (
        <div>
            <div style={quizStyle}>
                <p style={quizTextStyle}>{currentQuizName} quiz</p>
                <p style={quizTextStyle}>question {index + 1} of {currentQuiz.length}</p>
            </div>
            <div>
                <Question currentQuestion={currentQuiz[index]} setCurrentQuestion={setIndex} handleSubmit={handleSubmit}></Question>
            </div>
        </div>
    )
}

export default QuizSet

