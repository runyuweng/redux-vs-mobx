import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import List from './containers/ListContainer';
import Intro from './components/Intro';
import './index.css';

const Page = ({match}) => <div className='redux'>
  <h1 className="title">Redux</h1>
  <Route path={`${match.url}/home`} component={Intro}/>
  <Route path={`${match.url}/list`} component={List}/>
  <div className='link-group'>
    <Link to='/redux/list'>Redux Message Board</Link>
    <Link to='/'>Back to Index</Link>
  </div>
</div>

const MobxRouter = () => <Route path='/redux' component={Page}/>

export default MobxRouter;