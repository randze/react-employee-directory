import React, {useState} from 'react';

import TableFilter from './components/TableFilter'
import EmployeeTable from './components/EmployeeTable'

import employees from './employees.json'

export default function App() {
    const [ list, setList ]= useState( { list: employees, filter: '', order: 'id' } )
    
    // function update name filter
    function updateFilter( filter ){
        const filterList = employees.filter( employee => employee.name.toLowerCase().indexOf( filter.toLowerCase() )>-1 )
        setList( { ...list, filter, list: filterList })
    }
  
    return (
        <>  
            <div className="container justify-content-center" style={{maxWidth:'720px'}}>
                <div className="row" >
                    <form className="col-12">
                        <TableFilter filter={list.filter} updateFilter={updateFilter} />
                    </form>
                    <br />
                    <div className="col-12">
                        <EmployeeTable employees={list.list} />
                    </div>
                </div>
            </div>
        </>
    );
}