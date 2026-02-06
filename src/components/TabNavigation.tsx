export default function TabNavigation() {
  const tabs = ['Posts', 'Replies', 'Media', 'Likes'];
  
  return (
    <nav className="border-b border-gray-800" role="navigation" aria-label="Profile tabs">
      <div className="flex" role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            role="tab"
            aria-selected={index === 0}
            aria-label={`${tab} tab`}
            className={`flex-1 px-2 sm:px-4 py-3 sm:py-4 text-xs sm:text-base text-center font-medium transition-colors hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              index === 0
                ? 'text-white border-b-4 border-blue-500'
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
