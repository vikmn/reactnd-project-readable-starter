import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import '../App.css';
import { connect } from 'react-redux';
import Category from './Category';

const App = props =>
  (<div className="App">
    <Route path="/:category" render={props => <Category {...props} key={props.location.key} />} />
  </div>);

export default withRouter(connect() (App));
