import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoginPage from './pages/login/login';
import SignupPage from './pages/signup/signup';
import Sidebar from './components/sidebar/sidebar.component';
import DashboardPage from './pages/dashboard/dashboard';
import RevenuePage from './pages/revenue/revenue';
import RidersPage from './pages/riders/riders';
import SettingsPage from './pages/settings/settings';
import RidesPage from './pages/rides/rides';
import UsersPage from './pages/users/users';
import BikesPage from './pages/bikes/bikes';



const App = () => {

  return (
    <div>
      <Switch>
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/signup' component={SignupPage} />
        <Route>
          <Sidebar />
          <Switch>
            <Route exact path='/dashboard' component={DashboardPage} />
            <Route exact path='/users' component={UsersPage} />
            <Route exact path='/riders' component={RidersPage} />
            <Route exact path='/rides' component={RidesPage} />
            <Route exact path='/bikes' component={BikesPage} />
            <Route exact path='/revenue' component={RevenuePage} />
          </Switch>
        </Route>
      </Switch>







      
    </div>
  )
}

export default App;
