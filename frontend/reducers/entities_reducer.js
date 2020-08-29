import { combineReducers } from 'redux'; 
import usersReducer from './users_reducer'; 
import companiesReducer from './companies_reducer';

export default combineReducers({
    users: usersReducer, 
    companies: companiesReducer
});