import React from 'react';
import LoginComponent from './LoginComponent'
import './CSS/LandingComponent.css'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import RegisterComponent from './RegisterComponent';
function LandingComponent(){
    var isLogin = useSelector(state => state.islogged);    
    if(!isLogin){return(
        <div className="flexcontainer">
        <div className="halfcontainer">
            <h1>Social Media</h1>
            <h6>Lets have fun!!!</h6>
        </div>
        <div className="halfcontainer">
            <LoginComponent />
        </div>
        </div>
    );}
    else{
        return(
            <Redirect to={{pathname:'/feed'}} />
        );
    }
}
export default LandingComponent;