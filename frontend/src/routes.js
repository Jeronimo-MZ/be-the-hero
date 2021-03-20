import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Logon from './pages/Logon';
import NewIncident from './pages/NewIncident';
import Profile from './pages/Profile';
import Register from './pages/Register';


const Routes = () => {
    return ( 
        <BrowserRouter>
            <Route path="/" exact component={Logon}/>
            <Route path="/register" component={Register}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/incidents/new" component={NewIncident}/>
        </BrowserRouter>
    );
}
 
export default Routes;