import React from "react"; 

export default class UserProfile extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.id); 
    }

    render() {
        const user = this.props.userInfo; 
        
        const company = this.props.companies[user.company_id] || {}; 
        
        if (this.props.owner) {
            return (
                <>
                    <h1>Welcome Back {user.first_name}</h1>
                </>
            )
        }

        return (
            <>
                <h1>{user.first_name} {user.last_name}</h1>
                    <ul>
                        <li>Company: {company.name}</li>
                        <li>Email: {user.email}</li>
                    </ul>
            </>
        )
    }
}