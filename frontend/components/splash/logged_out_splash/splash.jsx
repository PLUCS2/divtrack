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
                    <p className="splash-part one">See statistics about your company</p>

                    <p className="splash-part two">Transparency is the foundation of ethics. Transparency builds trust, it encourages a culture of frank conversations where issues resolve rather than fester. Investing in a system that enables easy communication from employees, tracking of internal data, and publication of relative metrics over time shows that companies care. It allows individuals at every level of the company to remember that companies are built by people, and strong companies are built by people with faith in what that company can be. Making an investment in the company's future, means investing in people and leaving those that choose to spend their time working on products and operations and teams with an easy answer to the "why" questions (why am I here, why am I doing this, why do I love my job)</p>

                    <p className="splash-part three">Let me be frank - please pay me money I am poor</p>

                    <p className="splash-part four">Let me be frank - please pay me money I am poor</p>

                    <p className="splash-part five">Let me be frank - please pay me money I am poor</p>
                </body-1>
                <footer className="splash-footer">
                    <a className="splash-footer-link" href="https://www.linkedin.com/in/paloma-secunda-5b6a68144/">LinkedIn</a>
                </footer>
            </>
        )
    }
}; 

export default Splash; 