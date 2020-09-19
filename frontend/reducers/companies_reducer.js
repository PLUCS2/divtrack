import { RECEIVE_COMPANY } from "../actions/company_actions"; 
import { RECEIVE_USER } from "../actions/employee_actions"; 

export default (state = {}, action) => {
    Object.freeze(state); 

    switch(action.type) {
        case RECEIVE_COMPANY: {
            return Object.assign({}, state, {[action.company.id]: action.company})
        }
        case RECEIVE_USER: {
            return Object.assign({}, state, {[action.company.id]: action.company})
        }
        default: 
            return state; 
    }

};