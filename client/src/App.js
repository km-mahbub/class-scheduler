import React, { useEffect } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from "react-redux";

import { Layout, Loader } from './components';
import { SignIn, SignUp, Home, NotFound } from './containers';
import * as actions from "./stores/actions/index";

const App = (props) => {
  useEffect(() => {
    props.tryAutoSignUp();
  }, []);

  useEffect(() => {
    if (props.isAuthenticated) {
      props.history.push(props.authRedirectPath);
    }
  }, [props.isAuthenticated]);

  let routes = (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/signin" component={SignIn} />
      <Redirect to="/" />
    </Switch>
  );

  if (props.isAuthenticated) {
    routes = (
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
    );
  }

  return (
    <React.Fragment>
      <Loader />
      {routes}
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    authRedirectPath: state.authReducer.authRedirect,
    isAuthenticated: state.authReducer.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    tryAutoSignUp: () => dispatch(actions.checkAuthStatus())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);