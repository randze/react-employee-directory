import React from 'react'
import TableRow from './TableRow'

// creates employee table
function TableList( props ){
    return (

        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">City</th>
                    <th scope="col">Country</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map( employee=><TableRow key={employee.id} {...employee} /> )}
            </tbody>
        </table>
    )
}

export default TableList
