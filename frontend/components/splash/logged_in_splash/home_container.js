import { connect } from 'react-redux'; 
import Home from './home'; 
import { logoutUser } from '../../../actions/session_actions'; 

const mapStateToProps = state => {
    return {

    }
}; 

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logoutUser())
    }
}; 

export default connect(mapStateToProps, mapDispatchToProps)(Home)