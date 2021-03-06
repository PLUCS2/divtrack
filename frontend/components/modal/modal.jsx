import React from 'react'; 
import { connect } from 'react-redux'; 
import LoginContainer from '../session/login_container'; 
import SignupContainer from '../session/signup_container'; 
import { closeModal } from '../../actions/modal_actions'; 

function Modal ({ modal, closeModal, props, currentUser }) {


    let component; 

    switch (modal) {
        case 'login': {
            if (currentUser) {
                return null;
            };
            component = <LoginContainer /> 
            break; 
        }
        case 'sign up': {
            component = <SignupContainer /> 
            break; 
        }
        default: 
            return null; 
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            {component}
        </div>
    )

}; 

const mapStateToProps = state => {
    return {
        modal: state.ui.modal.modal, 
        currentUser: Boolean(state.session.currentUserId)
    }
}; 

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}; 

export default connect(mapStateToProps, mapDispatchToProps)(Modal); 

