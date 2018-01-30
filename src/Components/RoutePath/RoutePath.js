import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';


const RoutePath = () =>(
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Login' component={Login} />
            <Route exact path='/Signup' component={SignUp} />
        </Switch>
    </main>
)

export default RoutePath;