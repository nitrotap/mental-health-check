/* pulls data from server to show quiz results 
data is user.quizzes[0].quizResults[0]

very complicated query

displays a single SingleQuiz results

depends on SingleQuiz/index.js JSX component*/

import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_QUIZSET } from "../utils/queries";

const Results = () => {
	const { id: quizSetId } = useParams();
	const { loading, data } = useQuery(QUERY_QUIZSET, { variables: { quizSetId: quizSetId } });

  const user = data?.user || [];

  if (loading) {
    return <div>Loading...</div>;
  }

  // console.log(user.quizzes)
  // console.log(user.quizzes[0].dateTaken)
  // console.log(user.quizzes[0].quizResults[0].quizAnswer)
  // console.log(user.quizzes[0].quizResults[0].quizTaken)



  return (
    <main>
      <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'>
          {/* placeholder text below - need to loop through both quizzes array and quizResults array */}
          {user.quizzes[0].dateTaken}
          {user.quizzes[0].quizResults[0].quizAnswer}
          {user.quizzes[0].quizResults[0].quizTaken}
        </div>
      </div>
    </main>
  );
};

export default Results;