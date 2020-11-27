import React from 'react';
import '../../Css/Login.css';
import SingIn from './SingIn';
import SingUp from './SingUp';

function Login(){
    return(
        <div className="container">
            <div className="frame">
                <div className="nav">
                    <ul className="links">
                    <li class="signin-active"><a class="btn">Sign in</a></li>
                    <li class="signup-inactive"><a class="btn">Sign up </a></li>
                    </ul>
                </div>
                <div ng-app ng-init="checked = false">
                    <SingIn></SingIn>
                    <SingUp></SingUp>
                </div>
                <div class="forgot">
                  <a href="#">Forgot your password?</a>
                </div>
      
                <div>
                    <div class="cover-photo"></div>
                    <div class="profile-photo"></div>
                    <h1 class="welcome">Welcome, Chris</h1>
                    <a class="btn-goback" value="Refresh" onClick="history.go()">Go back</a>
                </div>
            </div>
        </div>
    )
}

export default Login;