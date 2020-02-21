import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Layout, Loader } from './components';
import { SignIn, SignUp, Home, NotFound } from './containers';

const App = () => {
  return (
    <React.Fragment>
      <Loader />
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/signin" component={SignIn} />
        <Layout>
          <Switch>
            <Route path="/signup" component={SignUp} />
            <Route path="/student" component={Home} />
            <Route path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
        </Layout>
      </Switch>
    </React.Fragment>
  );
}

export default App;