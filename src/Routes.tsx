import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Gallery, MagazineView } from 'views';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Gallery />
      </Route>
      <Route path="/magazine/:magazineId">
        <MagazineView />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
