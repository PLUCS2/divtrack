import React from 'react'; 

export default class CompanyForm extends React.Component {

    constructor(props) {
        super(props); 

        this.state = {
            name: "", 
            email_ending: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleInput(field) {
        return e => {
            this.setState({[field]: e.target.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault(); 

        this.props.createCompany({company: this.state}); 
    }

    render() {
        return (
            <div>

                <p>{this.props.errors}</p>

                <form>
                    <label>Name
                        <input type="text" onChange={this.handleInput("name")} value={this.state.name}/>
                    </label>

                    <label>Email Ending 
                        <input type="text" onChange={this.handleInput("email_ending")} value={this.state.email_ending} />
                    </label>

                    <button type="submit" onClick={this.handleSubmit}>Register Company</button>
                </form>

            </div>
        )
    }

}