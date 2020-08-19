import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


import LoginPage from './pages/signIn/signIn';
import Sidebar from './components/sidebar/sidebar.component';
import DashboardPage from './pages/dashboard/dashboard';
import RevenuePage from './pages/revenue/revenue';
import RidersPage from './pages/riders/riders';
import SettingsPage from './pages/settings/settings';
import RidesPage from './pages/rides/rides';
import UsersPage from './pages/users/users';
import BikesPage from './pages/bikes/bikes';
import RidesByRiderPage from './pages/ridersRides/riders-rides';
/* import SignupPage from './pages/signUp/signUp'; */



const App = () => {
  const loggedIn = true;

  return (
    <div>
      <Switch>
        <Route exact path='/login' component={LoginPage} />
        {/* <Route exact path='/signup' component={SignupPage} /> */}
        <Route>
          <Sidebar />
          <Switch>
            <Redirect exact from="/" to="/dashboard" />

            <Route exact path='/dashboard' component={DashboardPage} />
            <Route exact path='/users' component={UsersPage} />
            <Route exact path='/riders' component={RidersPage} />
            <Route exact path='/riders/:riderID/rides' component={RidesByRiderPage} />
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
