import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import Welcome from '../Welcome/Welcome';
class Routing extends Component {
   render() {
      return (
               <Switch>
                  <Route exact path='/' component={Welcome} />
                  <Route path='/home' component={Home} />
                  <Route path='/login' component={Login} />
                  <Route path='/signup' component={SignUp} />
                  <Route path='/logout' component={Welcome} />
               </Switch>
      );
   }
}
export default Routing;