import React from 'react';
import { Route, Switch, useLocation, Redirect } from 'react-router-dom';
import Dashboard from '@src/pages/dashboard';

const PACKAGE_BASE_URL = '/dashboard';

const Routes = () => {
  const location = useLocation();
  const presenter = location.state?.presenter;
  return (
    <Switch location={presenter || location}>
      <Route exact path="/">
        <Redirect to={PACKAGE_BASE_URL} exact />
      </Route>

      <Route path={PACKAGE_BASE_URL} component={Dashboard} exact />
    </Switch>
  );
};

export default Routes;
