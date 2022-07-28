import { useState } from 'react'
import QuizSelectForm from '../components/quizSelect'
import questionBank from '../components/questionBank';
import QuestionView from '../components/QuestionView'


export default function Quiz(props) {
    const [quiz, setQuiz] = useState()
    const [view, setView] = useState(0);
    const [selectedQuizzes, setSelectedQuizzes] = useState({
        depression: false,
        anxiety: false,
        ptsd: false,
        sch: false,
        addiction: false,
    })
    const [question, setQuestion] = useState({});



    while (view === 0) {
        return (
            <QuizSelectForm view={view} setView={setView} selectedQuizzes={selectedQuizzes} setSelectedQuizzes={setSelectedQuizzes} quiz={quiz} setQuiz={setQuiz} />

        )
    }

    console.log(selectedQuizzes)
    // parse quizzes





    return (
        <QuestionView currentQuestion={questionBank.depressionQuestions[0]} />
    )







}


