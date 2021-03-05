import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Home from '@/component/home';
import Setting from '@/component/setting';

interface IProps {}
interface IState {}

const AppRoot = (props: IProps, state: IState) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/setting" component={Setting} />
        <Route component={Home} />
      </Switch>
    </Router>
  );
};

export default AppRoot;
