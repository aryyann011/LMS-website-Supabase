import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { pieChartData } from '../../../data/dummy';

const PiePage = () => {
  const COLORS = ['#03C9D7', '#7352FF', '#FF5C8E', '#00C292', '#FB9678'];

  // This function calculates what text to show next to each slice
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    return `${(percent * 100).toFixed(0)}%`;
  };

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-gray-800 rounded-3xl drop-shadow-xl">
      
      <div className="mb-10">
        <p className="text-gray-400 font-medium">Profitability Analysis</p>
        <p className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Revenue by Category
        </p>
      </div>

      <div className="w-full h-[420px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieChartData}
              cx="50%" 
              cy="50%" 
              innerRadius={100} 
              outerRadius={140}
              paddingAngle={5}
              dataKey="value"
              label={renderCustomizedLabel}
              labelLine={true} 
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            
            <Tooltip 
              formatter={(value) => [`$${value.toLocaleString()}`, "Revenue"]}
              contentStyle={{ backgroundColor: '#fff', borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
            />
            
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PiePage;