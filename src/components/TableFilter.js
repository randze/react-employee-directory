import React from 'react'

// name filter component
function TableFilter( props ){
    function handleInputChange( event ){
        // event listener for name input change
        const { value } = event.target;
        props.updateFilter( value )
    }

    return (
        <div className="mb-3 row">
            <label htmlFor="name" className="col-sm-2 col-form-label">Name Search</label>
            <div className="col-sm-10">
                <input onChange={handleInputChange} type="text" className="form-control" id="name" value={props.filter} />
            </div>
        </div>
    )
}

export default TableFilter
