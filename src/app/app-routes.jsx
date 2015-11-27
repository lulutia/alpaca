import React from 'react';
import {
  Route,
  Redirect,
  IndexRoute,
} from 'react-router';

import Main from './components/main';

const AppRoutes = (
    <Route path="/" component={Main}>
    </Route>
    );

module.exports = AppRoutes;
