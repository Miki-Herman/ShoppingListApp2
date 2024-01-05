import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const BarChartComponent = ({ data }) => {
    return (
        <BarChart width={1200} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="totalItems" fill="#8884d8" />
        </BarChart>
    );
};

export default BarChartComponent;