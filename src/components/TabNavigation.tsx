import { useState } from 'react';

interface TabNavigationProps {
  onTabChange: (tab: string) => void;
}

export default function TabNavigation({ onTabChange }: TabNavigationProps) {
  const [activeTab, setActiveTab] = useState('Posts');
  const tabs = ['Posts', 'CV | LinkdIn', 'Coming soon...'];
  
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onTabChange(tab);
  };
  
  return (
    <nav className="border-b border-gray-800" role="navigation" aria-label="Profile tabs">
      <div className="flex" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={activeTab === tab}
            aria-label={`${tab} tab`}
            onClick={() => handleTabClick(tab)}
            className={`flex-1 px-2 sm:px-4 py-3 sm:py-4 text-xs sm:text-base text-center font-medium transition-colors hover:bg-gray-900 focus:outline-none ${
              activeTab === tab
                ? 'text-white border-b-4 border-red-500'
                : 'text-gray-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </nav>
  );
}
