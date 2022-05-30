/* component for a single quiz, showing quizzes taken for the quizSet

quizTaken will say which quiz the user took. 
quizAnswer of "" will be not positive for that condition. 
if quizAnswer === quizTaken, then it is positive for that condition
for each quiz in quizzes, display 'yes' or 'no' based on quizAnswer

used in Dashboard.js

returns some type of quiz answers display

show a single QuizSet

button to remove a single QuizSet

assigned to:


*/

import React from "react";

import { useQuery } from "@apollo/client";
import { QUERY_QUIZSET, QUERY_USER } from "../../utils/queries";
import { useParams } from "react-router-dom";


const SingleQuiz = (props) => {
    // const { loading, data } = useQuery(QUERY_USER)
    // console.log(data)

    const { id: quizSetId } = useParams();
    const { loading, data } = useQuery(QUERY_QUIZSET, { variables: { quizSetId: quizSetId } })

    if (loading) {
        return <div>Loading...</div>;
    }

    try {
        console.log(data.quizSet.dateTaken)
        console.log(data.quizSet.quizResults[0].quizAnswer)
        console.log(data.quizSet.quizResults[0].quizTaken)
    } catch (e) {
        console.log(e)
        // redirect to login screen on not logged in or invalid id
        window.alert('An invalid ID or other error has occurred.')
        window.history.back()
    }




    return (
        <div>
            DATA
        </div>
    )
}

export default SingleQuiz