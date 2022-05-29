import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

const Dashboard = () => {
    const { loading, data } = useQuery(QUERY_USER);


    const user = data?.user || [];
    console.log(user)

    return (
        <main>
            <div className='flex-row justify-space-between'>
                <div className='col-12 mb-3'>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;