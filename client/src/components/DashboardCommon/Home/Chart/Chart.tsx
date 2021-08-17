import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Chart = () => {

  const data = [
    {
      name: 'February',
      students: 0,
      teacher: 1,
      courses:2,
      amt: 2400,
    },
    {
      name: 'March',
      students: 0,
      teacher: 1,
      courses:3,
      amt: 2210,
    },
    {
      name: 'April',
      students: 2,
      teacher: 2,
      courses:4,
      amt: 2290,
    },
    {
      name: 'May',
      students: 4,
      teacher: 3,
      courses:5,
      amt: 2000,
    },
    {
      name: 'June',
      students: 4,
      teacher: 4,
      courses:6,
      amt: 2181,
    },
    {
      name: 'July',
      students: 4,
      teacher: 4,
      courses:6,
      amt: 2500,
    },
    {
      name: 'August',
      students: 4,
      teacher: 4,
      courses:6,
      amt: 2100,
    },
  ];


  return (
    <ResponsiveContainer width="100%" height="50%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="students" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="teacher" stroke="#82ca9d" />
          <Line type="monotone" dataKey="courses" stroke="#111827" />
        </LineChart>
      </ResponsiveContainer>
  );
};

export default Chart;