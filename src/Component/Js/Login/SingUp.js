import React from 'react';

function SingUp(){
    return(
        <form className="form-signup" action="" method="post" name="form">
        <label htmlFor="fullname">Full name</label>
        <input className="form-styling" type="text" name="fullname" placeholder=""/>
        <label htmlFor="email">Email</label>
        <input className="form-styling" type="text" name="email" placeholder=""/>
        <label htmlFor="password">Password</label>
        <input className="form-styling" type="text" name="password" placeholder=""/>
        <label htmlFor="confirmpassword">Confirm password</label>
        <input className="form-styling" type="text" name="confirmpassword" placeholder=""/>
        <a ng-click="checked = !checked" className="btn-signup">Sign Up</a>
                      </form>
    )
}

export default SingUp;