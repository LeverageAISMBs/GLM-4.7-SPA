import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';
import { Check, ArrowRight } from 'lucide-react';
import { PlanDataPoint } from '../types';

const planData: PlanDataPoint[] = [
  { name: 'Starter', cost: 0.15, color: '#a8a29e' },
  { name: 'Pro', cost: 0.08, color: '#f59e0b' },
  { name: 'Comp A', cost: 0.22, color: '#e5e7eb' },
  { name: 'Comp B', cost: 0.25, color: '#e5e7eb' },
];

const Plans: React.FC = () => {
  const handleSelectPlan = (plan: string) => {
    alert(`You selected the ${plan} plan. In a real app, this would redirect to the z.ai checkout.`);
  };

  return (
    <section className="space-y-6 fade-in pb-10">
      <div className="bg-white rounded-xl shadow-sm p-6 border border-stone-200">
        <h2 className="text-2xl font-bold text-stone-800 mb-2">Monthly Coding Plans</h2>
        <p className="text-stone-600">
          GLM 4.7 introduces tiered access optimized for different developer velocities. The focus has shifted from raw token counts to "Reasoning Hours" and "Agentic Actions".
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Starter Plan */}
        <div 
          onClick={() => handleSelectPlan('STARTER')}
          className="bg-white rounded-xl shadow-sm border border-stone-200 p-6 flex flex-col hover:border-stone-400 transition-colors cursor-pointer group"
        >
          <div className="text-stone-500 font-medium mb-2">Developer Starter</div>
          <div className="text-3xl font-bold text-stone-900 mb-4">$15<span className="text-sm font-normal text-stone-500">/mo</span></div>
          <ul className="text-sm space-y-3 mb-6 text-stone-600 flex-1">
            {['1M Fast Tokens / month', 'Standard Context (128k)', 'Basic CLI Access', 'Community Support'].map((item, i) => (
              <li key={i} className="flex items-center"><Check size={16} className="mr-2 text-stone-400" />{item}</li>
            ))}
          </ul>
          <button className="w-full py-2 bg-stone-100 text-stone-700 font-semibold rounded group-hover:bg-stone-200 transition-colors">View Details</button>
        </div>

        {/* Pro Plan */}
        <div 
          onClick={() => handleSelectPlan('PRO')}
          className="bg-stone-800 rounded-xl shadow-lg border border-stone-700 p-6 flex flex-col transform md:-translate-y-2 cursor-pointer hover:bg-stone-750 transition-colors"
        >
          <div className="text-amber-400 font-medium mb-2 flex items-center justify-between">
            Pro Coder 
            <span className="bg-amber-400 text-stone-900 text-xs px-2 py-1 rounded font-bold">Recommended</span>
          </div>
          <div className="text-3xl font-bold text-white mb-4">$30<span className="text-sm font-normal text-stone-400">/mo</span></div>
          <ul className="text-sm space-y-3 mb-6 text-stone-300 flex-1">
            {[
              { text: 'Unlimited High-Speed Tokens', bold: true },
              { text: '1M Context Window (Repo-wide)', bold: true },
              { text: 'Priority CLI Queue (Factory AI)', bold: false },
              { text: 'Private Deployments on z.ai', bold: false }
            ].map((item, i) => (
              <li key={i} className="flex items-center">
                <Check size={16} className="mr-2 text-amber-400" />
                {item.bold ? <strong>{item.text}</strong> : item.text}
              </li>
            ))}
          </ul>
          <button className="w-full py-2 bg-amber-400 text-stone-900 font-bold rounded hover:bg-amber-300 transition-colors flex items-center justify-center">
            Select Pro <ArrowRight size={16} className="ml-2" />
          </button>
        </div>

        {/* Team Plan */}
        <div 
          onClick={() => handleSelectPlan('TEAM')}
          className="bg-white rounded-xl shadow-sm border border-stone-200 p-6 flex flex-col hover:border-stone-400 transition-colors cursor-pointer group"
        >
          <div className="text-stone-500 font-medium mb-2">Team / Enterprise</div>
          <div className="text-3xl font-bold text-stone-900 mb-4">$60<span className="text-sm font-normal text-stone-500">/user</span></div>
          <ul className="text-sm space-y-3 mb-6 text-stone-600 flex-1">
            {['Shared Context & Knowledge', 'Admin Controls & SSO', 'Dedicated Inference Shards', 'On-prem Container Options'].map((item, i) => (
              <li key={i} className="flex items-center"><Check size={16} className="mr-2 text-stone-400" />{item}</li>
            ))}
          </ul>
          <button className="w-full py-2 bg-stone-100 text-stone-700 font-semibold rounded group-hover:bg-stone-200 transition-colors">Contact Sales</button>
        </div>
      </div>

      {/* Comparison Chart */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-stone-200 mt-6">
        <h3 className="font-semibold text-lg mb-4 text-stone-700">Cost Efficiency Analysis</h3>
        <p className="text-sm text-stone-500 mb-4">Comparing cost per 1k lines of production-ready code generation.</p>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={planData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
              <XAxis type="number" tick={{ fontSize: 12, fill: '#6b7280' }} tickFormatter={(val) => `$${val}`} />
              <YAxis dataKey="name" type="category" tick={{ fontSize: 12, fill: '#374151', fontWeight: 600 }} width={80} />
              <Tooltip 
                 formatter={(value: number) => [`$${value}`, 'Cost per 1k lines']}
                 contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb' }}
                 cursor={{fill: 'transparent'}}
              />
              <Bar dataKey="cost" radius={[0, 4, 4, 0]} barSize={40}>
                {planData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default Plans;