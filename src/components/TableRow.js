import React from 'react'

function TableRow( props ){
    return (
        <tr>
            <th scope="row">{props.id}</th>
            <td>{props.name}</td>
            <td>{props.city}</td>
            <td>{props.country}</td>
        </tr>
    )
}

export default TableRow