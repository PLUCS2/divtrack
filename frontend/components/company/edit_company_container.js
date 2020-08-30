import { connect } from 'react-redux';
import EditCompany from './edit_company';

const mapStateToProps = (state, ownProps) => {
    return {
        // company: state.entities.companies[state.entities.users[state.session.currentUserId].company_id],
        // currentUser: state.entities.users[state.session.currentUserId]
    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCompany);