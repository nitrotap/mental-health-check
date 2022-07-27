import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Count Data for Positive Responses',
        },
    },
};

const labels = ['Depression', 'Anxiety', 'PTSD', 'Schizophrenia', 'Addiction'];

function Chart(props) {
    let { count, quizCount } = props;
    const data = {
        labels,
        datasets: [
            {
                label: '# of positive responses',
                data: count,
                backgroundColor: '#326B96',
            },
            {
                label: '# of quizzes taken',
                data: quizCount,
                backgroundColor: '#FFCE56',
            }
        ],
    };

    return <Bar options={options} data={data} />;
}

export default Chart;