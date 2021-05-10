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

    passwordValid() {
        if (this.state.password !== "") {
            let number; 
            this.state.password.split("").forEach(el => {
                if ("1234567890".includes(el)) {
                    number = true; 
                }
            }); 

            if (number) {
                if (this.state.password.length >= 12) {
                    return null; 
                }

                return (<p>"Password must be at least 12 characters"</p>); 
            };

            if (this.state.password.length >= 12) {
                return (<p>"Password must include a number"</p>); 
            };

            return (<p>"Password must include a number, Password must be at least 12 characters"</p>);
        }
        return null; 
    }

    filledIn() {
        if (this.passwordsMatch() && this.isEmail()) {
            let filledOut = Object.keys(this.state).map(el => {
                if (this.state[el] === "") {
                   return true
                }
            }); 
            return filledOut.includes(true); 
        }
        return true; 
    }

    isEmail() {
        if(this.state.email.includes("@")) {
            if (this.state.email.includes(".")){
                return true; 
            }
            return false; 
        }
        
        if(this.state.email === "") {
            return true; 
        }

        return false; 
    }

    render() {

        const errors = this.props.errors.map((error, idx) => {
            return <p key={idx}>{error}</p>
        });

        return (
            <div className="modal-child" onClick={e => e.stopPropagation()}>

                <button className="modal-x" onClick={this.props.closeModal}>X</button>

                <h2 className="session-form-header">Sign Up!</h2>

                <div>{errors}</div>

                <form className="session-form">

                    <label>First Name
                        <input type="text" placeholder="Ada" value={this.state.first_name} onChange={this.handleInput("first_name")} />
                    </label>

                    <label>Last Name
                        <input type="text" placeholder="Lovelace" value={this.state.last_name} onChange={this.handleInput("last_name")} />
                    </label>

                    <label>Email
                        <input type="email" placeholder="name@company.com" value={this.state.email} onChange={this.handleInput("email")} />
                    </label>

                    {this.isEmail() ? null : <p>"Must be a valid email"</p>}

                    <label>Username
                        <input type="text" placeholder="LadyByron" value={this.state.username} onChange={this.handleInput("username")} />
                    </label>

                    <label>Password 
                        <input type="password" placeholder="password" value={this.state.password} onChange={this.handleInput("password")} />
                    </label>

                    {this.passwordValid()}

                    <label>Confirm Password 
                        <input type="password" placeholder="password" value={this.state.password_confirmation} onChange={this.handleInput("password_confirmation")} />
                    </label>

                    {this.passwordsMatch() ? null : <p>"Your passwords do not match"</p>}

                    <label>Pronouns 
                        <select value={this.state.pronoun} onChange={this.handleInput("pronoun")} >
                            <option value="-------" disabled={this.state.pronoun !== ""}>-------</option>
                            <option value="she/her/hers">she/her/hers</option>
                            <option value="they/their/theirs">they/their/theirs</option>
                            <option value="he/him/his">he/him/his</option>
                        </select>
                    </label>

                    <button className="session-button" type="submit" disabled={this.filledIn()} onClick={this.handleSubmit}>Sign Up</button>
                </form>

                <p>Already have an account?<button className="modal-button" onClick={e => this.props.openModal("login")}>Login</button></p>

                {this.state.other_modal ? <CategoryModal /> : null}
            
            </div>
        )
    }

}