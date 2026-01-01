import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { barChartData } from '../../../data/dummy';

const Bars = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-gray-800 rounded-3xl drop-shadow-xl">
      
      <div className="mb-10">
        <p className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Course Completion Rates
        </p>
      </div>

      <div className="w-full h-[420px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={barChartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" className="opacity-50" />
            
            <XAxis dataKey="x" stroke="#6b7280" />
            <YAxis 
            allowDecimals={false}
            stroke="#6b7280" 
            tick={{ fill: '#6b7280' }}
            />

            <Tooltip 
            cursor={{ fill: 'transparent' }}
            formatter={(value) => [`${value} Students`]} 
            contentStyle={{ backgroundColor: '#fff', borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
            />
            
            <Legend />

            <Bar 
              name="Active Students"
              dataKey="Active" 
              fill="#03C9D7" 
              radius={[0, 0, 0, 0]} 
              barSize={15}
            />

            <Bar 
              name="Course Completed"
              dataKey="Completed" 
              fill="#7352FF" 
              radius={[0, 0, 0, 0]} 
              barSize={15}
            />

            <Bar 
              name="Dropped Out"
              dataKey="Dropped" 
              fill="#FF5C8E" 
              radius={[0, 0, 0, 0]} 
              barSize={15}
            />

          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Bars;