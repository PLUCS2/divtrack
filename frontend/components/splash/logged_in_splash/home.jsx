import React from 'react'; 

export default class Home extends React.Component {

    render () {
        return (
            <div>
                <h1>Welcome Home {this.props.currentUser.first_name}</h1>
                <button onClick={this.props.logout}>Logout!</button>
            </div>
        )
    }
}; 