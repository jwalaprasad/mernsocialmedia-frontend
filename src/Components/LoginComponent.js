import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login,logout,token,addprofilename } from '../store/actions/index';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

function LoginComponent(){
    const dispatch = useDispatch();
    var isLogin = useSelector(state => state.islogged);
    const handlelogin = async (event) => {
        event.preventDefault();
        let username = event.target.username.value;
        let password = event.target.password.value;
        let rem = event.target.rememberme.checked;
        const response = await axios.post('http://localhost:5000/auth/login',{username: username,password: password});
        console.log(response.data);
        if(response.data.login==='true'){
            dispatch(login());
            if(rem){
                localStorage.setItem('token',response.data.token);
                dispatch(token(response.data.token));
            }
            else{
                localStorage.setItem('token','null');
                dispatch(token(response.data.token));
            }
            sessionStorage.setItem('login',true);
            sessionStorage.setItem('token',response.data.token);  
            dispatch(addprofilename(response.data.name));      
        }
        else{
            dispatch(logout());
        }
}
    
    return(
        <div>
            <h3>Login</h3>
            <form onSubmit={handlelogin}>
            <div className="uname">
                <p>Username</p>
                <input type="text" name="username"/>
            </div>
            <div className="pword">
                <p>Password</p>
                <input type="password" name="password"/>
            </div>
            <div className="rememberme">
                <input type="checkbox" name="rememberme" id="rememberme" value="true"/>
                <label htmlFor="rememberme">Remember me</label>
            </div>
            <button type="submit" id="submitbutton">Submit</button>
            </form>
            <Link to='/register'><button id="registerbutton">Register</button></Link>
        </div>
    );
}

export default LoginComponent;