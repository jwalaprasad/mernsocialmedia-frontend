import React, { useEffect, useState } from 'react';
import PostComponent from './PostComponent';
import { getFeed,getPosts } from '../services/PostServices';
import './CSS/FeedComponent.css'
function FeedComponent(props){
    const [result,setresult] = useState([]);
    const [nofollow,setNofollow] = useState('');
    useEffect(() => {
        const getfeedparam = {
            myfeed: props.myfeed,
            userid: props.userid
        };
        console.log("Props is "+props);
        console.log('Myfeed is '+props.myfeed);
        console.log("User is "+props.user);
        if(!props.myfeed && !props.user){
        getFeed().then((response) => {
        if(response.data.posts){
            setresult(response.data.posts);
            console.log('In getfeed');
            console.log(response.data.posts);
        }
        else{
            setNofollow('No followers');
        }
        console.log('UseEffect called');
        });          
    }
    else{
        getPosts(getfeedparam).then((response) => {
            if(response.data.posts){
                setresult(response.data.posts);
            }
            else{
                console.log('No Posts available at the moment!!!');
            }
        });
    }
    },[]);
    console.log(result);
   if(nofollow !== 'No followers'){
       return(
       <div>
           {
           result.map((item) => {
               return(<PostComponent key={item._id}  post={item}/>); 
           })}
       </div>
   );
}
else{
    return(
        <div>
        <h1>No followers Present</h1>
        <h4>Follow anyone to show your feed</h4>
        </div>
    );
}
}
export default FeedComponent;