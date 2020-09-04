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
            <div>
                <form className="edit-company-form" onSubmit={this.handleSubmit}>

                    <label>Company Name 
                        <input type="text" value={this.state.name} onChange={this.handleChange("name")} />
                    </label>

                    <label>Email Ending 
                        <input type="text" value={this.state.email_ending} onChange={this.handleChange("email_ending")} />
                    </label>

                    <button>Submit Changes</button>

                </form>
            </div>
        )

    }

}