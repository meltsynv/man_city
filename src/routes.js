import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home';
import SignIn from './components/signin';

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <Route exact component={SignIn} path='/sign_in'/>
        <Route exact component={Home} path='/' />
      </Switch>
    </Layout>
  )
}

export default Routes;
 