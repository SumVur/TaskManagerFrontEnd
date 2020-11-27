import React from 'react';

function SingIn(){
    return(
        <form className="form-signin" action="" method="post" name="form">
        <label for="username">Username</label>
        <input className="form-styling" type="text" name="username" placeholder=""/>
        <label for="password">Password</label>
        <input className="form-styling" type="text" name="password" placeholder=""/>
        <input type="checkbox" id="checkbox"/>
        <label for="checkbox" ><span className="ui"></span>Keep me signed in</label>
        <div className="btn-animate">
          <a className="btn-signin">Sign in</a>
        </div>
                      </form>
    )
}

export default SingIn;