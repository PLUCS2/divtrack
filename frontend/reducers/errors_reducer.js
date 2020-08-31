import { combineReducers } from 'redux'; 
import sessionErrorsReducer from './session_errors_reducer'; 
import companyErrorsReducer from './company_errors_reducer';

export default combineReducers({
    session: sessionErrorsReducer, 
    company: companyErrorsReducer
})