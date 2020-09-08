import React from 'react'; 
import { Link } from 'react-router-dom'; 

export default class EmployeeList extends React.Component {

    render() {
        return (
            <ul className="employee-list"> Employee List:
                {this.props.employees.map(emp => {
                return (
                    <li key={emp.email}>
                        <Link to={`/profile/${emp.id}`}>{emp.first_name} {emp.last_name}</Link>
                        {emp.admin ? 
                            <button className="employee-button" onClick={e => { e.stopPropagation(); this.props.changeAdmin(emp.id) }}>☑</button> : 
                                <button className="employee-button" onClick={e => { e.stopPropagation(); this.props.changeAdmin(emp.id) }}>☐</button>} 
                        </li>
                )
            })}
            </ul>
        )
    }
}