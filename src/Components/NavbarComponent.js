import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, Redirect } from 'react-router-dom';
import {logout} from '../store/actions/index';
import "./CSS/NavbarComponent.css";
function NavbarComponent(){
    const [uname,setuname] = useState('');
    const [url,seturl] = useState('');
    const dispatch = useDispatch();
    var isLogin = useSelector(state => state.islogged);
    const handleLogout = () => {
        localStorage.setItem('token','null');
        sessionStorage.setItem('login',false);
        sessionStorage.setItem('token','null');
        dispatch(logout());
    }

    const handlechange = (event) => {
        setuname(event.target.value);
    };
    const handlesubmit = (event) => {
        event.preventDefault();
        var searchurl = `/search:${uname}`
        console.log('Search query is '+searchurl);
        return(
            <Redirect push to={{
                pathname:searchurl
            }} />
        );
    };

    var linkurl = `/search:${uname}`

    
        return(
        <div className={isLogin ? "visible navbarcomponent" : "hidden"}>
            <div className="navitem"><Link to='/feed'>Home</Link></div>
            <div className="navitem"><Link to='/myprofile'>MyProfile</Link></div>
            <div className="navitem"><Link to='/addpost'>Addpost</Link></div>
            <div className="navitem"><form onSubmit={handlesubmit}><input type="text" id="usearch" name="usearch" onChange={handlechange}/><Link to={linkurl}><button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button></Link></form></div>
            <div className="navitem"><Link to='/'><button onClick={handleLogout}>Logout</button></Link></div>
        </div>
    );
}
export default NavbarComponent;