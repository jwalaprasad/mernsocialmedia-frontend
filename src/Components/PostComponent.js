import React from 'react';
import './CSS/PostComponent.css';
import { likePost } from '../services/PostServices';
function PostComponent(props){
    console.log('Post title is '+props.post.post_title+' post body is '+props.post.post_image);
    const likepost = () => {
        const reqbody = {
            likeactivity: "like",
            post_id: props.post._id
        };
        console.log("The post to be liked is "+props.post._id);
        console.log(likePost(reqbody));
        
    };
    return(
        <div className="PostComponent">
            <div className="UserId">
                <h4>{props.post.author_id.name}</h4>
            </div>
            <hr></hr>
            <div className="Post">
                <p>{props.post.post_title}</p>
                <img src={props.post.post_image} alt="image" />
            </div>
            <hr></hr>
            <div className="posttool">
                <button type="button" onClick={likepost}><i class="fa fa-heart" aria-hidden="true"></i></button>
                <button type="button"><i class="fa fa-comment" aria-hidden="true"></i></button>
            </div>
        </div>
    );
}
 export default PostComponent;