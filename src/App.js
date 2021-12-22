import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Test from './Test';
import Test2 from './Test2';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { hideNavButtons, showNavButtons, logIn } from './actions';

const App = () => {

  const isLoggedin = useSelector(state => state.loginReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    //dispatch(hideNavButtons());
    //dispatch(logIn());
  }, []);

  return (
    <div>
      <Router>
        <Navigation />

        <Route exact path="/" exact component={Test} />

        <Route path="/register" component={Register} />
        <Route path="/login" exact component={Login} />
      </Router>
    </div >
  )
};

export default (App);
