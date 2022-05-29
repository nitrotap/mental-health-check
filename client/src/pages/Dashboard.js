import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

const Dashboard = () => {
    const { loading, data } = useQuery(QUERY_USER);


    const user = data?.user || [];
    console.log(user)

    return (
        <main>
            <h1>Dashboard</h1>
        </main>
    );
};

export default Dashboard;