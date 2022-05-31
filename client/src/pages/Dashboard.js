/* pulls data from server to show previous quiz results 
data is user.quizzes[0].quizResults[0]

very complicated query

displays quizzes programmatically depending on quizzes.length
each quiz in quizzes array has a quizResults array with quizTaken and quizAnswer

displays multiple SingleQuiz results
depends on SingleQuiz/index.js JSX component
*/
import React from 'react';
import { useQuery } from '@apollo/client';

import QuizList from '../components/QuizList';

import { QUERY_USER } from '../utils/queries';
// import AuthService from '../utils/auth';

const Dashboard = () => {
	const { loading, data } = useQuery(QUERY_USER);
	const user = data?.user || {};

	if (loading) {
		return <div>Loading...</div>;
	}

	// console.log(user);
	// console.log(user.quizzes);
	// console.log(user.quizzes[0].dateTaken);
	// console.log(user.quizzes[0].quizResults[0].quizAnswer);
	// console.log(user.quizzes[0].quizResults[0].quizTaken);

	return (
		<main>
			<h2 className="bg-dark text-primary p-3">
				Dashboard
			</h2>
			<div className='flex-row text-primary justify-space-between'>
				<div className='col-12 col-lg-8 mb-3'>
					<QuizList quizzes={user.quizzes} />
				</div>
			</div>
		</main>
	);
};

export default Dashboard;