import React, { Fragment } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import LoginPage from './pages/login/login';
import SignupPage from './pages/signup/signup';
import Sidebar from './components/sidebar/sidebar.component';
import DashboardPage from './pages/dashboard/dashboard';
import RevenuePage from './pages/revenue/revenue';
import RidersPage from './pages/riders/riders';
import SettingsPage from './pages/settings/settings';
import TripsPage from './pages/trips/trips';
import UsersPage from './pages/users/users';


const App = () => {

  return(
    <div>
      
      <Sidebar/>
      <Route exact path='/dashboard' component={DashboardPage} />
      <Route exact path='/users' component={UsersPage} />
      
    </div>
  )
}

export default App;

{/* <Route exact path='/login' component={LoginPage} />
<Route exact path='/signup' component={SignupPage} /> */}