import React from 'react';
import { useSelector } from 'react-redux';
import {Redirect, Route } from 'react-router-dom';


function ProtectedRoute(props){
    const isLogin = useSelector(state => state.islogged);
    console.log('is login '+isLogin);
    console.log('Props path'+props.path);
    return(
        <Route path={props.path} render={data => isLogin?(<props.component {...data}></props.component>):(<Redirect to={{pathname:'/login'}}></Redirect>) }></Route>
    );
}



export default ProtectedRoute;