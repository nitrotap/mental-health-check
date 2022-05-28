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
    console.log(quizSetId)

    const { loading, data } = useQuery(QUERY_QUIZSET, { variables: { quizSetId: quizSetId } })

    console.log(data)

    const quizSet = data?.quizSet || [];
    console.log(quizSet)

    if (loading) {
        return <div>Loading...</div>;
    }

    console.log(data)




    return (
        <div>
            DATA
        </div>
    )
}

export default SingleQuiz