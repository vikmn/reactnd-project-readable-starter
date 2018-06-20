import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';
import Category from './Category';

const  App = () => {
    return (
      <div className="App">
        <Route path="/" exact render={() => <Category onLoad={() => Promise.resolve({ data: [] }) }/>} />
      </div>
    );
}

export default App;
