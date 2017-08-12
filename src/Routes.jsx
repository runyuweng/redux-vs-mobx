import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'

const index = () => <div>
  <Link to = '/redux'>redux</Link>
  <Link to = '/mobx'>mobx</Link>
</div>
const reduxCom = ({match}) => {
  console.log(match)
  return <div>
    <div>redux</div>
    <Route path={`${match.url}/list`} component={list}/>
  </div>};

const mobxCom = () => <div>mobx</div>;

const list = () => <ul>
  <li>11</li>
  <li>22</li>
  <li>33</li>
  <li>44</li>
</ul>

const Routes = () => <Router>
    <div>
      <Route exact path='/' component={index}/>
      <Route path='/redux' component={reduxCom}>
        <Route path='/list' component={list}/>
      </Route>
      <Route path='/mobx' component={mobxCom}/>
    </div>
  </Router>

  export default Routes;