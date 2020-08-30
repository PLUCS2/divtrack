import { connect } from 'react-redux';
import EditCompany from './edit_company';
import { editCompany } from '../../actions/company_actions'; 

const mapStateToProps = (state, ownProps) => {
    return {
        // company: state.entities.companies[state.entities.users[state.session.currentUserId].company_id],
        // currentUser: state.entities.users[state.session.currentUserId]
    }
};

const mapDispatchToProps = dispatch => {
    return {
        editCompany: company => dispatch(editCompany(company))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCompany);