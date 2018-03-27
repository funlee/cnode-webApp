import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Bundle from './Bundle';
import Loading from 'components/common/Loading/Loading';
import NotFound from 'bundle-loader?lazy&name=notFound!components/common/NotFound/NotFound';

import Topics from 'bundle-loader?lazy&name=Topics!views/Topics/Topics';

const createComponent = (component) => (props) => (
  <Bundle load={component}>
    {
      (Component) => Component ? <Component {...props} /> : <Loading/>
    }
  </Bundle>
);

export default () => (
  <Switch>
    <Redirect exact from="/" to="/all" />
    <Route path="/:id" component={createComponent(Topics)} />

    <Route component={createComponent(NotFound)}/>
  </Switch>
);
