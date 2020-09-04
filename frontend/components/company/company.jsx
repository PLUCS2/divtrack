import React from 'react'; 
import EditCompanyContainer from './edit_company_container'; 

export default class Company extends React.Component {

    constructor(props) {
        super(props); 

        this.state = {
            owner: false, 
            show: false 
        };

        this.handleClick = this.handleClick.bind(this); 

    }

    componentDidUpdate(prevProps) {
        if (prevProps === this.props) return null; 

        if(this.props.company) {
            if (this.props.company.owner_id === this.props.currentUser.id) {
                this.setState({owner: true});
            }
        };
    }

    editForm() {
        if (!this.props.company) {
            return null;
        }

        if (this.props.company.owner_id === this.props.currentUser.id) {
            const close = (<p onClick={this.handleClick} className="edit-company-button close-edit-button">X</p>);
            return <EditCompanyContainer company={this.props.company} close={close} /> ;        
        }

        return null; 
    }

    handleClick(e) {
        e.preventDefault(); 
        
        let op = !this.state.show; 

        this.setState({show: op})
    }

    render() {

        const editForm = this.editForm(); 
        const editingOption = this.state.owner ? (
            <div>
                {this.state.show ? null : (<p className="splash-button" onClick={this.handleClick}>Edit Company</p>)}
                {this.state.show ? editForm : null}
            </div>) : null; 

        const employeeList = this.state.owner ? (
            <ul className="employee-list"> Employee List: 
                {this.props.employees.map(emp => {
                    return (
                        <li key={emp.email}>{emp.first_name} {emp.last_name}</li>
                    )
                })}
            </ul>
        ) : null; 

        return (
            <>
                <div className="logged-in-splash-heading">Welcome to the {this.props.company ? this.props.company.name : null} Headquarters</div>
                {editingOption}
                {employeeList}
            </>
        )

    }

}