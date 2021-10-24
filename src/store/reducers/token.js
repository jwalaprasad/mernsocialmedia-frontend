const anotherReducer = ( state = 'null', action) => {
    if(action.type === 'token'){
        return action.payload;
    }
    else{
        return state;
    }
};

export default anotherReducer;