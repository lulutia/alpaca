import React from 'react';
import {
  Route,
  Redirect,
  IndexRoute,
} from 'react-router';

import Main from './components/main';

import Watch from './components/watch';

const AppRoutes = (
    <Route path="/" component={Main}>
        <Route path="watch" component={Watch} />
    </Route>
    );

module.exports = AppRoutes;
