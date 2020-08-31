import { connect } from 'react-redux'; 
import Signup from './signup'; 
import { signupUser } from '../../actions/session_actions'; 
import { openModal, closeModal } from '../../actions/modal_actions'; 

const mapStateToProps = state => {
    return {
        errors: state.errors.session
    }
};

const mapDispatchToProps = dispatch => {
    return {
        signup: user => dispatch(signupUser(user)), 
        openModal: modal => dispatch(openModal(modal)), 
        closeModal: () => dispatch(closeModal())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup); 