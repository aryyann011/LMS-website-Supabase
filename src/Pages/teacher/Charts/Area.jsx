import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { areaChartData } from '../../../data/dummy';

const Areas = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-gray-800 rounded-3xl drop-shadow-xl">
      
      <div className="mb-10">
        <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Monthly Revenue by Region
        </p>
      </div>

      <div className="w-full h-[420px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={areaChartData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUSA" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#03C9D7" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#03C9D7" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorFrance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7352FF" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#7352FF" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorGermany" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF5C8E" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#FF5C8E" stopOpacity={0}/>
              </linearGradient>
            </defs>

            <XAxis dataKey="x" stroke="#6b7280" />
            <YAxis 
            stroke="#6b7280" 
            tick={{ fill: '#6b7280' }}
            tickFormatter={(value) => `$${value}M`} 
            />

            <Tooltip 
            formatter={(value) => [`$${value}M`, "Revenue"]}
            contentStyle={{ backgroundColor: '#fff', borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
            />
            <CartesianGrid strokeDasharray="3 3" className="opacity-50" />

            <Legend verticalAlign="bottom" height={36}/>
            <Area 
              type="monotone" 
              dataKey="USA" 
              stroke="#03C9D7" 
              fillOpacity={1} 
              fill="url(#colorUSA)" 
            />
            <Area 
              type="monotone" 
              dataKey="France" 
              stroke="#7352FF" 
              fillOpacity={1} 
              fill="url(#colorFrance)" 
            />
            <Area 
              type="monotone" 
              dataKey="Germany" 
              stroke="#FF5C8E" 
              fillOpacity={1} 
              fill="url(#colorGermany)" 
            />

          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Areas;