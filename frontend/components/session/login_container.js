import { connect } from 'react-redux';
import Login from './login';
import { loginUser } from '../../actions/session_actions'; 
import { openModal, closeModal } from '../../actions/modal_actions'; 

const mapStateToProps = state => {
    return {
        errors: state.errors.session
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loginUser: user => dispatch(loginUser(user)), 
        openModal: modal => dispatch(openModal(modal)), 
        closeModal: () => dispatch(closeModal())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);