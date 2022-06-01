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
import { QUERY_USER, QUERY_QUIZSET } from '../utils/queries';
import QuizList from '../components/QuizList';
import Chart from '../components/Chart';
import { Box } from '@mui/system';

const Dashboard = () => {

	const { loading, data } = useQuery(QUERY_USER);
	const user = data?.user || {};

	if (loading) {
		return <div>Loading...</div>;
	}


	let count = [];
	let quizCount = []
	if (user.quizzes.length > 0) {
		let depCount = 0
		let depQuizCount = 0
		for (let i = 0; i < user.quizzes.length; i++) {
			console.log(user.quizzes[i].dateTaken)

			for (let j = 0; j < user.quizzes[i].quizResults.length; j++) {
				console.log(user.quizzes[i].quizResults[j].quizAnswer)
				depQuizCount++
				if (user.quizzes[i].quizResults[j].quizAnswer === 'positive for depression') {
					depCount++
				}
			}
		}
		console.log(depCount)

		let anxCount = 0
		let anxQuizCount = 0
		for (let i = 0; i < user.quizzes.length; i++) {
			console.log(user.quizzes[i].dateTaken)

			for (let j = 0; j < user.quizzes[i].quizResults.length; j++) {
				console.log(user.quizzes[i].quizResults[j].quizAnswer)
				anxQuizCount++
				if (user.quizzes[i].quizResults[j].quizAnswer === 'positive for anxiety') {
					anxCount++
				}
			}
		}
		console.log(anxCount)

		let ptsdCount = 0
		let ptsdQuizCount = 0
		for (let i = 0; i < user.quizzes.length; i++) {
			console.log(user.quizzes[i].dateTaken)

			for (let j = 0; j < user.quizzes[i].quizResults.length; j++) {
				ptsdQuizCount++
				console.log(user.quizzes[i].quizResults[j].quizAnswer)
				if (user.quizzes[i].quizResults[j].quizAnswer === 'positive for ptsd') {
					ptsdCount++
				}
			}
		}
		console.log(ptsdCount)


		let schCount = 0
		let schQuizCount = 0
		for (let i = 0; i < user.quizzes.length; i++) {
			console.log(user.quizzes[i].dateTaken)

			for (let j = 0; j < user.quizzes[i].quizResults.length; j++) {
				console.log(user.quizzes[i].quizResults[j].quizAnswer)
				schQuizCount++
				if (user.quizzes[i].quizResults[j].quizAnswer === 'positive for schizophrenia') {
					schCount++
				}
			}
		}
		console.log(schCount)

		let addictionCount = 0
		let addictionQuizCount = 0
		for (let i = 0; i < user.quizzes.length; i++) {
			console.log(user.quizzes[i].dateTaken)

			for (let j = 0; j < user.quizzes[i].quizResults.length; j++) {
				console.log(user.quizzes[i].quizResults[j].quizAnswer)
				addictionQuizCount++
				if (user.quizzes[i].quizResults[j].quizAnswer === 'positive for addiction') {
					addictionCount++
				}
			}
		}
		console.log(addictionCount)

		count = [depCount, anxCount, ptsdCount, schCount, addictionCount]
		quizCount = [depQuizCount, anxQuizCount, ptsdQuizCount, schQuizCount, addictionQuizCount]
		console.log(quizCount)
		console.log(count)

	}




	const chartHandler = (len) => {
		if (len > 0) {
			return (
				<Box sx={{
					backgroundColor: 'white'
				}}>
					<Chart count={count} />
				</Box>)
		}
	}

	return (
		<main>
			<h2 className="bg-dark text-primary p-3">
				Dashboard
			</h2>
			{chartHandler(user.quizzes.length)}
			<div className='flex-row text-primary justify-space-between'>
				<div className='col-12 col-lg-8 mb-3'>
					<QuizList quizzes={user.quizzes} />
				</div>
			</div>
		</main>
	);
};

export default Dashboard;