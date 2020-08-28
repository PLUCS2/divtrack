import { login, logout, signup } from "../util/session_api_util"; 

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"; 
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"; 

export const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER, 
        user 
    }
}; 

export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}; 

export const loginUser = user => dispatch => {
    return login(user).then(user => dispatch(receiveCurrentUser(user)))
}; 

export const logoutUser = () => dispatch => {
    return logout().then(() => dispatch(logoutCurrentUser()))
}; 

export const signupUser = user => dispatch => (
    signup(user).then(user => dispatch(receiveCurrentUser(user)))
); 