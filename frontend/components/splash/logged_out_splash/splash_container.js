import { connect } from 'react-redux'; 
import Splash from './splash'; 
import { openModal } from '../../../actions/modal_actions'; 

const mapStateToProps = state => {
    return {

    }
}; 

const mapDispatchToProps = dispatch => {
    return {
        openModal: modalName => dispatch(openModal(modalName))
    }
}; 

export default connect(mapStateToProps, mapDispatchToProps)(Splash);