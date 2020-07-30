import React from 'react'

// change table order component
function TableOrder( props ){
    function changeOrder( event ){
        const { value }= event.target
        // console.log( `[changeOrder check] name(${name}) value(${value})`, event )

        props.updateOrder( value )
    }

    return (
        <div className="row">
            <label className="col-12 col-form-label">Order By</label>
            <div className="col-12">
                <select onChange={changeOrder} value={props.order} className="form-select form-select-md" style={{maxWidth: '250px'}}>
                    <option value='id'>ID</option>
                    <option value='name'>Name</option>
                    <option value="city">City</option>
                    <option value="country">Country</option>
                </select>
            </div>
        </div>
    )
}

export default TableOrder
