
import { useState } from 'react';
import './App.scss';
import DiscoveryPage from './Discovery/DiscoveryPage';
import OverviewPage from './Overview/OverviewPage';
import MainLayout from '../layouts/MainLayout';

export type SelectTabType = 0 | 1;

const App = () => {
      const [selectedTab, setSelectedTab] = useState<SelectTabType>(1);
  
  return (
    <MainLayout TabData={selectedTab} SetSelectedTab={setSelectedTab}>
      {selectedTab === 1 && (
        <DiscoveryPage />
      )}
      {selectedTab === 0 && (
        <OverviewPage />
      )}
    </MainLayout>
  )
}

export default App

