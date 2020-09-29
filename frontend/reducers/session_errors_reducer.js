import { RECEIVE_SESSION_ERRORS } from '../actions/session_actions'; 

const _nullState = []; 

export default (state, action) => {

    Object.freeze(state); 

    switch(action.type) {

        case RECEIVE_SESSION_ERRORS: {
            return action.errors
        }

        default: 
            return _nullState; 

    }

};