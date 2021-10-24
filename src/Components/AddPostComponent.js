import React from "react";
import { onSubmit } from "../services/PostServices";

function AddPostComponent(){
    
    
    return(
        <form onSubmit={onSubmit}>
            <div>
                <input type="text"  id="title" name="title"/>
                <label htmlFor="title">Post title</label>
            </div>
            <div>
            <input type="file" name="photo" id="photo" accept="image/*" />
            <label htmlFor="photo">Upload file</label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default AddPostComponent;