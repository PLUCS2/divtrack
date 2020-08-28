import React from 'react'; 

export default class Signup extends React.Component {

    constructor(props) {
        super(props); 

        this.state = {
            email: "", 
            username: "", 
            password: "", 
            first_name: "", 
            last_name: "", 
            pronoun: "", 
            password_confirmation: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleInput = this.handleInput.bind(this); 
    }

    handleSubmit(e) {
        e.preventDefault(); 
        this.props.signup({user: this.state}); 
    }

    handleInput(field) {
        return e => {
            this.setState({[field]: e.target.value})
        }
    }

    passwordsMatch() {
        if (this.state.password_confirmation !== "") {
            return this.state.password === this.state.password_confirmation
        }
        return true 
    }

    filledIn() {
        if (this.passwordsMatch()) {
            let filledOut = Object.keys(this.state).map(el => {
                if (this.state[el] === "") {
                   return true
                }
            }); 
            return filledOut.includes(true); 
        }
        return true; 
    }

    render() {

        return (
            <div>
                <h2>Sign Up!</h2>
                <form>

                    <label>First Name
                        <input type="text" placeholder="Ada" value={this.state.first_name} onChange={this.handleInput("first_name")} />
                    </label>

                    <label>Last Name
                        <input type="text" placeholder="Lovelace" value={this.state.last_name} onChange={this.handleInput("last_name")} />
                    </label>

                    <label>Email
                        <input type="text" placeholder="name@company.com" value={this.state.email} onChange={this.handleInput("email")} />
                    </label>

                    <label>Username
                        <input type="text" placeholder="LadyByron" value={this.state.username} onChange={this.handleInput("username")} />
                    </label>

                    <label>Password
                        <input type="password" placeholder="password" value={this.state.password} onChange={this.handleInput("password")} />
                    </label>

                    <label>Confirm Password 
                        <input type="password" placeholder="password" value={this.state.password_confirmation} onChange={this.handleInput("password_confirmation")} />
                    </label>

                    <label>Pronouns 
                        <select value={this.state.pronoun} onChange={this.handleInput("pronoun")} >
                            <option value="-------" disabled={this.state.pronoun !== ""}>-------</option>
                            <option value="she/her/hers">she/her/hers</option>
                            <option value="they/their/theirs">they/their/theirs</option>
                            <option value="he/him/his">he/him/his</option>
                        </select>
                    </label>

                    <p>{this.passwordsMatch() ? null : "Your passwords do not match"}</p>

                    <button type="submit" disabled={this.filledIn()} onClick={this.handleSubmit}>Sign Up</button>

                </form>
            </div>
        )
    }

}