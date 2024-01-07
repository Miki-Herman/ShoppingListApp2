import React, {useEffect, useState} from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import './/style.css'

const StatePieChart = ({ data }) => {
    // Extract the counts of true and false state values
    const [true2, setTrue2 ] = useState(0)
    const [false2, setFalse2 ] = useState(0)

    useEffect(() => {
        const trueCount = data.filter(item => item.state === true).length;
        const falseCount = data.filter(item => item.state === false).length;

        setTrue2(trueCount)
        setFalse2(falseCount)
    }, [data]);

    // Data for the pie chart
    const pieChartData = [
        { name: 'Bought', value: true2 },
        { name: 'Needed', value: false2 },
    ];

    // Colors for the pie chart
    const COLORS = ['#0088FE', '#FF8042'];

    return (
        <div className='pie_chart'>
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
        </div>
    );
};

export default StatePieChart;