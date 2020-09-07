import React from 'react'; 

export default class EmployeeList extends React.Component {

    render() {
        return (
            <ul className="employee-list"> Employee List:
                {this.props.employees.map(emp => {
                return (
                    <li key={emp.email}>{emp.first_name} {emp.last_name} {emp.admin ? <button onClick={e => { e.preventDefault(); this.props.changeAdmin(emp.id) }}>Remove-admin</button> : <button onClick={e => { e.preventDefault(); this.props.changeAdmin(emp.id) }}>Make-admin</button>}</li>
                )
            })}
            </ul>
        )
    }
}