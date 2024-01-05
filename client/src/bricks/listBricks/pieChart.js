import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const StatePieChart = ({ data }) => {
    // Extract the counts of true and false state values
    const trueCount = data.filter(item => item.state === true).length;
    const falseCount = data.filter(item => item.state === false).length;

    // Data for the pie chart
    const pieChartData = [
        { name: 'True', value: trueCount },
        { name: 'False', value: falseCount },
    ];

    // Colors for the pie chart
    const COLORS = ['#0088FE', '#FF8042'];

    return (
        <PieChart width={400} height={300}>
            <Pie
                data={pieChartData}
                cx={200}
                cy={150}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
            >
                {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    );
};

export default StatePieChart;