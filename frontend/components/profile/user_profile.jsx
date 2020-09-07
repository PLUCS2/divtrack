import React from "react"; 

export default class UserProfile extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.id); 
    }

    render() {
        const user = this.props.userInfo; 
        
        return (
            <h1>this is the user component
                {user.first_name}
            </h1>
        )
    }
}