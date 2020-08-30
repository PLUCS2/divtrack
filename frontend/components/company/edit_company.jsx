import React from 'react';

export default class EditForm extends React.Component {

    constructor(props) {
        super(props); 

        this.state = {
            name: props.company.name, 
            email_ending: props.company.email_ending
        }; 
    }


    render() {
        
        return (
            <div>this is the edit form 
                <form>

                    <label>Company Name 
                        <input type="text" value={this.state.name} />
                    </label>

                    <label>Email Ending 
                        <input type="text" value={this.state.email_ending} />
                    </label>

                </form>
            </div>
        )

    }

}