import React, { useState } from 'react';
import { Terminal, Cpu, Box, Code } from 'lucide-react';

type CliType = 'factory' | 'crush' | 'open';

const CliTools: React.FC = () => {
  const [activeCli, setActiveCli] = useState<CliType>('factory');

  return (
    <section className="space-y-6 fade-in">
      <div className="bg-white rounded-xl shadow-sm p-6 border border-stone-200">
        <h2 className="text-2xl font-bold text-stone-800 mb-2">Compatible CLI Environments</h2>
        <p className="text-stone-600">
          GLM 4.7 truly shines when decoupled from the web chat and embedded into your terminal. We tested three leading CLI wrappers compatible with the new API.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 border-b border-stone-200 overflow-x-auto">
        <button
          onClick={() => setActiveCli('factory')}
          className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
            activeCli === 'factory' ? 'border-stone-800 text-stone-800' : 'border-transparent text-stone-500 hover:text-stone-700'
          }`}
        >
          Factory AI CLI
        </button>
        <button
          onClick={() => setActiveCli('crush')}
          className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
            activeCli === 'crush' ? 'border-stone-800 text-stone-800' : 'border-transparent text-stone-500 hover:text-stone-700'
          }`}
        >
          Crush CLI
        </button>
        <button
          onClick={() => setActiveCli('open')}
          className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
            activeCli === 'open' ? 'border-stone-800 text-stone-800' : 'border-transparent text-stone-500 hover:text-stone-700'
          }`}
        >
          Open Code
        </button>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-b-xl rounded-tr-xl shadow-sm p-6 border border-t-0 border-stone-200 min-h-[300px]">
        {activeCli === 'factory' && (
          <div className="fade-in">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-full mr-4 text-indigo-700 font-bold">
                <Box size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Factory AI CLI</h3>
                <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded inline-block mt-1">Best for Autonomous Agents</span>
              </div>
            </div>
            <p className="text-stone-600 mb-6 leading-relaxed">
              Factory AI CLI provides a "Droid" like experience. You give it a high-level objective (e.g., "Refactor the auth module to use JWT"), and it plans, edits files, runs tests, and iterates.
            </p>
            <div className="bg-stone-900 text-stone-100 p-5 rounded-lg font-mono text-sm overflow-x-auto shadow-inner border border-stone-800">
              <div className="text-stone-400 select-none"># Install & Run</div>
              <div className="mb-2">$ npm install -g factory-ai-cli</div>
              <div>$ factory auth --model=glm-4.7</div>
              <div className="text-green-400 mt-2">➜ Authenticated via z.ai</div>
              <div className="text-green-400 animate-pulse">➜ Spawning Agent...</div>
            </div>
          </div>
        )}

        {activeCli === 'crush' && (
          <div className="fade-in">
            <div className="flex items-center mb-4">
              <div className="bg-red-100 p-3 rounded-full mr-4 text-red-700 font-bold">
                <Cpu size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Crush CLI</h3>
                <span className="text-xs bg-red-50 text-red-700 px-2 py-1 rounded inline-block mt-1">Best for Speed & Piping</span>
              </div>
            </div>
            <p className="text-stone-600 mb-6 leading-relaxed">
              Built in Rust, Crush is designed for blazing fast single-file edits and piping output. It excels at quick tasks like "Explain this error" or "Generate a regex".
            </p>
            <div className="bg-stone-900 text-stone-100 p-5 rounded-lg font-mono text-sm overflow-x-auto shadow-inner border border-stone-800">
              <div className="text-stone-400 select-none"># Pipe error logs directly to GLM</div>
              <div className="mb-3">$ cat error.log | crush "Fix this stack trace"</div>
              <div className="text-stone-400 select-none"># Quick function gen</div>
              <div>$ crush gen "Python script to scrape basic headers" &gt; scraper.py</div>
            </div>
          </div>
        )}

        {activeCli === 'open' && (
          <div className="fade-in">
            <div className="flex items-center mb-4">
              <div className="bg-teal-100 p-3 rounded-full mr-4 text-teal-700 font-bold">
                <Code size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Open Code</h3>
                <span className="text-xs bg-teal-50 text-teal-700 px-2 py-1 rounded inline-block mt-1">Community Favorite</span>
              </div>
            </div>
            <p className="text-stone-600 mb-6 leading-relaxed">
              The open-source community favorite. Highly configurable, supports local vector databases for context, and has a plugin system for custom tools.
            </p>
            <div className="bg-stone-900 text-stone-100 p-5 rounded-lg font-mono text-sm overflow-x-auto shadow-inner border border-stone-800">
              <div className="text-stone-400 select-none"># Start interactive session</div>
              <div className="mb-2">$ open-code session --context=./src</div>
              <div className="text-blue-400 mt-2 font-bold">? Select Model:</div>
              <div>&gt; GLM 4.7 (Selected)</div>
              <div className="opacity-50">  GPT-4o</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CliTools;