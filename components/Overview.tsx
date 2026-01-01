import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip } from 'recharts';
import { Zap, Brain, Wrench } from 'lucide-react';
import { ChartDataPoint } from '../types';

const data: ChartDataPoint[] = [
  { subject: 'Reasoning', glm: 95, standard: 75, fullMark: 100 },
  { subject: 'Context', glm: 100, standard: 60, fullMark: 100 },
  { subject: 'Speed', glm: 88, standard: 70, fullMark: 100 },
  { subject: 'Instruction', glm: 92, standard: 80, fullMark: 100 },
  { subject: 'Creativity', glm: 85, standard: 75, fullMark: 100 },
];

const Overview: React.FC = () => {
  return (
    <section className="space-y-6 fade-in h-full">
      <div className="bg-white rounded-xl shadow-sm p-6 border border-stone-200">
        <h2 className="text-2xl font-bold text-stone-800 mb-2">Executive Summary: The GLM 4.7 Leap</h2>
        <p className="text-stone-600 leading-relaxed">
          GLM 4.7 represents a significant paradigm shift in AI-assisted development. Unlike its predecessors, 4.7 is architected specifically for <strong className="font-semibold text-stone-900">long-context reasoning</strong> and <strong className="font-semibold text-stone-900">agentic coding workflows</strong>. This report details how the new monthly coding plans integrate with advanced CLI environments.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Key Metrics */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-stone-200 flex flex-col justify-center">
          <h3 className="font-semibold text-lg mb-6 text-stone-700">Core Improvements</h3>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-amber-100 text-amber-800 p-3 rounded-lg mr-4">
                <Zap size={24} />
              </div>
              <div>
                <h4 className="font-bold text-stone-800">Inference Speed</h4>
                <p className="text-sm text-stone-600 mt-1">Optimized quantization allows for 40% faster code generation compared to GLM-4, critical for real-time CLI autocomplete.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-800 p-3 rounded-lg mr-4">
                <Brain size={24} />
              </div>
              <div>
                <h4 className="font-bold text-stone-800">Context Window</h4>
                <p className="text-sm text-stone-600 mt-1">Expanded to support entire repository context, enabling "global" refactoring rather than file-level edits.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 text-green-800 p-3 rounded-lg mr-4">
                <Wrench size={24} />
              </div>
              <div>
                <h4 className="font-bold text-stone-800">Tool Use</h4>
                <p className="text-sm text-stone-600 mt-1">Native integration with OS-level terminals, allowing the model to run, debug, and fix its own code autonomously.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Radar Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-stone-200 flex flex-col items-center justify-center min-h-[350px]">
          <h3 className="font-semibold text-lg mb-2 text-stone-700 w-full text-left">Benchmark Comparison</h3>
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#4b5563', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="GLM 4.7"
                  dataKey="glm"
                  stroke="rgba(245, 158, 11, 1)"
                  fill="rgba(251, 191, 36, 0.5)"
                  fillOpacity={0.4}
                />
                <Radar
                  name="Standard LLM"
                  dataKey="standard"
                  stroke="rgba(120, 113, 108, 1)"
                  fill="rgba(168, 162, 158, 0.5)"
                  fillOpacity={0.2}
                />
                <Legend iconType="rect" wrapperStyle={{ paddingTop: '10px' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ color: '#444' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-stone-400 mt-2 text-center">Relative performance scores across key coding dimensions.</p>
        </div>
      </div>
    </section>
  );
};

export default Overview;