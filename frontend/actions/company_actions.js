import * as APIUtil from '../util/company_api_util'; 

export const RECEIVE_COMPANY = "RECEIVE_COMPANY"; 
export const RECEIVE_COMPANY_ERRORS = "RECEIVE_COMPANY_ERRORS";

export const receiveCompany = ({company, user}) => {
    return {
        type: RECEIVE_COMPANY, 
        company, 
        user 
    }
}; 

export const receiveCompanyErrors = errors => {
    return {
        type: RECEIVE_COMPANY_ERRORS, 
        errors
    }
}

export const createCompany = company => dispatch => {
    return APIUtil.createCompany(company).then(company => dispatch(receiveCompany(company)), errors => dispatch(receiveCompanyErrors(errors.responseJSON)));
};

export const fetchCompany = id => dispatch => {
    return APIUtil.fetchCompany(id).then(company => dispatch(receiveCompany(company))); 
}; 

export const editCompany = company => dispatch => {
    return APIUtil.editCompany(company).then(company => dispatch(receiveCompany(company)), errors => dispatch(receiveCompanyErrors(errors.responseJSON)));
}; 

