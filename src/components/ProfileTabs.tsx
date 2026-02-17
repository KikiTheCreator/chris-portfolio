import { useState } from 'react';
import TabNavigation from './TabNavigation';
import FeedWithProvider from './FeedWithProvider';
import Resume from './Resume';
import WorkInProgress from './WorkInProgress';
import type { Post } from '../types';

interface ProfileTabsProps {
  initialPosts: Post[];
  allPosts: Post[];
  batchSize: number;
}

export default function ProfileTabs({ initialPosts, allPosts, batchSize }: ProfileTabsProps) {
  const [activeTab, setActiveTab] = useState('Posts');

  const renderContent = () => {
    switch (activeTab) {
      case 'Posts':
        return (
          <FeedWithProvider 
            initialPosts={initialPosts}
            allPosts={allPosts}
            batchSize={batchSize}
          />
        );
      case 'CV | LinkdIn':
        return <Resume />;
      case 'Coming soon...':
        return <WorkInProgress />;
      default:
        return null;
    }
  };

  return (
    <>
      <TabNavigation onTabChange={setActiveTab} />
      {renderContent()}
    </>
  );
}
