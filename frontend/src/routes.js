import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Logon from './pages/Logon';
import Register from './pages/Register';


const Routes = () => {
    return ( 
        <BrowserRouter>
            <Route path="/" exact component={Logon}/>
            <Route path="/register" component={Register}/>
        </BrowserRouter>
    );
}
 
export default Routes;