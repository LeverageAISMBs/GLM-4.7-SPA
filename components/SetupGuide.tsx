import React, { useState } from 'react';
import { Key, Settings, Layers } from 'lucide-react';

const SetupGuide: React.FC = () => {
  const [step, setStep] = useState(1);

  return (
    <section className="space-y-6 fade-in">
      <div className="bg-white rounded-xl shadow-sm p-6 border border-stone-200">
        <h2 className="text-2xl font-bold text-stone-800 mb-2">Getting the Most Out of GLM 4.7</h2>
        <p className="text-stone-600">
          Proper configuration is key to unlocking the reasoning potential. Follow this optimized setup workflow.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Navigation Sidebar for Setup */}
        <div className="md:w-1/4 space-y-2">
          <button 
            onClick={() => setStep(1)}
            className={`w-full text-left p-3 rounded flex items-center transition-all ${
              step === 1 ? 'bg-stone-800 text-white font-medium shadow-md' : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <Key size={16} className="mr-2" /> 1. API Key Gen
          </button>
          <button 
            onClick={() => setStep(2)}
            className={`w-full text-left p-3 rounded flex items-center transition-all ${
              step === 2 ? 'bg-stone-800 text-white font-medium shadow-md' : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
             <Settings size={16} className="mr-2" /> 2. Environment
          </button>
          <button 
            onClick={() => setStep(3)}
            className={`w-full text-left p-3 rounded flex items-center transition-all ${
              step === 3 ? 'bg-stone-800 text-white font-medium shadow-md' : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
             <Layers size={16} className="mr-2" /> 3. Context Opt
          </button>
        </div>

        {/* Step Content */}
        <div className="md:w-3/4 bg-white rounded-xl shadow-sm border border-stone-200 p-6 min-h-[350px]">
          
          {step === 1 && (
            <div className="fade-in space-y-4">
              <h3 className="text-lg font-bold flex items-center"><Key className="mr-2 text-stone-400" /> Generating your z.ai Keys</h3>
              <p className="text-stone-600">Navigate to the z.ai developer dashboard. For GLM 4.7, ensure you enable "Beta Features" to access the extended context window.</p>
              
              <div className="p-4 bg-yellow-50 text-yellow-800 rounded border border-yellow-200 text-sm">
                <strong>Tip:</strong> Create separate keys for Production and Development CLI use to track spending accurately.
              </div>
              
              <div className="bg-stone-100 p-4 rounded text-center text-stone-500 font-mono text-sm border border-stone-200 mt-4">
                Dashboard &gt; API Keys &gt; Create New &gt; "CLI_Access"
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="fade-in space-y-4">
              <h3 className="text-lg font-bold flex items-center"><Settings className="mr-2 text-stone-400" /> Environment Configuration</h3>
              <p className="text-stone-600">Set your environment variables globally. Most CLIs (Factory, Crush) will look for <code>GLM_API_KEY</code> by default.</p>
              
              <div className="bg-stone-900 text-stone-100 p-4 rounded-lg font-mono text-sm shadow-inner">
                <div>export GLM_API_KEY="sk-..."</div>
                <div className="mt-2">export GLM_MODEL="glm-4.7-turbo"</div>
                <div className="text-stone-500 mt-3 select-none"># Optional: Set max tokens to avoid runway costs</div>
                <div>export GLM_MAX_TOKENS=4096</div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="fade-in space-y-4">
              <h3 className="text-lg font-bold flex items-center"><Layers className="mr-2 text-stone-400" /> Context Optimization Strategies</h3>
              <p className="text-stone-600">GLM 4.7 has a massive context window, but garbage in = garbage out. Use <code>.glmignore</code> files (similar to .gitignore) to prevent your CLI from feeding lockfiles or assets to the model.</p>
              
              <div className="border border-stone-200 rounded p-4 bg-stone-50">
                <h4 className="font-bold text-sm mb-2 text-stone-700">Recommended .glmignore:</h4>
                <pre className="text-xs text-stone-600 font-mono bg-white p-3 rounded border border-stone-200">
{`node_modules/
dist/
package-lock.json
*.png
*.svg
.git/`}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SetupGuide;