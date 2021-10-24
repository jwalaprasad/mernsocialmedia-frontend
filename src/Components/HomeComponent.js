import React from 'react';
function HomeComponent(){
    var result = String(sessionStorage.getItem('token'));
    return(
        <div>
            <h1>Home</h1>
            {result}            
        </div>
    )
}

export default HomeComponent;