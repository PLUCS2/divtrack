import React from 'react'; 
import { connect } from 'react-redux'; 
import LoginContainer from '../session/login_container'; 

function Modal ({ modal, closeModal, props }) {


    let component; 
    switch (modal) {
        case 'login': {
            component = <LoginContainer /> 
            break; 
        }
        case 'sign up': {
            // component = 
            break; 
        }
        default: 
            return null; 
    }

    return (
        <div>
            This is the modal
            {component}
        </div>
    )

}; 

const mapStateToProps = state => {
    return {
        modal: state.ui.modal.modal
    }
}; 

const mapDispatchToProps = dispatch => {
    return {

    }
}; 

export default connect(mapStateToProps, mapDispatchToProps)(Modal); 
