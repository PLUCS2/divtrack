import { combineReducers } from 'redux'; 
import uiReducer from './ui_reducer'; 
import entitiesReducer from './entities_reducer'; 

export default combineReducers({
    ui: uiReducer, 
    entities: entitiesReducer
}); 