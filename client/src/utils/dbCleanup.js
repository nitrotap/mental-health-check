/* js file to delete quizzes without quiz results
 * todo
*/
import React from "react";
import { useQuery } from "@apollo/client";


export const QUERY_QUIZSET = gql`
    query quizSet($quizSetId: String) {
        quizSet(quizSetId: $quizSetId) {
            quizResults {
            quizTaken
            quizAnswer
            }
        }
    }
`

const useDbCleanup = () => {
    const { loading, data } = useQuery(QUERY_QUIZSET)





}


export default useDbCleanup;