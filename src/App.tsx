import React from 'react';

import { LoadingWrapper } from 'reusable';

import Routes from './Routes';

const App: React.FC = () => {
  return (
    <div className="App">
      <LoadingWrapper>
        <Routes />
      </LoadingWrapper>
    </div>
  );
};

export default App;
