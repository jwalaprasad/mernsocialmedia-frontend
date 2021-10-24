const loginstate = sessionStorage.getItem('login');
const initialstate = loginstate ? true : false
const loggedReducer = ( state = initialstate, action) => {
    switch(action.type){
        case "LOGIN":
            return true
        case "LOGOUT":
            return false
        default:
            return state
    }
};

export default loggedReducer;