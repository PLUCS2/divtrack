import React from 'react'; 

class Splash extends React.Component {

    constructor(props) {
        super(props)
    }; 

    render() {
        return(
            <>
                <h2>This is the splash</h2>
                <button onClick={(e) => this.props.openModal("login")}>Login!</button>
                <button onClick={(e) => this.props.openModal("sign up")}>Sign Up!</button>
            </>
        )
    }
}; 

export default Splash; 