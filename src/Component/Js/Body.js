import React from 'react';
import Login from './Login/Login';
import PersonalAccount from './Todo/PersonalAccount'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'

function Body(){
    
    return(
        <Router>
            <Link to='/Login'>Log in</Link >
            <Route path='/Login' exact component={Login}></Route>

            <Link to='/PersonalAccount'>PersonalAccount</Link >
            <Route path='/PersonalAccount' exact component={PersonalAccount}></Route>
        </Router>
    )
}

export default Body;