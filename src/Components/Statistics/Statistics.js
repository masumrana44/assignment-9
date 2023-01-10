import React, { useState } from 'react';
import './Statistics.css'
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, ReferenceLine, Area, Legend } from 'recharts';


const Statistics = () => {

    const data = useLoaderData();
    const main = data.data;
    console.log(main)
    return (
        <div>
            <h1>The Quiz Rechart</h1>

            <div className='rechart'>
                <LineChart width={730} height={250} data={main}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend verticalAlign="top" height={36} />
                    <Line name="Quiz of Web Development" type="monotone" dataKey="total" stroke="#8884d8" />
                    <Line name=" Total Quiz" type="monotone" dataKey="total" stroke="#82ca9d" />
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;