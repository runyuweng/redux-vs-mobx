import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import reducer from './redux/reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import MobxRouter from './mobx/index';
import ReduxRouter from './redux/index';
import logo from './logo.svg';
import './App.css';

//Redux的store，window.xxx用于chrome调试
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const index = () =>< div className="App" >
  <div className="App-header" >
    <img src={logo}
      className="App-logo"
      alt="logo" />
    <h2> Demo for Redux vs MobX </h2>
    <Link to='/redux/home'>redux</Link>&nbsp;&nbsp;
    <Link to='/mobx/home'>mobx</Link>
  </div>
</div>

const App = () => <Router>
  <div>
    <Route exact path='/' component={index} />
    <MobxRouter/>
    <Provider store={store}>
      <ReduxRouter />
    </Provider>    
  </div>
</Router>

export default App;