import React from 'react';
import {
  Route,
  Redirect,
  IndexRoute,
} from 'react-router';

import Main from './components/main';

import Watch from './components/watch';
import Road from './components/road';
import Mode from './components/mode';
import View from './components/view';
import Tool from './components/tool';


const AppRoutes = (
    <Route path="/" component={Main}>
        <Route path="watch" component={Watch} />
        <Route path="road" component={Road} />
        <Route path="mode" component={Mode} />
        <Route path="view" component={View} />
        <Route path="tool" component={Tool} />
    </Route>
    );

module.exports = AppRoutes;
