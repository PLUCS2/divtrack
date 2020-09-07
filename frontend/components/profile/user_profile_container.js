import { connect } from 'react-redux'; 
import UserProfile from './user_profile'; 
import { getUser } from '../../actions/employee_actions'; 

const mapStateToProps = (state, ownProps) => {
    return {
        userInfo: state.entities.users[ownProps.match.params.id] || ownProps.match.params.id
    }
}; 

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: id => dispatch(getUser(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile); 