import React from 'react'; 

export default class Company extends React.Component {

    render() {

        return (
            <div>Welcome to the {this.props.company ? this.props.company.name : null} Headquarters</div>
        )

    }

}