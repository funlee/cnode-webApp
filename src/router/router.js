import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Bundle from './Bundle';
import Loading from 'components/common/Loading/Loading';
import NotFound from 'bundle-loader?lazy&name=notFound!components/common/NotFound/NotFound';

import Topics from 'bundle-loader?lazy&name=Topics!views/Topics/Topics';
import User from 'bundle-loader?lazy&name=User!views/User/User';
import Article from 'bundle-loader?lazy&name=Article!views/Article/Article';

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
    <Route exact path="/:id" component={createComponent(Topics)} />
    <Route exact path="/user/:userId" component={createComponent(User)} />
    <Route exact path="/article/:id" component={createComponent(Article)} />

    <Route component={createComponent(NotFound)}/>
  </Switch>
);
