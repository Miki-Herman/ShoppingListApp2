import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import './/mainBricks.css'

const BarChartComponent = ({ data }) => {
    return (
        <div className='bar_chart'>
            <BarChart width={800} height={400} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="totalItems" fill="#8884d8" />
            </BarChart>
        </div>
    )
};

export default BarChartComponent;