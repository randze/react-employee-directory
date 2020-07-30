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
                <input onChange={handleInputChange} type="text" className="form-control" id="name" value={props.filter} style={{maxWidth: '450px'}} />
            </div>
        </div>
    )
}

export default TableFilter
