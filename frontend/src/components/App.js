import React from 'react';
import { Route } from 'react-router-dom';
import '../App.css';
import { connect } from 'react-redux';
import Category from './Category';

const  App = () => {
    return (
      <div className="App">
        <Route path="/" exact render={() => <Category/>} />
      </div>
    );
}

export default connect() (App);
