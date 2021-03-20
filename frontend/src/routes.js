import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Logon from './pages/Logon';
import Profile from './pages/Profile';
import Register from './pages/Register';


const Routes = () => {
    return ( 
        <BrowserRouter>
            <Route path="/" exact component={Logon}/>
            <Route path="/register" component={Register}/>
            <Route path="/profile" component={Profile}/>
        </BrowserRouter>
    );
}
 
export default Routes;