import { RECEIVE_COMPANY_ERRORS } from '../actions/company_actions'; 

const _nullState = []; 

export default (state, action) => {
   
    Object.freeze(state); 

    switch(action.type) {

        case (RECEIVE_COMPANY_ERRORS): {
            return action.errors; 
        }

        default: 
            return _nullState;
    }

}