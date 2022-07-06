/* component for a single quiz, showing quizzes taken for the quizSet
quizTaken will say which quiz the user took. 
quizAnswer of "" will be not positive for that condition. 
if quizAnswer === quizTaken, then it is positive for that condition
for each quiz in quizzes, display 'yes' or 'no' based on quizAnswer
used in Dashboard.js
returns some type of quiz answers display
show a single QuizSet
button to remove a single QuizSet
*/
import React from 'react';
import { Link } from 'react-router-dom';
import useCollapse from 'react-collapsed';
import GaugeChart from 'react-gauge-chart'


import { useMutation } from '@apollo/client'

import { makeStyles, Typography, Box, CardContent, Grid } from '@material-ui/core';
import Button from '@mui/material/Button';

import { REMOVE_QUIZSET } from '../../utils/mutations';

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: '#18344A',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
		width: '100vw',
		padding: '0, 10px',
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
	text2: {
		fontSize: '1.3rem',
		textAlign: 'center',
		color: '#f5f5f5',
	},
	fontSize: '1.3rem',
	textAlign: 'center',
	color: '#f5f5f5',
	paddingBottom: theme.spacing(3),
	[theme.breakpoints.down('md')]: {
		fontSize: '1rem',
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
	card1: {
		backgroundColor: '#255070',
		display: 'flex',
		flexDirection: 'column',
		width: '200px'
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

const QuizList = ({ quizzes }) => {
	return quizzes.map(quiz => <Child key={quiz._id} quiz={quiz} />);
};

const GChart = ({ quiz }) => {
	const classes = useStyles();
	let rating;
	switch (quiz.quizAnswer.includes("positive")) {
		case true:
			rating = 0.67;
			break;
		case false:
			rating = 0.34;
			break;
		default:
			throw new Error('Rating Error!')
	}

	return (
		<section>
			<GaugeChart id="gauge-chart1"
				nrOfLevels={2}
				percent={rating}
				hideText={true}
				needleColor='white'
				colors={["#FF0000", "#00FF00"]}
			/>
			<Typography style={{ color: 'white', marginBottom: 10 }}>Results: {quiz.quizAnswer}</Typography>
		</section >
	);
}

const dateStamp = (unixTimestamp) => {
	const a = new Date(unixTimestamp * 1);
	return a.toLocaleDateString('en-US') + " " + a.toLocaleTimeString('en-US');
}

const Child = ({ quiz }) => {
	const classes = useStyles();
	const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
	const addr = `/singlequiz/${quiz._id}`
	const [removeQuizSet] = useMutation(REMOVE_QUIZSET);



	async function handleDelete(event) {
		try {
			const deleteConfirm = await removeQuizSet({
				variables: {
					quizSetId: quiz._id
				}
			});
		} catch (e) {
			console.log(e)
			window.location.replace('/dashboard');
			throw new Error(e)
		}
		window.location.replace('/dashboard');
	}

	return (
		<Grid item xs={12} md={6} lg={4}>
			<Box className="collapsible">
				<CardContent className={classes.card}>
					<Typography className={classes.cardText} variant='body1'  {...getToggleProps()}>
						{dateStamp(quiz.dateTaken)}
					</Typography>
					<Box {...getCollapseProps()}>
						<Box className="content">
							{quiz.quizResults.map((quiz, index) => {
								return (
									<div key={index}>
										<QuizSet
											key={quiz.quizTaken}
											quiz={quiz}
										/>
										<GChart key={quiz} quiz={quiz} />
									</div>
								)
							})}
							<Grid container spacing={3} sx={{ display: 'flex', flexDirection: 'row' }}>
								<Grid item xs={6}>
									<Button sx={{ backgroundColor: '#18344A', borderColor: 'white', border: 1 }}>
										<Link to={addr}>
											<span className={classes.buttonTitle}>
												See the results page
											</span>

										</Link>
									</Button>
								</Grid>
								<Grid item xs={6}>
									<Button sx={{ backgroundColor: '#18344A', borderColor: 'white', border: 1 }} onClick={handleDelete}>
										<span className={classes.buttonTitle}>Delete this Quiz Set</span>
									</Button>
								</Grid>

							</Grid>

						</Box>
					</Box>
				</CardContent>
			</Box>

		</Grid>
	);
};

const QuizSet = (quizResult) => {
	const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
	const classes = useStyles();


	return (
		<Box className="collapsible">
			<Typography className={classes.cardText} {...getToggleProps()}>
				{quizResult.quiz.quizTaken}
			</Typography>
			<Box  {...getCollapseProps()}>
				<Typography className={classes.cardText}>
					{quizResult.quiz.quizAnswer} <br /><br />
				</Typography>
			</Box>
		</Box>
	);
}

export default QuizList

// const QuizList = ({ quizzes }) => {
// 	const config = {
// 		defaultExpanded: quizzes.defaultExpanded || false,
// 		collapsedHeight: quizzes.collapsedHeight || 0
// 	};

// 	const [isExpanded, setExpanded] = useState();
// 	const { getCollapseProps, getToggleProps } = useCollapse(config);

// 	const handleClick = (id) => {
// 		setExpanded((prevState => ({...prevState, [id]: !prevState[id]})))
// 	};

// 	if (!quizzes.length) {
//     return <h3>No Quizzes Yet</h3>;
//   }

// 	return (
// 		<div>
// 			{quizzes && quizzes.map(quiz => (
// 				<div key={quiz.id} className="collapsible">
// 					<div className="header" {...getToggleProps()}>
// 						{isExpanded ? 'Collapse' : 'Expand'}
// 					</div>
// 					<div {...getCollapseProps()}>
// 						<section className="content">
// 							Now you can see the hidden content. <br/><br/>
// 							Click again to hide...
// 						</section>
// 					</div>
// 				</div>
// 			))}
// 		</div>
// 	);
// };