import { connect } from 'react-redux'; 
import Company from './company'; 

const mapStateToProps = state => {
    
    return {
        company: state.entities.companies[state.entities.users[state.session.currentUserId].company_id], 
        currentUser: state.entities.users[state.session.currentUserId]
    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Company);