import { connect } from 'react-redux'; 
import Signup from './signup'; 
import { signupUser } from '../../actions/session_actions'; 

const mapStateToProps = state => {
    return {

    }
};

const mapDispatchToProps = dispatch => {
    return {
        signup: user => dispatch(signupUser(user))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup); 