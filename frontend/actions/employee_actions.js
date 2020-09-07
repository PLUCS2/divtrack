import { changeAdmin, fetchUser } from '../util/employee_api_util'; 

export const RECEIVE_USER = "RECEIVE_USER"; 

export const receiveUser = user => {
    return {
        type: RECEIVE_USER, 
        user
    }
}; 

export const changeAdminStatus = id => dispatch => {
    return changeAdmin(id).then(user => dispatch(receiveUser(user))); 
};

export const getUser = id => dispatch => {
    return fetchUser(id).then(user => dispatch(receiveUser(user))); 
}; 