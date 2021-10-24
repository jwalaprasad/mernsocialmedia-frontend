import React, { useEffect, useState } from 'react';
import { checkfollow, followuser, unfollowuser } from '../services/ActivityServices';
import FeedComponent from './FeedComponent';
function UserProfileComponent(props){
    const [follow,setfollow] = useState(true);
    useEffect(() => {
        followcheck();
    },[follow])
    const [followt,setfollowt] = useState('Follow');
    const Userfollow = async () => {
        console.log('Follow clicked !!!');
        const followparam = {};
        followparam.follow_id = props.location.state.userid;        
        const result = await followuser(followparam);
        console.log(result);
        setfollow(true);
        setfollowt('Following');
    };
    const followcheck = async () =>{
        const followparam = {};
        followparam.follow_id = props.location.state.userid;  
        const followcheck = await checkfollow(followparam);
        console.log(followcheck.data);
        setfollow(followcheck.data.exists);
        if(follow === true){
            setfollowt('Following');
        }
        else{
            setfollowt('Follow');
        }
        console.log('Exists is '+followcheck.data.exists);
        console.log('follow is '+follow)
    };
    const handlefollow = async () => {
        if(follow === true){
            // Unfollow user
            unfollow();
        }
        else{
            // Follow user
            Userfollow();
        }
    }
    const unfollow = async () => {
        console.log('Unfollow clicked !!!');
        const followparam = {};
        followparam.follow_id = props.location.state.userid;        
        const result = await unfollowuser(followparam).then(() => {
            setfollow(false);
            setfollowt('Follow');
        });
        console.log(result);
    }
    
    console.log(props.location.state);
    const username = props.location.state.username;
    const userid = props.location.state.userid;
    console.log('Username is '+username+' UserId is'+userid);
    return(
        <div>
            <div>
                <h3>{username}</h3>
                <div className="headfollow">
                <h4>My Posts</h4>
                <button onClick={handlefollow} >{followt}</button>
                </div>
                <FeedComponent myfeed={false} userid={userid}/>
            </div>
        </div>
    );
}


export default UserProfileComponent;