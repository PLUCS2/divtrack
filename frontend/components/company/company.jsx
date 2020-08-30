import React from 'react'; 
import EditCompanyContainer from './edit_company_container'; 

export default class Company extends React.Component {

    constructor(props) {
        super(props); 

        this.state = {
            owner: false, 
            show: false 
        };

        this.handleClick = this.handleClick.bind(this); 

    }

    componentDidUpdate(prevProps) {
        if (prevProps === this.props) return null; 

        if(this.props.company) {
            if (this.props.company.owner_id === this.props.currentUser.id) {
                this.setState({owner: true});
            }
        };
    }

    editForm() {

        if (!this.props.company) {
            return null;
        }

        if (this.props.company.owner_id === this.props.currentUser.id) {

            return <EditCompanyContainer company={this.props.company} /> ; 
            
        }

        return null; 

    }

    handleClick(e) {

        e.preventDefault(); 
        
        let op = !this.state.show; 

        this.setState({show: op})

    }

    render() {

        const editForm = this.editForm(); 
        const editingOption = this.state.owner ? (
            <div>
                <p onClick={this.handleClick}>{this.state.show ? "X" : "Edit Company"}</p>
                {this.state.show ? editForm : null}
            </div>) : null; 

        return (
            <>
                <div>Welcome to the {this.props.company ? this.props.company.name : null} Headquarters</div>
                {editingOption}
            </>
        )

    }

}