
import { useState } from 'react';
import './App.scss';
import DiscoveryPage from './Discovery/DiscoveryPage';
import OverviewPage from './Overview/OverviewPage';

export type SelectTabType = 0 | 1;

const App = () => {
      const [selectedTab, setSelectedTab] = useState<SelectTabType>(1);
  
  return (
    <div>
      {selectedTab === 0 && (
        <OverviewPage TabData={selectedTab} SetSelectedTab={setSelectedTab} />
      )}
      {selectedTab === 1 && (
        <DiscoveryPage TabData={selectedTab} SetSelectedTab={setSelectedTab} />
      )}
    </div>
  )
}

export default App

