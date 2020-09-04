import React from 'react';

export default class EditForm extends React.Component {

    constructor(props) {
        super(props); 

        this.state = {
            id: props.company.id,
            name: props.company.name, 
            email_ending: props.company.email_ending
        }; 

        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleChange(field) {
        return e => {
            this.setState({[field]: e.target.value});
        }
    }

    handleSubmit(e) {
        e.preventDefault(); 
        this.props.editCompany(this.state); 
    }

    render() {
        
        return (
            <form className="edit-company-form" onSubmit={this.handleSubmit}>

                    {this.props.close}

                    <label>Company Name          
                        <input type="text" value={this.state.name} onChange={this.handleChange("name")} />
                    </label>

                    <label>Email Ending            
                        <input type="text" value={this.state.email_ending} onChange={this.handleChange("email_ending")} />
                    </label>

                <button className="edit-company-button">Submit Changes</button>

            </form>
        )

    }

}