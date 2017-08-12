import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import MobxRouter from './mobx/component/index';
import ReduxRouter from './redux/component/index';
import logo from './logo.svg';
import './App.css';

const index = () =>< div className="App" >
  <div className="App-header" >
    <img src={logo}
      className="App-logo"
      alt="logo" />
    <h2> Demo for Redux vs MobX </h2>
    <Link to='/redux/home'>redux</Link>&nbsp;&nbsp;
    <Link to='/mobx'>mobx</Link>
  </div>
</div>

const App = () => <Router>
  <div>
    <Route exact path='/' component={index} />
    <MobxRouter />
    <ReduxRouter />
  </div>
</Router>

export default App;