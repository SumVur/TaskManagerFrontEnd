import React from 'react';
import '../../Css/Login.css';
import SingIn from './SingIn';
import SingUp from './SingUp';
import './Login_Jquery'
import Loader from '../Loader'

function Login(){
    const [loading, setLoading] = React.useState(false)

    function onClickSingIn(){
        console.log("onClickSingIn");
        //Запрос на сервер и вызов функции из Body
        setTimeout(() => {
            setLoading(true);
        }, 2000);
    }
    function onClickSingUp(){
        console.log("onClickSingUp");
    }
    return(
<div>
    {
      loading===true?<Loader/>:
        <div className="container">
            <div className="frame">
                <div className="nav">
                    <ul className="links">
                    <li className="signin-active"><a className="btn">Sign in</a></li>
                    <li className="signup-inactive"><a className="btn">Sign up </a></li>
                    </ul>
                </div>
                <div ng-app="true" ng-init="checked = false">
                    <SingIn onClickSingIn={onClickSingIn}></SingIn>
                    <SingUp onClickSingUp={onClickSingUp}></SingUp>
                </div>
                <div className="forgot">
                  <a href="#">Forgot your password?</a>
                </div>
            </div>
        </div>
        }
    </div>
    )
}

export default Login;