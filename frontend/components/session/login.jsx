import React from 'react'; 

class Login extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
            username_or_email: "", 
            password: ""
        };
        this.handleInput = this.handleInput.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleInput(field) {
        return (e) => {
            this.setState({[field]: e.target.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault(); 
        this.props.loginUser(this.state); 
    }

    filledIn() {
        if (this.state.password === "") {
            return true
        } else if (this.state.password.length < 10) {
            return true 
        } else if (this.state.username_or_email === "") {
            return true 
        }
        return false
    }

    render() {

        return (
            <div className="modal-child" onClick={e => e.stopPropagation()}>

                <button className="modal-x" onClick={this.props.closeModal}>X</button>

                <h2 className="session-form-header">Please Log In!</h2>

               <form className="session-form">
                    <label>Email or Username
                        <input type="text" placeholder="name@company.com" value={this.state.username_or_email} onChange={this.handleInput("username_or_email")}/>
                    </label>     

                    <label>Password
                        <input type="password" placeholder="password" value={this.state.password} onChange={this.handleInput("password")} />
                    </label>  

                    <button className="session-button" type="submit" disabled={this.filledIn()} onClick={this.handleSubmit}>Login</button>
               </form>
                
                <p>Need an account?<button className="modal-button" onClick={e => this.props.openModal("sign up")}>Sign Up</button></p>
            
            </div>
        )
    }

}; 

export default Login; 