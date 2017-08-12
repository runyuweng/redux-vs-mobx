import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import List from './List';

const Page = ({match}) => <div>
  <div>Mobx</div>
  <Route path={`${match.url}/list`} component={List}/>
</div>

const MobxRouter = () => <Route path='/mobx' component={Page} />

export default MobxRouter;