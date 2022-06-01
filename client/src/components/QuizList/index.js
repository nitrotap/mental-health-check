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
import React from 'react';
import { Link } from 'react-router-dom';
import useCollapse from 'react-collapsed';

const QuizList = ({ quizzes }) => {
	// const quizResults = quizzes[0].quizResults;
	// console.log(quizzes)
  return quizzes.map(quiz => <Child key={quiz._id} quiz={quiz} />);
};

const Child = ({ quiz }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
	const addr = `/singlequiz/${quiz._id}`
	// console.log(quiz);

  return (
    <div className="collapsible">
			<div className="header" {...getToggleProps()}>
				{quiz.dateTaken}
			</div>
			<div {...getCollapseProps()}>
				<section className="content">
					<Link to={addr}>See the results Page</Link>
					{quiz.quizResults.map(quiz => <QuizSet key={quiz.quizTaken} quiz={quiz} />)}
					{/* {quiz.quizResults[0].quizAnswer} <br/><br/> */}
				</section>
			</div>
		</div>
  );
};

const QuizSet = (quizResult) => {
	const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
	// console.log(quizResult);

  return (
    <div className="collapsible">
			<div className="header" {...getToggleProps()}>
				{quizResult.quiz.quizTaken}
			</div>
			<div {...getCollapseProps()}>
				<section className="content">
					{quizResult.quiz.quizAnswer} <br/><br/>
				</section>
			</div>
		</div>
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