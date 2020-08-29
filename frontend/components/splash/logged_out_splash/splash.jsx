import React from 'react'; 

class Splash extends React.Component {

    constructor(props) {
        super(props)
    }; 

    render() {
        return(
            <>
                <header className="splash-header">
                    <h2>DivTrack</h2>
                    <div>
                        <button className="splash-button" onClick={(e) => this.props.openModal("login")}>Login</button>
                        <button className="splash-button" onClick={(e) => this.props.openModal("sign up")}>Sign Up</button>
                    </div>
                </header>
                <body-1>
                    <p>See statistics about your company</p>
                </body-1>
                <footer className="splash-footer">
                    <a className="splash-footer-link" href="https://www.linkedin.com/in/paloma-secunda-5b6a68144/">LinkedIn</a>
                </footer>
            </>
        )
    }
}; 

export default Splash; 