/* pulls data from server to show previous quiz results 
data is user.quizzes[0].quizResults[0]

very complicated query

displays quizzes programmatically depending on quizzes.length
each quiz in quizzes array has a quizResults array with quizTaken and quizAnswer


displays multiple SingleQuiz results

depends on SingleQuiz.js JSX component

*/
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

const Dashboard = () => {
    const { loading, data } = useQuery(QUERY_USER);

    const user = data?.user || [];

    if (loading) {
        return <div>Loading...</div>;
    }

    console.log(user.quizzes)
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

export default Dashboard;