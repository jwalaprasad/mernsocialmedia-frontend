import React from 'react';
import FeedComponent from "./FeedComponent";
import { useSelector } from 'react-redux';

function MyProfileComponent(){
    const profilename = useSelector(state => state.profile);
    return(
        <div>
            <div>
                <h3>{profilename}</h3>
            </div>
            <div>
                <h4>My Posts</h4>
                <FeedComponent myfeed={true} userid={false} />
            </div>
        </div>
    );
}

export default MyProfileComponent;
