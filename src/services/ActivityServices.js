import axios from "axios";

export function followuser(followparam){
    axios.defaults.headers.common['auth-token'] = sessionStorage.getItem('token');
    return axios.post('http://localhost:5000/activity/follow',followparam);
}

export function unfollowuser(followparam){
    axios.defaults.headers.common['auth-token'] = sessionStorage.getItem('token');
    return axios.post('http://localhost:5000/activity/unfollow',followparam);
}

export function checkfollow(followparam){
    axios.defaults.headers.common['auth-token'] = sessionStorage.getItem('token');
    return axios.post('http://localhost:5000/activity/checkfollow',followparam);
}