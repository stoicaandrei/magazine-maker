import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Gallery, MagazineView } from 'views';

const Routes: React.FC = () => {
  const content = (
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

  return <BrowserRouter>{content}</BrowserRouter>;
};

export default Routes;
