import { connect } from 'react-redux';
import Login from './login';
import { loginUser } from '../../actions/session_actions'; 

const mapStateToProps = state => {
    return {

    }
};

const mapDispatchToProps = dispatch => {
    return {
        loginUser: user => dispatch(loginUser(user))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);