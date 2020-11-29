import React from 'react';
import Login from './Login/Login';

function Body(){
    const [loading, setLoading] = React.useState(true)

    
    return(
        <div>
        <Login ></Login>
        </div>
    )
}

export default Body;