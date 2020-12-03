import React from 'react';
import Login from './Login/Login';
import {useHistory} from 'react-router-dom';
import PersonalAccount from './Todo/PersonalAccount'

function Body(){
   
    function GoToAccount(){
        
    }
    
    return(
        <div>
        <PersonalAccount></PersonalAccount>
        </div>
    )
}

export default Body;