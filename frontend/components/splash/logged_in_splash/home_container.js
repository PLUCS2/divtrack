import { connect } from 'react-redux'; 
import Home from './home'; 
import { logoutUser } from '../../../actions/session_actions'; 

const mapStateToProps = state => {
    return {
        currentUser: state.entities.users[state.session.currentUserId]
    }
}; 

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logoutUser())
    }
}; 

export default connect(mapStateToProps, mapDispatchToProps)(Home)