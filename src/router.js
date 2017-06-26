import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cart from './components/Cart/Cart';
import Details from './components/Details/Details';
import Landing from './components/Landing/Landing';
import Shop from './components/Shop/Shop';

import ThankYou from './components/ThankYou/ThankYou';

export default (
    <Switch>
        <Route component={ Landing } exact path="/"/>
        <Route component={ Shop } path="/chakras"/>
        <Route component={ Cart } path="/charkras/blue"/>
        <Route component={ ThankYou } path="/chakras/green"/>
        <Route component={ Details } path="/chakras/:name"/>
    </Switch>
)