import React from 'react';

function SingIn(){
    return(
        <form className="form-signin" action="" method="post" name="form">
        <label htmlFor="username">Username</label>
        <input className="form-styling" type="text" name="username" placeholder=""/>
        <label htmlFor="password">Password</label>
        <input className="form-styling" type="text" name="password" placeholder=""/>
        <input type="checkbox" id="checkbox"/>
        <label htmlFor="checkbox" ><span className="ui"></span>Keep me signed in</label>
        <div className="btn-animate">
          <a className="btn-signin">Sign in</a>
        </div>
        </form>
    )
}

export default SingIn;