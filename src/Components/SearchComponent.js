import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS/SearchComponent.css';

function SearchComponent({match}){
    const searchquery =  match.params.query.slice(1);
    useEffect(() => {
        fetchusers();
    },[searchquery]);
    const [users,setusers] = useState([]); 
    const fetchusers = async () => { 
        const squery =  match.params.query.slice(1);
        console.log(squery);
        const url = 'http://localhost:5000/activity/searchusers';
        axios.defaults.headers.common['auth-token'] = sessionStorage.getItem('token');
        const usr = await axios.post(url,{search_name: squery});
        console.log(usr.data);
        setusers(usr.data);
        console.log(users);
    }
    return(
        <div>
            {
                users.map((user) => {
                    
                    return(
                        <Link to={{
                            pathname: '/user',
                            state: {username: user.name,userid: user._id}
                        }} >
                            <div className="PostComponent">
                            <div className="useravatar">
                                <img src="https://img.pngio.com/computer-icons-user-clip-art-transparent-user-icon-png-1742152-user-icon-png-920_641.png" alt="useravatar" />
                            </div>
                            <div className="UserId">
                                {user.name}
                            </div>
                        </div>
                        </Link>
                    );
                })
            }
        </div>
    );
}

export default SearchComponent;