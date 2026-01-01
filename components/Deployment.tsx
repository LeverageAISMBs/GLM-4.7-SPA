import React from 'react';
import { MessageSquare, Brain, Package, Rocket } from 'lucide-react';

const Deployment: React.FC = () => {
  return (
    <section className="space-y-6 fade-in">
      <div className="bg-white rounded-xl shadow-sm p-6 border border-stone-200">
        <h2 className="text-2xl font-bold text-stone-800 mb-2">z.ai & Full Stack Deployment</h2>
        <p className="text-stone-600">
          The "killer feature" of the 4.7 ecosystem is the ability to go from prompt to deployed URL in one session. The z.ai platform provides ephemeral sandboxes that the model can deploy to directly.
        </p>
      </div>

      {/* Visual Pipeline */}
      <div className="bg-white rounded-xl shadow-sm p-8 border border-stone-200 overflow-x-auto">
        <h3 className="font-semibold text-center mb-10 text-stone-500 uppercase tracking-widest text-sm">The "Prompt-to-Product" Pipeline</h3>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 min-w-[600px] px-4">
          
          {/* Stage 1 */}
          <div className="flex flex-col items-center w-48 text-center group">
            <div className="w-16 h-16 bg-stone-100 border-2 border-stone-300 rounded-full flex items-center justify-center text-stone-600 mb-3 group-hover:border-stone-800 group-hover:bg-stone-800 group-hover:text-white transition-all duration-300">
              <MessageSquare size={28} />
            </div>
            <h4 className="font-bold text-stone-800">User Prompt</h4>
            <p className="text-xs text-stone-500 mt-1">"Build a React Todo app with Firebase sync"</p>
          </div>

          {/* Arrow */}
          <div className="hidden md:flex flex-1 items-center justify-center relative -mt-8">
            <div className="h-0.5 w-full bg-stone-200 relative">
               <div className="absolute right-0 -top-1.5 w-3 h-3 border-t-2 border-r-2 border-stone-200 rotate-45"></div>
            </div>
          </div>
          <div className="md:hidden w-0.5 h-12 bg-stone-200"></div>

          {/* Stage 2 */}
          <div className="flex flex-col items-center w-48 text-center group">
            <div className="w-16 h-16 bg-amber-50 border-2 border-amber-200 rounded-full flex items-center justify-center text-amber-600 mb-3 group-hover:border-amber-500 transition-all duration-300">
               <Brain size={28} />
            </div>
            <h4 className="font-bold text-stone-800">GLM 4.7 Engine</h4>
            <p className="text-xs text-stone-500 mt-1">Generates multi-file structure & dependency list</p>
          </div>

          {/* Arrow */}
          <div className="hidden md:flex flex-1 items-center justify-center relative -mt-8">
             <div className="h-0.5 w-full bg-stone-200 relative">
               <div className="absolute right-0 -top-1.5 w-3 h-3 border-t-2 border-r-2 border-stone-200 rotate-45"></div>
            </div>
          </div>
          <div className="md:hidden w-0.5 h-12 bg-stone-200"></div>

          {/* Stage 3 */}
          <div className="flex flex-col items-center w-48 text-center group">
            <div className="w-16 h-16 bg-blue-50 border-2 border-blue-200 rounded-full flex items-center justify-center text-blue-600 mb-3 group-hover:border-blue-500 transition-all duration-300">
              <Package size={28} />
            </div>
            <h4 className="font-bold text-stone-800">z.ai Sandbox</h4>
            <p className="text-xs text-stone-500 mt-1">Installs NPM packages & builds assets</p>
          </div>

          {/* Arrow */}
          <div className="hidden md:flex flex-1 items-center justify-center relative -mt-8">
             <div className="h-0.5 w-full bg-stone-200 relative">
               <div className="absolute right-0 -top-1.5 w-3 h-3 border-t-2 border-r-2 border-stone-200 rotate-45"></div>
            </div>
          </div>
          <div className="md:hidden w-0.5 h-12 bg-stone-200"></div>

          {/* Stage 4 */}
          <div className="flex flex-col items-center w-48 text-center group">
            <div className="w-16 h-16 bg-green-50 border-2 border-green-200 rounded-full flex items-center justify-center text-green-600 mb-3 group-hover:border-green-500 group-hover:bg-green-500 group-hover:text-white transition-all duration-300 shadow-lg">
              <Rocket size={28} />
            </div>
            <h4 className="font-bold text-stone-800">Live URL</h4>
            <p className="text-xs text-stone-500 mt-1">Instant HTTPS deployment</p>
          </div>

        </div>
      </div>

      <div className="bg-stone-900 rounded-xl shadow-lg p-6 text-stone-300">
        <h3 className="text-white font-bold text-lg mb-2">Supported Stacks for Auto-Deploy</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div className="bg-stone-800 p-3 rounded text-center hover:bg-stone-700 transition cursor-default">React / Vite</div>
          <div className="bg-stone-800 p-3 rounded text-center hover:bg-stone-700 transition cursor-default">Vue 3</div>
          <div className="bg-stone-800 p-3 rounded text-center hover:bg-stone-700 transition cursor-default">Node / Express</div>
          <div className="bg-stone-800 p-3 rounded text-center hover:bg-stone-700 transition cursor-default">Python / Flask</div>
        </div>
      </div>
    </section>
  );
};

export default Deployment;