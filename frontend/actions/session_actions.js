import { login, logout, signup } from "../util/session_api_util"; 

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"; 
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"; 
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

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

export const receiveSessionErrors = errors => {
    return {
        type: RECEIVE_SESSION_ERRORS, 
        errors
    }
}; 

export const loginUser = user => dispatch => {
    return login(user).then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveSessionErrors(errors.responseJSON)))
}; 

export const logoutUser = () => dispatch => {
    return logout().then(() => dispatch(logoutCurrentUser()))
}; 

export const signupUser = user => dispatch => (
    signup(user).then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveSessionErrors(errors.responseJSON)))
); 