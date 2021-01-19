import React from 'react';

import { LoadingWrapper } from 'reusable';

import Routes from './Routes';
import { PageTitle } from 'views';

const App: React.FC = () => {
  return (
    <div className="App">
      <LoadingWrapper>
        <PageTitle />
        <Routes />
      </LoadingWrapper>
    </div>
  );
};

export default App;
