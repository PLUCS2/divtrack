import React from 'react'; 
import CompanyFormContainer from '../../company/company_form_container'; 
import CompanyContainer from '../../company/company_container'; 

export default class Home extends React.Component {

    render () {
        let company = this.props.currentUser.company_id ? <CompanyContainer /> : <CompanyFormContainer />;
        return (
            <div>
                <header className="splash-header">
                    <h2>Welcome Home {this.props.currentUser.firstName}</h2>
                    <button className="splash-button" onClick={this.props.logout}>Log out</button>
                </header>
                <body-1>
                    {company}
                </body-1>
            </div>
        )
    }
}; 