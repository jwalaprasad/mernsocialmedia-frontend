const profileReducer = ( state = null, action) => {
    switch(action.type){
        case "ADDPROFILENAME":
            return action.payload
        case "DELETEPROFILENAME":
            return action.payload
        default:
            return state
    }
};

export default profileReducer;