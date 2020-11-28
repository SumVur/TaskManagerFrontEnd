import React from 'react';
import '../../Css/Login.css';
import SingIn from './SingIn';
import SingUp from './SingUp';
import './Login_Jquery'

function Login(){


    return(
        <div className="container">
            <div className="frame">
                <div className="nav">
                    <ul className="links">
                    <li className="signin-active"><a className="btn">Sign in</a></li>
                    <li className="signup-inactive"><a className="btn">Sign up </a></li>
                    </ul>
                </div>
                <div ng-app="true" ng-init="checked = false">
                    <SingIn></SingIn>
                    <SingUp></SingUp>
                </div>
                <div className="forgot">
                  <a href="#">Forgot your password?</a>
                </div>
      
                <div>
                    <div className="cover-photo"></div>
                    <div className="profile-photo"></div>
                    <h1 className="welcome">Welcome, Chris</h1>
                    <a className="btn-goback" value="Refresh" onClick="history.go()">Go back</a>
                </div>
            </div>
        </div>
    )
}

export default Login;