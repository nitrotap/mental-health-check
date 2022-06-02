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
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: '#18344A',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100vw',
		marginTop: '60px',
		padding: '0, 10px',
		marginBottom: 300,
	},
	title: {
		fontSize: '4rem',
		textAlign: 'center',
		color: 'white',
		paddingBottom: theme.spacing(3),
		[theme.breakpoints.down('md')]: {
			fontSize: '2rem',
		},
	},
	text: {
		fontSize: '1.3rem',
		textAlign: 'center',
		color: '#f5f5f5',
		paddingBottom: theme.spacing(3),
		[theme.breakpoints.down('md')]: {
			fontSize: '1rem',
		},
	},
	hero: {
		width: '50%',
		marginTop: theme.spacing(4),
		[theme.breakpoints.down('sm')]: {
			width: '75%',
		},
	},
	img: {
		aspectRatio: 4 / 5,
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	card: {
		backgroundColor: '#255070',
		display: 'flex',
		flexDirection: 'column',
	},
	cardButtons: {
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: '#255070',
		justifyContent: 'space-evenly',
		alignItems: 'center',

	},
	cardTitle: {
		color: '#f5f5f5',
		fontSize: '2.5rem',
		textAlign: 'center',
		[theme.breakpoints.down('md')]: {
			fontSize: '1.5rem',
		},
	},
	cardText: {
		fontSize: '1.3rem',
		textAlign: 'center',
		color: 'white',
		[theme.breakpoints.down('md')]: {
			fontSize: '1rem',
		},
	},
	button: {
		backgroundColor: '#18344A',
		padding: '15px',
		fontSize: '1rem',
	},
	buttonTitle: {
		color: 'white'
	}
}));


const Dashboard = () => {
	const classes = useStyles();

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
					depQuizCount++
				} else if (user.quizzes[i].quizResults[j].quizAnswer === 'negative for depression') {
					depQuizCount++
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

				if (user.quizzes[i].quizResults[j].quizAnswer === 'positive for anxiety') {
					anxCount++
					anxQuizCount++
				} else if (user.quizzes[i].quizResults[j].quizAnswer === 'negative for anxiety') {
					anxQuizCount++
				}
			}
		}
		console.log(anxCount)

		let ptsdCount = 0
		let ptsdQuizCount = 0
		for (let i = 0; i < user.quizzes.length; i++) {
			console.log(user.quizzes[i].dateTaken)

			for (let j = 0; j < user.quizzes[i].quizResults.length; j++) {

				console.log(user.quizzes[i].quizResults[j].quizAnswer)
				if (user.quizzes[i].quizResults[j].quizAnswer === 'positive for ptsd') {
					ptsdCount++
					ptsdQuizCount++
				} else if (user.quizzes[i].quizResults[j].quizAnswer === 'negative for ptsd') {
					ptsdQuizCount++
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

				if (user.quizzes[i].quizResults[j].quizAnswer === 'positive for schizophrenia') {
					schCount++
					schQuizCount++
				} else if (user.quizzes[i].quizResults[j].quizAnswer === 'negative for schizophrenia') {
					schQuizCount++
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

				if (user.quizzes[i].quizResults[j].quizAnswer === 'positive for addiction') {
					addictionCount++
					addictionQuizCount++
				} else if (user.quizzes[i].quizResults[j].quizAnswer === 'negative for addiction') {
					addictionQuizCount++
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
					backgroundColor: 'white',
					position: 'relative',
					width: '30vw',
				}}>
					<Chart count={count} quizCount={quizCount} />
				</Box>)
		}
	}

	return (
		<Container className={classes.container}>
			<h2 className="bg-dark text-primary p-3">
				Dashboard
			</h2>
			{chartHandler(user.quizzes.length)}
			<div className='flex-row text-primary justify-space-between'>
				<div className='col-12 col-lg-8 mb-3'>
					<QuizList quizzes={user.quizzes} />
				</div>
			</div>
		</Container>
	);
};

export default Dashboard;