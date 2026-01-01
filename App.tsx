import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Overview from './components/Overview';
import Plans from './components/Plans';
import CliTools from './components/CliTools';
import SetupGuide from './components/SetupGuide';
import Deployment from './components/Deployment';
import { SectionId } from './types';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<SectionId>(SectionId.Overview);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = (id: SectionId) => {
    setCurrentSection(id);
    setIsMobileMenuOpen(false);
  };

  const renderContent = () => {
    switch (currentSection) {
      case SectionId.Overview: return <Overview />;
      case SectionId.Plans: return <Plans />;
      case SectionId.Cli: return <CliTools />;
      case SectionId.Setup: return <SetupGuide />;
      case SectionId.Deployment: return <Deployment />;
      default: return <Overview />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-stone-50 text-stone-800">
      
      {/* Sidebar (Desktop) */}
      <Sidebar currentSection={currentSection} onNavigate={navigate} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Mobile Header */}
        <header className="md:hidden bg-white border-b border-stone-200 z-50 px-4 py-3 flex justify-between items-center flex-shrink-0 shadow-sm">
          <span className="font-bold text-lg text-stone-900">GLM 4.7 Report</span>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-stone-600 p-2 hover:bg-stone-100 rounded-md focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-stone-900 bg-opacity-50 z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="absolute top-[60px] left-0 w-full bg-white shadow-lg border-b border-stone-200 flex flex-col p-4 animate-in slide-in-from-top-2" onClick={e => e.stopPropagation()}>
              {(Object.values(SectionId) as SectionId[]).map((sectionId) => (
                <button
                  key={sectionId}
                  onClick={() => navigate(sectionId)}
                  className={`text-left py-3 border-b border-stone-100 last:border-0 font-medium ${
                    currentSection === sectionId ? 'text-stone-900' : 'text-stone-500'
                  }`}
                >
                  {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth" id="main-content">
          <div className="max-w-5xl mx-auto pb-12">
             {renderContent()}
          </div>
        </main>

      </div>
    </div>
  );
};

export default App;