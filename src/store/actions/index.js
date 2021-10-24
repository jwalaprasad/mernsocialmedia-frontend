export const login = () => {
    return {
        type: 'LOGIN'
    }
};
export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}
export const token = (token) => {
    return {
        type: 'token',
        payload: token
    }
}
export const addprofilename = (profilename) => {
    return {
        type: 'ADDPROFILENAME',
        payload: profilename
    }
}

export const deleteprofilename = () => {
    return {
        type: 'DELETEPROFILENAME',
        payload: null
    }
}