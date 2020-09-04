import { connect } from 'react-redux';
import EditCompany from './edit_company';
import { editCompany } from '../../actions/company_actions'; 

const mapStateToProps = (state, ownProps) => {
    return {
      
    }
};

const mapDispatchToProps = dispatch => {
    return {
        editCompany: company => dispatch(editCompany(company))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCompany);