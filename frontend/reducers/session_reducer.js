import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'; 

const _nullState = {currentUserId: null}; 

export default (state = _nullState, action) => {

    Object.freeze(state); 

    switch (action.type) {
        case RECEIVE_CURRENT_USER: {
            return {currentUserId: action.user.id}
        }
        case LOGOUT_CURRENT_USER: {
            return _nullState
        }
        default: 
            return state; 
    }

}; 