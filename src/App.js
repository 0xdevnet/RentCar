import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faPhone, faClock, faCheck, faCamera } from '@fortawesome/free-solid-svg-icons'
import NavBar from './components/navbar'
import Dashboard from './components/dashboard/index'
import CreateProjects from './components/createProject/createProject'
import Login from './components/login/index'
import Profile from './components/profile/index'
import ProjectDetail from './components/carDetail/ProjectDetail'
import Home from './components/home/index'
import './App.scss';

library.add(faPhone)
library.add(faClock)
library.add(faCheck)
library.add(faCamera)

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/project/:id' component={ProjectDetail} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/login' component={Login} />
          <Route path='/profile' component={Profile} />
          <Route path='/add-new-car' component={CreateProjects} />
        </Switch>
      </div>
    );
  }
}

export default App;
