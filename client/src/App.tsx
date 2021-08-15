import React, { useMemo } from 'react';
import NavigationHeader from './components/navigationHeader';
import LayoutModule from './components/layoutModule';
import './scss/rwd.scss';
import './scss/App.scss';

function App() {
  const navigationHeader = useMemo(() => <NavigationHeader />, []);
  return (
    <div className="app">
      <div className="app-header">
        {navigationHeader}
      </div>
      <div className="app-body">
        <LayoutModule />
      </div>
    </div>
  );
}

export default App;
