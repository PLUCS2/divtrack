import { combineReducers } from 'redux'; 
import uiReducer from './ui_reducer'; 
import entitiesReducer from './entities_reducer'; 
import sessionReducer from './session_reducer'; 
import errorsReducer from './errors_reducer'; 

export default combineReducers({
    ui: uiReducer, 
    entities: entitiesReducer, 
    session: sessionReducer, 
    errors: errorsReducer
}); 