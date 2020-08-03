import React from 'react'

// name filter component
function TableFilter( props ){
    function handleInputChange( event ){
        // event listener for name input change
        const { value } = event.target;
        props.updateFilter( value )
    }

    return (
        <div className="row">
            <label htmlFor="name" className="col-12 col-form-label">Name Search</label>
            <div className="col-12">
                <input onChange={handleInputChange} type="text" id="name" value={props.filter} className="form-control" />
            </div>
        </div>
    )
}

export default TableFilter
