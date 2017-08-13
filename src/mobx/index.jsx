import React from 'react';
import { Route, Link } from 'react-router-dom';

import List from './components/List';
import Intro from './components/Intro';
import './index.css';

const Page = ({match}) => <div>
  <h1 className="title">Mobx</h1>
  <Route path={`${match.url}/home`} component={Intro}/>
  <Route path={`${match.url}/list`} component={List}/>
  <div className='link-group'>
    <Link to='/mobx/list'>MobX Message Board</Link>
    <Link to='/'>Back to Index</Link>
  </div>
</div>

const MobxRouter = (props) => <Route path='/mobx' component={Page}/>

export default MobxRouter;