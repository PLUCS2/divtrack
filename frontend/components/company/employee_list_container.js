import { connect } from 'react-redux'; 
import EmployeeList from './employee_list'; 
import { changeAdminStatus } from '../../actions/employee_actions'; 

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeAdmin: id => dispatch(changeAdminStatus(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList); 